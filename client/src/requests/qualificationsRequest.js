/* eslint-disable import/prefer-default-export */
import apiAxios from './index';

export async function requestAllQualifications() {
  try {
    const response = await apiAxios.get('/api/admin/qualification');
    console.log(response.data);
    return response;
  } catch (err) {
    return err.response;
  }
}
