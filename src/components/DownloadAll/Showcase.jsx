import React, { PureComponent } from 'react';

import { DownloadAll } from 'components';

class DownloadAllShowcase extends PureComponent {
  state = {
    isFinished: false,
  }

  onFinish = () => {
    console.log('[DownloadAllShowcase] onFinish() called');
    this.setState({ isFinished: true, isCanceled: false });
  }

  onCancel = () => {
    console.log('[DownloadAllShowcase] onCancel() called');
    this.setState({ isFinished: false, isCanceled: true });
  }

  onClose = () => {
    console.log('[DownloadAllShowcase] onClose() called');
    this.setState({ isFinished: false, isCanceled: true });
  }

  onUpdate = ({ current, total, progress, model }) => {
    console.log('[DownloadAllShowcase] onUpdate() called', { current, total, progress, model });
  }

  onRestart = () => {
    console.log('[DownloadAllShowcase] onRestart() called');
    this.setState({ isFinished: false, isCanceled: false });
  }

  render() {
    const { isFinished, isCanceled } = this.state;

    const showDownloadAll = !(isFinished || isCanceled);

    return (
      <div>
        {'downloads all model resources for \'modelManager.models\''}
        <br /><br /><br /><br />
        {`download finished? ${isFinished} - `}
        {!showDownloadAll && (
          <>
            <button onClick={this.onRestart}>restart</button>
            <br /><br />
          </>
        )}
        {showDownloadAll && (
          <DownloadAll
            isOverlay
            isVisible={showDownloadAll}
            onCancel={this.onCancel}
            onClose={this.onClose}
            onFinish={this.onFinish}
            onUpdate={this.onUpdate}
          />)}
      </div>
    );
  }
}

export default DownloadAllShowcase;
