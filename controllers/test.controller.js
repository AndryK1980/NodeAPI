const TestProduct=require('../models/test.model');

exports.test=function(req,res){
    res.send('Working controller');
}

exports.productcreate=function(req,res,next){
    let product=new TestProduct({
        name: req.body.name,
        price: req.body.price
    });
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('TestProduct Created successfully')
    })
};
exports.productdatails=function(req,res,next){
    TestProduct.findById(req.params.id, function(err,product){
        if(err){
            return next(err);
        }
        res.send(product);
    });
};
exports.productupdate=function(req,res,next){
    TestProduct.findByIdAndUpdate(req.params.id,{$set: req.body},
        function(err,product){
            if (err) {
                console.log(err);
                return next(err);
            }
            res.send('TestProduct udpate.');
    });
};
exports.productdelete=function(req,res,next){
    TestProduct.findOneAndDelete(req.params.id,function(err){
        if (err) {
            return next(err);
        }
        res.send('TestProduct deleted.');
    })
};
exports.allproducts=function(req,res,next){
    TestProduct.find({},function(err,product){
        if (err) {
            return next(err);
        }
       // console.log(product);
        res.send(product);
    });
};
