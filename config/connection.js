var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "jimilocn",
        password: "Cheese1!",
        database: "burgers_db"
    });
}
connection.connect(function (err) {
    if (err) throw err
    console.log("connected as id ", connection.threadId)
});

module.exports = connection;