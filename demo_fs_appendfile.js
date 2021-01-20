//The fs.appendFile() method appends the specified content at the end of the specified file:
//Append "This is my text." to the end of the file "mynewfile1.txt":

var fs = require('fs');

fs.appendFile('mynewfile1.txt', '. This is my text!!!', function(err){
    if(err) throw err;
    console.log('Updated!');
});