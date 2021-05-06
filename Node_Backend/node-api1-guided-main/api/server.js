// IMPORTS AT THE TOP
const express = require('express');
const Dog = require('./dog-model')
// INSTANCE OF EXPRESS APP
const server = express();
// GLOBAL MIDDLEWARE
server.use(express.json());
// ENDPOINTS




// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id', (req,res) => {
  const id = req.params.id;
  Dog.findById(id)
    .then(dog => {
      res.status(200).json(dog)
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
})
// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get('/api/dogs', (req,res) => {

  Dog.findAll()
    .then(dogs => {
        res.status(200).json(dogs);

    })
    .catch(err => {
      res.status(500).json({message: err.message })
    })
})
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
server.post('/api/dogs', (req,res) => {
  const newDog = req.body
  Dog.create(newDog)
  .then(dog => {
    res.status(200).json(dog);
  })
  .catch(err => {
    console.log(err)
  })
})
// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)

server.put('/api/dogs/:id', async (req,res) =>{
  const { id } = req.params;
  const changes = req.body;

  try {
    if (!changes.name || !changes.weight){
      res.status(422).json({mesage: 'name and weight are required'})
    } else {
      const updatedDog = await Dog.update(id, changes);
      if (!updatedDog){
        res.status(404).json({message: "That dog does not exist in db"})
      } else {
        res.json(updatedDog);
      }
    }
  } catch(err){
    res.status(500).json({message: err.message});
  }

})
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)
server.delete('/api/dogs/:id', async (req,res) => {
  const { id } = req.params;

  try {
    const deleted = await Dog.delete(id)
    if (!deleted){
      res.status(404).json({message: 'that dog is not found in db'})
    } else {
      res.status(201).json(deleted);
    }
  } catch(err){
    res.status(500).json({message: err.message })
  }
})

// [GET] / (Hello World endpoint)
server.use('*', (req, res) => {
  // here we do whatever with the request from the client
  res.status(404).json({message: 'Resource not found' });
});

// EXPOSING THE SERVER TO OTHER MODULES


module.exports = server;
