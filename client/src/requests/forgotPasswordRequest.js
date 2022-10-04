/* eslint-disable import/prefer-default-export */
import apiAxios from './index';

export async function forgotPasswordRequest(email) {
  try {
    const response = await apiAxios.post('/forgot-password', {
      email,
    });
    return response;
  } catch (err) {
    return err.response;
  }
}
