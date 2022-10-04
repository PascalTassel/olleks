/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
  goodLogin: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_LOGIN_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case actions.SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };

    case actions.SET_GOOD_LOGIN:
      return {
        ...state,
        goodLogin: action.payload,
      };

    case actions.RESET_PASSWORD:
      return {
        ...state,
        password: initialState.password,
      };

    case actions.LOGOUT:
      return {
        ...state,
        email: initialState.email,
        password: initialState.password,
        isLogged: initialState.isLogged,
      };

    default:
      return state;
  }
}

export default reducer;
