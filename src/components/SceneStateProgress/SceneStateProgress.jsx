import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import viewarApi from 'viewar-api';

import LoadingState from '../LoadingState';
import styles from './SceneStateProgress.scss';

class SceneStateProgress extends PureComponent {
  static propTypes = {
    sceneState:   PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    onUpdate:     PropTypes.func,
    onRestart:    PropTypes.func,
    onFinish:     PropTypes.func,
    onCancel:     PropTypes.func,
    // LoadingState props
    isOverlay:    PropTypes.bool, // TODO: remove isOverlay?
  };

  static defaultProps = {
    onUpdate:   () => {},
    onRestart:  () => {},
    onFinish:   () => {},
    onCancel:   () => {},
    isOverlay:  true,
  };

  constructor(props) {
    super(props);

    this.initialState = {
      isCanceled: false,
      isFinished: false,
      progress:   0,
      current:    0,
      total:      0,
      label:      'preloading models...',
    };

    this.state = { ...this.initialState };
  }

  async componentDidMount() {
    const { sceneState } = this.props;

    this.setListener();

    // * setSceneState
    if (sceneState) {
      this.setSceneState();
    }
  }

  setListener = () => {
    viewarApi.sceneManager.on('sceneStateUpdateProgress', (current, total) => {
      this.updateProgress({ current, total });
    });
  }

  setSceneState = async () => {
    viewarApi.sceneManager.setSceneState(this.props.sceneState)
      .then((result) => {
        this.setState(({ isCanceled, progress }) => {
          const newState = { isFinished: !isCanceled };
          if (!isCanceled) {
            this.props.onFinish();
            newState.progress = 100;
          }
          return newState;
        });

        return true;
      })
      .catch((err) => {
        // TODO: add proper error handling to setSceneState (in viewar-api)
        console.info('[Error - SceneStateProgress] setSceneState():', err);
        this.setState({
          label:      'Download failed! Check your internet connection and try again.',
          isCanceled: true,
        });
        this.onCancel();
      });
  }

  updateProgress = ({ current, total }) => {
    const progressQuotient = Math.ceil(100 / total);
    const progress = Math.ceil((current - 1) * progressQuotient);

    const newState = { progress, current, total };
    this.props.onUpdate(newState);

    newState.label = total
      ? `Downloading Model ${current} of ${total}`
      : '';

    this.setState(newState);
  }

  onCancel = async () => {
    const { sceneManager } = viewarApi;

    sceneManager.off('sceneStateUpdateProgress');

    try {
      // * try to keep scene - checks if current state is valid
      // * if some instances are only partially inserted, this will throw an error
      const sceneState = sceneManager.getSceneState();
      await sceneManager.setSceneState(sceneState);
    }
    catch (err) {
      // * or clear it
      console.info('[Info - SceneStateProgress] couldn\'t restore current SceneState. Will clear SceneState.');
      await sceneManager.clearScene();
    }

    this.setState({ isCanceled: true, isFinished: false });
    this.props.onCancel();
  }

  onRestart = () => {
    this.props.onRestart();

    this.setState(({ progress }) => ({ ...this.initialState, progress }));

    this.setListener();
    this.setSceneState();
  }

  render() {
    const { progress, isFinished, isCanceled, label } = this.state;
    const { isOverlay } = this.props;

    return (
      <div className={styles.SceneStateProgress} key="DownloadAll">
        <LoadingState
          isOverlay={isOverlay}
          isVisible={!isFinished}
          label={label}
          progress={progress}
          isCanceled={isCanceled}
          onCancel={this.onCancel}
          onRestart={this.onRestart}
        />
      </div>
    );
  }
}

export default SceneStateProgress;
