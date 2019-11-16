/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';

import App from 'App';
import Accordion from 'components/Accordion';

describe('<Accordion />', function() {
  const {
    chai: { expect },
    enzyme: { mount },
  } = global;

  const mounted = mount(<Accordion initialState={{ isOpen: true }} />);

  it('mounts without errors', function() {
    expect(mounted).to.exist;
  });

  it('mounts with `{ isOpen: true }`', function() {
    expect(mounted.state().isOpen).to.equal(true);
  });
});
