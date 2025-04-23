const Account = require('..models/accountModel');
const bcrypt = require('bcrypt');
const {
    generateAccessToken,
    generateRefreshToken,
    rotateRefreshToken,
    getSession,
    revokeSession
} = require('../auth/jwt');
exports.register = async (req,res) => {
    
}