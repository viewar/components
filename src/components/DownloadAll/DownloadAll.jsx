import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import viewarApi from 'viewar-api';

import LoadingState from '../LoadingState';
import styles from './DownloadAll.scss';

class DownloadAll extends PureComponent {
  static propTypes = {
    onUpdate:     PropTypes.func,
    onRestart:    PropTypes.func,
    onFinish:     PropTypes.func,
    onCancel:     PropTypes.func,
    // LoadingState props
    isOverlay:    PropTypes.bool, // TODO: remove isOverlay?
  };

  static defaultProps = {
    onUpdate:  () => {},
    onRestart: () => {},
    onFinish:  () => {},
    onCancel:  () => {},
    isOverlay: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      progress:   0,
      isCanceled: false,
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

  onRestart = () => {
    this.props.onRestart();
    this.setState({ isCanceled: false, progress: 0 });
    this.triggerDownloadAll();
  }

  triggerDownloadAll = async () => {
    await viewarApi.modelManager.downloadAll(this.downloadAllProgress);
    this.setState(({ isCanceled, progress }) => {
      console.log('triggerDownloadAll- isCanceled?:', isCanceled);
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
    const progressQuotient = Math.ceil(100 / total);
    const progressPrevious = Math.ceil((current - 1) * progressQuotient);

    progress = progressPrevious + progress;

    this.props.onUpdate({ current, total, progress, model });
    this.setState({ progress, current, total });
  }

  render() {
    const { isOverlay } = this.props;
    const { progress, isCanceled, isFinished, current, total } = this.state;

    // ? show state.model.name
    const downloadStatusString = total
      ? `downloading model ${current} of ${total}`
      : !isFinished ? 'preloading models...' : 'download finished';

    return (
      <div className={styles.DownloadAll} key="DownloadAll">
        <LoadingState
          isVisible
          label={downloadStatusString}
          progress={progress}
          isOverlay={isOverlay && !isFinished}
          isCanceled={isCanceled}
          onCancel={this.onCancel}
          onRestart={this.onRestart}
        />
      </div>
    );
  }
}

export default DownloadAll;
