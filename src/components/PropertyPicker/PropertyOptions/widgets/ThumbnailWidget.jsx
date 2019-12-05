import React, { PureComponent } from 'react';
import cx from 'classnames';

import styles from '../PropertyOptions.scss';
import globalStyles from '../../../../sass/global.scss';

class ThumbnailWidget extends PureComponent {
  state = {
    showCircle: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ showCircle: true }), 250); //TODO maybe trigger on imageLoad
  }

  render() {
    const { showCircle } = this.state;
    const { className, selectedValue, values, selectValue, valueValid } = this.props;

    return (
      <div
        className={cx(
          styles.Container,
          styles.Thumbnail,
          globalStyles.ContentBoxTextColor,
          className
        )}
      >
        {values.filter(valueValid).map((value) => (
          <div
            className={styles.Value}
            key={value.key}
            onClick={() => selectValue(value)}
          >
            <div
              className={styles.Image}
              style={{ backgroundImage: `url(${value.imageUrl})` }}
            />
            {showCircle && (
              <div
                className={cx(
                  styles.Circle,
                  selectedValue === value && styles.selected,
                  selectedValue === value && globalStyles.CustomFont2
                )}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ThumbnailWidget;
