var mysql      = require('mysql');
var operations = require('./operations');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'abcd',
    password : 'aaaa',
    database : 'somedb'
});

function connectDB(){
    connection.connect();
}

function getData(mb) {
    operations.display(connection, function (data) {
        mb(data);
    });
}

function getVal(value,cb){
    operations.add(connection, function (inn) {
        cb(inn);
    },value)
}
module.exports={
    connectDB,
    getData,
    getVal
};