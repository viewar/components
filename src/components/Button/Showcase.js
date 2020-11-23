// TODO: implement styleguide
import React from 'react';
import { Button } from 'components';

const ButtonShowcase = () => (
  <div>
    <Button text="default" />{' '}
    <Button text="default bold" bold />{' '}
    <Button text="default small" small />
    <br /><br />
    <Button text="default light" light />{' '}
    <Button text="default light inverted" inverted light />{' '}
    <Button text="default light filled" filled light />{' '}
    <br /><br />
    <Button text="filled" filled />{' '}
    <Button text="filled !bold" filled bold={false} />
    <br /><br />
    <Button text="filled inverted" filled inverted bold={false} />{' '}
    <Button text="filled inverted bold" filled inverted bold />
  </div>
);

export default ButtonShowcase;
