//connection of modules
const express= require('express');
const MongoClient= require('mongodb').MongoClient;
const bodyParser= require('body-parser');
const app= express();
 
//connection of server
const port = 8000;
app.listen(port, () => {
  console.log('Server connection on ' + port);
});