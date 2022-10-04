/* eslint-disable import/prefer-default-export */
import apiAxios from './index';

export async function requestAllAbsences() {
  try {
    const response = await apiAxios.get('/api/admin/absence');
    return response;
  } catch (err) {
    return err.response;
  }
}
