/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ListWidget from './widgets/ListWidget';
import ThumbnailWidget from './widgets/ThumbnailWidget';
import RotationWidget from './widgets/Rotation';

class PropertyOptions extends PureComponent {
  static propTypes = {
    // TODO: complete proptype definitions
    configuration: PropTypes.any, // eslint-disable-line react/require-default-props
    property:      PropTypes.any, // eslint-disable-line react/require-default-props
    setValues:     PropTypes.func.isRequired,
    valueValid:    PropTypes.func.isRequired,
    setLoading:    PropTypes.func,
  };

  static defaultProps = {
    setLoading: () => {},
  };

  valueValid = (value) => {
    return value.isValid(this.props.configuration);
  };

  selectValue = async (value) => {
    const { property, valueValid, setValues, setLoading } = this.props;

    setLoading(true);

    if (valueValid(value)) {
      await setValues({
        [property.name]: value.key,
      });
    }
    setLoading(false);
  };

  getWidgetProps = () => {
    const {
      property: { values, value, type },
    } = this.props;

    return { type, selectedValue: value, values: [ ...values ]};
  };

  render() {
    const widgetProps = this.getWidgetProps();

    switch (widgetProps.type) {
      case 'material':
        return (
          <ThumbnailWidget
            {...this.props}
            {...widgetProps}
            selectValue={this.selectValue}
          />
        );
      case 'geometry':
        return (
          <RotationWidget
            {...this.props}
            {...widgetProps}
            selectValue={this.selectValue}
          />
        );
      default:
        return (
          <ListWidget {...this.props} {...widgetProps} selectValue={this.selectValue} />
        );
    }
  }
}

export default PropertyOptions;
