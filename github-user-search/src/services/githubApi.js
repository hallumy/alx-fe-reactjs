const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = {
  Authorization: `token ${GITHUB_API_KEY}`,
  Accept: 'application/vnd.github.v3+json',
};