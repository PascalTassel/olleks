/* eslint-disable no-alert */
/* eslint-disable camelcase */
import {
  getAllCompanies, createCompany, updateCompany, deleteCompany,
} from '../requests/companyRequest';
import * as actions from '../actions';

const companyMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ALL_COMPANIES: {
      const response = await getAllCompanies();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllCompanies(response.data));
      }
      return;
    }
    case actions.CREATE_COMPANY: {
      const { company } = store.getState();
      const {
        name,
        address,
        zip_code,
        type,
      } = company;
      const companyDatas = {
        name,
        address,
        zip_code,
        type,
      };
      const response = await createCompany(companyDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetCompanyInformations());
        store.dispatch(actions.actionRequestAllCompanies());
        console.log('Company created successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.UPDATE_COMPANY: {
      const { company } = store.getState();
      const {
        name,
        address,
        zip_code,
        type,
      } = company;
      const companyDatas = {
        name,
        address,
        zip_code,
        type,
      };
      const response = await updateCompany(company.id, companyDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetCompanyInformations());
        store.dispatch(actions.actionRequestAllCompanies());
        console.log('Company updated successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.DELETE_COMPANY: {
      const { company } = store.getState();
      company.companiesToDelete.map(async (id) => {
        const response = await deleteCompany(id);
        if (response.status === 200) {
          store.dispatch(actions.actionRequestAllCompanies());
          console.log('Company deleted successfully');
        } else {
          alert(`Error: ${response.status}`);
        }
      });
      store.dispatch(actions.actionResetCompanyInformations());
      return;
    }
    default: {
      next(action);
    }
  }
};

export default companyMiddleware;
