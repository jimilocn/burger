var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "jimilocn",
    password: "Cheese1!",
    database: "burger_db"
});

connection.connect(function(err){
    if (err) throw err
    console.log("connected as id ", connection.threadId)
});

module.exports = connection;