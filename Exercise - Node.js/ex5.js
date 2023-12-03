const fs = require('fs');
const readFile = async () =>{
    const data = await fs.readFileSync('fread.txt');
    console.log(data.toString());           
}

readFile()
console.log("Welcome to Node.js")