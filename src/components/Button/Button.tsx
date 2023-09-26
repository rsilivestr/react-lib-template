import cn from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 's' | 'm' | 'l';
};

const Button: React.FC<Props> = ({ children, className, ...props }) => (
  <button className={cn(styles.root, className)} {...props}>
    {children}
  </button>
);

export default Button;
