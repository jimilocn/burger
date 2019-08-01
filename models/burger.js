var orm = require("../config/orm.js");

var burger = {
    all: function(callback){
        orm.all("burgers", function(response){
            callback(response);
        });
    },
    create: function (columns, values, callback){
        orm.create("burgers", columns, values, function(response){
            callback(response)
        });
    },
    update: function(objectColsAndVals, condition, callback){
        orm.update("burgers", objectColsAndVals, condition, function(response){
            callback(response);
        });
    },
    delete: function(condition,callback){
        orm.delete("burgers", condition, function(response){
            callback(response)
        })
    }

};

module.exports = burger;