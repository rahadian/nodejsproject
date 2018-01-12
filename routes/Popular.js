var express = require('express');
var router = express.Router();
var Task = require('../models/Popular');

router.get(function(req,res,next){   
    // // if(req.params.year,req.params.day-1,req.params.month){
    // //     var dateFormat = new Date(Date.UTC(req.params.year,req.params.day-1,req.params.month,0,0));
    //     Task.getTaskById(dateFormat,function(err,rows){
            
    //         if(err)
    //         {
    //             res.json(err);
    //         }
    //         else{
    //             res.json(rows);
    //         }
    //     });
     //}
    // else{
        Task.getAllTasks(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    // }
});
module.exports=router;
