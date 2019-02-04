//connection of modules
const express= require('express');
const bodyParser= require('body-parser');
const app= express();
 
//added routes
const testProduct=require('./routes/test.route');


//moonguse connect
const mongoose=require('mongoose');
let dev_db_url='mongodb://user:qwerty12345@ds121495.mlab.com:21495/dbnodeapi';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/testproducts', testProduct);
//connection of port
const port = 8000;


    app.listen(port, () => {
  console.log('Server connection on ' + port);
});

