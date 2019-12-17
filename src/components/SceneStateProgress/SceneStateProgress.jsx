import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import viewarApi from 'viewar-api';

import LoadingState from 'components/LoadingState';

import styles from './SceneStateProgress.scss';

class SceneStateProgress extends PureComponent {
  static propTypes = {
    sceneState:   PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    children:     PropTypes.node,
    onUpdate:     PropTypes.func,
    onRestart:    PropTypes.func,
    onFinish:     PropTypes.func,
    onCancel:     PropTypes.func,
    // LoadingState props
    isOverlay:    PropTypes.bool, // TODO: remove isOverlay?
  };

  static defaultProps = {
    sceneState: null,
    children:   null,
    onUpdate:   () => {},
    onRestart:  () => {},
    onFinish:   () => {},
    onCancel:   () => {},
    isOverlay:  true,
  };

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      current:  0,
      total:    0,
    };
  }


  async componentDidMount() {
    const { sceneState } = this.props;

    // * set listener
    viewarApi.sceneManager.on('sceneStateUpdateProgress', (current, total) => {
      this.updateProgress({ current, total });
    });

    // * setSceneState
    if (sceneState) {
      this.setSceneState();
    }
  }

  setSceneState = async () => {
    await viewarApi.sceneManager.setSceneState(this.props.sceneState);

    this.setState(({ isCanceled, progress }) => {
      const newState = { isFinished: !isCanceled };
      if (!isCanceled) {
        this.props.onFinish();
        newState.progress = 100;
      }
      return newState;
    });
  }

  updateProgress = ({ current, total }) => {
    console.log('sceneStateUpdateProgress :', current, total);
    const progressQuotient = Math.ceil(100 / total);
    const progress = Math.ceil((current - 1) * progressQuotient);

    this.setState({ progress, current, total });
  }

  onCancel = () => {
    this.props.onCancel();
    this.setState({ isCanceled: true, isFinished: false });

    viewarApi.sceneManager.off('sceneStateUpdateProgress');
  }

  onRestart = () => {
    this.props.onRestart();
    this.setState({ isCanceled: false, progress: 0 });
  }

  render() {
    const { progress, isFinished, current, total } = this.state;
    const { isOverlay, children } = this.props;

    const downloadStatusString = total
      ? `Downloading Model ${current} of ${total}`
      : '';

    return (
      <div className={styles.SceneStateProgress} key="DownloadAll">
        <LoadingState
          isOverlay
          isVisible={!isFinished}
          label={downloadStatusString}
          progress={progress}
          onCancel={this.onCancel}
          onRestart={this.onRestart}
        />
      </div>
    );
  }
}

export default SceneStateProgress;
