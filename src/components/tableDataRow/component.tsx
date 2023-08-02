import styles from './style.module.scss';
import {TableDataColumn} from "../tableDataColumn";
import {ColorThemeType} from "../../types";
import * as classNames from "classnames";

export interface TableDataRowPropsType {
  color?: ColorThemeType;
  data: Record<string, string>;
}

export function TableDataRow({data, color}: TableDataRowPropsType) {
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
      {Object.entries(data).map(([key, value]) => (
        <TableDataColumn key={key} value={value}/>
      ))}
    </tr>
  );
}
