/* eslint-disable no-console */
import React, { useState } from 'react';

import ButtonToggle from 'components/ButtonToggle/ButtonToggle';

const onChangeHandlerControlled = (setToggleValue) => (toggleValueNew) => {
  console.log('[App] onChangeHandlerControlled - toggleValueNew:', toggleValueNew);
  setToggleValue(toggleValueNew);
};

const onChangeHandler = () => (toggleValueNew) => {
  console.log('[App] onChangeHandler - toggleValueNew:', toggleValueNew);
  // do something with the newValue
};

const Showcase = () => {
  const [ toggleValue, setToggleValue ] = useState(null);

  return (
    <>
      <ButtonToggle checked={toggleValue} label="controlled example" onChange={onChangeHandlerControlled(setToggleValue)} />
      <br /><br />
      <ButtonToggle label="un-controlled example" onChange={onChangeHandler()} />
    </>
  );
};


export default Showcase;
