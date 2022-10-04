/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import dateFunctions from './dateFunctions';

const planningFunctions = {

  /**
   * Convert user API data to a companies list
   * @param {object} data - API data
   * @param {string} weekSlug - current week
   * @returns {array} List of user absences in week defined by startDate.
   */
  userPlanningToAbsences: (data, weekSlug) => {
    const absences = [];
    const { assignments } = data;

    assignments.forEach((item) => {
      const {
        absence, ending_date, starting_date,
      } = item;
      const assignmentSlug = planningFunctions.getWeekSlugFromDate(starting_date);

      // push absence wich match startDate
      if ((assignmentSlug === weekSlug) && (absence.id !== null)) {
        absences.push({
          ...absence,
          ending_date,
          starting_date,
        });
      }
    });

    return absences;
  },

  /**
   * Convert user API data to a companies list
   * @param {object} data - API data
   * @param {string} weekSlug - current week
   * @returns {array} List of user assignments in week defined by startDate.
   */
  userPlanningToAssignments: (data, weekSlug) => {
    const assignments = [];
    const {
      assignments: userAssignments,
      id: userId,
      firstname,
      lastname,
      phoneNumber: phone_number,
      mobileNumber: mobile_number,
    } = data;

    userAssignments.forEach((item) => {
      const {
        absence, colleagues, ending_date, id, site, starting_date,
      } = item;
      const assignmentSlug = planningFunctions.getWeekSlugFromDate(starting_date);

      // push assignment wich match startDate
      if ((assignmentSlug === weekSlug) && (absence.id === null)) {
        const assignmentUser = {
          id: userId,
          ending_date,
          firstname,
          lastname,
          phone_number,
          mobile_number,
          starting_date,
        };

        assignments.push({
          id,
          site,
          employees: [assignmentUser, ...colleagues],
        });
      }
    });

    return assignments;
  },

  /**
   * Get user infos from API data object
   * @param {object} data - API data
   * @returns {object} User data.
   */
  userFromData: (data) => {
    const {
      avatar,
      firstname,
      id,
      label,
      lastname,
      mobileNumber,
      phoneNumber,
    } = data;

    return ({
      avatar,
      firstname,
      id,
      label,
      lastname,
      mobileNumber,
      phoneNumber,
    });
  },

  /**
   * Convert admin API data to a companies list
   * @param {object} absences - Absences list from API request
   * @param {object} absencesList - Absence Types list from API request
   * @returns {object} Absence object containing reasons as sites.
   */
  adminPlanningToAbsences: (absences, absencesList) => {
    // set absences as a company
    const company = {
      id: 0,
      name: 'Absences',
      sites: [],
    };

    // set reasons as company sites
    const reasonsList = [];

    absences.forEach(({ reason }) => {
      if (!reasonsList.includes(reason)) {
        const { id } = absencesList.filter((item) => item.reason === reason)[0];

        company.sites.push({
          id,
          name: reason,
          assignments: [],
        });
        reasonsList.push(reason);
      }
    });

    // add absences into reason site
    company.sites.map((site) => {
      const { name } = site;
      const reasonAbsences = absences.filter(({ reason }) => reason === name);
      reasonAbsences.forEach(({ assignment }) => {
        site.assignments.push(assignment);
      });
      return site;
    });

    return company;
  },

  /**
   * Convert admin API data to a companies list
   * @param {object} planning - Planning list from API request
   * @param {object} absences - Absences list from API request
   * @param {object} absencesList - Absence Types list from API request
   * @returns {array} Companies list.
   */
  adminPlanningToCompanies: (adminObject) => {
    const { absences, planning, allAbsences: absencesList } = adminObject;

    const companies = [];

    // Add absences as a company
    if (absencesList.length) {
      const absencesCompany = planningFunctions.adminPlanningToAbsences(absences, absencesList);
      companies.push(absencesCompany);
    }

    planning.forEach(({ company_id, company_name, sites: companySites }) => {
      const company = {
        id: company_id,
        name: company_name,
        sites: [],
      };

      // group company sites by id
      const companySitesIds = [];
      companySites.forEach(({ id, site_name: name }) => {
        if (!companySitesIds.includes(id)) {
          company.sites.push({
            id,
            name,
            assignments: [],
          });
          companySitesIds.push(id);
        }
      });

      // get assignments of each site
      company.sites.forEach((site) => {
        const siteAssignments = companySites.filter(({ id }) => id === site.id);

        siteAssignments.forEach(({ assignment }) => {
          site.assignments.push(assignment);
        });

        return site;
      });

      companies.push(company);
    });

    return companies;
  },

  /**
   * Get employees list of all planning
   * @param {object} companies - Companies object
   * @returns {array} List of employees
   */
  getCompaniesWithSites: (companiesList, sitesList) => {
    const companiesIds = [];
    sitesList.forEach(({ company }) => {
      const { company_id: id } = company;
      if (!companiesIds.includes(id)) {
        companiesIds.push(id);
      }
    });

    return companiesList.filter(({ id }) => companiesIds.includes(id));
  },

  /**
   * Get employees list of all planning
   * @param {object} companies - Companies object
   * @returns {array} List of employees
   */
  getPlanningEmployees: (companies) => {
    const employees = [];

    companies.forEach((company) => {
      const { sites } = company;

      sites.forEach((site) => {
        const { assignments } = site;

        assignments.forEach(({ employee }) => {
          employees.push(employee);
        });
      });
    });

    return employees;
  },

  /**
   * Get employees list of a company site
   * @param {object} companies - Companies object
   * @param {object} siteId - Id of a company site
   * @returns {array} List of assignments
   */
  getSiteEmployees: (companies, siteId) => {
    const employees = [];

    companies.forEach((company) => {
      const { sites } = company;
      const findedSite = sites.filter((site) => site.id === siteId);

      if (findedSite.length === 1) {
        const { assignments } = findedSite[0];

        assignments.forEach(({ employee }) => {
          employees.push(employee);
        });
      }
    });

    return employees;
  },

  /**
   * Get employees list of an absence type
   * @param {object} companies - Companies object
   * @param {object} absenceId - Id of an absence type
   * @returns {array} List of assignments
   */
  getAbsenceEmployees: (companies, absenceId) => {
    const employees = [];

    companies.forEach((company) => {
      const { id } = company;
      if (id === 0) {
        const { sites } = company;
        const { assignments } = sites.filter((site) => site.id === absenceId)[0];

        assignments.forEach(({ employee }) => {
          employees.push(employee);
        });
      }
    });

    return employees;
  },

  /**
   * Prepare data to assignment form after a drag and drop
   * @param {object} drag - Drag and drop data
   * @param {object} companies - Companies object
   * @returns {object} Datas sended to Assignment form
   */
  getDraggedAssignment: (drag, companies) => {
    let result = planningFunctions.createAssignment();
    const { destination, draggableId } = drag;
    let siteId;
    // is absence ?
    const absenceFounded = destination.droppableId.match(/absence-([0-9]+)/);

    if (absenceFounded !== null) {
      siteId = Number(destination.droppableId.replace('absence-', ''));
      result.absence_id = siteId;
    } else {
      siteId = Number(destination.droppableId.replace('site-', ''));
    }
    const assignmentId = Number(draggableId.replace('assignment-', ''));

    // get site destination
    let toSite;
    companies.forEach(({ sites }) => {
      sites.forEach((item) => {
        if (item.id === siteId) {
          toSite = item;
        }
      });
    });

    // get assignment
    if (toSite) {
      const { name, assignments: fromAssignments } = toSite;
      const [assignment] = fromAssignments.filter(({ id }) => id === assignmentId);
      const {
        color, employee, ending_date, id, starting_date,
      } = assignment;
      const { firstname, id: employee_id, lastname } = employee;
      const endDate = dateFunctions.getDate(ending_date).format('YYYY-MM-DD');
      const startDate = dateFunctions.getDate(starting_date).format('YYYY-MM-DD');

      result = {
        ...result,
        id,
        employee_id,
        color,
        ending_date: endDate,
        firstname,
        lastname,
        starting_date: startDate,
        position: destination.index,
        site: {
          ...result.site,
          id: siteId,
          name,
        },
      };
    }

    return result;
  },

  /**
   * Refresh assignments position after a drag and drop
   * @param {object} result - Drag and drop data
   * @param {object} companies - Companies object
   * @returns {object} Companies containing sorted assignments
   */
  setAssignmentPosition: (result, companies) => {
    const refresh = [...companies];
    const { source, destination, draggableId } = result;
    const regex = /absence-([0-9]+)/;
    const absenceCompany = refresh.filter((item) => item.id === 0)[0];

    let fromSiteId;
    // is absence ?
    const absenceFromFounded = source.droppableId.match(regex);
    const fromSiteIsAbsence = absenceFromFounded !== null;
    if (fromSiteIsAbsence) {
      fromSiteId = Number(source.droppableId.replace('absence-', ''));
    } else {
      fromSiteId = Number(source.droppableId.replace('site-', ''));
    }

    // const toSiteId = Number(destination.droppableId.replace('site-', ''));
    let toSiteId;
    const absenceToFounded = destination.droppableId.match(regex);
    const toSiteIsAbsence = absenceToFounded !== null;
    if (toSiteIsAbsence) {
      toSiteId = Number(destination.droppableId.replace('absence-', ''));
    } else {
      toSiteId = Number(destination.droppableId.replace('site-', ''));
    }

    const assignmentId = Number(draggableId.replace('assignment-', ''));

    // get site source
    let fromSite;
    if (fromSiteIsAbsence) {
      fromSite = absenceCompany.sites.filter((item) => item.id === fromSiteId)[0];
    } else {
      refresh.forEach(({ id, sites }) => {
        const isAbsenceSite = id === 0;
        sites.forEach((item) => {
          if (!isAbsenceSite && (item.id === fromSiteId)) {
            fromSite = item;
          }
        });
      });
    }

    if (fromSite) {
      // get site destination
      let toSite;
      if (toSiteIsAbsence) {
        toSite = absenceCompany.sites.filter((item) => item.id === toSiteId)[0];
      } else {
        refresh.forEach(({ id, sites }) => {
          const isAbsenceSite = id === 0;
          sites.forEach((item) => {
            if (!isAbsenceSite && (item.id === toSiteId)) {
              toSite = item;
            }
          });
        });
      }

      if (toSite) {
        let { assignments: fromAssignments } = fromSite;
        const { assignments: toAssignments } = toSite;
        const [assignment] = fromAssignments.filter(({ id }) => id === assignmentId);

        // position only
        if (fromSiteId === toSiteId) {
          assignment.position = destination.index;
          // remove from source
          fromAssignments = fromAssignments.filter(({ id }) => id !== assignmentId);
          // add to source
          fromAssignments.splice(destination.index, 0, assignment);

          // refresh position
          refresh.map((company) => {
            company.sites.map((site) => {
              if (site.id === fromSiteId) {
                site.assignments = fromAssignments;
              }
              return site;
            });
            return company;
          });

        // from a site to another
        } else {
          // remove from source
          fromAssignments = fromAssignments.filter(({ id }) => id !== assignmentId);

          // add to destination
          toAssignments.splice(destination.index, 0, assignment);

          // add to destination
          refresh.map((company) => {
            company.sites.map((site) => {
              if (site.id === fromSiteId) {
                site.assignments = fromAssignments;
              } else if (site.id === toSiteId) {
                site.assignments = toAssignments;
              }
              return site;
            });
            return company;
          });
        }
      }
    }

    return refresh;
  },

  createAssignment: () => ({
    absence_id: null,
    id: null,
    employee_id: null,
    color: '',
    ending_date: '',
    firstname: '',
    lastname: '',
    starting_date: '',
    position: 0,
    visibility: true,
    site: {
      id: null,
      name: '',
    },
  }),

  /**
   * Get current week slug
   * @returns {string} Slug as YYYY-<week number>
   */
  getCurrentWeekSlug: () => {
    const year = dateFunctions.getDate().format('YYYY');
    const weekNum = dateFunctions.getDate().isoWeek();

    return `${year}-${weekNum}`;
  },

  /**
   * Get week slug from a date string
   * @returns {string} Slug as YYYY-<week number>
   */
  getWeekSlugFromDate: (date) => {
    const year = dateFunctions.getDate(date).format('YYYY');
    const weekNum = dateFunctions.getDate(date).isoWeek().toString();

    return `${year}-${weekNum.padStart(2, '0')}`;
  },

  /**
   * Get monday date as a string from a week slug
   * @returns {string} YYYY-MM-DD date
   */
  getDateFromSlug: (slug) => {
    const regex = /^([0-9]{4})-([0-9]{2})$/;
    const matches = slug.match(regex);
    const year = matches[1];
    const week = matches[2];

    return dateFunctions.getWeekMonday(year, week);
  },

  /**
   * Get monday date as a string from a week slug
   * @param {object} companies - Companies object
   * @returns {object} companies sorted by name
   */
  sortCompaniesByName: (companies) => companies.sort((a, b) => a.name.localeCompare(b.name)),
};

export default planningFunctions;
