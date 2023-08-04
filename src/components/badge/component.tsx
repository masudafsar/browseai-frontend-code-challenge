import {HTMLAttributes, ReactNode} from "react";
import * as classNames from "classnames";
import {type ColorThemeType, type SizeThemeType, type VariantThemeType} from "../../types";

import styles from './styles.module.scss';

export interface BadgePropsType extends HTMLAttributes<HTMLDivElement> {
  title: string;
  color?: ColorThemeType;
  variant?: Exclude<VariantThemeType, 'fill'>;
  size?: SizeThemeType;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
}

const colorStyles: { [key in BadgePropsType['color']]: string } = {
  primary: styles.ColorPrimary,
  success: styles.ColorSuccess,
  info: styles.ColorInfo,
  warning: styles.ColorWarning,
  error: styles.ColorError,
}

const variantStyles: { [key in BadgePropsType['variant']]: string } = {
  text: styles.VariantText,
  outline: styles.VariantOutline,
}

const sizeStyles: { [key in BadgePropsType['size']]: string } = {
  sm: styles.SizeSm,
  md: styles.SizeMd,
  lg: styles.SizeLg,
}

export const Badge = (
  {
    title,
    variant = 'text',
    color = 'primary',
    size = 'md',
    iconLeading,
    iconTrailing,
    className,
    ...props
  }: BadgePropsType
) => {
  return (
    <div
      className={classNames(
        styles.Badge,
        variantStyles[variant],
        colorStyles[color],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {iconLeading}
      {title}
      {iconTrailing}
    </div>
  );
};
