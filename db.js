var mysql = require('mysql'),
    connection = mysql.createPool({
        host:'localhost',
        user:'root',
        password:'b4l4d4or4ngtu4',
        database:'rilis'
    });
    module.exports=connection;
