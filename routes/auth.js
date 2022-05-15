const express = require('express');
const verifyUser = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();
const { email_already_exists, server_error } = require('../models/fieldTypes');
// ROUTE POST api/auth/register
// DESC register a new user
// ACCESS public
router.post('/register', async (req, res) => {
  const { username } = req.body;
  try {
    let user = await User.findOne({ username: username });
    if (user) {
      res.status(422).json(email_already_exists);
    } else {
      user = new User({ username });
      await user.save();
      res.status(201).json(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(server_error);
  }
});

// ROUTE POST api/auth/login
// DESC login a user
// ACCESS public
router.post('/login', verifyUser, async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username: username }).populate('entries');
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(server_error);
  }
});
module.exports = router;
