/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-no-bind */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from 'components';

import styles from './PropertyPickerBar.scss';

class PropertyPickerBar extends PureComponent {
  selectNext = () => {
    const { properties, activeProperty, setActiveProperty } = this.props;

    const oldIndex = properties.indexOf(activeProperty);
    const newIndex = (properties.length + (oldIndex + 1)) % properties.length;

    setActiveProperty(properties[newIndex]);
  };

  selectPrevious = () => {
    const { properties, activeProperty, setActiveProperty } = this.props;

    const oldIndex = properties.indexOf(activeProperty);
    const newIndex = (properties.length + (oldIndex - 1)) % properties.length;

    setActiveProperty(properties[newIndex]);
  };

  render() {
    console.log('[PropertyPickerBar] activeProperty:', this.props.activeProperty);
    const { className, properties, activeProperty } = this.props;

    const showButtons = properties.length > 1;

    return (
      <div className={cx(styles.Container, className)}>
        {showButtons && (
          <>
            <Icon
              icon="submenu_back"
              className={cx(styles.Button)}
              onClick={this.selectNext}
            />
          </>
        )}
        <div
          className={cx(
            styles.Active,
            !showButtons && styles.noButtons,
          )}
        >
          <div className={styles.Property}>{activeProperty.name + ':'}</div>
          <div className={styles.Value}>{activeProperty.value.name}</div>
        </div>
        {showButtons &&
          <Icon
            icon="submenu_next"
            className={cx(styles.Button)}
            onClick={this.selectPrevious}
          />}
      </div>
    );
  }
}

export default PropertyPickerBar;
