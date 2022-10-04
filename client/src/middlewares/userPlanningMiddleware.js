import { requestUserPlanning } from '../requests/userPlanningRequest';
import * as actions from '../actions';

const userPlanningMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.GET_USER_PLANNING: {
      const { user } = store.getState();

      const response = await requestUserPlanning(user.id);

      if (response.status === 200) {
        const {
          qualification_label, assignments, phone_number, mobile_number,
        } = response.data;
        if (user.isAdmin) {
          store.dispatch(actions.actionGetUserLabel(qualification_label));
          store.dispatch(actions.actionGetUserPhoneNumber(phone_number));
          store.dispatch(actions.actionGetUserMobileNumber(mobile_number));
        } else {
          store.dispatch(actions.actionGetUserAssignments(assignments));
          store.dispatch(actions.actionGetUserLabel(qualification_label));
          store.dispatch(actions.actionGetUserPhoneNumber(phone_number));
          store.dispatch(actions.actionGetUserMobileNumber(mobile_number));
        }
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

export default userPlanningMiddleware;
