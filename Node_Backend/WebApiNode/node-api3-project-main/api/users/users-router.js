const express = require('express');

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required
const { logger } = require('../middleware/middleware');
const Users = require('./users-model');
const Posts = require('../posts/posts-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  try {
    // let users = await Users.get();
    // res.status(200).json(users);
    throw new Error();

  } catch(err){
    next(err)
  }

});

router.get('/:id', async (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  const { id } = req.params
  try {
    let user = await Users.getById(id);
    res.status(200).json(user);
  } catch(err){
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  try {
    let createdUser = await Users.insert(req.body);
    res.status(201).json(createdUser);
  } catch(err){
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  const { id } = req.params;

  try{
    let editedUser = await Users.update(id, req.body);
    res.status(200).json(editedUser);
  } catch(err){
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  const { id } = req.params;
  try {
    let deletedUser = await Users.remove(id);
    res.status(200).json({message: "user removed"});
  } catch(err){
    console.log(err);
  }
});

router.get('/:id/posts', async (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  const { id } = req.params;
  try {
    let userPosts = await Users.getUserPosts(id);
    res.status(200).json(userPosts);
  } catch(err){
    console.log(err)
  }
});

router.post('/:id/posts', (req, res) => {
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
   let newPost = Posts.insert(userPost);
   res.status(201).json(newPost);
  } catch(err){
    console.log(err);
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
