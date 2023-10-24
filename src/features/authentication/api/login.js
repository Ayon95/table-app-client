import config from '../../../utils/config';

export default async function login(credentials) {
  try {
    const response = await fetch(`${config.SERVER_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (data.message) throw new Error(data.message);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
