const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyJWT } = require('../auth/authJWT');

router.post('/', authController.register);
router.post('/login', authController.login);


module.exports = router;
