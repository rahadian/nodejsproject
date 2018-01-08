var db = require('../db');
var Task = {
    getAllTasks: function (callback){
        return db.query('select * from t_artikel',callback);
    },
    getTaskById: function (idsection,dateFormat,callback){
        return db.query('select * from t_artikel where t_artikel.id_section=? and DATE(t_artikel.tgl_pub)<=? order by id_artikel ',[idsection,dateFormat],callback);
    }
    
};
module.exports = Task;