<?php
$bdd = new PDO('mysql:host=localhost;dbname=projet;charset=utf8', 'root', '');


//$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

function getAllProducts($bdd){
    $requete = ('CALL GetAllProducts()');
    $products=$bdd->query($requete);
}

function getProductsByCategory($bdd, $category){
    $requete= ('CALL GetProductsByCategory (:$category)');
    $products=$bdd->query($requete);
}

if (isset($_GET['category'])){
    $category = $_GET['$category'];
    switch ($category) {
        case 'fruits':
            getProductsByCategory($bdd, 'fruits');
            break;
        case 'hygiene':
            getProductsByCategory($bdd, 'hygiene');
            break;
        case 'googies':
            getProductsByCategory($bdd, 'goodies');
            break;
        case 'déjeuner':
            getProductsByCategory($bdd, 'déjeuner');
            break;
        default:
            getAllProducts($bdd);
            break;
        }
}else{
    getAllProducts($bdd);
}

$requete = 'SELECT DISTINCT category FROM products';
$products=$bdd->query($requete);
$category = array();

if($products->num_rows  >0){
    $category[] = $row['category'];
}

?>