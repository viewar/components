import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './PropertyPickerBar.scss';
import globalStyles from '../../../sass/global.scss';

import { isEdgeBrowser } from '../../../utils/is-edge';
import { IconButtonEdge, Icon } from 'components';

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
            {isEdgeBrowser ? (
              <IconButtonEdge
                className={styles.EdgeButtonPrevious}
                dark
                size={'small'}
                icon={'back'}
                onClick={this.selectNext}
              />
            ) : (
              <Icon
                icon="submenu_back"
                className={cx(styles.Button, globalStyles.ContentBoxColor)}
                onClick={this.selectNext}
              />
            )}
          </>
        )}
        <div
          className={cx(
            styles.Active,
            globalStyles.ContentBoxColor,
            globalStyles.ContentBoxTextColor,
            !showButtons && styles.noButtons
          )}
        >
          <div className={styles.Property}>{activeProperty.name + ':'}</div>
          <div className={styles.Value}>{activeProperty.value.name}</div>
        </div>
        {showButtons && (
          <>
            {isEdgeBrowser ? (
              <IconButtonEdge
                className={styles.EdgeButtonNext}
                dark
                size={'small'}
                icon={'next'}
                onClick={this.selectPrevious}
              />
            ) : (
              <Icon
                icon="submenu_next"
                className={cx(styles.Button, globalStyles.ContentBoxColor)}
                onClick={this.selectPrevious}
              />
            )}
          </>
        )}
      </div>
    );
  }
}

export default PropertyPickerBar;
