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