const path = require('path');

// Basename
console.log(path.basename(__filename));

// Directory Name
console.log(path.dirname(__filename));
    // OR
console.log(__dirname)

// File Extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).dir)
console.log(path.parse(__filename).name)
// Etc...

// Concatenate paths, dirname, directory, file
console.log(path.join(__dirname, 'hello.html'))