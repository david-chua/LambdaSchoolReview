// implement your posts router here
const express = require('express');

const router = express.Router();

const Post = require('./posts-model');

// Get Post comments
router.get('/:id/comments', async (req,res) => {
  const {id} = req.params;
  try {
    let post = await Post.findById(id);
    let postComments = await Post.findPostComments(id);
    if (!post){
      res.status(404).json({message: "The post with the specified ID does not exists"})
    } else if (!postComments.length){
      res.status(404).json({message: "There are no comments in this post"});
    } else {
      res.status(200).json(postComments);
    }
  }catch(err){
    res.status(500).json({message: "The comments information could not be retrieved"});
  }

})

// Get Posts By Id
router.get('/:id', async (req,res) => {
  try{
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post){
      res.status(404).json({message: "The post with the specified ID does not exist"});
    } else {
      res.status(200).json(post)
    }
  } catch(err){
    res.status(500).json({message: "The post information could not be retrieved"});
  }
})
// Get Posts
router.get('/', async (req,res) => {
  try{
    const posts = await Post.find();
    res.status(200).json(posts);
  }catch(err){
    res.status(500).json({message: "The posts information could not be retrieved"});
  }
})

// Create Post
router.post('/', async (req,res) => {
  try {
    const { title, contents } = req.body;
    if (!title || !contents){
      res.status(400).json({message: "Please provide title and contents for the post"});
    } else {
      let post = await Post.insert({title, contents});
      res.status(201).json(post)
    }
  } catch(err){
    res.status(500).json({message: "There was an error while saving the post to the database" });
  }
})

// Edit Post
router.put('/:id', async (req,res) => {
    try {
      const { id } = req.params;
      const { title, contents } = req.body;
      if (!title || !contents){
        res.status(400).json({message: "Please provide title and contents for the post"});
      } else {
        let editedPost = await Post.update(id, req.body);
        if (!editedPost){
          res.status(404).json({message: "The post with the specified ID does not exist"});
        } else {
          let returnedPost = await Post.findById(id);
          res.status(200).json(returnedPost);
        }
      }
    } catch(err){
      res.status(500).json({ message: "The post information could not be modified"});
    }
})

// Delete Post
router.delete('/:id', async(req,res) => {
  try {
    const {id} = req.params;
    let removedPost = await Post.remove(id);
    if (!removedPost) {
      res.status(404).json({message: "The post with the specified ID does not exists"});
    } else {
      res.status(200).json({message: `The user with ${id} has been deleted`})
    }
  } catch(err){
    res.status(500).json({message: "The post could not be removed"})
  }
})

module.exports = router;
