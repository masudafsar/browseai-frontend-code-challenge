import {PropsWithChildren} from "react";
import {AppContext} from "../../contexts/appContext";

export interface AppContextProviderPropsType {
}

export function AppContextProvider({children}: PropsWithChildren<AppContextProviderPropsType>) {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}
