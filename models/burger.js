var orm = require("../config/orm.js");

// console.log(orm);

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    one: function(condition, cd) {
        orm.selectOne("burgers", condition, function(res){
            cd(res);
        });
    },
    // The variables cols and vals are arrays.
    insert: function (val, cb) {
        orm.insertOne("burgers", val, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

};





// Export the database functions for the controller (catsController.js).
module.exports = burger;