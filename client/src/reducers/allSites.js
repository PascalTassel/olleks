/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  sites: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get all companies informations
    case actions.GET_ALL_SITES:
      return {
        ...state,
        sites: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
