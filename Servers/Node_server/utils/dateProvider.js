/*
  le seul but de ce fichier est de diffuser les dates dans les
  routes du serveur
*/

const fullDate = new Date()

const date = fullDate.toISOString().split("T")[0];
const actualMonth = fullDate.getMonth

module.exports = { date, actualMonth };