const fs = require('fs')
fs.readFile('fread.txt',(error, data) => {
  if (error) throw err;
  else {
    console.log(data.toString());
    console.log('Read Completed');
  }
  
});


console.log('Welcome to Node.js');