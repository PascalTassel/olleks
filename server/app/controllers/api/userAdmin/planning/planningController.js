/* eslint-disable no-param-reassign */
const planningAdminDatamapper = require('../../../../models/userAdmin/planning/planning');
const { ApiError } = require('../../../../helpers/errorHandler');
const { getWeekPeriod, getWeekMonday, getWeekDates } = require('../../../../helpers/dateFunctions');

const controller = {
  /**
   * UserAdmin controller to get a week informations
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const { slugYearWeekId } = req.params;

    const yearId = slugYearWeekId.substring(0, 4);
    const weekId = slugYearWeekId.substring(5, 7);

    const period = getWeekPeriod(yearId, weekId);

    if (!period) {
      throw new ApiError(404, `Week ${weekId} doesn't exist in ${yearId}`);
    }

    const monday = getWeekMonday(yearId, weekId);
    const weekDates = getWeekDates(monday);

    const week = await planningAdminDatamapper.findByDates(weekDates);

    const absences = await planningAdminDatamapper.findByAbsenceDates(weekDates);

    if (!week) {
      throw new ApiError(404, 'Week not found');
    }

    if (!Array.isArray(week)) {
      throw new ApiError(500, 'Internal Server Error');
    }

    const filteredWeek = [];

    /**
     * Function who delete starting_date and ending_date using only for SQL condition in a view
     * And who filter the array of assignment of the week without any company repetitions
     */
    week.forEach((item) => {
      delete item.starting_date;
      delete item.ending_date;

      const existing = filteredWeek.filter((value) => value.company_id === item.company_id);
      if (existing.length) {
        const existingIndex = filteredWeek.indexOf(existing[0]);
        filteredWeek[existingIndex].sites = filteredWeek[existingIndex].sites.concat(item.sites);
      } else {
        if (typeof item.sites === 'string') { item.sites = [item.sites]; }
        filteredWeek.push(item);
      }
    });

    absences.forEach((item) => {
      delete item.starting_date;
      delete item.ending_date;
    });

    const periods = { weekStart: monday, planning: filteredWeek, absences };

    const { planning } = periods;

    planning.sort((a, b) => {
      if (a.company_name < b.company_name) {
        return -1;
      }
      if (a.company_name > b.company_name) {
        return 1;
      }
      return 0;
    });

    planning.forEach((item) => {
      const { sites } = item;

      sites.sort((a, b) => a.assignment.position - b.assignment.position);

      sites.sort((a, b) => {
        if (a.site_name < b.site_name) {
          return -1;
        }
        if (a.site_name > b.site_name) {
          return 1;
        }
        return 0;
      });
    });

    res.json(periods);
  },

  /**
   * UserAdmin controller to create user assignment in a week
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async create(req, res) {
    const userAssignment = await planningAdminDatamapper.insert(req.params, req.body);
    return res.json(userAssignment);
  },

};

module.exports = controller;
