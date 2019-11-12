import React from 'react';

import Button from './Button';
// import Test from './components/Test'

const { enzyme: { mount }, chai: { expect }} = global;

describe('<Button />', function() {
  const wrapper = mount(<Button />);

  it('renders without errors', function() {
    expect(wrapper).to.be.present();
  });
});
