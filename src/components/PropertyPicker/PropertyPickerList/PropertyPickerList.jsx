import React, { PureComponent } from 'react';
import cx from 'classnames';

import { DetailContainer, DetailHeader, DetailContent } from 'components';

import styles from './PropertyPickerList.scss';

class PropertyPickerList extends PureComponent {
  render() {
    const { className, properties, activeProperty, setActiveProperty } = this.props;

    return (
      <div className={styles.Container}>
        <DetailContainer gap="left1">
          {/* <DetailHeader>Product Options</DetailHeader> */}
          <DetailContent className={styles.Content}>
            {properties.map((property) => (
              <div
                key={property.name}
                className={cx(styles.Property, {
                  [styles.active]: activeProperty.name === property.name,
                })}
                onClick={() => setActiveProperty(property)}
              >
                {property.name}
              </div>
            ))}
          </DetailContent>
        </DetailContainer>
      </div>
    );
  }
}

export default PropertyPickerList;
