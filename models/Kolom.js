var db = require('../db');
var Task = {
    getAllTasks: function (callback) {
        return db.query('select * from t_artikel', callback);
    },
    getTaskById: function (dateFormat, callback) {
        return db.query('select t_artikel.*, t_section.id_section, t_section.nama_section, t_kolom.image, t_kolom.nama from t_artikel join t_section on t_artikel.id_section = t_section.id_section join t_kolom on t_artikel.kolom = t_kolom.id where DATE(t_artikel.tgl_pub)<=? ', [dateFormat], callback);
    }

};
module.exports = Task;