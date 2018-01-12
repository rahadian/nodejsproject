var db = require('../db');
var Task = {
    getAllTasks: function (callback) {
        return db.query('select * from t_artikel', callback);
    },
    getTaskById: function (hot,publish, callback) {
        return db.query('select * from t_artikel join t_section on t_artikel.id_section = t_section.id_section where t_artikel.hot=? and t_artikel.publish=? order by tgl_pub DESC', [hot,publish], callback);
    }

};
module.exports = Task;
