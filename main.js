#!/usr/bin/env node

let inputArr = process.argv.slice(2);
// console.log(inputArr);
const helpObj = require('./commands/help');
const readObj = require('./commands/read');
const nObj = require('./commands/prefix');
const sObj = require('./commands/prefix');

let command = inputArr;
let data = "";
let count = 1;
let operations = ["-s","-b","-n"]
let fileList = []
let operTODO = []

function readFileHelper() {
     for(let i=0;i<command.length;i++){
          if(operations.includes(command[i])){
               operTODO.push(command[i]);
          } 
          else{
               fileList.push(command[i]);
          }    
     }

     for(let i=0;i<fileList.length;i++){
          data += readObj.readKey(fileList[i])+"\r\n";
     }

     return data;  
}

if(command.length==0 || command[0]=="-help"){
     console.log("please Enter a valid command :)")
     helpObj.helpKey();
     
} 

else if (command.length) {

     data = readFileHelper();

     if(operTODO.includes("-s")){
          // -s prefix
          data = sObj.sKey(data);
     }

     if(operTODO.includes("-n")){
          // -n prefix
          data = nObj.nKey(data,count);
     }

     if(operTODO.includes("-b")){
          // -b prefix
          data = sObj.sKey(data);
          data = nObj.nKey(data,count);
     }


     console.log(data);
}

else {
     console.log("Enter a valid command");
     console.log("please tpye wcat -help.")
}