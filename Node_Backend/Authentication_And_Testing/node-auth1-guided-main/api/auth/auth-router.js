const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { add, findBy } = require('../users/users-model');

// { username, password, role}
// hash(password) ====> ********

router.post('/register', (req,res,next) => {
  const { username, role, password } = req.body;

  const hash = bcrypt.hashSync(password, 8);

  add({username, role, password: hash })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(next)
})

router.post('/login', async (req,res,next) => {
  const { username, password } = req.body;
  // step one, find user by using username
  // step two, if user found, check hash
  const [user] = await findBy({ username })

  if (user && bcrypt.compareSync(password, user.password)){
    // step 3, if password good, save sessions
    // by changing the req.sesssion object
    // 1. set a cookie header is show with the response
    // 2 - a session object is saved in the "session array"
      req.session.user = user
      res.json({message : `welcome back ${username}`})
  } else {
    next({ status: 401, message: "unauthorized"});
  }
})

router.get('/logout', (req,res,next) => {
  if (req.session && req.session.user){
    req.session.destroy(err => {
      if (err) {
        next({ message: "sorry, you can't leave"})
      } else {
        res.json({message: 'goodbye'})
      }
    })
  } else {
    next({ message: "I don't know you!", status: 404 })
  }
})

















module.exports = router;
