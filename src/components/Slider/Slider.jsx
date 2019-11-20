/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { throws } from 'assert';

import styles from './Slider.scss';

// TODO: add drag handler to <Slider />
// TODO: handle 'value <-> position' convertions
class Slider extends PureComponent {
  static propTypes = {
    label:    PropTypes.string,
    value:    PropTypes.number,
    decimals: PropTypes.number,
    max:      PropTypes.number,
    min:      PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    label:    null,
    value:    null,
    decimals: 2,
    min:      0,
    max:      100,
    onChange: () => {},
  }

  constructor(props) {
    super(props);

    const { min, max } = props;

    this.elements = {
      rail: React.createRef(),
      knob: React.createRef(),
    };

    this.options = {
      min,
      max,
    };


    // TODO: uncontrolled variant
    this.state = {};
  }

  convertValue = (value, inputType = 'pixel') => {
    const {
      options: { max },
      elements: { rail: { current: railRef }},
    } = this;

    const fullWidth = railRef && railRef.clientWidth
      ? railRef.clientWidth
      : 200; // ! fix clientWidth on first call

    // inputType = 'pixel' | 'value'
    const onePercent = fullWidth / 100;

    if (inputType === 'pixel') {
      return value / onePercent / 100 * max;
    }
    else {
      return (value / max) * fullWidth;
    }
  }

  handleClick = (target) => (e) => {
    if (target === 'rail') {
      this.handleRailClick(e);
    }
  }

  handleRailClick = ({ nativeEvent: { offsetX, offsetY }}) => {
    const {
      rail: { current: railRef },
      knob: { current: knobRef },
    } = this.elements;

    let newPositionLeft = offsetX;
    if (newPositionLeft > railRef.clientWidth) {
      newPositionLeft = railRef.clientWidth;
    }

    knobRef.style.left = `${newPositionLeft}px`;

    let newValue = this.convertValue(newPositionLeft);
    if (newValue > this.props.max) newValue = this.props.max;
    if (newValue < this.props.min) newValue = this.props.min;

    newValue = parseFloat(newValue).toFixed(this.props.decimals);

    this.props.onChange(newValue);
  }

  render() {
    const { label, value } = this.props; // TODO: uncontrolled variant
    const positionLeft = this.convertValue(value, 'value');

    return (
      <div className={styles.Slider} style={{ width: '200px' }}>
        {label &&
        <div className={styles.label}>{label}</div>}
        <div
          className={styles.slideRail}
          onClick={this.handleClick('rail')}
          ref={this.elements.rail}
        >
          <div className={styles.slideKnob} ref={this.elements.knob} style={{ left: positionLeft + 'px' }} />
        </div>

      </div>
    );
  }
}

export default Slider;
