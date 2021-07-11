/*** token验证 ***/
const { verify } = require("../util/jwt")

module.exports = async (req, res, next) => {
    let token = req.headers.authorization;
    token = token ? token.split('Bearer ')[1] : '';
    if(!token){
        return res.status(401).end();
    }
    const result = verify(token);
    if(!result){
        return res.status(401).end();
    }
    req.userId= result.userId
    next();
};