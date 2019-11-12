import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './SideBar.scss';

class Sidebar extends PureComponent {
  static propTypes = {
    children:  PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
    position:  PropTypes.oneOf([ 'left', 'right' ]),
    className: PropTypes.string,
  };

  static defaultProps = {
    children:  [],
    position:  'left',
    className: '',
  };

  render() {
    const { children, position, className } = this.props;

    return (
      <div
        className={cx(styles.SideBar, className, {
          [styles.posLeft]:  position === 'left',
          [styles.posRight]: position === 'right',
        })}
      >
        {children}
      </div>
    );
  }
}

export default Sidebar;
