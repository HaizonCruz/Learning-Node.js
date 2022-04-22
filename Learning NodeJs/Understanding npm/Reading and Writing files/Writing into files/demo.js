var fs = require('fs')

var data = {
    name:'Haizon'
}

console.log("Not done")
fs.writeFileSync('data.json', JSON.stringify(data))
console.log("Done")