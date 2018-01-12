var db = require('../db');
var Task = {
    getAllTasks: function(callback){
        return db.query('select * from t_artikel join t_section on t_artikel.id_section = t_section.id_section where t_artikel.publish = ? and t_artikel.fokus = ? and t_artikel.kolom = ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? order by t_artikel.tgl_pub DESC LIMIT 9 ',['Y',0,0,2,126,127,128,129,130],callback);
    }
    // getTaskById: function(publish,fokus,kolom,callback){
    //     return db.query('select * from t_artikel join t_section on t_artikel.id_section = t_section.id_section where t_artikel.publish = ? and t_artikel.fokus = ? and t_artikel.kolom = ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? and t_artikel.id_section <> ? order by t_artikel.tgl_pub DESC LIMIT 9 ',['Y',0,0,2,126,127,128,129,130],callback);
    // }
    
};
module.exports=Task;

