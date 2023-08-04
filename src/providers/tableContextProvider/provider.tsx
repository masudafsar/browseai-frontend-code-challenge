import {PropsWithChildren, ReactNode, useState} from "react";
import {TableContext} from "../../contexts";
import {TableDataRowPropsType} from "../../components";

export interface TableContextProviderPropsType {
  header?: ReactNode;
  footer?: ReactNode;
  data: Array<TableDataRowPropsType>;
}

export function TableContextProvider({children, data, header, footer}: PropsWithChildren<TableContextProviderPropsType>) {
  const [top, setTop] = useState<number>(0);

  return (
    <TableContext.Provider
      value={{
        data,
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
