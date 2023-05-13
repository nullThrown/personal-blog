const express = require('express');
const mongoose = require('mongoose');
const verifyUser = require('../middleware/auth');
const router = express.Router();
const User = require('../models/User');
const {
  server_error,
  resource_created,
  resource_deleted,
  resource_updated,
} = require('../util/responseTypes');

// ROUTE POST api/post/create
// DESC create a new blog post
// ACCESS private
router.post('/create', verifyUser, async (req, res) => {
  const { author, title, body, category, private, keywords } = req.body;
  try {
    const newPost = {
      author,
      title,
      body,
      category,
      private,
      keywords,
    };
    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        $push: { posts: newPost },
      },
      {
        returnOriginal: false,
      }
    );
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(server_error);
    console.log(err);
  }
});

// ROUTE PUT api/post/edit
// DESC edit a blog post
// ACCESS private
// this might need to return the edited post...
router.put('/edit', verifyUser, async (req, res) => {
  const { author, title, body, category, private, keywords } = req.body;
  const postId = mongoose.Types.ObjectId(req.body.postId);
  const updatedPost = {
    author,
    title,
    body,
    category,
    private,
    keywords,
  };
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user.id, 'posts._id': postId },
      {
        $set: {
          'posts.$.author': author,
          'posts.$.title': title,
          'posts.$.body': body,
          'posts.$.category': category,
          'posts.$.private': private,
          'posts.$.keywords': keywords,
        },
      },
      { returnOriginal: false, setDefaultsOnInsert: false }
    );
    res.status(200).json(resource_updated);
  } catch (err) {
    res.status(500).json(server_error);
    console.log(err);
  }
});

// ROUTE GET api/post/all
// DESC get all posts
// ACCESS private
router.get('/all', verifyUser, async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user.posts);
  } catch (err) {
    res.status(500).json(server_error);
    console.log(err);
  }
});

// ROUTE GET api/post/:id
// DESC get single blog post
// ACCESS private
router.get('/:id', verifyUser, async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    const post = user.posts.find((post) => {
      return String(post._id) === postId;
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(server_error);
    console.log(err);
  }
});

// ROUTE DELETE api/post/delete/:id
// DESC delete a single blog post
// ACCESS private
router.delete('/delete/:id', verifyUser, async (req, res) => {
  const postId = req.params.id;
  console.log(postId);
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $pull: { posts: { _id: postId } } },
      { returnOriginal: false }
    );
    res.status(200).json(user.posts);
  } catch (err) {
    console.log('server error');
  }
});
module.exports = router;
