/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { updateUserInformations } from '../requests/userPlanningRequest';
import * as actions from '../actions';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.UPDATE_USER_INFORMATIONS: {
      const { user } = store.getState();
      const {
        password,
        phone_number,
        mobile_number,
      } = user;
      const userDatas = {
        password,
        phone_number,
        mobile_number,
      };
      const response = await updateUserInformations(user.id, userDatas);
      if (response.status === 200) {
        console.log('Informations modifiées avec succès !');
        store.dispatch(actions.actionGetUserPlanning());
      } else {
        alert(`Error: ${response.status}`);
        return;
      }

      return;
    }

    default: {
      next(action);
    }
  }
};

export default userMiddleware;
