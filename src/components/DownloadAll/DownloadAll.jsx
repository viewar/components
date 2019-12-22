import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import viewarApi from 'viewar-api';

import LoadingState from '../LoadingState';
import styles from './DownloadAll.scss';

class DownloadAll extends PureComponent {
  static propTypes = {
    onUpdate:  PropTypes.func,
    onRestart: PropTypes.func,
    onFinish:  PropTypes.func,
    onCancel:  PropTypes.func,
    onClose:   PropTypes.func,
    // LoadingState props
    isVisible: PropTypes.bool,
    isOverlay: PropTypes.bool,
  };

  static defaultProps = {
    onUpdate:  () => {},
    onRestart: () => {},
    onFinish:  () => {},
    onCancel:  () => {},
    onClose:   () => {},
    isVisible: true,
    isOverlay: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      progress:   0,
      isCanceled: false,
      isFinished: false,
      isClosed:   false,
    };
  }

  componentDidMount() {
    this.triggerDownloadAll();
  }

  onCancel = () => {
    this.props.onCancel();
    this.setState({ isCanceled: true, isFinished: false });

    viewarApi.modelManager.stopDownloadAll();
  }

  onClose = () => {
    this.props.onClose();
    this.setState({ isClosed: true, isFinished: false });

    // ? run in background
    // viewarApi.modelManager.stopDownloadAll();
  }

  onRestart = () => {
    this.props.onRestart();
    this.setState({ isClosed: false, isFinished: false, isCanceled: false, progress: 0 });
    this.triggerDownloadAll();
  }

  triggerDownloadAll = async () => {
    await viewarApi.modelManager.downloadAll(this.downloadAllProgress);
    this.setState(({ isCanceled, progress }) => {
      const newState = { isFinished: !isCanceled };
      if (!isCanceled) {
        this.props.onFinish();
        newState.progress = 100;
      }
      return newState;
    });
  }

  // see http://test2.3.viewar.com/docs/ModelManager.html#event:downloadAllProgress
  downloadAllProgress = (current, total, progress, model) => {
    const progressQuotient = 100 / total;
    const progressPrevious = (current - 1) * progressQuotient;

    progress = parseFloat(progressPrevious + progress).toFixed(3);

    this.props.onUpdate({ current, total, progress, model });
    this.setState({ progress, current, total });
  }

  render() {
    const { isVisible, isOverlay } = this.props;
    const {
      progress, isCanceled, isClosed, isFinished, current, total,
    } = this.state;

    // ? show state.model.name
    const downloadStatusString = total
      ? `downloading model ${current} of ${total}`
      : !isFinished ? 'preloading models...' : 'download finished';

    return (
      <div className={styles.DownloadAll} key="DownloadAll">
        <LoadingState
          isVisible={isVisible}
          label={downloadStatusString}
          progress={progress}
          isOverlay={isOverlay && !isClosed}
          isCanceled={isCanceled}
          onClose={this.onClose}
          onCancel={this.onCancel}
          onRestart={this.onRestart}
        />
      </div>
    );
  }
}

export default DownloadAll;
