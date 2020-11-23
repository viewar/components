import React, { PureComponent } from 'react';
import ViewarApi, { sceneManager } from '@viewar/api';
import { PropertyPicker, LoadingState } from 'components';

class PropertyPickerShowcase extends PureComponent {
  state = {
    isReady:       false,
    modelInstance: null,
  };

  componentDidMount() {
    this.insertModel();
  }

  async componentWillUnmount() {
    await sceneManager.clearScene();
  }

  insertModel = async () => {
    const {
      modelManager: { fetchModelFromRepository },
      sceneManager: { insertModel },
    } = ViewarApi;

    const sceneChild = sceneManager.scene.children[0];
    if (sceneChild && sceneChild.model && sceneChild.model.id === '46308') {
      console.info('skipping insertModel');
      this.setState({ isReady: true });
      return true;
    }

    const model = await fetchModelFromRepository('62126'); // Floyd Sofa
    const modelInstance = await insertModel(model);

    this.setState({
      isReady: true,
      modelInstance,
    });
  }


  render() {
    const { isReady, modelInstance } = this.state;

    if (!(isReady && modelInstance)) {
      return (
        <div key="PropertyPickerShowcase">
          <LoadingState />
        </div>
      );
    }

    return (
      <div key="PropertyPickerShowcase">
        {!(isReady && modelInstance)
          ? <LoadingState />
          : <PropertyPicker instance={modelInstance} />}
      </div>
    );
  }
}

export default PropertyPickerShowcase;
