import cn from 'classnames';
import React from 'react';

import styles from './Text.module.scss';

type Props = React.BaseHTMLAttributes<HTMLParagraphElement>;

const Text: React.FC<Props> = ({ children, className, ...props }) => (
  <p className={cn(styles.root, className)} {...props}>
    {children}
  </p>
);

export default Text;
