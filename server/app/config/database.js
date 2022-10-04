const debug = require('debug')('SQL:log');
const { Pool } = require('pg');

const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
};

const pool = new Pool(config);

module.exports = {
  // define the original client
  originalClient: pool,

  /**
   * Async function to intercept params of requests
   * @param  {...any} params
   * @returns params for debug
   */
  async query(...params) {
    debug(...params);

    return this.originalClient.query(...params);
  },
};
