import React, { PureComponent } from 'react';
import cx from 'classnames';

import styles from '../PropertyOptions.scss';
import globalStyles from '../../../../sass/global.scss';
import Slider from 'components/Slider';

class RotationWidget extends PureComponent {
  state = {
    showCircle: false,
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentDidMount() {
    setTimeout(() => this.setState({ showCircle: true }), 250); //TODO maybe trigger on imageLoad
  }

  handleSliderChange = (key) => (newValue) => {
    console.log('[Slider] newValue :', newValue);
  };

  render() {
    const { showCircle } = this.state;
    const { className, selectedValue, values, selectValue, valueValid } = this.props;

    return (
      <div
        className={cx(
          styles.Container,
          styles.List,
          global.ContentBoxTextColor,
          className,
        )}
      >
        <div className={styles.ValueWrapper}>
          {values.filter(valueValid).map((value) => (
            <div
              className={cx(
                styles.Value,
                selectedValue === value && styles.selected,
                selectedValue === value && globalStyles.CustomFont2,
              )}
              key={value.key}
              onClick={() => selectValue(value)}
            >
              <div className={cx(styles.Text, globalStyles.ContentBoxColor)}>
                <Slider
                  label={value.name}
                  onChange={this.handleSliderChange(value.key)}
                  max={2000}
                  value={value.value}
                />
              </div>
              {showCircle && <div className={cx(styles.Circle)} />}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RotationWidget;
