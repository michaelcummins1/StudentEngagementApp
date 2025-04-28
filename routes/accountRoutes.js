//Dependencies
const express = require('express');
const { verifyAccessToken } = require('../auth/authJWT');
const accountController = require('../controllers/accountController');
//Static Fields
const router = express.Router();

module.exports = router;