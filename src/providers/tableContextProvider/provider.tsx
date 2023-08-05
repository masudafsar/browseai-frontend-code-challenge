import {PropsWithChildren, useState} from "react";
import {TableContext, TableContextType} from "../../contexts";

export interface TableContextProviderPropsType<T> extends Omit<TableContextType<T>, 'top' | 'setTop'> {
}

export function TableContextProvider<T>(
  {
    children,
    data,
    rowRenderer,
    header,
    footer,
    rowHeight,
  }: PropsWithChildren<TableContextProviderPropsType<T>>
) {
  const [top, setTop] = useState<number>(0);

  return (
    <TableContext.Provider
      value={{
        data,
        rowRenderer,
        rowHeight,
        top,
        setTop,
        header,
        footer,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}
