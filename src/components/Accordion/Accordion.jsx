import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Accordion.scss';

class Accordion extends PureComponent {
  static propTypes = {
    children:     PropTypes.node.isRequired,
    title:        PropTypes.string.isRequired,
    className:    PropTypes.string,
    onChange:     PropTypes.func,
    isOpen:       PropTypes.bool,
    initialState: PropTypes.shape({
      isOpen: PropTypes.bool,
    }),
    // boolean modifiers
    left:  PropTypes.bool,
    right: PropTypes.bool,
  };

  static defaultProps = {
    isOpen:       null,
    className:    '',
    onChange:     () => {},
    initialState: {},
    // boolean modifiers
    left:         false,
    right:        false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.initialState.isOpen || false,
    };
  }

  handleTrigger = () => {
    if (this.props.isOpen != null) {
      return true;
    }
    this.props.onChange(!this.state.isOpen);
    this.setState(({ isOpen }) => {
      return { isOpen: !isOpen };
    });
  };

  render() {
    const {
      isOpen, children, title, className, left, right,
    } = this.props;

    const classNames = cx(
      styles.Accordion,
      {
        [styles.title]: title,
        [styles.left]:  left,
        [styles.right]: right,
      },
      className,
    );

    return (
      <div
        className={cx(styles.Accordion, {
          [styles.isOpen]: isOpen || this.state.isOpen,
        })}
      >
        <div key="accordion_trigger" className={classNames} onClick={this.handleTrigger}>
          {title}
          <div className={styles.trigger}>{'>'}</div>
        </div>
        <div key="accordion_content" className={styles.content}>
          <div className={styles.contentWrapper}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Accordion;
