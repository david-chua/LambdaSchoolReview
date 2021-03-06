const jwt = require('jsonwebtoken')
const {jwtSecret } = require('../../config/secrets.js');

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization

  if(!token){
    res.status(401).json("token please")
  } else{
    // check token
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if(err){
        res.status(401).json("token is bad: " + err.message)
      } else{
        req.decodedtoken = decoded;
        next();
      }
    })
  }
};
