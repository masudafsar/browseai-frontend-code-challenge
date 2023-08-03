import {SearchCaseType} from "../../types";
import {Dispatch, SetStateAction} from "react";

export interface AppContextType {
  searchCases: Array<SearchCaseType>;
  setSearchCases: Dispatch<SetStateAction<Array<SearchCaseType>>>;
}
