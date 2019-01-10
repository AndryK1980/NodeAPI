const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//Added test schema
let TestProductShema=new Schema({
    name:{type: String, required:true, max: 80},
    price:{type: Number,required:true}
});
//Export the model
module.exports=mongoose.model('TestProduct',TestProductShema);
