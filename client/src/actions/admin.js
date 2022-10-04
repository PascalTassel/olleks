export const REQUEST_ADMIN_PLANNING = 'REQUEST_ADMIN_PLANNING';
export const REQUEST_ALL_QUALIFICATIONS = 'REQUEST_ALL_QUALIFICATIONS';
export const REQUEST_ALL_ABSENCES = 'REQUEST_ALL_ABSENCES';
export const GET_ADMIN_PLANNING = 'GET_ADMIN_PLANNING';
export const GET_ALL_QUALIFICATIONS = 'GET_ALL_QUALIFICATIONS';
export const GET_ALL_ABSENCES = 'GET_ALL_ABSENCES';
export const SET_WEEKSLUG = 'SET_WEEKSLUG';

export function actionRequestAdminPlanning() {
  return {
    type: REQUEST_ADMIN_PLANNING,
  };
}

export function actionRequestAllQualifications() {
  return {
    type: REQUEST_ALL_QUALIFICATIONS,
  };
}

export function actionRequestAllAbsences() {
  return {
    type: REQUEST_ALL_ABSENCES,
  };
}

export function actionGetAdminPlanning({ weekStart, absences, planning }) {
  return {
    type: GET_ADMIN_PLANNING, payload: { weekStart, absences, planning },
  };
}

export function actionGetAllQualifications(qualifications) {
  return {
    type: GET_ALL_QUALIFICATIONS, payload: qualifications,
  };
}

export function actionGetAllAbsences(absences) {
  return {
    type: GET_ALL_ABSENCES, payload: absences,
  };
}

export function actionSetWeekslug(weekslug) {
  return {
    type: SET_WEEKSLUG, payload: weekslug,
  };
}
