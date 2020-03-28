const express = require('express');
const router = express.Router();
const controller = require('./brand.controller');
const isValidate = require('../../auth/isAutherizedUser');
const isValidateRole = require('../../auth/isValidateRole');

router.post('/createBrand',[isValidate,isValidateRole.isAdmin], controller.create);

module.exports = router;