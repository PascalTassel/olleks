/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  companies: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get all companies informations
    case actions.GET_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
