// TODO: update/configure 'import/no-unresolved' to resolve paths!
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';

import Slider from './Slider.jsx';
import SliderDocs from './Slider.md';

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
  value: 0,
  // max > fullWidth
  a:     1253,
  b:     150,
  // max < fullWidth
  c:     1,
  c2:    33,
  c3:    80,
  d:     144.78260869565216,
  e:     700,
  f:     500,
});

const handleSliderChange = (which) => (value) => {
  store.set({ [which]: value });
};

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .addParameters({
    notes: SliderDocs,
  })
  .add('Props', () => {
    return (
      <State store={store}>
        {(state) => {
          const min = number('min', 0);
          const max = number('max', 2000);

          return (
            <div>
              <Slider value={state.value} min={min} max={max} label={`${state.value} of ${max}`} onChange={handleSliderChange('value')} />
            </div>
          );
        }}
      </State>
    );
  })
  .add('min and max', () => {
    return (
      <State store={store}>
        {(state) => (
          <div>
            <h3>{'max > fullWidth'}</h3>
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
            <h3>{'max < fullWidth'}</h3>
            <Slider label={`${state.c} of 2`} onChange={handleSliderChange('c')} min={0.2} max={2} value={state.c} />
            <Slider label={`${state.c2} of 100`} onChange={handleSliderChange('c2')} min={0} max={100} value={state.c2} />
            <Slider label={`${state.c3} of 150`} onChange={handleSliderChange('c3')} min={50} max={150} value={state.c3} />
          </div>
        )}
      </State>
    )
    ;
  })
  .add('decimals={5}', () => (
    <State store={store}>
      {(state) => (
        <div>
          <h1>{'decimals={5}'}</h1>
          <Slider label={`${state.d} of 360`} onChange={handleSliderChange('d')} max={360} value={state.d} decimals={2} />
        </div>
      )}
    </State>
  ));
