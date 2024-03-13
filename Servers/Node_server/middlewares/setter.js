//pour paramétrer les headers des requêtes  console.log('middleware 1')


exports.setReqHeader = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  next()
}