const Schemes = require('./scheme-model.js')
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  const scheme = await Schemes.findById(req.params.scheme_id);
  if (!scheme){
    res.status(404).json({message: `scheme with scheme_id ${req.params.id} not found`})
  } else {
    next()
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  if (!req.body.scheme_name){
    res.status(400).json({message: "invalid scheme_name"})
  } else {
    next();
  }
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  let {instructions, step_number} = req.body
  if (!instructions || typeof(instructions) !== 'string' || step_number <= 0 || typeof(step_number) !== 'number'){
    res.status(400).json({message: "invalid step"})
  } else {
      next()
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
