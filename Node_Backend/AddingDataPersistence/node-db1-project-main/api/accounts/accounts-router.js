const router = require('express').Router()
const Accounts = require('./accounts-model');
const { checkAccountPayload, checkAccountId, checkAccountNameUnique } = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Accounts.getAll();
    res.status(200).json(accounts);
  } catch(err){
    next(err);
  }
})

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  res.status(200).json(res.account);
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newPost = await Accounts.create(req.body);
    res.status(201).json(newPost);
  } catch(err){
    next(err)
  }
})

router.put('/:id', checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(500).json({ message: err.message, stack: err.stack });
})

module.exports = router;
