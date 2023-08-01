export interface TableHeaderColumnPropsType {
  value: string;
}

export const TableHeaderColumn = ({value}: TableHeaderColumnPropsType) => {
  return (
    <th
      scope="col"
      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
    >
      {value}
    </th>
  );
};
