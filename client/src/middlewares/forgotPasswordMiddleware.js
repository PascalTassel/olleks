import { forgotPasswordRequest } from '../requests/forgotPasswordRequest';
import * as actions from '../actions';

const forgotPasswordMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.SUBMIT_EMAIL: {
      const { forgotPassword } = store.getState();

      const response = await forgotPasswordRequest(forgotPassword.email);
      if (response.status === 200) {
        alert('Un e-mail a été envoyé sur votre boîte mail !');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }

    default:
      next(action);
  }
};

export default forgotPasswordMiddleware;
