import styles from './styles.module.scss';
import {TableContextProvider, TableContextProviderPropsType} from "../../providers";
import {VirtualTable} from "./virtualTable";
import {TableDataRow} from "../tableDataRow";
import {TableDataCell} from "../tableDataCell";
import {TableHeaderCell} from "../tableHeaderColumn";

export interface TablePropsType<T> extends TableContextProviderPropsType<T> {
}

export function Table<T>({...props}: TablePropsType<T>) {
  return (
    <div className={styles.Table_Root}>
      <TableContextProvider {...props}>
        <VirtualTable/>
      </TableContextProvider>
    </div>
  );
}

Table.Row = TableDataRow;
Table.Cell = TableDataCell;
Table.HeaderCell = TableHeaderCell;
