
// TODO: update/configure 'import/no-unresolved' to resolve paths!
import Slider from 'components/Slider';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { State, Store } from '@sambego/storybook-state';

// TODO: abstract and import from .storybooks main or config
/* eslint-disable react/jsx-props-no-spreading */
function StoryParent(Component, store) {
  return (
    <div>
      <State store={store}>
        <Component />
      </State>
    </div>
  );
}

// const setStore = (stateValue) => (e) => { store.set({ [stateValue]: e.target.value });

const store = new Store({
  // max > fullWidth
  a:  1253,
  b:  150,
  // max < fullWidth
  c:  1,
  c2: 33,
  c3: 80,
  d:  144.78260869565216,
  e:  700,
  f:  500,
});

const handleSliderChange = (which) => (value) => {
  console.log(value);
  store.set({ [which]: value });
};

storiesOf('Slider', module)
  .add('max gt fullWidth', () => (
    <State store={store}>
      {(state) => (
        <div>
          <h1>{'max > fullWidth'}</h1>
          <Slider
            label={`${state.a} of 2000`}
            value={state.a}
            max={2000}
            onChange={handleSliderChange('a')}
            onClick={action('clicked')}
          />
          <Slider
            label={`${state.b} of 2000`}
            value={state.b}
            max={500}
            onChange={handleSliderChange('b')}
            onClick={action('clicked')}
          />
        </div>
      )}
    </State>
  ))
  .add('max lt fullWidth', () => (
    <State store={store}>
      {(state) => (
        <div>
          <h1>{'max < fullWidth'}</h1>
          <Slider label={`${state.c} of 2`} onChange={handleSliderChange('c')} min={0.2} max={2} value={state.c} />
          <Slider label={`${state.c2} of 100`} onChange={handleSliderChange('c2')} min={0} max={100} value={state.c2} />
          <Slider label={`${state.c3} of 150`} onChange={handleSliderChange('c3')} min={50} max={150} value={state.c3} />
        </div>
      )}
    </State>
  ))
  .add('decimals={2}', () => (
    <State store={store}>
      {(state) => (
        <div>
          <h1>{'decimals={2}'}</h1>
          <Slider label={`${state.d} of 360`} onChange={handleSliderChange('d')} max={360} value={state.d} decimals={2} />
        </div>
      )}
    </State>
  ));
