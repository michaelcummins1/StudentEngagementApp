const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const { verifyAccessToken } = require('../auth/jwt');