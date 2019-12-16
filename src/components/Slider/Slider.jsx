/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

import styles from './Slider.scss';

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
      rail:    React.createRef(),
      knob:    React.createRef(),
      wrapper: React.createRef(),
    };

    this.options = {
      min,
      max,
    };

    // TODO: uncontrolled variant
    // this.state = {};
  }

  componentDidMount() {
    const { value } = this.props;
    const {
      knob: { current: knobRef },
    } = this.elements;

    // * apply initial positionLeft to element
    const positionLeft = this.convertValue(value, 'value');
    knobRef.style.left = `${positionLeft}px`;
  }

  startDragHandler = () => {

  }

  convertValue = (value, inputType = 'pixel') => {
    const {
      options: { max },
      elements: { rail: { current: railRef }},
    } = this;

    const fullWidth = railRef && railRef.clientWidth
      ? railRef.clientWidth
      : 176; // ! fix clientWidth on first call

    if (inputType === 'pixel') {
      return value / fullWidth * max;
    }
    else if (inputType === 'value') {
      if (max < fullWidth) {
        return max / fullWidth * value;
      }
      else {
        // * handle min-max for value -> pixel
        if (value > max) {
          value = max;
        }
        else if (value < 0) {
          value = 0;
        }
        return (value / max) * fullWidth;
      }
    }
  }

  handleClick = (target) => (e) => {
    if (target === 'rail') {
    // prevent bubble up to wrapper
    // but pass knob click to rail
      e.stopPropagation();
    }
    e.nativeEvent && e.nativeEvent.stopPropagation();
    this.handleRailClick(e, target);
  }

  handleRailClick = ({ nativeEvent: { offsetX }}, target) => {
    const {
      rail: { current: railRef },
      knob: { current: knobRef },
    } = this.elements;

    const railWidth = railRef.clientWidth;
    let newPositionLeft;

    if (target === 'wrapper') {
      // wrapper click - set to max or zero
      // only triggered on padded edges (due to stopPropagation)
      newPositionLeft = offsetX < railWidth / 3
        ? 0
        : offsetX > railWidth * 0.66
          ? railWidth
          : console.warn('[Viewar Slider] wrapper catched clickevent ! on edge');
    }
    else {
      newPositionLeft = offsetX;
    }

    // fix > max and < min
    if (newPositionLeft > railWidth) {
      newPositionLeft = railWidth;
    }
    else if (newPositionLeft > railWidth) {
      newPositionLeft = 0;
    }

    // apply style to element
    knobRef.style.left = `${newPositionLeft}px`;

    // convert value
    let newValue = this.convertValue(newPositionLeft);
    if (newValue > this.props.max) newValue = this.props.max;
    if (newValue < this.props.min) newValue = this.props.min;

    newValue = this.props.decimals
      ? parseFloat(parseFloat(newValue).toFixed(this.props.decimals))
      : parseFloat(newValue);

    this.props.onChange(newValue);

    const touchDevice =  ('ontouchstart' in document.documentElement);
    const eNames = {
      down: touchDevice ? 'ontouchstart' : 'onmousedown',
      up:   touchDevice ? 'ontouchend' : 'onmouseup',
      move: touchDevice ? 'ontouchmove' : 'onmousemove',
    };
    const elementOffset = touchDevice ? railRef.getBoundingClientRect().left : 0;

    // * handle knob drag
    if (target !== 'wrapper' && !railRef[eNames.move]) {
      railRef[eNames.move] = throttle((e) => {
        console.log('railRef..getBoundingClientRect():');
        const offsetX = touchDevice ? e.targetTouches.item(0).clientX - elementOffset : e.offsetX;
        // simulate rail-click
        this.handleRailClick({ nativeEvent: { offsetX }}, 'rail');
      }, 50);
      // remove handler onmouseup
      railRef[eNames.up] = () => { railRef[eNames.move] = null; };
    }
  }

  render() {
    const { label } = this.props; // TODO: uncontrolled variant

    return (
      <div className={styles.Slider} style={{ width: '200px' }}>
        {label &&
        <div className={styles.label}>{label}</div>}
        <div
          ref={this.elements.wrapper}
          className={styles.slideRailWrapper}
          onMouseDown={this.handleClick('wrapper')}
          onTouchStart={this.handleClick('wrapper')}
        >
          <div
            ref={this.elements.rail}
            onMouseDown={this.handleClick('rail')}
            onTouchStart={this.handleClick('rail')}
            className={styles.slideRail}
          >
            <div
              className={styles.slideKnob}
              ref={this.elements.knob}
              onMouseDown={this.handleClick('knob')}
              onTouchStart={this.handleClick('knob')}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default Slider;
