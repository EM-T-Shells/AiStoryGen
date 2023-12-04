const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const tokenWithoutBearer = token.replace('Bearer ', '');

  try {
    const decodedToken = jwt.verify(tokenWithoutBearer, 'secret_key');
    const userId = decodedToken.userId;
    const user = User.findById(userId);

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { requireAuth };