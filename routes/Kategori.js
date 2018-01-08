var express = require('express');
var router = express.Router();
var Task = require('../models/Kategori');

router.get('/:year?/:month?/:day?',function(req,res,next){   
    if(req.params.year,req.params.month,req.params.day){
        var dateFormat = new Date(Date.UTC(req.params.year,req.params.month,req.params.day,0,0));
        console.log(dateFormat);
        Task.getTaskById(dateFormat,function(err,rows){
            
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
     }
    else{
        Task.getAllTasks(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});
module.exports=router;