const express = require('express');
const multer = require('multer');

const uploadController = require('../../../../controllers/api/userAdmin/uploadController');
const controllerHandler = require('../../../../helpers/apiControllerHandler');

const router = express.Router();
const { ApiError } = require('../../../../helpers/errorHandler');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${__dirname}/../../../../public/uploads/avatars`);
  },
  filename(req, file, cb) {
    cb(null, `${req.body.lastname}-${req.body.social_security_number}.jpg`);
  },
});

const upload = multer({ storage });

router
  .route('/avatar')
  // ! .get only for back-end dev devlopment = No docs on swagger
  .get((_, res) => {
    res.render('upload-avatar', { title: "O'lleks - API" });
  })

  /**
   * POST /api/admin/upload/avatar
   * @summary Upload an avatar inside the server
   * @tags 9.UserAdmin - Upload Section
   * @param {AvatarToUpload} request.body.required - Body request for upload an avatar
   * @return {UploadReturn} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .post(upload.single('image'), controllerHandler(uploadController.uploadAvatar));

router.use(() => {
  throw new ApiError(404, '404 NOT FOUND');
});

module.exports = router;
