/* eslint-disable max-len */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Button, Typography, Modal } from '@mui/material';
import AssignmentFormContainer from '../../containers/AssignmentFormContainer';
import CompanyForm from '../CompanyForm/CompanyForm';
import SearchContainer from '../SearchContainer/SearchContainer';
import DraggableAssignments from '../DraggableAssignments/DraggableAssignments';
import Companies from '../Companies/Companies';
import dateFunctions from '../../utils/dateFunctions';
import planningFunctions from '../../utils/planningFunctions';
import useBreakpointDown from '../../hooks/useBreakpointDown';
import './planning_admin.scss';

function PlanningAdmin({
  absencesList,
  companies,
  companiesList,
  employeesList,
  sitesList,
  startDate,
}) {
  const theme = useTheme();
  const week = dateFunctions.getWeek(startDate);
  const { current: currentWeek } = week;
  const isPast = dateFunctions.isBefore(currentWeek.dates[6]);
  const isMobile = useBreakpointDown();
  // filter companies list : get only companies having sites
  const allCompanies = planningFunctions.getCompaniesWithSites(companiesList, sitesList);
  const canAddCompany = !isPast && ((companies.length - 1) < allCompanies.length);
  // forms modal
  const [modalOpened, setModalOpened] = React.useState(false);
  // Instances used for forms
  const [assignment, setAssignment] = React.useState({});
  const [addCompany, setAddCompany] = React.useState(false);
  const [addSite, setAddSite] = React.useState(false);
  // lists used in forms
  const [companiesSelection, setCompaniesSelection] = React.useState(allCompanies);
  const [employeesSelection, setEmployeesSelection] = React.useState(employeesList);
  const [sitesSelection, setSitesSelection] = React.useState([]);
  // dragend
  const [draggableCompanies, setDraggableCompanies] = React.useState(companies);
  const [dragEndResult, setDragEndResult] = React.useState({});

  const handleAddAssignment = (assignmentData, dragResult = undefined) => {
    if (dragResult) {
      const { destination, source } = dragResult;

      // update position only
      if (destination.droppableId === source.droppableId) {
        const movedAssignment = {
          ...assignmentData,
          position: destination.index,
          weekSlug: planningFunctions.getWeekSlugFromDate(assignmentData.starting_date),
        };
        // TODO : UPDATE ASSIGNMENT POSITION WITHOUT OPENING MODAL
        console.log('upate position only !', movedAssignment);
      }

      setDragEndResult(dragResult);
    }
    setAssignment(assignmentData);
  };

  const handleAddCompany = () => {
    // set companies list
    const displayedCompaniesIds = companies.map((item) => item.id);
    const displayableCompagnies = allCompanies.filter(
      ({ id }) => !displayedCompaniesIds.includes(id),
    );
    setCompaniesSelection(displayableCompagnies);
    setSitesSelection(sitesList);

    setAddCompany(true);
    setModalOpened(true);
  };

  /**
   * Add site into a company
   * @param {object} company A planning company
   * @param {array} availablesSitesList List of availables company sites
   */
  const handleAddSite = (company, availablesSitesList) => {
    const { id: companyId } = company;
    let availableSites = [...availablesSitesList];

    // is absence ?
    if (companyId === 0) {
      availableSites = availablesSitesList.map(({ id, reason: name }) => ({
        id,
        name,
        company: {
          company_id: 0,
          company_name: 'Absences',
        },
      }));
    }

    setCompaniesSelection([company]);
    setSitesSelection(availableSites);

    setAddSite(true);
    setModalOpened(true);
  };

  const handleCancelCompany = () => {
    setAddCompany(false);
    setAddSite(false);
    setSitesSelection([]);
    setModalOpened(false);
  };

  const handleModal = () => {
    setModalOpened((stateModal) => !stateModal);
  };

  const handleOnAssignmentSubmitted = () => {
    setAssignment({});
    setModalOpened(false);
  };

  const handleOnCompanySubmitted = (company) => {
    const addType = addCompany ? 'company' : 'site';
    const planningCompanies = [...draggableCompanies];
    let sortedCompanies = planningCompanies;

    if (addType === 'company') {
      planningCompanies.push(company);
      sortedCompanies = planningFunctions.sortCompaniesByName(planningCompanies);
    } else {
      const { id: companyId, sites } = company;
      const site = sites[0];
      sortedCompanies.map((item) => {
        const { id, sites: companySite } = item;
        if (id === companyId) {
          companySite.push(site);
        }
        return {
          ...item,
          sites: companySite,
        };
      });
      sortedCompanies = planningFunctions.sortCompaniesByName(planningCompanies);
    }
    setDraggableCompanies(sortedCompanies);

    setAddCompany(false);
    setAddSite(false);
    setSitesSelection([]);
    setModalOpened(false);
  };

  const handleCancelAssignment = () => {
    if (dragEndResult?.draggableId) {
      const initialResult = {
        ...dragEndResult,
        source: dragEndResult.destination,
        destination: dragEndResult.source,
      };
      const refreshList = planningFunctions.setAssignmentPosition(initialResult, draggableCompanies);
      setDraggableCompanies(refreshList);
      setDragEndResult({});
    }
    setAssignment({});
    setModalOpened(false);
  };

  /**
   * listen assignment change and adjust employees list in assignment Form
   */
  React.useEffect(() => {
    // 1. build employeesList used in assignment modal
    // 2. open modal
    if (assignment.site !== undefined) {
      const { employee_id } = assignment;
      const method = employee_id !== null ? 'PATCH' : 'POST';
      // get all employees
      const allPlanningEmployees = planningFunctions.getPlanningEmployees(companies);
      const allPlanningEmployeesIds = allPlanningEmployees.map((item) => item.id);
      // retrieve all assignments employees from employeesLIst
      const employeesWhoCanBeAdded = employeesList.filter(
        ({ id }) => !allPlanningEmployeesIds.includes(id),
      );

      // it's an update
      // add assignment employee to list
      if (method === 'PATCH') {
        const employee = employeesList.filter(({ id }) => id === employee_id)[0];
        employeesWhoCanBeAdded.push(employee);
      }
      setEmployeesSelection(employeesWhoCanBeAdded);
      setModalOpened(true);
    }
  }, [assignment]);

  /**
   * open modal when add site
   */
  React.useEffect(() => {
    if (addSite) {
      setModalOpened(true);
    }
  }, [addSite]);

  React.useEffect(() => {
    setDraggableCompanies(companies);
  }, [companies]);

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
        {'Planning d\'intervention'}
      </Typography>

      <SearchContainer isAdmin date={startDate} />

      <Typography sx={{
        mb: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
          textAlign: 'center',
        },
      }}
      >
        <Button
          variant="outlined"
          color="inherit"
          disabled={!canAddCompany}
          onClick={handleAddCompany}
        >
          {`Ajouter une entreprise en S${currentWeek.num.toString().padStart(2, '0')}`}
        </Button>
      </Typography>

      {!isMobile
        ? (
          <DraggableAssignments
            absencesList={absencesList}
            companies={draggableCompanies}
            handleAssignment={handleAddAssignment}
            handleSite={handleAddSite}
            isPast={isPast}
            sitesList={sitesList}
            week={currentWeek}
          />
        )
        : (
          <Companies
            absencesList={absencesList}
            companies={companies}
            handleAssignment={handleAddAssignment}
            handleSite={handleAddSite}
            isDropable={false}
            isMobile
            isPast={isPast}
            sitesList={sitesList}
            week={currentWeek}
          />
        )}

      {modalOpened
      && (
      <Modal
        sx={{
          width: '90vw',
          maxWidth: '30rem',
          mx: 'auto',
          mt: '25vh',
        }}
        open
        onClose={handleModal}
      >
        <>
          {assignment.id !== undefined
          && (
          <AssignmentFormContainer
            assignment={assignment}
            employeesList={employeesSelection}
            handleCancel={handleCancelAssignment}
            handleSubmit={handleOnAssignmentSubmitted}
            startDate={startDate}
          />
          )}
          {(addCompany || addSite)
          && (
          <CompanyForm
            addType={addCompany ? 'company' : 'site'}
            companiesList={companiesSelection}
            sitesList={sitesSelection}
            handleCancel={handleCancelCompany}
            handleSubmit={handleOnCompanySubmitted}
          />
          )}
        </>
      </Modal>
      )}
    </>
  );
}

PlanningAdmin.propTypes = {
  absencesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  companies: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  companiesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  employeesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  sitesList: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  startDate: PropTypes.string.isRequired,
};

export default React.memo(PlanningAdmin);
