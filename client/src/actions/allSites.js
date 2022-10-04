export const REQUEST_ALL_SITES = 'REQUEST_ALL_SITES';
export const GET_ALL_SITES = 'GET_ALL_SITES';

export function actionRequestAllSites() {
  return {
    type: REQUEST_ALL_SITES,
  };
}

export function actionGetAllSites(sites) {
  return {
    type: GET_ALL_SITES, payload: sites,
  };
}
