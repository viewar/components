import React, { PureComponent } from 'react';
import ViewarApi from 'viewar-api';

import { PropertyPicker } from 'components';

class Showcase extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isReady:       false,
      modelInstance: null,
    };

    this.insertModel();
  }


  insertModel = async () => {
    const {
      modelManager: { fetchModelFromRepository },
      sceneManager: { insertModel },
    } = ViewarApi;

    const model = await fetchModelFromRepository('46308'); // Mammoth Chair
    const modelInstance = insertModel(model);

    this.setState({
      isReady: true,
      modelInstance,
    });
  }


  render() {
    const { isReady, modelInstance } = this.state;

    if (!isReady) {
      return <div key="PropertyPickerShowcase">Loading model instance...</div>;
    }

    return (
      <div key="PropertyPickerShowcase">
        {isReady &&
          <PropertyPicker
            instance={modelInstance}
          />}
      </div>
    );
  }
}

export default Showcase;
