import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Button from './Button.jsx';
import ButtonDocs from './Button.md';
import * as iconList from '../Icon/IconNamespace';

export default {
  title:      'Button',
  component:  Button,
  decorators: [ withKnobs ],
  parameters: {
    notes: ButtonDocs,
  },
};

export const Props = () => (
  <Button
    text={text('text', 'click me')}
    tooltip={text('tooltip', 'This is the Tooltip')}
    onClick={select('onClick', { Function: 'Function' }, 'Function') && action('clicked')}
    bold={boolean('bold', false)}
    light={boolean('light', false)}
    filled={boolean('filled', true)}
    inverted={boolean('inverted', false)}
    disabled={boolean('disabled', false)}
  />
);

const iconNamesShort = Object.keys(iconList).map((iconName) =>
  iconName.replace('button_', ''),
);

export const withIcon = () => (
  <Button
    text={text('text', 'click me')}
    icon={select('icon', iconNamesShort)}
    onClick={action('clicked')}
  />
);
