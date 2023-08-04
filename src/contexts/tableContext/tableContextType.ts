import {Dispatch, ReactNode, SetStateAction} from "react";
import {RowRendererType} from "./rowRendererType";

export interface TableContextType<T> {
  data: Array<T>;
  rowRenderer: RowRendererType<T>;
  rowHeight: number;
  top: number;
  setTop: Dispatch<SetStateAction<number>>;
  header?: ReactNode;
  footer?: ReactNode;
}
