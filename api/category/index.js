const express = require('express');
const router = express.Router();
const category = require('./category.controller');

router.post('/saveCategory',category.create);

module.exports = router;