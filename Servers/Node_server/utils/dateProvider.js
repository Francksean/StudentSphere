/*
  le seul but de ce fichier est de diffuser les dates dans les
  routes du serveur
*/

const fullDate = new Date()

exports.date = () =>{ return fullDate.toISOString().split("T")[0];c} 
exports.actualMonth = () => { return fullDate.getMonth }
