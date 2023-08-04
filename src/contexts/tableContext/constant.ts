import {TableContextType} from "./tableContextType";

export const defaultTableContextValue: TableContextType<any> = {
  rowRenderer: () => undefined,
  data: [],
  rowHeight: 0,
  top: 0,
  setTop: () => 0,
};
