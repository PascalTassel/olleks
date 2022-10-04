const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userAdminDatamapper = require('../../models/userAdmin/user');

const { ApiError } = require('../../helpers/errorHandler');

const controller = {
  async passwordToReset(req, res) {
    const { id, token } = req.params;

    const user = await userAdminDatamapper.findByPkReturnPassword(id);

    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    const secret = process.env.JWT_SECRET + user.password;

    // ? const payload = jwt.verify(token, secret);
    jwt.verify(token, secret);

    res.render('reset-password', { email: user.email });
  },

  async resetPassword(req, res) {
    const { id, token } = req.params;
    const { confirmPassword } = req.body;
    let { password } = req.body;

    if (password !== confirmPassword) {
      throw new ApiError(400, 'Both passwords must match');
    }

    const user = await userAdminDatamapper.findByPkReturnPassword(id);

    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    const secret = process.env.JWT_SECRET + user.password;

    // ? const payload = jwt.verify(token, secret);
    jwt.verify(token, secret);

    password = bcrypt.hashSync(password, 10);

    const userWithNewPassword = await userAdminDatamapper.updatePassword(id, password);

    if (userWithNewPassword) {
      res.status(200).redirect(`http://localhost:${process.env.PORT_FRONT}/`);
    }
  },

};

module.exports = controller;
