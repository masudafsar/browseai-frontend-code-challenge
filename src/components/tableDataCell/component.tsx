import {PropsWithChildren} from "react";

import styles from './styles.module.scss';

export interface TableDataCellPropsType {
}

export function TableDataCell({children}: PropsWithChildren<TableDataCellPropsType>) {
  return (
    <td className={styles.TableDataColumn}>
      {children}
    </td>
  );
}
