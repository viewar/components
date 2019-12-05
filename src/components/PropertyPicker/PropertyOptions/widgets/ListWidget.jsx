import React, { PureComponent } from 'react';
import cx from 'classnames';

import styles from '../PropertyOptions.scss';
import globalStyles from '../../../../sass/global.scss';

class ListWidget extends PureComponent {
  state = {
    showCircle: false,
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentDidMount() {
    setTimeout(() => this.setState({ showCircle: true }), 250); //TODO maybe trigger on imageLoad
  }

  render() {
    const { showCircle } = this.state;
    const { className, selectedValue, values, selectValue, valueValid } = this.props;

    return (
      <div
        className={cx(
          styles.Container,
          styles.List,
          globalStyles.ContentBoxTextColor,
          className
        )}
      >
        <div className={styles.ValueWrapper}>
          {values.filter(valueValid).map((value) => (
            <div
              className={cx(
                styles.Value,
                selectedValue === value && styles.selected,
                selectedValue === value && globalStyles.CustomFont2
              )}
              key={value.key}
              onClick={() => selectValue(value)}
            >
              <div className={cx(styles.Text, globalStyles.ContentBoxColor)}>
                {value.name}
              </div>
              {showCircle && <div className={cx(styles.Circle)} />}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListWidget;
