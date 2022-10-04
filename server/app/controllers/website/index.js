const controller = {
  /**
   * Home controller which display documentation link
   * ExpressMiddleware signature
   * @param {object} _ Express request object (not used)
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  home(_, res) {
    res.render('home', { title: "O'lleks - API" });
  },
};

module.exports = controller;
