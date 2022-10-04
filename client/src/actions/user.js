export const GET_USER_INFORMATIONS = 'GET_USER_INFORMATIONS';
export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
export const RESET_USER_PASSWORD = 'RESET_USER_PASSWORD';
export const GET_USER_LABEL = 'GET_USER_LABEL';
export const GET_USER_PHONENUMBER = 'GET_USER_PHONENUMBER';
export const GET_USER_MOBILENUMBER = 'GET_USER_MOBILENUMBER';
export const SET_USER_ISADMIN = 'SET_USER_ISADMIN';
export const GET_USER_PLANNING = 'GET_USER_PLANNING';
export const GET_USER_ASSIGNMENTS = 'GET_USER_ASSIGNMENTS';
export const SET_USER_LOGOUT = 'SET_USER_LOGOUT';

export const UPDATE_USER_INFORMATIONS = 'UPDATE_USER_INFORMATIONS';
export const UPDATE_USER_PHONE_NUMBER = 'UPDATE_USER_PHONE_NUMBER';
export const UPDATE_USER_MOBILE_NUMBER = 'UPDATE_USER_MOBILE_NUMBER';

export function actionGetUserInformations({
  id, firstname, lastname, avatar,
}) {
  return {
    type: GET_USER_INFORMATIONS,
    payload: {
      id, firstname, lastname, avatar,
    },
  };
}

export function actionUpdateUserInput(key, value) {
  return {
    type: UPDATE_USER_INPUT, payload: { key, value },
  };
}

export function actionUpdateUserInformations() {
  return {
    type: UPDATE_USER_INFORMATIONS,
  };
}

export function actionResetUserPassword() {
  return {
    type: RESET_USER_PASSWORD,
  };
}

export function actionGetUserLabel(label) {
  return {
    type: GET_USER_LABEL, payload: label,
  };
}

export function actionGetUserPhoneNumber(phoneNumber) {
  return {
    type: GET_USER_PHONENUMBER, payload: phoneNumber,
  };
}

export function actionGetUserMobileNumber(mobileNumber) {
  return {
    type: GET_USER_MOBILENUMBER, payload: mobileNumber,
  };
}

export function actionSetUserIsAdmin(boolean) {
  return {
    type: SET_USER_ISADMIN, payload: boolean,
  };
}

export function actionGetUserPlanning() {
  return {
    type: GET_USER_PLANNING,
  };
}

export function actionGetUserAssignments(assignments) {
  return {
    type: GET_USER_ASSIGNMENTS, payload: assignments,
  };
}

export function actionSetUserLogout() {
  return {
    type: SET_USER_LOGOUT,
  };
}

export function actionUpdateUserPhoneNumber(phoneNumber) {
  return {
    type: UPDATE_USER_PHONE_NUMBER, payload: phoneNumber,
  };
}

export function actionUpdateUserMobileNumber(mobileNumber) {
  return {
    type: UPDATE_USER_MOBILE_NUMBER, payload: mobileNumber,
  };
}
