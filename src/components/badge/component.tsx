import * as classNames from "classnames";
import styles from './styles.module.scss';
import {HTMLAttributes, ReactNode} from "react";
import {ColorThemeType} from "../../types";

export interface BadgePropsType extends HTMLAttributes<HTMLDivElement> {
  title: string;
  color?: ColorThemeType;
  variant?: 'text' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
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
  const variantStyles = variant === 'text'
    ? styles.VariantText
    : variant === 'outline'
      ? styles.VariantOutline
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

  const sizeStyles = size === 'sm'
    ? styles.SizeSm
    : size === 'md'
      ? styles.SizeMd
      : size === 'lg'
        ? styles.SizeLg
        : '';

  return (
    <div
      className={classNames(styles.Badge, variantStyles, colorStyles, sizeStyles, className)}
      {...props}
    >
      {iconLeading}
      {title}
      {iconTrailing}
    </div>
  );
};
