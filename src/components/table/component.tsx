import {TableDataRowPropsType} from "../";
import styles from './styles.module.scss';
import {TableContextProvider} from "../../providers";
import {ReactNode} from "react";
import {VirtualTable} from "./virtualTable";

export interface TablePropsType {
  header?: ReactNode;
  footer?: ReactNode;
  data: Array<TableDataRowPropsType>;
}

export function Table({data, header, footer}: TablePropsType) {
  return (
    <div className={styles.Table_Root}>
      <TableContextProvider data={data} header={header} footer={footer}>
        <VirtualTable/>
      </TableContextProvider>
    </div>
  );
}
