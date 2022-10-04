import apiAxios from './index';

export async function requestLogin(email, password) {
  try {
    const response = await apiAxios.post('/login', {
      email, password,
    });
    return response;
  } catch (err) {
    return err.response;
  }
}

/**
 * To check token
 * @param {String} token
 * @returns
 */
export async function requestCheck(token) {
  try {
    const response = await apiAxios.post('/check-token', {}, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
}
