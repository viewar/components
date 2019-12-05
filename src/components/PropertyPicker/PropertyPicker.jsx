import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import { getUiConfigPath } from 'utils'; // TODO: fix getUiConfigPath

import PropertyOptions from './PropertyOptions';
import PropertyPickerBar from './PropertyPickerBar';
import PropertyPickerList from './PropertyPickerList';
import styles from './PropertyPicker.scss';

/**
 * @function getFilteredProperties
 * @desc filter properties by 'displayTemplate' entries
 *
 * @param {ModelInstance} instance
 * @param {Array} instance.displayTemplate
 * @param {Array} instance.displayTemplate
 * @return {keys[]} - list of propertyKeys which are allowed
 */
export const getFilteredProperties = ({ displayTemplate, properties }) =>
  arguments[0] == null // eslint-disable-line no-undef
    ? null
    : Object.keys(properties).filter((propertyKey) =>
      !(properties[propertyKey].options.length > 1)
        ? false
        : !!displayTemplate.find((item) => item.name === properties[propertyKey].name),
    );

class PropertyPickerClass extends PureComponent {
  static propTypes = {
    instance: PropTypes.shape({
      id:                PropTypes.string.isRequired,
      setPropertyValues: PropTypes.func.isRequired,
    }).isRequired,
    className:       PropTypes.string,
    widgetClassName: PropTypes.string,
    setLoading:      PropTypes.func,
    // showDialog: PropTypes.func,
  };

  static defaultProps = {
    className:       '',
    widgetClassName: '',
    setLoading:      () => {},
    // showDialog: () => {},
  };

  constructor(props) {
    super(props);

    const { instance } = props;

    this.config = {
      showPropertyList: getUiConfigPath('showPropertyList'),
    };

    if (instance) {
      console.log('instance', instance);
      console.log('instance', instance);
    }
    const propertiesFilterd = instance ? getFilteredProperties(instance) : [];
    const propertyValues = instance ? instance.propertyValues : {};

    this.state = {
      instanceId:     instance ? instance.id : null,
      // TODO: refactor property filtering
      properties:     propertiesFilterd,
      activeProperty: propertiesFilterd.length
        ? instance.properties[propertiesFilterd[0]]
        : null,
      propertyValues,
    };
  }

  // withPropsOnChange ['instance']
  // static getDerivedStateFromProps(props, state) {
  //   const { instance } = props;
  //   const { instanceId, properties } = state;

  //   if (instance.id !== instanceId) {
  //     const propertiesFiltered = instance ? getFilteredProperties(instance) : [];

  //     return {
  //       properties: propertiesFiltered,
  //       activeProperty:
  //         propertiesFiltered && propertiesFiltered.length ? properties[0] : null,
  //     };
  //   } else {
  //     return null;
  //   }
  // }

  getFirstProperty = (properties) =>
    properties && properties.length ? properties[0] : null;

  setActiveProperty = ({ properties }) => {
    const activeProperty = this.getActiveProperty(properties);

    this.setState({ activeProperty });
  };

  valueValid = ({ instance }) => (value) => value.isValid(instance);

  setValues = async (propertyValues) => {
    const { instance } = this.props;
    console.log('PropertyPicker->setValues: propertyValues :', propertyValues);

    await instance.setPropertyValues(propertyValues);
    // TODO: set activePropertyHere
    this.setState({ propertyValues });
  };

  render() {
    const {
      instance, setLoading, className, widgetClassName,
    } = this.props;

    if (!instance) {
      return <div key="PropertyPicker" />;
    }
    console.log('instance :', instance);
    console.log('getFilteredProperties(instance) :', getFilteredProperties(instance));

    const { activeProperty, properties } = this.state;

    console.log('activeProperty :', activeProperty);
    console.log('this.props.properties (propertiesFiltered):', this.state.properties);

    if (!activeProperty) {
      return '';
    }

    return (
      <div key="PropertyPicker" className={cx(styles.Container, className)}>
        {this.config.showPropertyList ? (
          <PropertyPickerList
            setLoading={setLoading}
            properties={properties}
            activeProperty={activeProperty}
            setActiveProperty={this.setActiveProperty}
            className={viewStyles.ConfiguratorList}
          />
        ) : (
          <PropertyPickerBar
            setLoading={setLoading}
            properties={properties}
            activeProperty={activeProperty}
            setActiveProperty={this.setActiveProperty}
            className={viewStyles.ConfiguratorPicker}
          />
        )}

        <PropertyOptions
          valueValid={this.valueValid}
          setLoading={setLoading}
          property={activeProperty}
          setValues={this.setValues}
          className={widgetClassName}
          configuration={instance}
        />
      </div>
    );
  }
}

const PropertyPicker = compose(withSetLoading, withDialogControls)(PropertyPickerClass);

export default PropertyPicker;
