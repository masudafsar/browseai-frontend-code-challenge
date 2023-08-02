import * as classNames from "classnames";
import styles from './styles.module.scss';
import {ButtonHTMLAttributes} from "react";

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: 'primary' | 'secondary';
  variant: 'text' | 'outline' | 'fill';
  size: 'md';
}

export const Button = ({
                         title,
                         onClick,
                         variant = 'text',
                         color = 'primary',
                         size = 'md',
                         ...props
                       }: ButtonPropsType) => {
  const variantStyles = variant === 'text'
    ? styles.VariantText
    : variant === 'outline'
      ? styles.VariantOutline
      : variant === 'fill'
        ? styles.VariantFill
        : '';

  const colorStyles = color === 'primary'
    ? styles.ColorPrimary
    : color === 'secondary'
      ? styles.ColorSecondary
      : '';

  const sizeStyles = size === 'md'
    ? styles.SizeMd
    : '';

  return (
    <button
      className={classNames(styles.Button, variantStyles, colorStyles, sizeStyles)}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};
