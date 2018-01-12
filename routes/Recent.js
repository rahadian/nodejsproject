var express = require('express');
var cors = require('cors');
var router = express.Router();
var app = express()
app.use(cors());
var Task = require('../models/Recent');

router.get('/',function(req,res,next){ 
    // if(req.params.publish,req.params.fokus,req.params.kolom){
    //     var dateFormat = new Date(Date.UTC(req.params.year,req.params.day-1,req.params.month,0,0));
    //     Task.getTaskById(req.params.publish,req.params.fokus,req.params.kolom,function(err,rows){
            
    //         if(err)
    //         {
    //             res.json(err);
    //         }
    //         else{
    //             res.json(rows);
    //         }
    //     });
    //  }
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
    //}
});
module.exports=router;

