const express = require('express');
const router = express.Router();
const controller = require('./brand.controller');

router.post('/createBrand',controller.create);

module.exports = router;