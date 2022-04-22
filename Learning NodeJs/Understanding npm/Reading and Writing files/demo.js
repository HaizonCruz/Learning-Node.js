//reading from data.json

var fs = require('fs')

fs.readFile('./data.json','utf-8', (err,data) =>{
    console.log(data)
    console.log("Error is "+err)
})

var data = require('./data.json')
console.log(data.name)