import React from 'react';

import {
  Button as ShadcnButton,
  ButtonProps as ShadcnButtonProps,
} from '@components/ui/button';

type ButtonProps = ShadcnButtonProps & {
  children: React.ReactNode;
  className: string;
};

const Button = ({ children, className, ...buttonConfig }: ButtonProps) => {
  return (
    <ShadcnButton {...buttonConfig} className={className}>
      {children}
    </ShadcnButton>
  );
};

export default Button;
