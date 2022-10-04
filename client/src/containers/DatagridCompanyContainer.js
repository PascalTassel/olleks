import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionSetCompanyInformation,
  actionGetCompanyInformations,
  actionUpdateCompany,
  actionDeleteCompany,
  actionGetCompanyIdToDelete,
  actionCreateCompany,
  actionResetCompanyInformations,
} from '../actions';
import DataGridCompany from '../components/DataGridCompany/DataGridCompany';

function DatagridCompanyContainer() {
  const dispatch = useDispatch();

  const allCompanies = useSelector((state) => state.allCompanies.companies);
  const oneCompany = useSelector((state) => state.company);

  const handleGetCompany = (datas) => {
    dispatch(actionGetCompanyInformations(datas));
  };
  const handleUpdateCompany = (data) => {
    dispatch(actionSetCompanyInformation(data.field, data.value));
    dispatch(actionUpdateCompany());
  };

  const pushCompanyId = (ids) => {
    dispatch(actionGetCompanyIdToDelete(ids));
  };

  const handleDeleteCompany = () => {
    dispatch(actionDeleteCompany());
  };

  const handleCreateCompany = () => {
    dispatch(actionCreateCompany());
  };

  const resetCompanyInformations = () => {
    dispatch(actionResetCompanyInformations());
  };

  const changeField = (key, value) => {
    dispatch(actionSetCompanyInformation(key, value));
  };

  return (
    <DataGridCompany
      companies={allCompanies}
      oneCompany={oneCompany}
      handleGetCompany={handleGetCompany}
      handleUpdateCompany={handleUpdateCompany}
      handleDeleteCompany={handleDeleteCompany}
      handleCreateCompany={handleCreateCompany}
      pushCompanyId={pushCompanyId}
      changeField={changeField}
      resetCompanyInformations={resetCompanyInformations}
    />
  );
}

DatagridCompanyContainer.propTypes = {};
DatagridCompanyContainer.defaultProps = {};
export default React.memo(DatagridCompanyContainer);
