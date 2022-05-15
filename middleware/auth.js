const jwt = require('jsonwebtoken');
const { unauthenticated } = require('../util/responseTypes');

const verifyToken = (req, res, next) => {
  const token = req.header('x_auth_token');

  if (!token) {
    return res.status(400).json({ error: unauthenticated });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded.user;
  } catch (err) {
    return res.status(400).json({ error: unauthenticated });
  }
  next();
};
module.exports = verifyToken;
