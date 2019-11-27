import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.scss';

/**
 ** TODO: enhanced <Button />
 *  * use function syntax here
 *  * add iconSuffix / iconPrefix
 */
class Button extends PureComponent {
  static propTypes = {
    // TODO: rename to "content"
    text:      PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
    className: PropTypes.string,
    tooltip:   PropTypes.string,
    onClick:   PropTypes.func,
    type:      PropTypes.oneOf([ '', 'icon' ]),
    // boolean modifiers
    flat:      PropTypes.bool,
    bold:      PropTypes.bool,
    small:     PropTypes.bool,
    wide:      PropTypes.bool,
    right:     PropTypes.bool,
    light:     PropTypes.bool,
    filled:    PropTypes.bool,
    inverted:  PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    onClick:   () => {},
    type:      '',
    tooltip:   null,
    // boolean modifiers
    bold:      null,
    flat:      false,
    small:     false,
    wide:      false,
    right:     false,
    light:     false,
    filled:    false,
    inverted:  false,
  };

  handleClick = () => (e) => {
    const { onClick } = this.props;

    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  render() {
    const {
      text,
      className,
      type,
      tooltip,
      flat,
      filled,
      inverted,
      bold,
      light,
      right,
      small,
      wide,
    } = this.props;

    const classNames = cx(
      styles.Button,
      {
        [styles.icon]:     type === 'icon',
        [styles.flat]:     flat,
        [styles.bold]:     (filled && bold !== false) || bold,
        [styles.small]:    small,
        [styles.wide]:     wide,
        [styles.right]:    right,
        [styles.light]:    light,
        [styles.filled]:   filled,
        [styles.inverted]: inverted,
      },
      className
    );

    return (
      <>
        <button
          data-for={'tooltip'}
          data-tip={tooltip}
          onClick={this.handleClick()}
          className={classNames}
        >
          {text}
        </button>
      </>
    );
  }
}

export default Button;
