const express = require('express');

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required
const { validateUserId, validateUser, validatePost } = require('../middleware/middleware');
const Users = require('./users-model');
const Posts = require('../posts/posts-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  try {
    let users = await Users.get();
    res.status(200).json(users);
  } catch(err){
    next(err)
  }

});

router.get('/:id', validateUserId, async (req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  res.status(200).json(req.user);
});

router.post('/', validateUser, async (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  try {
    let createdUser = await Users.insert(req.body);
    res.status(201).json(createdUser);
  } catch(err){
    next(err);
  }
});

router.put('/:id', validateUser, validateUserId, async (req, res, next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  const { id } = req.user;

  try{
    let editedUser = await Users.update(id, req.body);
    res.status(200).json(editedUser);
  } catch(err){
    next(err);
  }
});

router.delete('/:id', validateUserId, async (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  const { id } = req.params;
  try {
    let deletedUser = await Users.remove(id);
    res.status(200).json({message: "user removed"});
  } catch(err){
    next(err);
  }
});

router.get('/:id/posts', validateUserId, async (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  try {
    let userPosts = await Users.getUserPosts(req.user.id);
    res.status(200).json(userPosts);
  } catch(err){
    next(err)
  }
});

router.post('/:id/posts', validateUserId, validatePost, async (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  let { id } = req.params;
  let userPost = {
    user_id: id,
    text: req.body.text
  }
  console.log(userPost);
  try {
   let newPost = await Posts.insert(userPost);
   res.status(201).json(newPost);
  } catch(err){
    next(err)
  }
});

router.use((err, req, res, next) => {
   res.status(500).json({
     message: err.messasge, // DEV
     stack: err.stack, // DEV
     custom: "Server Error occured" // Production
   })
})

// do not forget to export the router

module.exports = router;
