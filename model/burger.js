// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // creates a burger
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // updates(devours it) burger
    update: function(condition, cb) {
        orm.update("burgers", { devoured: true }, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;