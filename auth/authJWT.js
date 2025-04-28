const jwt = require('jsonwebtoken');
const {v4 : uuid} = require('uuid');
exports.verifyJWT = function(req, res, next) {
    //Guard Case Bad Auth Header
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
        if (!authHeader){
            return res.redirect('/api/gruh');
        }
    //Guard Case bad Token
        if (!token){
            res.sendStatus(401);
        }
    //Success
    jwt.verify(token,process.env.TOKEN_SECRET,(err, decoded) => {
        //Forbidden
        if(err) {
            return res.sendStatus(403);
        }
        req.user = decoded;
        next();
    });
};

exports.generateAccessToken = function(user) {
    return jwt.sign(
        {email: user.email}, 
        process.env.TOKEN_SECRET, 
        { expiresIn: '1800s' }
    );
  }
  exports.generateRefreshToken = function (userId, callback) {
    try {
      const sessionId = uuidv4();
      const refreshToken = jwt.sign(
        { sessionId, id: userId },
        process.env.REFRESH_SECRET,
        { expiresIn: '7d' }
      );
      sessions[sessionId] = {
        userId,
        createdAt: new Date(),
        active: true
      };
      callback(null, refreshToken);  
    } catch (err) {
      callback(err); 
    }
  };

  exports.rotateRefreshToken = function (oldToken) {
    try {
      const payload = jwt.verify(oldToken, process.env.REFRESH_SECRET);
      const sessionId = payload.sessionId;
      if (!sessions[sessionId] || !sessions[sessionId].active) {
        throw new Error("Invalid or revoked session");
      }
  
      // Rotate: deactivate old, issue new
      sessions[sessionId].active = false;
      const newSessionId = uuidv4();
      sessions[newSessionId] = {
        userId: payload.id,
        createdAt: new Date(),
        active: true
      };
  
      const newToken = jwt.sign(
        { sessionId: newSessionId, id: payload.id, email: payload.email },
        process.env.REFRESH_SECRET,
        { expiresIn: '7d' }
      );
  
      return newToken;
    } catch (err) {
      throw new Error("Invalid refresh token");
    }
  };