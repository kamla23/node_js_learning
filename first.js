
import fs from 'fs';
fs.writeFile("output.txt", "writting files", (err) => {
    if(err)console.log("error occured");
    else console.log("File written successfully");
});



