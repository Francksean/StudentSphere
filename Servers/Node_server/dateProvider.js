/*le seul but de ce fichier est de diffuser les dates dans les
routes du serveur
*/

const date = new Date().toISOString().split("T")[0];

module.exports = date;