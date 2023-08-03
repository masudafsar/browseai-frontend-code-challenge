export interface SearchCaseInputDataType extends Record<string, string> {
  searchKeywords: string;
  username: string;
  context: string;
}

export type SearchCaseStatusType = 'invalid' | 'error' | 'loading' | 'completed' | 'idle';

export interface SearchCaseType {
  data: SearchCaseInputDataType;
  status: SearchCaseStatusType;
  results: Array<unknown>;
}
