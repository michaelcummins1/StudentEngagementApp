const Account = require('../models/accountModel');
const bcrypt = require('bcrypt');
const {
    generateAccessToken,
    generateRefreshToken,
    rotateRefreshToken,
    getSession,
    revokeSession
} = require('../auth/authJWT');
exports.register = async (req,res) => {
    
}