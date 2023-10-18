import cn from 'classnames';
import React, { CSSProperties } from 'react';

import styles from './Text.module.scss';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body1';

type Props = React.BaseHTMLAttributes<HTMLParagraphElement> & {
  align?: CSSProperties['textAlign'];
  element?: React.ElementType;
  variant: TextVariant;
};

const variantToElementMapping: Record<TextVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
};

const Text: React.FC<Props> = ({
  align,
  children,
  className,
  element,
  variant = 'body1',
  ...props
}) => {
  const Element = element ?? variantToElementMapping[variant];

  return (
    <Element
      className={cn(
        styles.text,
        styles[`text--variant_${variant}`],
        align && [styles[`text--align_${align}`]],
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Text;
