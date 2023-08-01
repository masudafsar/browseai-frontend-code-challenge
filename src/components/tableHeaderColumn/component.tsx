import styles from './styles.module.scss';

export interface TableHeaderColumnPropsType {
  value: string;
}

export const TableHeaderColumn = ({value}: TableHeaderColumnPropsType) => {
  return (
    <th
      scope="col"
      className={styles.TableHeaderColumn}
    >
      {value}
    </th>
  );
};
