var create  = require("./createFileStore.js");
var read = require("./readFileStore");
var remove = require("./deleteFileStore");

module.exports = choice = {
    create,
    read,
    remove
}



