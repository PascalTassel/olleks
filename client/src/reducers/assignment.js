/* eslint-disable default-param-last */
import * as actions from '../actions';

const initialState = {
  id: 0,
  starting_date: '',
  ending_date: '',
  color: '',
  position: 0,
  visibility: true,
  employee_id: 0,
  site_id: null,
  absence_id: null,
  weekSlug: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // get assignment informations
    case actions.GET_ASSIGNMENT_INFORMATIONS:
      return {
        ...state,
        id: action.payload.id,
        starting_date: action.payload.starting_date,
        ending_date: action.payload.ending_date,
        color: action.payload.color,
        position: action.payload.position,
        visibility: action.payload.visibility,
        employee_id: action.payload.employee_id,
        site_id: action.payload.site_id,
        absence_id: action.payload.absence_id,
        weekSlug: action.payload.weekSlug,
      };
    case actions.GET_ASSIGNMENT_ID:
      return {
        ...state,
        id: action.payload,
      };
      // set assignment information
    case actions.SET_ASSIGNMENT_INFORMATION:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      // reset assignment informations
    case actions.RESET_ASSIGNMENT_INFORMATIONS:
      return {
        ...state,
        id: initialState.id,
        starting_date: initialState.starting_date,
        ending_date: initialState.ending_date,
        color: initialState.color,
        position: initialState.position,
        visibility: initialState.visibility,
        employee_id: initialState.employee_id,
        site_id: initialState.site_id,
        absence_id: initialState.absence_id,
        weekSlug: initialState.weekSlug,
      };
    default:
      return state;
  }
}

export default reducer;
