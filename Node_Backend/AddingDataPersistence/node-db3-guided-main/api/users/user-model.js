// user-model
const db = require("../../data/db-config.js");

function getUserPosts(user_id){
  return db("users as u")
    .join("posts as p", "p.user_id", "u.id")
    .select("p.id as PostId", "p.contents as Post", "u.username as Philosopher")
    .where("u.id", user_id)
}


module.exports = {
  getUserPosts
}
