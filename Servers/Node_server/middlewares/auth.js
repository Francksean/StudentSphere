const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  console.log('ok ok')
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    console.log('yessss')
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
  next()
};