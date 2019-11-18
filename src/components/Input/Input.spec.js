/* eslint-disable no-unused-expressions */
import React from 'react';

import Input from 'components/Input';

const {
  chai: { expect },
  enzyme: { mount },
} = global;

const mounted = mount(
  <Input value="input value text" label="input label text" className="testClassName" />
);

describe('<Input />', function() {
  it('mounts without errors', function() {
    expect(mounted).to.exist;
  });

  it('mount with given className', function() {
    expect(mounted.find('div').first()).to.have.className('testClassName');
  });

  it('triggers given onChange handler', function(done) {
    const changedInputValue = 'input value text changed';
    const getOnChangeHandler = () => (newValue) => {
      expect(newValue).to.equal(changedInputValue);
      done();
    };

    const mountedWithHandler = mount(
      <Input value="input value text" onChange={getOnChangeHandler()} />
    );

    // set value to changedInputValue
    mountedWithHandler.setProps({ value: changedInputValue });
    // check value prop
    expect(mountedWithHandler.props().value).to.equal(changedInputValue);
    // trigger onChange handler
    mountedWithHandler.find('input').simulate('change');
  });
});
