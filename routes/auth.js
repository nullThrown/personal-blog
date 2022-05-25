const express = require('express');
const bcrypt = require('bcrypt');
const verifyUser = require('../middleware/auth');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {
  email_already_exists,
  server_error,
  resource_created,
  token_valid,
  token_invalid,
  invalid_credentials,
} = require('../util/responseTypes');

// ROUTE POST api/auth
// DESC check if token is valid
// ACCESS public

// middleware verifyUser will send a not_authorized response if token is invalid
router.get('/', verifyUser, async (req, res) => {
  res.status(200).json(token_valid);
});

// ROUTE POST api/auth/register
// DESC register a new user
// ACCESS public
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      res.status(422).json(email_already_exists);
    } else {
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);
      user = new User({ username, email, password: hashedPassword });
      await user.save();
      res.status(201).json(resource_created);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(server_error);
  }
});

// ROUTE POST api/auth/login
// DESC login a user
// ACCESS public
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).json(invalid_credentials);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json(invalid_credentials);
    }
    // authsecret
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: '20d' },
      (err, token) => {
        if (err) {
          return res.status(500).json(server_error);
        }
        res.json({
          token,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(server_error);
  }
});
module.exports = router;
