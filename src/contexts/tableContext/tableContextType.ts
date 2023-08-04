import {Dispatch, ReactNode, SetStateAction} from "react";
import {TableDataRowPropsType} from "../../components";

export interface TableContextType {
  data: Array<TableDataRowPropsType>;
  top: number;
  setTop: Dispatch<SetStateAction<number>>;
  header?: ReactNode;
  footer?: ReactNode;
}
