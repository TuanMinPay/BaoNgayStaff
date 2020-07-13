const express = require('express');
const controller = require('../controllers/authController');
const router = express.Router();

const trimRequest = require('trim-request');

router.get('/login', controller.getHome);

module.exports = router;