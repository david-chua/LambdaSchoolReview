const Users = require('../users/users-model');
const Posts = require('../posts/posts-model');

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(req.method);
  req.baseUrl !== "" ? console.log(req.baseUrl): console.log("this is the base url of local host");
  console.log(Date.now());
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  let { id } = req.params;
  Users.getById(id)
    .then(user => {
      if (user){
        req.user = user;
        next();
      } else {
        res.status(404).json({
          message: "user not found"
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  if (!req.body.name){
    res.status(400).json({
      message: "missing required name field"
    })
  }
  next();
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  if (!req.body.text){
    res.status(400).json({
      message: "missing require text field"
    })
  }
  next();
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}
