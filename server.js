//connection of modules
const express= require('express');
const bodyParser= require('body-parser');
const app= express();
 
//added routes
const testProduct=require('./routes/test.route');

app.use('/testproducts', testProduct);
//connection of port
const port = 8000;


    app.listen(port, () => {
  console.log('Server connection on ' + port);
});

