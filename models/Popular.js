var db = require('../db');
var Task = {
    getAllTasks: function(callback){
        return db.query('select * from t_artikel order by dibaca DESC LIMIT 5 ',callback);
    }
    // getTaskById: function(callback){
    //     return db.query('select * from t_artikel order by dibaca DESC LIMIT 5 ',callback);
    // }
    
};
module.exports=Task;

