//Dependencies
const express = require('express');
const { verifyAccessToken } = require('../auth/jwt');
const accountController = require('../controllers/accountController');
//Static Fields
const router = express.Router();

router.post('/', accountController.createAccount);