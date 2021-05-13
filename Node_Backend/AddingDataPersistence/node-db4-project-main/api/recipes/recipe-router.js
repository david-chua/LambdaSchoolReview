const express = require('express');

const db = require('../../data/db-config')

const router = express.Router();


router.get('/', (req,res,next) =>{
  res.json({message: 'recipe router hit'})
})


module.exports = router;
