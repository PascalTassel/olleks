// request employee
export const REQUEST_EMPLOYEE_INFORMATIONS = 'REQUEST_EMPLOYEE_INFORMATIONS';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const CREATE_EMPLOYEE_AVATAR = 'CREATE_EMPLOYEE_AVATAR';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

// get employee informations
export const GET_EMPLOYEE_INFORMATIONS = 'GET_EMPLOYEE_INFORMATIONS';
export const GET_EMPLOYEE_ID_TO_DELETE = 'GET_EMPLOYEE_ID_TO_DELETE';
export const GET_EMPLOYEE_AVATAR = 'GET_EMPLOYEE_AVATAR';

// create or update employee informations
export const SET_EMPLOYEE_INFORMATION = 'SET_EMPLOYEE_INFORMATION';
export const SET_EMPLOYEE_FILE = 'SET_EMPLOYEE_FILE';

// reset employee informations
export const RESET_EMPLOYEE_INFORMATIONS = 'RESET_EMPLOYEE_INFORMATIONS';

export function actionRequestEmployInformations() {
  return {
    type: REQUEST_EMPLOYEE_INFORMATIONS,
  };
}

export function actionCreateEmployee() {
  return {
    type: CREATE_EMPLOYEE,
  };
}

export function actionCreateEmployeeAvatar() {
  return {
    type: CREATE_EMPLOYEE_AVATAR,
  };
}

export function actionUpdateEmployee() {
  return {
    type: UPDATE_EMPLOYEE,
  };
}

export function actionDeleteEmployee() {
  return {
    type: DELETE_EMPLOYEE,
  };
}

export function actionGetEmployeeInformations({
  id,
  firstname,
  lastname,
  email,
  phone_number,
  mobile_number,
  social_security_number,
  date_of_birth,
  address,
  zip_code,
  starting_date,
  avatar,
  fonction,
  role_application,
  qualification_label,
}) {
  return {
    type: GET_EMPLOYEE_INFORMATIONS,
    payload: {
      id,
      firstname,
      lastname,
      email,
      phone_number,
      mobile_number,
      social_security_number,
      date_of_birth,
      address,
      zip_code,
      starting_date,
      avatar,
      fonction,
      role_application,
      qualification_label,
    },
  };
}

export function actionGetEmployeeIdToDelete(ids) {
  return {
    type: GET_EMPLOYEE_ID_TO_DELETE, payload: ids,
  };
}

export function actionGetEmployeeAvatar(avatar) {
  return {
    type: GET_EMPLOYEE_AVATAR, payload: avatar,
  };
}

export function actionSetEmployeeInformation(key, value) {
  return {
    type: SET_EMPLOYEE_INFORMATION, payload: { key, value },
  };
}

export function actionSetEmployeeFile(value) {
  return {
    type: SET_EMPLOYEE_FILE, payload: value,
  };
}

export function actionResetEmployeeInformations() {
  return {
    type: RESET_EMPLOYEE_INFORMATIONS,
  };
}
