// TODO: implement styleguide
import React from 'react';

import Button from './Button';

const ButtonShowcase = () => (
  <div>
    <Button text="default variant" />
    <br />
    <Button text="default variant small" small />
    <br />
    <Button text="default variant light" light bold={false} />
    <br />
    <Button text="default variant !bold" bold={false} />
    <br />
    <Button text="filled variant" filled bold={false} />
    <br />
    <Button text="filled variant bold" filled />
    <br />
    <Button text="filled variant inverted" filled inverted bold={false} />
    <br />
    <Button text="filled variant inverted bold" filled inverted />
  </div>
);

export default ButtonShowcase;
