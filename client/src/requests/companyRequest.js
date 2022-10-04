import apiAxios from './index';

export async function getAllCompanies() {
  try {
    const response = await apiAxios.get('/api/admin/company');
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function getOneCompany(id) {
  try {
    const response = await apiAxios.get(`/api/admin/company/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function createCompany(companyDatas) {
  try {
    const response = await apiAxios.post(
      '/api/admin/company',
      companyDatas,
    );
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function updateCompany(id, companyDatas) {
  try {
    const response = await apiAxios.patch(`/api/admin/company/${id}`, companyDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function deleteCompany(id) {
  try {
    const response = await apiAxios.delete(`/api/admin/company/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
}
