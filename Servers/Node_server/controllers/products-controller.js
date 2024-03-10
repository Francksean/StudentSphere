exports.get_all_products = (req, res) => {

  console.log('ok fin')

  const connection = res.locals.currentConnection

  const feed = connection.query('SELECT * FROM products', (error, results) => {
    if(error){
      res.json({ success : false, message : "Problème lors du chargement des produits ",error : error });
    }else{
      res.json({ success : true, results : results });
    }
  });
}

exports.get_product_by_category = (req, res) => {

  const { category } = req.body;

  const connection = res.locals.currentConnection
  
  /* 
    une alternaive serait :
    const feed = connection.query(`SELECT * FROM products WHERE category = ?`, [category], (error, results) => {
  */
  const feed = connection.query(`SELECT * FROM products WHERE category = '${category}'`, (error, results) => {
    if(error){
      res.json({ success : false, error : error})
    }else{
      // console.log(results)
      res.json({ success : false, results : results });
    }
  })
}