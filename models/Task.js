var db=require('../db');
var Task = {
    getAllTasks:function(callback){
        return db.query('select * from t_user',callback);
    },
    getTaskById:function(id,callback){
        return db.query('select * from t_user where id=?',[id],callback);
    },
    addTask:function(Task,callback){
        return db.query('insert into t_user values(?,?,?,?,?)',[Task.id,Task.nama_lengkap,Task.email,Task.password,Task.profesi],callback);
    },
    deleteTask:function(id,callback){
        return db.query('delete from t_user where id=?',[id],callback);
    },
    updateTask:function(id,Task,callback){
        return db.query('update t_user set nama_lengkap=?,email=?,password=?,profesi=? where id=?',[Task.nama_lengkap,Task.email,Task.password,Task.profesi],callback);
    }
};
module.exports=Task;