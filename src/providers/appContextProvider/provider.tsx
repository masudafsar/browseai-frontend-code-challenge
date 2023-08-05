import {PropsWithChildren, useState} from "react";
import {AppContext} from "../../contexts";
import {SearchCaseType} from "../../types";

export interface AppContextProviderPropsType {
}

export function AppContextProvider({children}: PropsWithChildren<AppContextProviderPropsType>) {
  const [searchCases, setSearchCases] = useState<Array<SearchCaseType>>([]);

  return (
    <AppContext.Provider
      value={{
        searchCases,
        setSearchCases,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
