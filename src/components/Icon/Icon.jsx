/* eslint-disable import/namespace */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as iconList from './icons';
import styles from './Icon.scss';

const iconNamesShort = Object.keys(iconList).map((iconName) =>
  iconName.replace('button_', ''),
);

// TODO: add variant without mask!? (see base6/EdgeButton)
function Icon({
  icon, color, size, style, onClick, className,
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
      role="button"
      onClick={onClick}
      style={styleObject}
      className={cx(styles.Icon, {
        [styles.big]:    size === 'big',
        [styles.small]:  size === 'small',
        [styles.xsmall]: size === 'xsmall',
      }, className)}
    />
  );
}

Icon.propTypes = {
  icon:      PropTypes.oneOf(iconNamesShort).isRequired,
  onClick:   PropTypes.func,
  color:     PropTypes.string,
  size:      PropTypes.oneOf([ 'big', 'small', 'xsmall' ]),
  style:     PropTypes.object, // TODO: rethink if style is needed
  className: PropTypes.string,
};

Icon.defaultProps = {
  onClick:   () => {},
  color:     null,
  size:      null,
  style:     {},
  className: '',
};

export default Icon;
