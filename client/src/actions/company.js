// request company
export const REQUEST_COMPANY_INFORMATIONS = 'REQUEST_COMPANY_INFORMATIONS';
export const CREATE_COMPANY = 'CREATE_COMPANY';
export const UPDATE_COMPANY = 'UPDATE_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';

// get company informations
export const GET_COMPANY_INFORMATIONS = 'GET_COMPANY_INFORMATIONS';
export const GET_COMPANY_ID_TO_DELETE = 'GET_COMPANY_ID_TO_DELETE';

// create or update company informations
export const SET_COMPANY_INFORMATION = 'SET_COMPANY_INFORMATION';

// reset company informations
export const RESET_COMPANY_INFORMATIONS = 'RESET_COMPANY_INFORMATIONS';

export function actionRequestCompanyInformations() {
  return {
    type: REQUEST_COMPANY_INFORMATIONS,
  };
}

export function actionCreateCompany() {
  return {
    type: CREATE_COMPANY,
  };
}

export function actionUpdateCompany() {
  return {
    type: UPDATE_COMPANY,
  };
}

export function actionDeleteCompany() {
  return {
    type: DELETE_COMPANY,
  };
}

export function actionGetCompanyInformations({
  id,
  name,
  address,
  zip_code,
  type,
}) {
  return {
    type: GET_COMPANY_INFORMATIONS,
    payload: {
      id,
      name,
      address,
      zip_code,
      type,
    },
  };
}

export function actionGetCompanyIdToDelete(ids) {
  return {
    type: GET_COMPANY_ID_TO_DELETE, payload: ids,
  };
}

export function actionSetCompanyInformation(key, value) {
  return {
    type: SET_COMPANY_INFORMATION,
    payload: { key, value },
  };
}

export function actionResetCompanyInformations() {
  return {
    type: RESET_COMPANY_INFORMATIONS,
  };
}
