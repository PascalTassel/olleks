import apiAxios from './index';

export async function getAllAssignments() {
  try {
    const response = await apiAxios.get('api/admin/planning/assignment');
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function createAssignment(assignmentDatas) {
  try {
    const response = await apiAxios.post(
      '/api/admin/planning/assignment/user',
      assignmentDatas,
    );
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function updateAssignment(assignmentId, assignmentDatas) {
  try {
    const response = await apiAxios.patch(`/api/admin/planning/assignment/${assignmentId}/user`, assignmentDatas);
    return response;
  } catch (err) {
    return err.response;
  }
}

export async function deleteAssignment(assignmentId) {
  try {
    const response = await apiAxios.delete(`/api/admin/planning/assignment/${assignmentId}/user`);
    return response;
  } catch (err) {
    return err.response;
  }
}
