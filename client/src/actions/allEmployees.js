export const REQUEST_ALL_EMPLOYEES = 'REQUEST_ALL_EMPLOYEES';
export const GET_ALL_EMPLOYEES = 'GET_ALL_EMPLOYEES';

export function actionRequestAllEmployees() {
  return {
    type: REQUEST_ALL_EMPLOYEES,
  };
}

export function actionGetAllEmployees(employees) {
  return {
    type: GET_ALL_EMPLOYEES, payload: employees,
  };
}
