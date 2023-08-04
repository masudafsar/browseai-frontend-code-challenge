import {ButtonHTMLAttributes, ReactNode} from "react";
import * as classNames from "classnames";
import {type ColorThemeType, type SizeThemeType, type VariantThemeType} from "../../types";

import styles from './styles.module.scss';

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: ColorThemeType;
  variant?: VariantThemeType;
  size?: SizeThemeType;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
}

const colorStyles: { [key in ColorThemeType]: string } = {
  primary: styles.ColorPrimary,
  success: styles.ColorSuccess,
  info: styles.ColorInfo,
  warning: styles.ColorWarning,
  error: styles.ColorError,
}

const variantStyles: { [key in VariantThemeType]: string } = {
  text: styles.VariantText,
  outline: styles.VariantOutline,
  fill: styles.VariantFill,
}

const sizeStyles: { [key in SizeThemeType]: string } = {
  sm: styles.SizeSm,
  md: styles.SizeMd,
  lg: styles.SizeLg,
}

export const Button = (
  {
    title,
    onClick,
    variant = 'fill',
    color = 'primary',
    size = 'md',
    iconLeading,
    iconTrailing,
    className,
    ...props
  }: ButtonPropsType
) => {
  return (
    <button
      className={classNames(
        styles.Button,
        variantStyles[variant],
        colorStyles[color],
        sizeStyles[size],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {iconLeading}
      {title}
      {iconTrailing}
    </button>
  );
};
