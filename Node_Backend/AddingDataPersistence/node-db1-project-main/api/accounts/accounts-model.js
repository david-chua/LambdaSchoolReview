const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where({id}).first();
}

const create = async account => {
  // DO YOUR MAGIC
  const [ id ] = await db('accounts').insert(account);
  return getById(id);
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('accounts').where({id}).update(account);
  return getById(id);
}

const deleteById = async id => {
  // DO YOUR MAGIC
  const deletedAccount = await getById(id);
  await db('accounts').where({id}).delete();
  return deletedAccount;
}

const getByName = name => {
  return db('accounts').where({name}).first();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
