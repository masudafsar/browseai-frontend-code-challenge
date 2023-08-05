import {octokitClient} from "./client";
import {SearchCaseInputDataType} from "../types";

interface response {
  data: {
    total_count: number;
  }
}

export async function search(q: SearchCaseInputDataType) {
  let query = encodeURIComponent(q.searchKeywords.trim());
  Boolean(q.username.trim()) && (query = `owner:${encodeURIComponent(q.username.trim())} ${query}`);
  Boolean(q.context.trim()) && (query = `in:${encodeURIComponent(q.context.trim())} ${query}`);
  const resp: response = await octokitClient.request(
    'GET /search/repositories',
    {q: query}
  );
  return resp;
}
