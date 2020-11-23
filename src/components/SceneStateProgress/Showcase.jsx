import React, { PureComponent } from 'react';
import ViewarApi from '@viewar/api';

import { SceneStateProgress } from 'components';

import sceneState from './sceneState.mock.json';

class SceneStateProgressShowcase extends PureComponent {
  state = {
    isFinished: false,
  }

  async componentWillUnmount() {
    await ViewarApi.sceneManager.clearScene();
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
        {isFinished
          ? <button onClick={this.restart}>restart</button>
          : (
            <SceneStateProgress
              isOverlay={false}
              sceneState={sceneState}
              onFinish={this.onFinish}
            />
          )}
      </div>
    );
  }
}

export default SceneStateProgressShowcase;
