const fs = require('fs');
const path = require('path');

function readFileFn(fileName) {
     if(fs.existsSync(fileName)){
          return readFileUtility(fileName);
     } else {
          let filePath = path.join(process.cwd(),fileName);
          let fileExist = fs.existsSync(filePath);
          if (fileExist==true){
               return readFileUtility(fileName);
          } else {
               console.log("File does not exists in the path.",fileName);
          }
     }
     return "";
}

function readFileUtility(filePath) {
     try{
          let data = fs.readFileSync(filePath,'utf-8');
          return data;
     } catch (err) {
          console.log(err);
     }
     return;   
}

module.exports = {
     readKey: readFileFn
}