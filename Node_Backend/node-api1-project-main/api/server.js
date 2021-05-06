// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model');

const server = express();

server.use(express.json());

// Get users by ID
server.get('/api/users/:id', async (req,res) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    if (!user){
      res.status(404).json({message: "The user with the specified ID does not exist"});
    } else{
      res.status(200).json(user)
    }

  } catch(err){
    res.status(500).json({message: "The user information could not be retrieved"});
  }
})

// Get all users
server.get('/api/users', async (req,res) => {
  try {
    const users = await User.find()
    res.status(200).json(users);
  } catch(err){
    res.status(404).json({message: 'The users information could not be retrieved'});
  }
})

// create user
server.post('/api/users', async (req,res) => {
  try {
    const { name, bio } = req.body
    if (!name || !bio ){
      res.status(400).json({mesage: "Please provide name and boio for the user"})
    } else {
      let newUser = await User.insert(req.body);
      res.status(201).json(newUser)
    }
  } catch(err){
    res.status(500).json({message: "There was an error while saving the users to the database"});
  }
})

// edit user
server.put('/api/users/:id', async (req,res) => {
  const {id} = req.params;
  const editedUserInfo = req.body

  try {
    if (!editedUserInfo.name || !editedUserInfo.bio){
      res.status(400).json({mesage: "Please provide a name and bio for the user"})
    } else {
      let updatedUser = await User.update(id, editedUserInfo);

      if (!updatedUser){
        res.status(404).json({message: "The user with the specified ID does not exist"})
      } else {
        res.status(200).json(updatedUser);
      }
    }
  } catch(err){
    res.status(500).json({message: "The user information could not be modified"});
  }
})

// delete User
server.delete('/api/users/:id', async (req,res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.remove(id);
    if (!deletedUser){
      res.status(404).json({message: "The user with the specified ID does not exist"})
    } else {
      res.status(200).json(deletedUser);
    }
  } catch(err){
    res.status(500).json({message: "The user could not be removed" })
  }
})

server.use("*", (req,res) => {
  res.status(404).json({mesasge: 'Resource not found'});
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
