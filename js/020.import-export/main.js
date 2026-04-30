const data = require("./utils.js");

const string = require("./defaultExport.js")

const DATA = require("../017.json/data.json")
console.log("🚀 ~ DATA:", DATA)


console.log("🚀 ~ string:", string)


console.log("🚀 ~ data:", data.name);
console.log("🚀 ~ data:", data.age);


data.printName()