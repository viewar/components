// TODO: implement styleguide
import React from 'react';

import Button from './Button';

const ButtonShowcase = () => (
  <div>
    <Button text="default variant" />
    <br /><br />
    <Button text="default variant small" small />
    <br /><br />
    <Button text="default variant light" light bold={false} />
    <br /><br />
    <Button text="default variant !bold" bold={false} />
    <br /><br />
    <Button text="filled variant" filled bold={false} />
    <br /><br />
    <Button text="filled variant bold" filled />
    <br /><br />
    <Button text="filled variant inverted" filled inverted bold={false} />
    <br /><br />
    <Button text="filled variant inverted bold" filled inverted />
  </div>
);

export default ButtonShowcase;
