/* eslint-disable no-unused-expressions */
import React from 'react';
import Overlay from 'components/Overlay';

const {
  chai: { expect },
  enzyme: { mount },
} = global;

const mockProps = { className: 'testClassName' };
const mounted = mount(<Overlay {...mockProps} />); // eslint-disable-line react/jsx-props-no-spreading

describe('<Overlay />', function() {
  it('mounts without errors', function() {
    expect(mounted).to.exist;
  });

  it('mount with given className', function() {
    expect(mounted.find('div').first()).to.have.className(mockProps.className);
  });
});
