const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {

  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Accès refusé' });
  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.userId = decoded.userId;
    console.log('middleware 2')
    next();
  } catch (error) {
    res.status(401).json({ error: 'token invalid' });
  }
};
