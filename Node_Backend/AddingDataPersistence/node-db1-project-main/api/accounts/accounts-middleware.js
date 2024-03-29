const Account = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { name, budget } = req.body;
  if (!name || budget == undefined ){
      res.status(400).json({message: "Name and budget are required"})
  } else if(typeof(name) !== "string") {
      res.status(400).json({message: "name of account must be a string"})
  } else if (name.trim().length < 3 || name.trim().length > 10){
      res.status(400).json({message: "name of account must be between 3 and 100"})
  } else if (typeof(budget) !== 'number'){
      res.status(400).json({message: "budget of account must be a number"})
  } else if (budget <= 0 || budget >= 1000000){
      res.status(400).json({message: "budget of account is too large or too small"})
  } else {
    next();
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { name } = req.body;
  const { id } = req.params;

  const account = await Account.getByName(name);
  
  if (account && account.id != id){
    res.status(400).json({message: "name is taken"});
  } else {
    next();
  }

}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const account = await Account.getById(id);
  if (!account){
    res.status(404).json({message: "account not found"})
  } else {
    res.account = account;
    next();
  }
}
