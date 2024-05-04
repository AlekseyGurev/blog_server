const { verifyToken } = require('../helpers/token');
const User = require('../models/User');

async function auth(req, res, next) {
  const tokenData = verifyToken(req.cookies.token);
  const user = await User.findOne({ _id: tokenData.id });

  if (!user) {
    res.send({ error: 'Auth user not found' });
    return;
  }

  req.user = user;
  next();
}

module.exports = auth;
