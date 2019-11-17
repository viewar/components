import React from 'react';

import Button from './Button';
// import Test from './components/Test'

const {
  enzyme: { mount },
  chai: { expect },
} = global;

describe('<Button />', function() {
  const mounted = mount(<Button text="<Button /> spec test" />);

  it('mounts without errors', function() {
    expect(mounted).to.be.present();
  });

  it('mounts with given text', function() {
    expect(mounted).to.contain('<Button /> spec test');
  });
});
