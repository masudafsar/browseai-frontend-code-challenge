export interface TableDataColumnPropsType {
  value: string;
}

export const TableDataColumn = ({value}: TableDataColumnPropsType) => {
  return (
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">
      {value}
    </td>
  );
};
