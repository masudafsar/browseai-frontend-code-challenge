import styles from './styles.module.scss';

export interface TableHeaderColumnPropsType {
  value: string;
}

export function TableHeaderColumn({value}: TableHeaderColumnPropsType) {
  return (
    <th
      scope="col"
      className={styles.TableHeaderColumn}
    >
      {value}
    </th>
  );
}
