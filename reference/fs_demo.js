const fs = require('fs');
const path = require('path');

// Create folder, {} are for options
/*fs.mkdir(path.join(__dirname, 'test'), {}, function(err) {
     if (err) throw err;
    console.log('Folder Created...')
}); */

    //Also
/* fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
    if (err) throw err;
    console.log('Folder Created...')
}); */

// Create files
/* fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', function(err) {
    if (err) throw err;
    console.log('File Created...')

    // Append to file (In the callback)
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love Node.js!', function(err) {
        if (err) throw err;
        console.log('File Appended...')
    });
}); */

// Read Files
/* fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
}); */

// Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('File Renamed...')
});