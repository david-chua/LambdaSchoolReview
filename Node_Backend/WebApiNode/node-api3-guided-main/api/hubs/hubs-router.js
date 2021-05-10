const express = require('express');
const { checkId, validateHub } = require('./hubs-middleware');
const Hubs = require('./hubs-model.js');
const Messages = require('../messages/messages-model.js');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   Hubs.find(req.query)
//     .then(hubs => {
//       throw new Error();
//       // res.status(200).json(hubs);
//     })
//     .catch(next);
// });

router.get('/', async (req,res,next) => {
  try {
    const hubs = await Hubs.find(req.query);
    res.status(200).json(hubs);

  } catch(err){
    next(err)
  }
})

router.get('/:id', checkId, (req, res) => {
  res.json(req.hub);
});

router.post('/', validateHub, (req, res) => {
  Hubs.add(req.body)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error adding the hub',
      });
    });
});

router.delete('/:id', checkId, (req, res, next) => {
  Hubs.remove(req.params.id)
    .then(count => {
      res.status(200).json({message: "The hub has been nuked"});
    })
    .catch(next);
});

router.put('/:id', checkId, (req, res) => {
  Hubs.update(req.params.id, req.body)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the hub',
      });
    });
});

router.get('/:id/messages', (req, res) => {
  Hubs.findHubMessages(req.params.id)
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the messages for the hub',
      });
    });
});

router.post('/:id/messages', checkId, (req, res) => {
  const messageInfo = { ...req.body, hub_id: req.params.id };

  Messages.add(messageInfo)
    .then(message => {
      res.status(210).json(message);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error adding message to the hub',
      });
    });
});

router.use((err, req, res, next) => {
   res.status(500).json({
     message: err.messasge, // DEV
     stack: err.stack, // DEV
     custom: "Something went terrible" // Production
   })
})


module.exports = router;
