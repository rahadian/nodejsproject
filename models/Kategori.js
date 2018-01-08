var db = require('../db');
var Task = {
    getAllTasks: function(callback){
        return db.query('select * from t_artikel',callback);
    },
    getTaskById: function(dateFormat,callback){
        return db.query('select * from t_artikel join t_section on t_artikel.id_section = t_section.id_section where DATE(t_artikel.tgl_pub)<=? order by t_artikel.tgl_pub DESC LIMIT 27 OFFSET 0 ',[dateFormat],callback);
    }
    
};
module.exports=Task;