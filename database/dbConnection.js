var mysql = require('mysql')
// var dbpath = "127.0.0.1:3306"
// var connection = mysql.createConnection({
//     host : "localhost",
//     user : "root" ,
//     password : "123456"
// })


// connection.connect(function(err){
//    if(err) throw err;
//    console.log("connected!");
// })

 const connection =mysql.createPool({
    connectionLimit : 10 ,
    password : '123456',
    user : 'root',
    database : 'gym',
    host : 'localhost',
    port :'3306'
    
});






module.exports = connection;