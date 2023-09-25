import React, { MouseEventHandler } from 'react';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    Button
  </button>
);

export default Button;
