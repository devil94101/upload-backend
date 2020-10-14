const jwt = require('jsonwebtoken');

module.exports = function (token) {
    try{
        var Data = jwt.verify(token, process.env.SECRET_KEY || "Deepak's Key");
        return Data.user;
    }
    catch(err) {
        throw err;
    }
}

