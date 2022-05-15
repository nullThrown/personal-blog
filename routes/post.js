const express = require('express');
const res = require('express/lib/response');
const verifyUser = require('../middleware/auth');
const router = express.Router();
const User = require('../models/User');
const { server_error } = require('../util/responseTypes');
// ROUTE POST api/post/create
// DESC create a new blog post
// ACCESS private
router.post('/create', verifyUser, async (req, res) => {
  const { username, title, body, category, keywords } = req.body;
  try {
    const newPost = {
      author,
      title,
      body,
      category,
      keywords,
    };
    const user = await User.findOneAndUpdate(
      { username: username },
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
// ROUTE PUT api/post/edit/
// DESC edit a blog post
// ACCESS private
router.put('/edit', verifyUser, async (req, res) => {
  const { username, title, body, category, keywords, postId } = req.body;
  const updatedPost = {
    author: username,
    title,
    body,
    category,
    keywords,
  };
  try {
    const user = await User.findOneAndUpdate(
      { username: username, 'posts._id': postId },
      {
        $set: { 'posts.$': updatedPost },
      },
      { returnOriginal: false }
    );
    // we'll figure out what to send here
    res.status.json({ whatSend: "don't know" });
  } catch (err) {
    res.status(500).json(server_error);
    console.log(err);
  }
});
// ROUTE GET api/post/all/:username
// DESC get all posts
// ACCESS private
router.get('/all/:username', verifyUser, async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username: username });
    res.status(200).json(user.posts);
  } catch (err) {
    res.status(500).json(server_error);
    console.log(err);
  }
});
// ROUTE DELETE api/post/delete/:username/:id
// DESC delete a single blog post
// ACCESS private
router.delete('delete/:username/:id', verifyUser, (req, res) => {
  const { username, id } = req.params;

  try {
    const user = User.findOneAndUpdate(
      { username: username },
      // id might need to be converted into an object
      { $pull: { posts: { _id: id } } },
      { returnOriginal: true }
    );
    res.status(200).json(user.posts);
  } catch (err) {
    console.log('server error');
  }
});
module.exports = router;
