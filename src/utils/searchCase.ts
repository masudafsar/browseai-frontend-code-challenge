import {type SearchCaseType} from "../types";

export function rawTextToSearchCases(raw: string): Array<SearchCaseType> {
  const [header, ...lines] = raw.split('\n').map(line => line.replace('\r', ''));
  const cases: SearchCaseType[] = [];
  const uniqueLines = new Set<string>();

  let searchKeywordsIndex = header.split(',').findIndex(value => value.replace(' ', '').toLowerCase() === 'searchKeywords'.toLowerCase());
  searchKeywordsIndex = searchKeywordsIndex !== -1 ? searchKeywordsIndex : 0
  let usernameIndex = header.split(',').findIndex(value => value.replace(' ', '').toLowerCase() === 'username'.toLowerCase());
  usernameIndex = usernameIndex !== -1 ? usernameIndex : 1
  let contextIndex = header.split(',').findIndex(value => value.replace(' ', '').toLowerCase() === 'context'.toLowerCase());
  contextIndex = contextIndex !== -1 ? contextIndex : 2

  lines.forEach((line) => {
    const isDuplicate = uniqueLines.has(line);
    if (!isDuplicate) uniqueLines.add(line);

    const cells = line.split(',');

    const searchCase: SearchCaseType = {
      data: {
        searchKeywords: cells[searchKeywordsIndex],
        username: cells[usernameIndex],
        context: cells[contextIndex],
      },
      count: 0,
      status: cells[searchKeywordsIndex] && !isDuplicate ? "idle" : "invalid",
    };
    cases.push(searchCase);
  });

  return cases;
}