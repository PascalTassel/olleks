/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const themeFunctions = {
  avalaibleModes: ['dark', 'light'],
  defaultMode: 'dark',

  /**
   * Get CSS theme mode from localStorage
   */
  getThemeMode: () => {
    const mode = localStorage.getItem('themeMode') || themeFunctions.defaultMode;
    if (themeFunctions.avalaibleModes.includes(mode)) {
      return mode;
    }

    return themeFunctions.defaultMode;
  },

  /**
   * Get a color from theme palette
   * @param {object} palette - A theme palette
   * @returns {string} a palette color
   */
  getRandomColor: (palette) => {
    const colors = [];

    for (const color in palette) {
      palette[color]?.main && colors.push(palette[color].main);
    }
    const randomIndex = Math.floor(Math.random() * (colors.length - 1));

    return colors[randomIndex];
  },

  /**
   * Save CSS theme mode into localStorage
   * @param {('dark'|'light')} mode - Theme mode
   * @returns {boolean} Save successed or failed
   */
  setThemeMode: (mode) => {
    if (themeFunctions.avalaibleModes.includes(mode)) {
      return localStorage.setItem('themeMode', mode);
    }

    return false;
  },
};

export default themeFunctions;
