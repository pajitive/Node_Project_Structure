const express = require('express');
const router = express.Router();
const controller = require('./model.controller');

router.post('/createModel',controller.create);
router.get('/getAllModel',controller.get);
router.put('/updateModelById',controller.updateModel);

module.exports = router;

