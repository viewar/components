import React, { PureComponent } from 'react';

import DownloadAll from 'components/DownloadAll/DownloadAll';

class DownloadAllShowcase extends PureComponent {
  state = {
    isFinished: false,
  }

  onFinish = () => {
    this.setState({ isFinished: true, isCanceled: false });
  }

  onCancel = () => {
    this.setState({ isFinished: false, isCanceled: true });
  }

  onUpdate = ({ current, total, progress, model }) => {
    console.log('DownloadAll->onUpdate(args)', { current, total, progress, model });
  }

  restart = () => {
    this.setState({ isFinished: false, isCanceled: false });
  }

  render() {
    const { isFinished, isCanceled } = this.state;

    return (
      <div>
        {'downloads all model resources for \'modelManager.models\''}
        <br /><br /><br /><br />
        {`download finished? ${isFinished} - `}
        {isFinished
          ? (
            <>
              <button onClick={this.restart}>restart</button>
              <br /><br />
            </>
          )
          : <DownloadAll onCancel={this.onCancel} onFinish={this.onFinish} onUpdate={this.onUpdate} isOverlay={false} />}
      </div>
    );
  }
}

export default DownloadAllShowcase;
