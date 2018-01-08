var db = require('../db');
var Task = {
    getAllTasks: function (callback) {
        return db.query('select * from t_artikel', callback);
    },
    getTaskById: function (dateFormat,idsection, callback) {
        return db.query('select * from t_artikel join t_section on t_artikel.id_section = t_section.id_section where DATE(t_artikel.tgl_pub)<=? and t_artikel.id_section =? or t_artikel.id_section=? order by id_artikel DESC limit 10 offset 0 ', [dateFormat,13,130], callback);
    }

};
module.exports = Task;