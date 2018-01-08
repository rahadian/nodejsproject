var express = require('express');
var router = express.Router();
var Task = require('../models/Task');

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
router.delete('/:id?',function(req,res,next){
    console.log(req.params.id);
        Task.deleteTask(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.post('/',function(req,res,next){

    Task.addTask(req.body,function(err,count){

        console.log(req.body);
        if(err)
        {
            res.json(err);
        }
        else{
                res.json(req.body);//or return count for 1 & 0
        }
    });
});
module.exports=router;