const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} SiteInDatabase
 * @property {number} id - id
 * @property {string} name - Site name
 * @property {string} address - Site address
 * @property {number} zip_code - Site zip code
 * @property {string} manager_name - Site manager name
 * @property {number} estimated_duration - Site estimated duration
 * @property {number} company_id - Site company id owner
 * @property {string} created_at - Db timestamptz of create
 * @property {string} updated_at - Db timestamptz of update
 */

/**
 * @typedef {object} Site
 * @property {string} name - Site name
 * @property {string} address - Site address
 * @property {number} zip_code - Site zip code
 * @property {string} manager_name - Site manager name
 * @property {number} estimated_duration - Site estimated duration
 * @property {number} company_id - Site company id owner
 */

/**
 * @typedef {object} SiteDelete
 * @property {boolean} isDeleted - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Status message
 */

module.exports = {
  /**
   * Find all sites
   * @returns {Site|ApiError} - response of all sites or ApiError if no sites found
   */
  async findAll() {
    const result = await client.query(
      `
        SELECT * FROM "get_site_with_company_name";
      `,
    );

    if (result.rowCount === 0) {
      throw new ApiError(404, 'Sites not found');
    }

    return result.rows;
  },

  /**
   * Find a site by his id
   * @param {number} siteId - Site PK id in databse
   * @returns {Site|ApiError} - REST response of Site or ApiError if no site found
   */
  async findByPk(siteId) {
    const result = await client.query(
      `
      SELECT * FROM "site" WHERE "id" = $1;
      `,
      [siteId],
    );

    if (result.rowCount === 0) {
      throw new ApiError(404, 'Site doesn\'t exist');
    }

    return result.rows[0];
  },

  /**
   * Insert Site
   * @param {object} site - Body request required
   * @returns {SiteInDatabase} - Return the new site
   */
  async insert(site) {
    const siteToCreate = await client.query(
      `
      SELECT * FROM insert_site($1);`,
      [site],
    );

    return siteToCreate.rows[0];
  },

  /**
   * Update Site
   * @param {number} siteId - Site ID
   * @param {object} site - Body request
   * @returns {Site|ApiError} - Return updated site or ApiError if site not found
   */
  async update(siteId, site) {
    const result = await client.query('SELECT * FROM "site" WHERE "id" = $1', [siteId]);

    if (result.rowCount === 0) {
      throw new ApiError(404, 'Site not found');
    }

    Object.assign(site, {
      id: parseInt(siteId, 10),
    });

    const siteToSave = await client.query(
      `
      SELECT * FROM update_site($1)
      `,
      [site],
    );

    return siteToSave.rows[0];
  },

  /**
   * Remove site
   * @param {number} siteId - Site ID
   * @returns {boolean|ApiError} - Return boolean or ApiError if site not found
   */
  async delete(siteId) {
    const result = await client.query('SELECT * FROM "site" WHERE "id" = $1;', [siteId]);

    if (result.rowCount === 0) {
      throw new ApiError(404, 'Site not found');
    }

    const siteToDelete = await client.query('DELETE FROM "site" WHERE "id" = $1;', [siteId]);

    return !!siteToDelete.rowCount;
  },

};
