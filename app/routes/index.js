//Connection note_routes.js
const apiRoutes = require('./myapi_routes');
//Exporting function
module.exports = function(app, db) {
  apiRoutes(app, db);
  
};