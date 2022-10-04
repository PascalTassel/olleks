/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  name: '',
  address: '',
  zip_code: '',
  manager_name: '',
  estimated_duration: 0,
  company_id: 0,
  sitesToDelete: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get site informations
    case actions.GET_SITE_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        address: action.payload.address,
        zip_code: action.payload.zip_code,
        manager_name: action.payload.manager_name,
        estimated_duration: action.payload.estimated_duration,
        company_id: action.payload.company_id,
      };
    case actions.GET_SITE_ID_TO_DELETE:
      return {
        ...state,
        sitesToDelete: action.payload,
      };
      // set site information
    case actions.SET_SITE_INFORMATION:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      // reset site informations
    case actions.RESET_SITE_INFORMATIONS:
      return {
        ...state,
        id: initialState.id,
        name: initialState.name,
        address: initialState.address,
        zip_code: initialState.zip_code,
        manager_name: initialState.manager_name,
        estimated_duration: initialState.estimated_duration,
        company_id: initialState.company_id,
      };
    default:
      return state;
  }
}

export default reducer;
