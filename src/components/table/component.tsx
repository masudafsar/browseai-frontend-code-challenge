import {TableDataRow, TableDataRowPropsType, TableHeaderColumn} from "../";
import styles from './styles.module.scss';
import {keyToText} from "../../utils/string";

export interface TablePropsType {
  data: Array<TableDataRowPropsType>;
}

export function Table({data}: TablePropsType) {
  return (
    <div className={styles.Table_Root}>
      <table className={styles.Table_Table}>
        <thead className={styles.Table_TableHeader}>
        <tr>
          {Object.entries(data[0].data).map(([key, _]) => (
            <TableHeaderColumn key={key} value={keyToText(key)}/>
          ))}
        </tr>
        </thead>
        <tbody className={styles.Table_TableBody}>
        {data.map((row, index) => (
          <TableDataRow key={index} data={row.data} color={row.color}/>
        ))}
        </tbody>
      </table>
    </div>
  );
}
