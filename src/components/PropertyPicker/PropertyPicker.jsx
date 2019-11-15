import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import viewarApi from 'viewar-api';

import isEqual from 'lodash.isequal';

import styles from './PropertyPicker.scss';

class PropertyPicker extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      propertyValues: PropTypes.object.isRequired,
      properties: PropTypes.object.isRequired,
    }).isRequired,
    setLoading: PropTypes.func,
  };

  static defaultProps = {
    setLoading: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      property: '',
      propertyValues: {},
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // ? does it ever get triggered?
    // ? i dont think props.item does change without new mount,
    // ? because the usecase would be: change screen -> change item -> mount
    if (!isEqual(nextProps.item, this.props.item)) {
      this.setState({
        property: Object.keys(item.properties)[0],
        propertyValues: item.propertyValues,
      });
    }
  }

  //? poential substitute for `componentWillReceiveProps()`:
  // (item would have to be stored in state)
  //
  // static getDerivedStateFromProps(nextProps) {
  //   if (!isEqual(nextProps.item, this.state.item)) {
  //     return {
  //       property: Object.keys(item.properties)[0],
  //       sceneState: item.propertyValues,
  //     };
  //   } else {
  //     return null;
  //   }
  // }

  handlePropertyUpdate = (option) => async () => {
    const {
      props: { setLoading, item },
      state: { property },
    } = this;

    setLoading(true);

    await item.setPropertyValues({ [property]: option });

    const sceneState = await item.getSceneState();
    await viewarApi.sceneManager.setSceneState(sceneState);

    this.setState({
      propertyValues: item.propertyValues,
    });

    setLoading(false);
  };

  handlePropertyChange = (key) => () => this.setState({ property: key });

  render() {
    const {
      props: { item },
      state: { property, propertyValues },
    } = this;

    return (
      <div className={styles.Container}>
        <div className={styles.Header}>
          {Object.values(item.properties).map((item) => (
            <div
              className={cx(styles.Tab, item.key === property && styles.isActive)}
              key={item.key}
              onClick={this.handlePropertyChange(item.key)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className={styles.Content}>
          {item.properties[property] &&
            item.properties[property].options.map((option) => (
              <div
                className={cx(
                  styles.Option,
                  propertyValues[property] === option.key && styles.isActive
                )}
                key={option.key}
                onClick={this.handlePropertyUpdate(option.key)}
              >
                <div className={styles.Label}>{option.name}</div>
                <div
                  className={styles.Image}
                  // TODO. check if proxy is required style={{ backgroundImage: `url(${option.imageUrl})` }}
                  style={{
                    backgroundImage: `url('https://dev2.viewar.com/proxy2.php?url=' + ${option.imageUrl})`,
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default PropertyPicker;
