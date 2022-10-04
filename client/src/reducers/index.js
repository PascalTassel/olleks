import { combineReducers } from 'redux';

import loginReducer from './login';
import userReducer from './user';
import employeeReducer from './employee';
import siteReducer from './site';
import adminReducer from './admin';
import companyReducer from './company';
import allCompaniesReducer from './allCompanies';
import allSitesReducer from './allSites';
import allEmployeesReducer from './allEmployees';
import assignmentReducer from './assignment';
import forgotPasswordReducer from './forgotPassword';

export default combineReducers({
  login: loginReducer,
  user: userReducer,
  employee: employeeReducer,
  site: siteReducer,
  admin: adminReducer,
  company: companyReducer,
  allCompanies: allCompaniesReducer,
  allSites: allSitesReducer,
  allEmployees: allEmployeesReducer,
  assignment: assignmentReducer,
  forgotPassword: forgotPasswordReducer,
});
