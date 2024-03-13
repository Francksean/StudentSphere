const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {

  console.log("authentification passée")
  res.send("authentification passée")
  next()
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Accès refusé' });
  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'token invalid' });
  }
};
