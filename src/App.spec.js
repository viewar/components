/* eslint-disable no-unused-expressions */
import React from 'react';

import App from './App';

describe('<App />', function() {
  const {
    chai: { expect },
    enzyme: { mount },
  } = global;

  const wrapper = mount(<App />);

  it('mounts without errors', function() {
    expect(wrapper).to.have.descendants('#app_root');
    expect(wrapper).to.exist;
  });

  it('mounts with `<h1 id="app_headline">ViewAR SDK</h1>`', function() {
    expect(wrapper).to.have.descendants('#app_headline');
    expect(wrapper.find('h1')).to.contain('@viewar/components');
  });
});
