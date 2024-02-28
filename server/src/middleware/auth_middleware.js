const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (token) {
    // eslint-disable-next-line consistent-return
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const authorizeRole = (role) => (req, res, next) => {
  if (req.user && req.user.role === role) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = { authenticateJWT, authorizeRole };
