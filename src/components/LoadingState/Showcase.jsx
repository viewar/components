import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LoadingState from './LoadingState';

const getRandomInt = (max) =>
  Math.floor(Math.random() * Math.floor(max));


class LoadingStateShowcase extends PureComponent {
  state = {
    tempOverlay: true,
    progress:    0,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ tempOverlay: false });

      window._increaseProgressInterval = setInterval(() => {
        this.setState(({ progress }) => {
          progress += getRandomInt(15);
          if (progress >= 100) {
            progress = 100;
            clearInterval(window._increaseProgressInterval);
          }
          return { progress };
        });
      }, 300);
    }, 1000);
  }


  render() {
    const { tempOverlay, progress } = this.state;

    return (
      <div>
        {tempOverlay && <LoadingState isVisible isOverlay={tempOverlay} percent={20} /> || <LoadingState isVisible progress={progress} isOverlay={tempOverlay} />}
      </div>
    );
  }
}

export default LoadingStateShowcase;
