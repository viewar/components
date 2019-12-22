/* eslint-disable no-console */
import React, { useState } from 'react';

import { ButtonToggle } from 'components';

const onChangeHandlerControlled = (setToggleValue) => (toggleValueNew) => {
  console.log('[App] onChangeHandlerControlled - toggleValueNew:', toggleValueNew);
  setToggleValue(toggleValueNew);
};

const onChangeHandler = () => (toggleValueNew) => {
  console.log('[App] onChangeHandler - toggleValueNew:', toggleValueNew);
  // do something with the newValue
};

const Showcase = () => {
  const [ toggleValue, setToggleValue ] = useState(false);

  return (
    <>
      {toggleValue + ''}
      <ButtonToggle
        label={'controlled example'}
        onChange={onChangeHandlerControlled(setToggleValue)}
        checked={toggleValue}
      />
      <br /><br />
      <ButtonToggle label="un-controlled example" onChange={onChangeHandler()} />
    </>
  );
};


export default Showcase;
