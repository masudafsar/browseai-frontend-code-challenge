import styles from './styles.module.scss';

export interface TableDataColumnPropsType {
  value: string;
}

export function TableDataColumn({value}: TableDataColumnPropsType) {
  return (
    <td className={styles.TableDataColumn}>
      {value}
    </td>
  );
}
