import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LoadingState } from 'components';

const getRandomInt = (max) =>
  Math.floor(Math.random() * Math.floor(max));

class LoadingStateShowcase extends PureComponent {
  state = {
    showOverlay: true,
    progress:    0,
    isCanceled:  false,
    isVisible:   true,
  }

  componentDidMount() {
    this.showOverlay(this.startFakeProcess, 500);
  }

  startFakeProcess = () => {
    this.setState({ progress: 0, isCanceled: false });

    clearInterval(window._increaseProgressInterval);

    window._increaseProgressInterval = setInterval(() => {
      console.log('_increaseProgressInterval');
      this.setState(({ progress }) => {
        progress += getRandomInt(15);
        if (progress >= 100) {
          progress = 100;
          clearInterval(window._increaseProgressInterval);
        }
        return { progress };
      });
    }, 300);
  }

  onCancel = () => {
    clearInterval(window._increaseProgressInterval);
    this.setState({ isCanceled: true, showOverlay: false });
  }

  onRestart = () => {
    this.startFakeProcess();
  }

  reset = () => {
    clearInterval(window._increaseProgressInterval);
    this.setState({
      progress:   0,
      isCanceled: false,
    });
  }

  toggleVisibility = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  }

  showOverlay = (callback) => {
    this.setState({ showOverlay: true });

    setTimeout(() => {
      this.setState({ showOverlay: false });
      typeof callback === 'function' && callback();
    }, 1000);
  }

  render() {
    const { showOverlay, progress, isCanceled, isVisible } = this.state;

    return (
      <div>
        {'with progress - '}
        <button onClick={this.reset}>reset</button>{' '}


        {!progress && !isCanceled && <button onClick={this.startFakeProcess}>start</button> || ''}

        {(progress === 100 || isCanceled) && <button onClick={this.onRestart}>restart</button> || ''}

        {(progress && progress < 100 && !isCanceled) && <button onClick={this.onCancel}>cancel</button> || ''}

        <br /><br />
        <LoadingState
          label={`${progress}%`}
          isOverlay={false}
          isCanceled={isCanceled}
          progress={progress}
          onCancel={this.onCancel}
          onRestart={this.onRestart}
        />

        <br /><br /><br />
        {'without progress - '}
        <button onClick={this.toggleVisibility}>{isVisible ? 'hide' : 'show'}</button>{' '}
        <button onClick={this.showOverlay}>{'overlay'}</button>{' '}

        <LoadingState
          isVisible={isVisible}
          isOverlay={showOverlay}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

export default LoadingStateShowcase;
