/* eslint-disable no-shadow */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionRequestAdminPlanning,
  actionRequestAllAbsences,
  actionRequestAllCompanies,
  actionRequestAllEmployees,
  actionRequestAllSites,
  actionSetWeekslug,
} from '../actions';
import PlanningAdmin from '../components/PlanningAdmin/PlanningAdmin';
import planningFunctions from '../utils/planningFunctions';

function PlanningAdminContainer() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const { allAbsences: absencesList } = admin;
  const { companies: companiesList } = useSelector((state) => state.allCompanies);
  const { employees: employeesList } = useSelector((state) => state.allEmployees);
  const { sites: sitesList } = useSelector((state) => state.allSites);
  const { weekStart } = admin;
  const [startDate, setStartDate] = React.useState(weekStart);
  const [companies, setCompanies] = React.useState(planningFunctions.adminPlanningToCompanies(admin));
  let { weekSlug } = useParams();
  if (weekSlug === undefined) {
    weekSlug = planningFunctions.getCurrentWeekSlug();
  }

  useEffect(() => {
    dispatch(actionRequestAllEmployees());
    dispatch(actionRequestAllAbsences());
    dispatch(actionRequestAllSites());
    dispatch(actionRequestAllCompanies());
    setCompanies(planningFunctions.adminPlanningToCompanies(admin));
  }, []);

  useEffect(() => {
    dispatch(actionSetWeekslug(weekSlug));
    dispatch(actionRequestAdminPlanning());
  }, [weekSlug]);

  useEffect(() => {
    setStartDate(admin.weekStart);
    setCompanies(planningFunctions.adminPlanningToCompanies(admin));
  }, [admin]);

  return (
    <PlanningAdmin
      absencesList={absencesList}
      companies={companies}
      companiesList={companiesList}
      employeesList={employeesList}
      sitesList={sitesList}
      startDate={startDate}
    />
  );
}

export default React.memo(PlanningAdminContainer);
