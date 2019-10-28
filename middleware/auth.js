const jwt = require('jsonwebtoken');
require('dotenv').config({path: '../.env'});


module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1]; // req.get to get headers values
         // extract the token
    try {
        decodedToken = jwt.verify(token, process.env.SECRET);
    } catch (err){
        req.isAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    req.userId = decodedToken.userId;
    req.isAuth = true;
    next();
};