/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';

import ListWidget from './widgets/ListWidget';
import ThumbnailWidget from './widgets/ThumbnailWidget';
import RotationWidget from './widgets/Rotation';

class PropertyOptions extends PureComponent {
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

    return { type, selectedValue: value, values: [...values] };
  };

  render() {
    const widgetProps = this.getWidgetProps();

    console.log('widgetProps :', widgetProps);

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
