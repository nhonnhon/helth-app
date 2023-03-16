import cn from 'classnames';
import * as React from 'react';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'normal' | 'custom' | 'graph';
}

const classes = {
  root: 'inline-flex items-center justify-center shrink-0 rounded outline-0 focus:outline-none w-[18.5rem] h-14 text-[1.125rem] font-light leading-[1.625rem] text-light border-none border-transparent',
  normal: 'bg-btn-gradient',
  disabled: 'bg-btn-gradient cursor-not-allowed',
  graph:
    'rounded-[11px] font-light text-[0.938rem] leading-[1.375rem] tracking-[0.075px] h-[24px] w-[56px] hover:bg-primary-300 hover:text-light',
};

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      disabled,
      variant = 'normal',
      ...rest
    } = props;

    const classesName = cn(
      classes.root,
      {
        [classes.normal]: !disabled && variant === 'normal',
        [classes.disabled]: disabled && variant === 'normal',
        [classes.graph]: !disabled && variant === 'graph',
      },
      className
    );

    return (
      <button ref={ref} className={classesName} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
