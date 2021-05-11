const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id }  = req.params;
  const car = await Cars.getById(id);
  if (!car){
    res.status(404).json({message: `car with id ${id} is not found`})
  } else {
    next();
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body;
  if (!vin){
    res.status(404).json({message: `vin is missing`})
  } else if (!make){
    res.status(404).json({message: `make is missing`})
  } else if (!model){
    res.status(404).json({message: `model is missing`})
  } else if (!mileage){
    res.status(404).json({message: `mileage is missing`})
  } else {
    next();
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  let isValidVin = vinValidator.validate(vin);
  if (isValidVin){
    next();
  } else {
    res.status(400).json({message: `vin ${vin} is invalid`})
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  const { id } = req.params;

  const car = await Cars.getByVin(vin);

  if (car && car.id != id){
    res.status(400).json({message: `vin ${vin} already exists`})
  } else {
    next();
  }
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
