export const UPDATE_EMAIL_INPUT = 'UPDATE_EMAIL_INPUT';
export const SUBMIT_EMAIL = 'SEND_EMAIL';

export function actionUpdateEmailInput(key, value) {
  return {
    type: UPDATE_EMAIL_INPUT, payload: { key, value },
  };
}

export function actionSubmitEmail() {
  return {
    type: SUBMIT_EMAIL,
  };
}
