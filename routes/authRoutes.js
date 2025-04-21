const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyAccessToken } = require('../auth/jwt');

module.exports = router;