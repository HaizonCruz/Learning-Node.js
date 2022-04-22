/* Synchronous version of the code

fs = require('fs');

data = fs.readdirSync('C:/');
console.log('data:',data);


console.log("this comes after");

*/

/*
Asynchronous code
*/

fs = require('fs');

function PhoneNumber(err,data){
    console.log('data:', data);
}

fs.readdir('C:/', PhoneNumber);
console.log("This comes after");