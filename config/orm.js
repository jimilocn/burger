var connection = require("../config/connection.js");

function questionMarksForQuery(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push("?");
    }
    return array.toString();
};

function objectConvertToSql(object) {
    var array = [];

    for (var key in object) {
        var value = object[key];

        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);

        }
    }
    return array.toString();
}




var orm = {
    all: function (input, callback) {
        var stringToQuery = "SELECT * FROM " + input + ";";
        connection.query(stringToQuery, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    create: function (table, columns, values, callback) {
        var stringToQuery = "INSERT INTO " + table;

        stringToQuery += " (";
        stringToQuery += columns.toString();
        stringToQuery += ") ";
        stringToQuery += "VALUES (";
        stringToQuery += questionMarksForQuery(values.length);
        stringToQuery += ") ";

        console.log(stringToQuery);

        connection.query(stringToQuery, values, function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },
    update: function (table, objectColumnValues, condition, callback) {
        var stringToQuery = "UPDATE " + table;

        stringToQuery += " SET ";
        stringToQuery += objectConvertToSql(objectColumnValues);
        stringToQuery += " WHERE ";
        stringToQuery += condition;

        console.log(stringToQuery);

        connection.query(stringToQuery, function (err, result) {
            if (err) throw err;
            callback(result)
        });
    }

}

module.exports = orm;