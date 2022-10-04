export const UPDATE_LOGIN_INPUT = 'UPDATE_LOGIN_INPUT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_IS_LOGGED = 'SET_IS_LOGGED';
export const SET_GOOD_LOGIN = 'SET_GOOD_LOGIN';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const LOGOUT = 'LOGOUT';
export const DELETE_TOKEN = 'DELETE_TOKEN';

export function actionUpdateLoginInput(name, value) {
  return {
    type: UPDATE_LOGIN_INPUT, payload: { name, value },
  };
}

export function actionSetIsLogged(isLogged) {
  return {
    type: SET_IS_LOGGED, payload: isLogged,
  };
}

export function actionSetGoodLogin(goodLogin) {
  return {
    type: SET_GOOD_LOGIN, payload: goodLogin,
  };
}

export function actionSubmitLogin() {
  return {
    type: SUBMIT_LOGIN,
  };
}

export function actionResetPassword() {
  return {
    type: RESET_PASSWORD,
  };
}

export function actionLogout() {
  return {
    type: LOGOUT,
  };
}

export function actionDeleteToken() {
  return {
    type: DELETE_TOKEN,
  };
}
