import {type PropsWithChildren} from "react";
import classNames from "classnames";
import {type ColorThemeType} from "../../types";

import styles from './style.module.scss';

export interface TableDataRowPropsType {
  color?: ColorThemeType;
}

const colorStyles: { [key in ColorThemeType]: string } = {
  primary: styles.ColorPrimary,
  success: styles.ColorSuccess,
  info: styles.ColorInfo,
  warning: styles.ColorWarning,
  error: styles.ColorError,
}


export function TableDataRow({children, color}: PropsWithChildren<TableDataRowPropsType>) {
  return (
    <tr className={classNames(styles.TableDataRow, color && colorStyles[color])}>
      {children}
    </tr>
  );
}
