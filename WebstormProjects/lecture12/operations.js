function display(connection,cb){
    connection.query('SELECT * FROM courses', function (error, results, fields) {
        if (error) throw error;
        cb(results);
    });
}

function add(connection,cb,val){
    connection.query(`INSERT INTO courses (name) VALUES ('${val}')`,function(error, results, fields){
        if (error) throw error;
        cb(results);
    });

}

module.exports={
    display,
    add
}