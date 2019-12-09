import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
 * @param {Array} instance.properties
 * @return {keys[]} - list of propertyKeys which are allowed
 */
export const getFilteredProperties = ({ displayTemplate, properties }, useDisplayTemplate = false) => {
  // * prefilter properties with only one option
  const propertiesFiltered = Object.keys(properties).filter(
    (propertyKey) => properties[propertyKey].options.length > 1,
  );

  if (!useDisplayTemplate || !displayTemplate) {
    return propertiesFiltered;
  }

  // * filter properties not in displayTemplate
  return propertiesFiltered.filter(
    (propertyKey) => !!displayTemplate.find((item) => item.name === properties[propertyKey].name),
  );
};

export const propertyPropTypeShape = {
  name:    PropTypes.string.isRequired,
  type:    PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name:     PropTypes.string.isRequired,
    key:      PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    // TODO: check isValid implementation
    isValid:  PropTypes.func.isRequired,
  })).isRequired,
};

class PropertyPicker extends PureComponent {
  static propTypes = {
    instance: PropTypes.shape({
      id:                PropTypes.string.isRequired,
      propertyValues:    PropTypes.objectOf(PropTypes.string).isRequired,
      properties:        PropTypes.objectOf(
        PropTypes.shape(propertyPropTypeShape).isRequired,
      ).isRequired,
      setPropertyValues: PropTypes.func.isRequired,
    }).isRequired,
    useDisplayTemplate: PropTypes.bool,
    showPropertyList:   PropTypes.bool,
    className:          PropTypes.string,
    widgetClassName:    PropTypes.string,
    setLoading:         PropTypes.func,
    // showDialog: PropTypes.func,
  };

  static defaultProps = {
    useDisplayTemplate: true,
    showPropertyList:   false, // shows list instead of bar
    className:          '',
    widgetClassName:    '',
    setLoading:         () => {},
    // showDialog: () => {},
  };

  constructor(props) {
    super(props);

    const { instance, useDisplayTemplate } = props;
    const propertiesFilterd = instance ? getFilteredProperties(instance, useDisplayTemplate) : [];
    const propertyValues = instance ? instance.propertyValues : {};

    this.state = {
      // instanceId:  instance ? instance.id : null,
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

  setActiveProperty = (activeProperty) => {
    this.setState({ activeProperty });
  };

  valueValid = ({ instance }) => (value) => value.isValid(instance);

  setValues = async (propertyValues) => {
    const { instance } = this.props;

    await instance.setPropertyValues(propertyValues);
    this.setState({ propertyValues });
  };

  render() {
    const {
      props: { instance, showPropertyList, setLoading, className, widgetClassName },
      state: { activeProperty, properties, propertyValues },
    } = this;

    if (!instance || !activeProperty) {
      return <div key="PropertyPicker" />;
    }

    return (
      <div key="PropertyPicker" className={cx(styles.Container, className)}>
        { showPropertyList ? (
          <PropertyPickerList
            setLoading={setLoading}
            properties={properties}
            activeProperty={activeProperty}
            setActiveProperty={this.setActiveProperty}
          />
        ) : (
          <PropertyPickerBar
            instance={instance}
            setLoading={setLoading}
            properties={properties}
            activeProperty={activeProperty}
            setActiveProperty={this.setActiveProperty}
          />
        )}

        <PropertyOptions
          valueValid={this.valueValid}
          setLoading={setLoading}
          property={activeProperty}
          propertyValues={propertyValues}
          setValues={this.setValues}
          className={widgetClassName}
          configuration={instance}
        />
      </div>
    );
  }
}

export default PropertyPicker;
