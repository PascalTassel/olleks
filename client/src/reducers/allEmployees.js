/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  employees: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get all companies informations
    case actions.GET_ALL_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
