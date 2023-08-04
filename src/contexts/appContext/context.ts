import {createContext} from "react";
import {AppContextType} from "./appContextType";
import {defaultAppContextValue} from "./constant";

export const AppContext = createContext<AppContextType>(defaultAppContextValue);
