var test = require('./Options');

var key ="FirstData";
var data ={
    name : "Manovasanth",
    RollNo : 170801096,
    College  : "Rajalakshmi Engineering College",
}
test.create(key,data,ttl = 200);