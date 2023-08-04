import {createContext} from "react";
import {TableContextType} from "./tableContextType";
import {defaultTableContextValue} from "./constant";

export const TableContext = createContext<TableContextType>(defaultTableContextValue)
