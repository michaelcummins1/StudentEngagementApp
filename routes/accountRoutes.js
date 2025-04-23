//Dependencies
const express = require('express');
const { verifyAccessToken } = require('../auth/authJWT');
const accountController = require('../controllers/accountController');
//Static Fields
const router = express.Router();

router.post('/', accountController.create);

router.put('/', accountController.delete);

module.exports = router;