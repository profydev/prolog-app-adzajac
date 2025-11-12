import { axios } from "./axios";
import type { Issue } from "./issues.types";
import type { Page } from "@typings/page.types";

const ENDPOINT = "/issue";

export async function getIssues(
  page: number,
  level?: string,
  status?: string,
  project?: string,
  options?: { signal?: AbortSignal },
) {
  const { data } = await axios.get<Page<Issue>>(ENDPOINT, {
    params: { page, level, status, project },
    signal: options?.signal,
  });
  return data;
}
