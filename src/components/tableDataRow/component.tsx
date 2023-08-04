import {PropsWithChildren} from "react";
import * as classNames from "classnames";
import {ColorThemeType} from "../../types";

import styles from './style.module.scss';

export interface TableDataRowPropsType {
  color?: ColorThemeType;
}

export function TableDataRow({children, color}: PropsWithChildren<TableDataRowPropsType>) {
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

  return (
    <tr className={classNames(styles.TableDataRow, colorStyles)}>
      {children}
    </tr>
  );
}
