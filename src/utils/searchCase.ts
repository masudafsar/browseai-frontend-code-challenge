import {type SearchCaseType} from "../types";

export function rawTextToSearchCases(raw: string): Array<SearchCaseType> {
  const lines = raw.split('\n').map(line => line.replace('\r', ''));
  const cases: SearchCaseType[] = [];
  const uniqueLines = new Set<string>();

  lines.forEach((line) => {
    const isDuplicate = uniqueLines.has(line);
    if (!isDuplicate) uniqueLines.add(line);

    const [searchKeywords, username, context] = line.split(',');

    const searchCase: SearchCaseType = {
      data: {
        searchKeywords,
        username,
        context,
      },
      count: 0,
      status: searchKeywords && !isDuplicate ? "idle" : "invalid",
    };
    cases.push(searchCase);
  });

  return cases;
}