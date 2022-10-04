/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  firstname: '',
  lastname: '',
  password: '',
  confirmPassword: '',
  avatar: '',
  phone_number: '',
  mobile_number: '',
  qualification_label: '',
  isAdmin: false,
  assignments: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        avatar: action.payload.avatar,
      };

    case actions.UPDATE_USER_INPUT:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case actions.UPDATE_USER_PHONE_NUMBER:
      return {
        ...state,
        phone_number: action.payload,
      };

    case actions.UPDATE_USER_MOBILE_NUMBER:
      return {
        ...state,
        mobile_numbermobileNumber: action.payload,
      };

    case actions.RESET_USER_PASSWORD:
      return {
        ...state,
        password: initialState.password,
      };

    case actions.GET_USER_LABEL:
      return {
        ...state,
        qualification_label: action.payload,
      };

    case actions.GET_USER_PHONENUMBER:
      return {
        ...state,
        phone_number: action.payload,
      };

    case actions.GET_USER_MOBILENUMBER:
      return {
        ...state,
        mobile_number: action.payload,
      };

    case actions.SET_USER_ISADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };

    case actions.GET_USER_ASSIGNMENTS:
      return {
        ...state,
        assignments: action.payload,
      };

    case actions.SET_USER_LOGOUT:
      return {
        ...state,
        id: initialState.id,
        firstname: initialState.firstname,
        lastname: initialState.lastname,
        password: initialState.password,
        confirmPassword: initialState.confirmPassword,
        avatar: initialState.avatar,
        phone_number: initialState.phone_number,
        mobile_number: initialState.mobile_number,
        isAdmin: initialState.isAdmin,
        qualification_label: initialState.qualification_label,
        assignments: initialState.assignments,
      };

    default:
      return state;
  }
}

export default reducer;
