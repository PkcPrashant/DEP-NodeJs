const fs = require('fs');
const __path = require('path');
const fileToHash = require('./fileToHash');

const readFiles = (path) => {
    fs.readdir(path, (error, files)=>{
        console.log("Reading your files...", path);
        files.forEach(file => {
            let fileFullPath = __path.join(__dirname, path, file);
            if(fs.statSync(fileFullPath).isDirectory()){
                readFiles(__path.join(path, file));
            } else {
            console.log("Reading File ", file);
            let output = `
            ${fileFullPath}
                [MD5]  -> ${fileToHash(fileFullPath, "md5")}
                [SHA1] -> ${fileToHash(fileFullPath, "sha1")}
            `;

            fs.appendFileSync("output.txt", output);
            console.log("Writting completed to file output.txt");
            }
        })
    })
}

module.exports = readFiles;