import styles from './styles.module.scss';
import {TableContextProvider, TableContextProviderPropsType} from "../../providers";
import {VirtualTable} from "./virtualTable";

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
