const jwt = require('jsonwebtoken');

const authenticateJwt = (req, res, next) => {
    // Bearer <jwt-token>
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const authorizeRole = (role) => (req, res, next) => {
    if (role === req.user?.role) {
        next();
    } else {
        res.sendStatus(403);
    }
};

module.exports = { authenticateJwt, authorizeRole };
