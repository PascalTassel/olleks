import apiAxios from './index';

export async function getAllEmployees() {
  try {
    const response = await apiAxios.get('/api/admin/user');
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function getOneEmployee(id) {
  try {
    const response = await apiAxios.get(`/api/admin/user/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function createEmployee(employeeDatas) {
  try {
    const response = await apiAxios.post(
      '/api/admin/user',
      employeeDatas,
    );
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function updateEmployee(id, employeeDatas) {
  try {
    const response = await apiAxios.patch(`/api/admin/user/${id}`, employeeDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function deleteEmployee(id) {
  try {
    const response = await apiAxios.delete(`/api/admin/user/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function createEmployeeAvatar(data) {
  try {
    const response = await apiAxios.post('api/admin/upload/avatar', data);
    return response;
  } catch (err) {
    return err.response;
  }
}
