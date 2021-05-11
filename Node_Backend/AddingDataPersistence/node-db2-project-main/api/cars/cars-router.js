// DO YOUR MAGIC
const express = require('express');

const Cars = require('./cars-model');
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
} = require('./cars-middleware');

const router = express.Router();


router.get('/', async (req,res, next) => {
  try{
    const cars = await Cars.getAll();
    res.status(200).json(cars);
  } catch(err){
    next(err)
  }
});

router.get('/:id', checkCarId, async(req,res,next) => {
  try{
    const car = await Cars.getById(req.params.id);
    res.status(200).json(car);
  } catch(err){
    next(err)
  }
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req,res,next) => {
  try{
    const newCar = await Cars.create(req.body);
    res.status(201).json(newCar);
  }catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  console.log(err);
  res.status(500).json({ message: err.message, stack: err.stack });
})


module.exports = router;
