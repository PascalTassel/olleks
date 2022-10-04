/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  name: '',
  address: '',
  zip_code: 0,
  type: '',
  companiesToDelete: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get site informations
    case actions.GET_COMPANY_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        address: action.payload.address,
        zip_code: action.payload.zip_code,
        type: action.payload.type,
      };
    case actions.GET_COMPANY_ID_TO_DELETE:
      return {
        ...state,
        companiesToDelete: action.payload,
      };
      // set site information
    case actions.SET_COMPANY_INFORMATION:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      // reset site informations
    case actions.RESET_COMPANY_INFORMATIONS:
      return {
        ...state,
        id: initialState.id,
        name: initialState.name,
        address: initialState.address,
        zip_code: initialState.zip_code,
        type: initialState.type,
        createdAt: initialState.createdAt,
        updatedAt: initialState.updatedAt,
      };
    default:
      return state;
  }
}

export default reducer;
