var db = require('../db');
var Task = {
    getAllTasks: function (callback) {
        return db.query('select * from t_halamanstatis ', callback);
    }
    // getTaskById: function (idsection, callback) {
    //     dbquery='';
    //     if (idsection == '2'){
    //         dbquery ='select * from t_artikel join t_section on t_artikel.id_section = t_section.id_section where t_artikel.id_section ="2" order by id_artikel DESC limit 10 offset 0 ';
    //     }else{
    //         dbquery ='select * from t_artikel join t_section on t_artikel.id_section = t_section.id_section where t_artikel.id_section ="130" order by id_artikel DESC limit 10 offset 0 ';
    //            }
    //     return db.query(dbquery, callback);
    // }
    
};
module.exports = Task;
