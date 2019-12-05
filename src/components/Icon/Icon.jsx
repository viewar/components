/* eslint-disable import/namespace */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as iconList from './list';
import styles from './Icon.scss';

const iconNamesShort = Object.keys(iconList).map((iconName) =>
  iconName.replace('button_', ''),
);

// TODO: add variant without mask!? (see base6/EdgeButton)
function Icon({
  icon, color, size, style,
}) {
  const iconName = `button_${icon}`;
  const styleObject = Object.assign(
    {},
    {
      maskImage:       `url('${iconList[iconName]}')`,
      WebkitMaskImage: `url('${iconList[iconName]}')`,
      backgroundColor: color,
    },
    styles,
  );

  return (
    <div
      style={styleObject}
      className={cx(styles.Icon, global.BorderDark, {
        [styles.big]:    size === 'big',
        [styles.small]:  size === 'small',
        [styles.xsmall]: size === 'xsmall',
      })}
    />
  );
}

Icon.propTypes = {
  icon:  PropTypes.oneOf(iconNamesShort).isRequired,
  color: PropTypes.string,
  size:  PropTypes.oneOf([ 'big', 'small', 'xsmall' ]),
  style: PropTypes.object,
};

Icon.defaultProps = {
  color: null,
  size:  null,
  style: {},
};

export default Icon;
