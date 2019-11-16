/* eslint-disable no-unused-expressions */
import React from 'react';

import Accordion from 'components/Accordion';

const {
  chai: { expect },
  enzyme: { mount },
} = global;

const mounted = mount(
  <Accordion title="<Accordion /> spec test" initialState={{ isOpen: true }}>
    {'required prop \'children\''}
  </Accordion>
);

describe('<Accordion />', function() {
  it('mounts without errors', function() {
    expect(mounted).to.exist;
  });

  it('mounts with given initialState `{ isOpen: true }`', function() {
    expect(mounted.state().isOpen).to.equal(true);
  });
});
