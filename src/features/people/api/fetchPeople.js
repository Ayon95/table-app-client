import config from '../../../utils/config';

export default async function fetchPeople(queryParams, authToken = '') {
  try {
    const url = `${config.SERVER_BASE_URL}/api/people?${new URLSearchParams(
      queryParams
    ).toString()}`;

    const response = authToken
      ? await fetch(url, { headers: { Authorization: `Bearer ${authToken}` } })
      : await fetch(url);
    const data = await response.json();

    if (data.message) throw new Error(data.message);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
