const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.post('/signup',controller.signUp);
router.post('/login',controller.login);

module.exports = router;