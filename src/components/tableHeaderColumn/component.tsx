import styles from './styles.module.scss';

export interface TableHeaderCellPropsType {
  value: string;
}

export function TableHeaderCell({value}: TableHeaderCellPropsType) {
  return (
    <th
      scope="col"
      className={styles.TableHeaderColumn}
    >
      {value}
    </th>
  );
}
