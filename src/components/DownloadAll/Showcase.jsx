import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import viewarApi from 'viewar-api';

import DownloadAll from 'components/DownloadAll/DownloadAll';

class DownloadAllShowcase extends PureComponent {
  state = {
    isFinished: false,
  }

  onFinish = () => {
    this.setState({ isFinished: true });
  }

  onUpdate = ({ current, total, progress, model }) => {
    console.log('DownloadAll->onUpdate(args)', { current, total, progress, model });
  }

  restart = () => {
    this.setState({ isFinished: false });
  }

  render() {
    const { isFinished } = this.state;

    return (
      <div>
        {`download finished? ${isFinished} - `}
        {isFinished && <button onClick={this.restart}>restart</button>}
        <br /><br />
        {!isFinished && <DownloadAll onFinish={this.onFinish} onUpdate={this.onUpdate} isOverlay={false} />}
      </div>
    );
  }
}

export default DownloadAllShowcase;
