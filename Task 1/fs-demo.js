const fs = require('fs');
const __path = require('path');
const readFiles = require('./readFiles');

const input = process.argv.splice(2)[0];

try{
    if(!input){
        throw new Error("Emptty Value Not Accepted");
    }
    if(!fs.statSync(input).isDirectory()){
        throw new Error("You have to enter directory name, not file name");
    }

    readFiles(input);
} catch(error){
    console.log("Directory Doesnot Exist");
}
