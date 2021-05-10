const db = require('../../data/db-config');

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  // select * from posts
  return db('posts')
}

function getById(id) {
  return db('posts').where({id}).first();
}

async function create(newPost) {
  const [id] = await db("posts").insert(newPost);
  return getById(id);
}

async function update(id, {title, content}) {
  await db('posts').where('id', id).update({title, content})
  return getById(id);
}

async function remove(id) {
  const deletedPost = await getById(id)
  await db('posts').where('id', id).delete();
  return deletedPost;
}
