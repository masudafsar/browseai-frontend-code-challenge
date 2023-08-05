import {Octokit} from "octokit";

export const octokitClient = new Octokit({
  auth: import.meta.env.VITE_GITHUB_ACCESS_TOKEN,
});
