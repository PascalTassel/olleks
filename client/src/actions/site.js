// request site
export const REQUEST_SITE_INFORMATIONS = 'REQUEST_SITE_INFORMATIONS';
export const CREATE_SITE = 'CREATE_SITE';
export const UPDATE_SITE = 'UPDATE_SITE';
export const DELETE_SITE = 'DELETE_SITE';

// get site informations
export const GET_SITE_INFORMATIONS = 'GET_SITE_INFORMATIONS';
export const GET_SITE_ID_TO_DELETE = 'GET_SITE_ID_TO_DELETE';

// create or update site informations
export const SET_SITE_INFORMATION = 'SET_SITE_INFORMATION';

// reset site informations
export const RESET_SITE_INFORMATIONS = 'RESET_SITE_INFORMATIONS';

export function actionRequestSiteInformations() {
  return {
    type: REQUEST_SITE_INFORMATIONS,
  };
}

export function actionCreateSite() {
  return {
    type: CREATE_SITE,
  };
}

export function actionUpdateSite() {
  return {
    type: UPDATE_SITE,
  };
}

export function actionDeleteSite() {
  return {
    type: DELETE_SITE,
  };
}

export function actionGetSiteInformations({
  id,
  name,
  address,
  zip_code,
  manager_name,
  estimated_duration,
  company_id,
}) {
  return {
    type: GET_SITE_INFORMATIONS,
    payload: {
      id,
      name,
      address,
      zip_code,
      manager_name,
      estimated_duration,
      company_id,
    },
  };
}

export function actionGetSiteIdToDelete(ids) {
  return {
    type: GET_SITE_ID_TO_DELETE, payload: ids,
  };
}

export function actionSetSiteInformation(key, value) {
  return {
    type: SET_SITE_INFORMATION,
    payload: { key, value },
  };
}

export function actionResetSiteInformations() {
  return {
    type: RESET_SITE_INFORMATIONS,
  };
}
