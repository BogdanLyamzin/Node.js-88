// const nodemon = require("nodemon");

const obj = require("./users");
// console.log(obj);

const {admins} = require("./users");
// console.log(admins);

// const {getCurrentMonth} = require("./dateFunctions");
// const currentMonth = getCurrentMonth();
// console.log(currentMonth)

const currentMonth = require("./dateFunctions").getCurrentMonth();
console.log(currentMonth);