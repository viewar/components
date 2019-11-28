import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import viewarApi from 'viewar-api';

import styles from './PropertyPicker.scss';


class PropertyPicker extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      propertyValues:    PropTypes.object.isRequired,
      properties:        PropTypes.object.isRequired,
      setPropertyValues: PropTypes.func.isRequired,
      getSceneState:     PropTypes.func.isRequired,
      name:              PropTypes.string.isRequired,
      key:               PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    }).isRequired,
    shownProperties: PropTypes.arrayOf(
      PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf(RegExp) ]),
    ),
    activeIcon: PropTypes.node,
    setLoading: PropTypes.func,
  };

  static defaultProps = {
    activeIcon:      <></>, // empty fragment
    setLoading:      () => {},
    shownProperties: [ /Stoff/i ],
  };

  constructor(props) {
    super(props);

    const { properties, propertyValues } = this.props.item;

    this.state = {
      property: Object.keys(properties)[0],
      propertyValues,
    };
  }

  handlePropertyUpdate = (option) => async () => {
    const {
      props: { setLoading, item },
      state: { property },
    } = this;

    setLoading(true);

    await item.setPropertyValues({ [property]: option });

    const sceneState = await item.getSceneState();

    this.setState(({ propertyValues }) => ({
      propertyValues: {
        ...propertyValues,
        [property]: option,
      },
    }));

    await viewarApi.sceneManager.setSceneState(sceneState);
    setLoading(false);
  };

  handlePropertyChange = (key) => () => this.setState({ property: key });

  render() {
    const {
      props: { shownProperties, item },
      state: { property, propertyValues },
    } = this;

    let optionIsActive = false,
      optionActiveLabel = '';

    // TODO: filter in constructor (needs refactoring of 'item' usage)
    // * filter 'item.properties' by 'props.shownProperties'
    const itemPropertyValues = Object.values(item.properties).filter((property) =>
      shownProperties.some((strOrRegExp) =>
        (strOrRegExp instanceof RegExp
          ? strOrRegExp
          : new RegExp(strOrRegExp, 'i')
        ).test(property.name),
      ),
    );

    return (
      <div className={styles.Container}>
        <div className={styles.Header}>
          {Object.values(itemPropertyValues).map((item) => (
            <div
              className={cx(
                styles.Tab,
                item.key === property && styles.isActive,
              )}
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
              item.properties[property].options.map((option) => {
                optionIsActive = propertyValues[property] === option.key;
                if (optionIsActive) {
                  optionActiveLabel = option.name;
                }

                return (
                  <div
                    className={cx(styles.Option, {
                      [styles.isActive]: optionIsActive,
                    })}
                    key={option.key}
                    onClick={this.handlePropertyUpdate(option.key)}
                  >
                    {/* TODO: show label ? in tooltip ?
                  <div className={styles.Label}>{option.name}</div> */}

                    <div
                      className={styles.Thumbnail}
                      style={{
                        backgroundImage: `url('https://dev2.viewar.com/proxy2.php?url=${option.imageUrl}')`,
                      }}
                    />

                    <div className={styles.SelectionIndicator}>
                      {this.props.activeIcon}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.activeOptionLabel}>{optionActiveLabel}</div>
      </div>
    );
  }
}

export default PropertyPicker;
