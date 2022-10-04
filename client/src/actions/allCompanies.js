export const REQUEST_ALL_COMPANIES = 'REQUEST_ALL_COMPANIES';
export const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES';

export function actionRequestAllCompanies() {
  return {
    type: REQUEST_ALL_COMPANIES,
  };
}

export function actionGetAllCompanies(companies) {
  return {
    type: GET_ALL_COMPANIES, payload: companies,
  };
}
