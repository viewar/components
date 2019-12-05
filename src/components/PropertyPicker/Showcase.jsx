import React, { PureComponent } from 'react';

import { PropertyPicker } from 'components';

class Showcase extends PureComponent {
  state = {
    isReady:       false,
    modelInstance: null,
  }

  componentDidMount() {

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
