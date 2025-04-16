const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { verifyAccessToken } = require('../auth/jwt');

module.exports = router;