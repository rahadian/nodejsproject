var db = require('../db');
var Task = {
    getAllTasks: function(callback){
        return db.query('select * from t_artikel',callback);
    },
    getTaskById: function(dateFormat,callback){
        return db.query('select * from t_artikel where DATE(t_artikel.tgl_pub)<=? order by dibaca DESC LIMIT 5 ',[dateFormat],callback);
    }
    
};
module.exports=Task;