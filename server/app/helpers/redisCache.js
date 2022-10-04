const { promisify } = require('util');

const cache = require('express-redis-cache')({
  auth_pass: process.env.REDIS_PASSWORD,
  prefix: process.env.REDIS_PREFIX,
  expire: parseInt(process.env.REDIS_EXPIRE, 10),
});

const debug = require('debug')('app:cache');
const logger = require('./logger');

cache.on('error', (error) => {
  logger.error(error);
});

cache.on('message', (message) => {
  debug(message);
});

const originalCacheDel = cache.del;

cache.del = () => async (req, _, next) => {
  const del = promisify(originalCacheDel).bind(cache);

  const currentRoute = req.originalUrl;

  await del(currentRoute);

  // await del('/*');
  next();
};

module.exports = cache;
