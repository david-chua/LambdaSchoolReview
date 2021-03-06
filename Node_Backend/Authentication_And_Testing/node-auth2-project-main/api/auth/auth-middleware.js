const { JWT_SECRET } = require("../secrets"); // use this secret!
const jwt = require('jsonwebtoken');
const Users = require("../users/users-model.js");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token){
    res.status(401).json({message: "Token required"})
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if(err){
        res.status(401).json({message: "Token invalid"})
      } else{
        req.decodedToken = decoded;
        next();
      }
    })
  }
  /*
    If the user does not provide a token in the Authorization header:
    status 401
    {
      "message": "Token required"
    }

    If the provided token does not verify:
    status 401
    {
      "message": "Token invalid"
    }

    Put the decoded token in the req object, to make life easier for middlewares downstream!
  */
}

const only = role_name => (req, res, next) => {
  /*
    If the user does not provide a token in the Authorization header with a role_name
    inside its payload matching the role_name passed to this function as its argument:
    status 403
    {
      "message": "This is not for you"
    }

    Pull the decoded token from the req object, to avoid verifying it again!
  */
  console.log(req.decodedToken);
  console.log('role name', role_name)
  if (req.decodedToken.role_name === role_name){
    next();
  } else {
    res.status(403).json({message: "This is not for you"})
  }
}


const checkUsernameExists = async (req, res, next) => {
  /*
    If the username in req.body does NOT exist in the database
    status 401
    {
      "message": "Invalid credentials"
    }
  */
  const { username } = req.body;
  const user = await Users.findBy({username});
  if (!user){
    res.status(401).json({message: "invalid credentials"})
  } else {
    console.log('hitting next');
    next();
  }
}


const validateRoleName = (req, res, next) => {
  const { role_name } = req.body;
  console.log('rolename validate', role_name)
  if (!role_name || role_name.trim() === ''){
    req.role_name = 'student'
    next();
  } else {
    let trimmedRoleName = role_name.trim();
    console.log(trimmedRoleName, 'trimmed')
    if (trimmedRoleName === 'admin'){
      res.status(422).json({message: "Role name cannot be admin"});
    } else if( trimmedRoleName.length > 32){
      res.status(422).json({message: "Role name cannot be longer than 32 characters"})
    } else {
      req.role_name = trimmedRoleName;
      next();
    }
  }
  /*
    If the role_name in the body is valid, set req.role_name to be the trimmed string and proceed.

    If role_name is missing from req.body, or if after trimming it is just an empty string,
    set req.role_name to be 'student' and allow the request to proceed.

    If role_name is 'admin' after trimming the string:
    status 422
    {
      "message": "Role name can not be admin"
    }

    If role_name is over 32 characters after trimming the string:
    status 422
    {
      "message": "Role name can not be longer than 32 chars"
    }
  */
}

module.exports = {
  restricted,
  checkUsernameExists,
  validateRoleName,
  only,
}
