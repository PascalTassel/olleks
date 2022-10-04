/* eslint-disable no-param-reassign */
const dayjs = require('dayjs');
const isoWeek = require('dayjs/plugin/isoWeek');
const isoWeeksInYear = require('dayjs/plugin/isoWeeksInYear');
const isLeapYear = require('dayjs/plugin/isLeapYear');
require('dayjs/locale/fr');

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.extend(isoWeek);

const dateFunctions = {

  /**
   * Get a dayjs object from a date string
   * @param {string=} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} dayjs object.
   */
  getDate: (dateString) => {
    const date = dateString || `${dayjs().format('YYYY-MM-DD')}`;

    return dayjs(date).locale('fr');
  },

  /**
   * Get next week and dates from a date string
   * @param {string} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} week Next week.
   * @returns {object} week.num Next week number.
   * @returns {object} week.dates Next week dates.
   */
  getNextWeek: (dateString) => {
    const date = dateFunctions.getDate(dateString);
    const nextDateString = `${date.add(7, 'day').format('YYYY-MM-DD')}`;

    return {
      num: date.add(7, 'day').isoWeek(),
      dates: dateFunctions.getWeekDates(nextDateString),
    };
  },

  /**
   * Get prev week and dates from a date string
   * @param {string} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} week Prev week.
   * @returns {object} week.num Prev week number.
   * @returns {object} week.dates Prev week dates.
   */
  getPrevWeek: (dateString) => {
    const date = dateFunctions.getDate(dateString);
    const prevDateString = `${date.subtract(7, 'day').format('YYYY-MM-DD')}`;

    return {
      num: date.subtract(7, 'day').isoWeek(),
      dates: dateFunctions.getWeekDates(prevDateString),
    };
  },

  /**
   * Get week number and week days from a date string
   * @param {string} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {object} week Week infos.
   * @returns {object} week.current Current week.
   * @returns {object} week.current.num Current week number.
   * @returns {object} week.current.dates Current week dates.
   * @returns {object} week.next Next week.
   * @returns {object} week.next.num Next week number.
   * @returns {object} week.next.dates Next week dates.
   * @returns {object} week.prev Prev week.
   * @returns {object} week.prev.num Prev week number.
   * @returns {object} week.prev.dates Prev week dates.
   */
  getWeek: (dateString) => {
    const week = {
      prev: dateFunctions.getPrevWeek(dateString),
      current: {
        num: dateFunctions.getDate(dateString).isoWeek(),
        dates: dateFunctions.getWeekDates(dateString),
      },
      next: dateFunctions.getNextWeek(dateString),
    };

    return week;
  },

  /**
   * Get week dates from a date string
   * @param {string} dateString - A string date eg. 'YYYY-MM-DD'
   * @returns {array} List of week dates.
   */
  getWeekDates: (dateString) => {
    const date = dateFunctions.getDate(dateString);
    const weekYear = date.year();
    const weekNumber = date.isoWeek();
    const monday = dateFunctions.getWeekMonday(weekYear, weekNumber);
    const from = dateFunctions.getDate(monday);

    const dates = [];

    for (let i = 0; i < 7; i += 1) {
      dates.push(`${from.add(i, 'day').format('YYYY-MM-DD')}`);
    }

    return dates;
  },

  /**
   * Get week monday (if first day of a week is not)
   * @param {int} weekYear - A string date eg. 'YYYY'
   * @param {int} weekNumber - week number.
   * @returns {string} Monday string date eg. 'YYYY-MM-DD'
   */
  getWeekMonday: (weekYear, weekNumber) => {
    const firstDayOfWeek = dayjs().year(weekYear).isoWeek(weekNumber);
    const dayNum = firstDayOfWeek.get('d');
    const subtract = dayNum === 0 ? 6 : (dayNum - 1);
    const monday = dayjs().year(weekYear).isoWeek(weekNumber).subtract(subtract, 'day')
      .format('YYYY-MM-DD');

    return monday;
  },

  /**
   * Get prev week and dates from a date string
   * @param {int} weekYear - A string date eg. 'YYYY-MM-DD'
   * @param {int} weekNumber - week Prev week.
   * @returns {string} Week period
   */
  getWeekPeriod: (weekYear, weekNumber) => {
    const maxWeeks = dateFunctions.getDate(`${weekYear}-01-01`).isoWeeksInYear();

    if (weekNumber > maxWeeks) {
      return false;
    }

    const monday = dateFunctions.getWeekMonday(weekYear, weekNumber);
    const from = dateFunctions.getDate(monday);
    const to = dateFunctions.getDate(monday).add(6, 'day');

    const fromString = `${from.format('YYYY-MM-DD')} au ${to.format('YYYY-MM-DD')}`;

    return fromString;
  },
};

module.exports = dateFunctions;
