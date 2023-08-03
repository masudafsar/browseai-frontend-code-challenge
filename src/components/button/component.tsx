import * as classNames from "classnames";
import styles from './styles.module.scss';
import {ButtonHTMLAttributes, ReactNode} from "react";
import {ColorThemeType} from "../../types";

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: ColorThemeType;
  variant?: 'text' | 'outline' | 'fill';
  size?: 'md';
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
}

export const Button = ({
                         title,
                         onClick,
                         variant = 'fill',
                         color = 'primary',
                         size = 'md',
                         iconLeading,
                         iconTrailing,
                         className,
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
    : color === 'success'
      ? styles.ColorSuccess
      : color === 'info'
        ? styles.ColorInfo
        : color === 'warning'
          ? styles.ColorWarning
          : color === 'error'
            ? styles.ColorError
            : '';

  const sizeStyles = size === 'md'
    ? styles.SizeMd
    : '';

  return (
    <button
      className={classNames(styles.Button, variantStyles, colorStyles, sizeStyles, className)}
      onClick={onClick}
      {...props}
    >
      {iconLeading}
      {title}
      {iconTrailing}
    </button>
  );
};
