import {TableDataColumn, TableHeaderColumn} from "../";
import styles from './styles.module.scss';

export interface TablePropsType {
  data: Array<Record<string, string>>;
}

export function Table({data}: TablePropsType) {
  return (
    <div className={styles.Table_Root}>
      <table className={styles.Table_Table}>
        <thead className={styles.Table_TableHeader}>
        <tr>
          {Object.entries(data[0]).map(([key, _]) => (
            <TableHeaderColumn key={key} value={key}/>
          ))}
        </tr>
        </thead>
        <tbody className={styles.Table_TableBody}>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.entries(row).map(([key, value]) => (
              <TableDataColumn key={key} value={value}/>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
