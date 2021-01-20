//The fs.writeFile() method replaces the specified file and content:
//Replace the content of the file "mynewfile1.txt":

var fs = require('fs');

fs.writeFile('mynewfile1.txt', '. The text was replaced!!!', function(err){
    if(err) throw err;
    console.log('Replaced!');
});