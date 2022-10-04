/* eslint-disable no-alert */
/* eslint-disable camelcase */
import {
  getAllSites, createSite, updateSite, deleteSite,
} from '../requests/siteRequest';
import * as actions from '../actions';

const siteMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actions.REQUEST_ALL_SITES: {
      const response = await getAllSites();
      if (response.status === 200) {
        store.dispatch(actions.actionGetAllSites(response.data));
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.CREATE_SITE: {
      const { site } = store.getState();
      const {
        name,
        address,
        zip_code,
        manager_name,
        estimated_duration,
        company_id,
      } = site;
      const siteDatas = {
        name,
        address,
        zip_code,
        manager_name,
        estimated_duration,
        company_id,
      };
      const response = await createSite(siteDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetSiteInformations());
        store.dispatch(actions.actionRequestAllSites());
        alert('Site created successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.UPDATE_SITE: {
      const { site } = store.getState();
      const {
        name,
        address,
        zip_code,
        manager_name,
        estimated_duration,
        company_id,
      } = site;
      const siteDatas = {
        name,
        address,
        zip_code,
        manager_name,
        estimated_duration,
        company_id,
      };
      const response = await updateSite(site.id, siteDatas);
      if (response.status === 200) {
        store.dispatch(actions.actionResetSiteInformations());
        store.dispatch(actions.actionRequestAllSites());
        alert('Site updated successfully');
      } else {
        alert(`Error: ${response.status}`);
        return;
      }
      return;
    }
    case actions.DELETE_SITE: {
      const { site } = store.getState();
      site.sitesToDelete.map(async (id) => {
        const response = await deleteSite(id);
        if (response.status === 200) {
          store.dispatch(actions.actionRequestAllSites());
          alert('Site deleted successfully');
        } else {
          alert(`Error: ${response.status}`);
        }
      });
      store.dispatch(actions.actionResetSiteInformations());
      return;
    }
    default: {
      next(action);
    }
  }
};

export default siteMiddleware;
