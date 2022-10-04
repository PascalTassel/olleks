import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionSetSiteInformation,
  actionGetSiteInformations,
  actionUpdateSite,
  actionDeleteSite,
  actionGetSiteIdToDelete,
  actionCreateSite,
  actionResetSiteInformations,
} from '../actions';
import DataGridSite from '../components/DataGridSite/DataGridSite';

function DatagridSiteContainer() {
  const dispatch = useDispatch();

  const allSites = useSelector((state) => state.allSites.sites);
  const oneSite = useSelector((state) => state.site);

  const handleGetSite = (datas) => {
    dispatch(actionGetSiteInformations(datas));
  };
  const handleUpdateSite = (data) => {
    dispatch(actionSetSiteInformation(data.field, data.value));
    dispatch(actionUpdateSite());
  };

  const pushSiteId = (ids) => {
    dispatch(actionGetSiteIdToDelete(ids));
  };

  const handleDeleteSite = () => {
    dispatch(actionDeleteSite());
  };

  const handleCreateSite = () => {
    dispatch(actionCreateSite());
  };

  const resetSiteInformations = () => {
    dispatch(actionResetSiteInformations());
  };

  const changeField = (key, value) => {
    dispatch(actionSetSiteInformation(key, value));
  };

  return (
    <DataGridSite
      sites={allSites}
      oneSite={oneSite}
      handleGetSite={handleGetSite}
      handleUpdateSite={handleUpdateSite}
      handleDeleteSite={handleDeleteSite}
      handleCreateSite={handleCreateSite}
      pushSiteId={pushSiteId}
      changeField={changeField}
      resetSiteInformations={resetSiteInformations}
    />
  );
}

DatagridSiteContainer.propTypes = {};
DatagridSiteContainer.defaultProps = {};
export default React.memo(DatagridSiteContainer);
