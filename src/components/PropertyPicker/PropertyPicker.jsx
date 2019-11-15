import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import viewarApi from "viewar-api";

import isEqual from "lodash.isequal";

// TODO: pass icon as property (= unbind from app env)
// or refactor active state ui
import { Icon, Icons } from "..";

import styles from "./PropertyPicker.scss";

class PropertyPicker extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      propertyValues: PropTypes.object.isRequired,
      properties: PropTypes.object.isRequired
    }).isRequired,
    icon: PropTypes.node,
    setLoading: PropTypes.func
  };

  static defaultProps = {
    icon: <></>, // empty fragment
    setLoading: () => {}
  };

  constructor(props) {
    super(props);

    const { properties, propertyValues } = this.props.item;

    this.state = {
      property: Object.keys(properties)[0],
      propertyValues
    };
  }

  handlePropertyUpdate = option => async () => {
    const {
      props: { setLoading, item },
      state: { property }
    } = this;

    setLoading(true);

    await item.setPropertyValues({ [property]: option });

    const sceneState = await item.getSceneState();

    this.setState(({ propertyValues }) => ({
      propertyValues: {
        ...propertyValues,
        [property]: option
      }
    }));

    await viewarApi.sceneManager.setSceneState(sceneState);
    setLoading(false);
  };

  handlePropertyChange = key => () => this.setState({ property: key });

  render() {
    const {
      props: { item },
      state: { property, propertyValues }
    } = this;

    return (
      <div className={styles.Container}>
        <div className={styles.Header}>
          {Object.values(item.properties).map(item => (
            <div
              className={cx(styles.Tab, item.key === property && styles.isActive)}
              key={item.key}
              onClick={this.handlePropertyChange(item.key)}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className={styles.ScrollContainer}>
          <div className={styles.Options}>
            {item.properties[property] &&
              item.properties[property].options.map(option => (
                <div
                  className={cx(styles.Option, {
                    [styles.isActive]: propertyValues[property] === option.key
                  })}
                  key={option.key}
                  onClick={this.handlePropertyUpdate(option.key)}
                >
                  {/* TODO: show label ? in tooltip ?
                  <div className={styles.Label}>{option.name}</div> */}

                  <div
                    className={styles.Thumbnail}
                    style={{ backgroundImage: `url('https://dev2.viewar.com/proxy2.php?url=${option.imageUrl}')` }}
                  />

                  <div className={styles.SelectionIndicator}>{this.props.activeIcon}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyPicker;
