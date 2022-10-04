const emailValidator = require('email-validator');
const bcrypt = require('bcryptjs');
const userAdminDatamapper = require('../../../models/userAdmin/user');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get all users
   * ExpressMiddleware signature
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getAll(_, res) {
    const users = await userAdminDatamapper.findAll();

    if (!users) {
      throw new ApiError(404, 'Users not found');
    }

    return res.json(users);
  },

  /**
   * UserAdmin controller to get an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const user = await userAdminDatamapper.findByPk(req.params.id);

    if (!user) {
      throw new ApiError(400, 'User doesn\'t exist');
    }

    return res.json(user);
  },

  /**
   * UserAdmin controller to create an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async create(req, res) {
    const isEmailValid = emailValidator.validate(req.body.email);

    if (!isEmailValid) {
      throw new ApiError(404, 'Invalid email');
    }

    const isSsnAvailable = await userAdminDatamapper.getSsn(req.body.social_security_number);

    if (!isSsnAvailable) {
      throw new ApiError(400, 'Social security number already used for an another user');
    }

    const isEmailAvailable = await userAdminDatamapper.findByEmail(req.body.email);

    if (!isEmailAvailable) {
      throw new ApiError(400, 'Email already used for an another user');
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    console.log('file: userController.js ~ line 67 ~ create ~  req.body', req.body);
    console.log('file: userController.js ~ line 67 ~ create ~ req.body.password', req.body.password);

    const userCreate = await userAdminDatamapper.insert(req.body);

    return res.json(userCreate);
  },

  /**
   * UserAdmin controller to update an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async update(req, res) {
    const isEmailValid = emailValidator.validate(req.body.email);

    if (!isEmailValid) {
      throw new ApiError(404, 'Invalid Email');
    }

    const isSsnAvailable = await userAdminDatamapper.getSsn(req.body.social_security_number);

    if (isSsnAvailable > 1) {
      throw new ApiError(400, 'Social security number already used for an another user');
    }

    const isEmailAvailable = await userAdminDatamapper.findByEmail(req.body.email);

    if (isEmailAvailable > 1) {
      throw new ApiError(400, 'Email already used for an another user');
    }

    const userUpdate = await userAdminDatamapper.update(req.params.id, req.body);

    return res.json(userUpdate);
  },

  /**
   * UserAdmin controller to delete an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id
   * @param {object} res Express response object
   * @returns {object} Route API JSON response
   */
  async delete(req, res) {
    const userDelete = await userAdminDatamapper.delete(req.params.id);

    return res.status(200).json({
      isDeleted: userDelete,
      statusCode: 200,
      message: 'User deleted successfully',
    });
  },

};

module.exports = controller;
