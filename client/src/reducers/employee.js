/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  phone_number: '',
  mobile_number: '',
  password: '',
  address: '',
  zip_code: 0,
  social_security_number: '',
  date_of_birth: '',
  starting_date: '',
  avatar: '',
  fonction: '',
  role_application: '',
  qualification_label: '',
  file: null,
  employeesToDelete: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get employee informations
    case actions.GET_EMPLOYEE_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        phone_number: action.payload.phone_number,
        mobile_number: action.payload.mobile_number,
        address: action.payload.address,
        zip_code: action.payload.zip_code,
        social_security_number: action.payload.social_security_number,
        date_of_birth: action.payload.date_of_birth,
        starting_date: action.payload.starting_date,
        avatar: action.payload.avatar,
        fonction: action.payload.fonction,
        role_application: action.payload.role_application,
        qualification_label: action.payload.qualification_label,
      };
    case actions.GET_EMPLOYEE_ID_TO_DELETE:
      return {
        ...state,
        employeesToDelete: action.payload,
      };
    case actions.GET_EMPLOYEE_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    // set employee informations
    case actions.SET_EMPLOYEE_INFORMATION:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case actions.SET_EMPLOYEE_FILE:
      return {
        ...state,
        file: action.payload,
      };

    // reset employee informations
    case actions.RESET_EMPLOYEE_INFORMATIONS:
      return {
        ...state,
        id: initialState.id,
        firstname: initialState.firstname,
        lastname: initialState.lastname,
        email: initialState.email,
        password: initialState.password,
        phone_number: initialState.phone_number,
        mobile_number: initialState.mobile_number,
        address: initialState.address,
        zip_code: initialState.zip_code,
        social_security_number: initialState.social_security_number,
        date_of_birth: initialState.date_of_birth,
        starting_date: initialState.starting_date,
        avatar: initialState.avatar,
        fonction: initialState.fonction,
        role_application: initialState.role_application,
        qualification_label: initialState.qualification_label,
      };
    default:
      return state;
  }
}

export default reducer;
