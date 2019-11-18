/* eslint-disable no-unused-expressions */
import React from 'react';

import Sidebar from 'components/SideBar';

const {
  chai: { expect },
  enzyme: { mount },
} = global;

const propsMock = {
  className: 'testClassName',
};

const mounted = mount(
  <Sidebar className={propsMock.className} />
);

describe('<Sidebar />', function() {
  it('mounts without errors', function() {
    expect(mounted).to.exist;
  });

  it('mount with given className', function() {
    expect(mounted.find('div').first()).to.have.className(propsMock.className);
  });
});
