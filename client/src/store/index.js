import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import loginMiddleware from '../middlewares/loginMiddleware';
import userPlanningMiddleware from '../middlewares/userPlanningMiddleware';
import employeeMiddleware from '../middlewares/employeeMiddleware';
import siteMiddleware from '../middlewares/siteMiddleware';
import adminPlanningMiddleware from '../middlewares/adminPlanningMiddleware';
import companyMiddleware from '../middlewares/companyMiddleware';
import forgotPasswordMiddleware from '../middlewares/forgotPasswordMiddleware';
import userMiddleware from '../middlewares/userMiddleware';

const allMiddlewares = applyMiddleware(
  loginMiddleware,
  userPlanningMiddleware,
  employeeMiddleware,
  siteMiddleware,
  adminPlanningMiddleware,
  companyMiddleware,
  forgotPasswordMiddleware,
  userMiddleware,
);

//  to use redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allMiddlewaresWithReduxDevTools = composeEnhancers(
  allMiddlewares,
);

const store = createStore(
  reducer,
  allMiddlewaresWithReduxDevTools,
);

export default store;
