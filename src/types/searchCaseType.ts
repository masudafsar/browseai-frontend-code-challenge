import {type SearchCaseStatusType} from "./searchCaseStatusType";
import {type SearchCaseInputDataType} from "./searchCaseInputDataType";

export interface SearchCaseType {
  data: SearchCaseInputDataType;
  status: SearchCaseStatusType;
  count: number;
}
