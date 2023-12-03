const fs = require('fs');
const readFile = async () =>{
    try {
        const data = await fs.readFileSync('fread.txt');
        console.log(data.toString());
    }
    catch (err) { console.error('Failed to read file', err) };
  
            
}

readFile()
console.log("Welcome to Node.js")