var db = require('../db');
var Task = {
    getAllTasks: function (callback) {
        return db.query('select * from t_artikel', callback);
    },
    getTaskById: function (hot,publish,dateFormat, callback) {
        return db.query('select * from t_artikel join t_section on t_artikel.id_section = t_section.id_section where t_artikel.hot=? and t_artikel.publish=? and DATE(t_artikel.tgl_pub)<=? order by tgl_pub DESC', [hot,publish,dateFormat], callback);
    }

};
module.exports = Task;