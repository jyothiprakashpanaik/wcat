const fs = require('fs');
const path = require('path');
function sPrefix(data) {
     let fileContent = data.split("\r\n");
     let processData = "";
     for(let line=0;line<fileContent.length;line++){
          if(fileContent[line]=="") continue;
          processData+=fileContent[line]+"\r\n";
     }
     return processData;
}

function nPrefix(data,count) {
     let fileContent = data.split('\r\n');
     let processData = "";
     for(let line=0;line<fileContent.length;line++){
          processData += count.toString()+" "+fileContent[line]+"\r\n";
          count++;
     }
     return processData;
}


module.exports = {
     sKey : sPrefix,
     nKey : nPrefix,
}