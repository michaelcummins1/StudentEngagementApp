const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { verifyAccessToken } = require('../auth/authJWT');

router.post('/', postController.create)

router.get('/', postController.list)

module.exports = router;