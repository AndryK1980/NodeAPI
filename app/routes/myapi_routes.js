module.exports = function(app, db) {
    app.post('/create',(req,res)=>{
        const api={text:req.body.body,title:req.body.title};
        db.collection('mydb').insert(api,(err,result)=>{
            if(err){
                res.send({'error':'Bug in BD'})
            }else{
                res.send(result.ops[0]);
            }
        });
        console.log(req.body);
        res.send('Metode Create');
    });
};