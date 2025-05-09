const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');
const accountController = require('../controllers/accountController');
const postController = require('../controllers/postController');
const { verifyAccessToken } = require('../auth/authJWT');
const db = require('../databaseinit');

module.exports = router;