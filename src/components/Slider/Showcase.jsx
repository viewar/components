import React, { useState } from 'react';

import Slider from 'components/Slider';

const Showcase = () => {
  const [ values, setValues ] = useState({
    // max > fullWidth
    a: 1000,
    b: 150,
    // max < fullWidth
    c: 5,
    d: 1,
  });

  const handleSliderChange = (which) => (newValue) => {
    values[which] = newValue;
    setValues({ ...values });
  };

  return (
    <>
      <h3>{'max > fullWidth'}</h3>
      <Slider label={`${values.a} of 2000`} onChange={handleSliderChange('a')} max={2000} value={values.a} />
      <Slider label={`${values.b} of 500`} onChange={handleSliderChange('b')} max={500} value={values.b} />

      <h3>{'max < fullWidth'}</h3>
      <Slider label={`${values.c} of 30`} onChange={handleSliderChange('c')} max={30} value={values.c} />
      <Slider label={`${values.d} of 2`} onChange={handleSliderChange('d')} min={0.2} max={2} value={values.d} />
    </>
  );
};

export default Showcase;
