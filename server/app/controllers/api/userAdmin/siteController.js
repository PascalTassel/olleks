const siteAdminDatamapper = require('../../../models/userAdmin/site');
const companyAdminDatamapper = require('../../../models/userAdmin/company');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get all sites
   * ExpressMiddleware signature
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getAll(_, res) {
    const sites = await siteAdminDatamapper.findAll();

    if (!sites) {
      throw new ApiError(404, 'Sites not found');
    }

    return res.json(sites);
  },

  /**
   * UserAdmin controller to get a site
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const site = await siteAdminDatamapper.findByPk(req.params.id);

    if (!site) {
      throw new ApiError(404, 'Site not found');
    }

    return res.json(site);
  },

  /**
   * UserAdmin controller to create a site
   * ExpressMiddleware signature
   * @param {object} req Express req.object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async create(req, res) {
    const isCompanyExist = await companyAdminDatamapper.findByPk(req.body.company_id);

    if (!isCompanyExist) {
      throw new ApiError(400, 'Company doesn\'t exist');
    }

    const siteCreate = await siteAdminDatamapper.insert(req.body);

    return res.json(siteCreate);
  },

  /**
   * UserAdmin controller to update a site
   * ExpressMiddleware signature
   * @param {object} req Express req.object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async update(req, res) {
    const isCompanyExist = await companyAdminDatamapper.findByPk(req.body.company_id);

    if (!isCompanyExist) {
      throw new ApiError(400, 'Company doesn\'t exist');
    }

    const siteUpdate = await siteAdminDatamapper.update(req.params.id, req.body);

    return res.json(siteUpdate);
  },

  /**
   * UserAdmin controller to delete a site
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id
   * @param {object} res Express response object
   * @returns {object} Route API JSON response
   */
  async delete(req, res) {
    const siteDelete = await siteAdminDatamapper.delete(req.params.id);

    return res.status(200).json({
      isDeleted: siteDelete,
      statusCode: 200,
      message: 'Site deleted successfully',
    });
  },

};

module.exports = controller;
