var express = require('express');
var router = express.Router();
var Task = require('../models/Artikel');

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        
        Task.getTaskById(req.params.id,function(err,rows){
            // Task.getTaskById(req.'4',function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
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