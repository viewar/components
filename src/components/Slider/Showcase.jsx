import React, { useState } from 'react';

import Slider from 'components/Slider';

const Showcase = () => {
  const [ values, setValues ] = useState({
    // max > fullWidth
    a: 1253,
    b: 150,
    // max < fullWidth
    c: 1,
    d: 144.78260869565216,
    e: 700,
    f: 500,
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
      <Slider label={`${values.c} of 2`} onChange={handleSliderChange('c')} min={0.2} max={2} value={values.c} />

      <h3>{'decimals={false}'}</h3>
      <Slider label={`${values.d} of 360`} onChange={handleSliderChange('d')} max={360} value={values.d} decimals={false} />

      <h3>{'TBD: value > max'}</h3>
      <Slider label={`${values.e} of 500`} onChange={handleSliderChange('e')} max={500} value={values.e} />

      <h3>{'TBD: value = min | max'}</h3>
      <Slider label={'0 of 500'} max={500} value={0} />
      <Slider label={`${values.f} of 500`} onChange={handleSliderChange('f')} max={500} value={values.f} />
    </>
  );
};

export default Showcase;
