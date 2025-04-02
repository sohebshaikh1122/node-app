// console.log("====== global-objects.js =======");
// require('./global-object');

// console.log("====== os-module.js =======");
// require('./os-module');

// console.log("====== path-module.js =======");
// require('./path-module');

// console.log(`====================Read the file================================`);
const fs = require(`fs`)
// fs.readFile('sample.txt', 'utf8',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
    
// } )
// console.log(`=====retrieve information about a file or directory====`);
const filepath = 'output.txt';
// fs.stat(filepath , (err,stats)=>
// {
//     if (err) {
//         console.log(err);
//       return;  
//     }
//Access the properties of the status object
// console.log('File size:',stats.size + 'bytes');
// console.log(`is a file`,stats.isFile());
// console.log(`is a directory`, stats.isDirectory());
// console.log(`file birthtime (creation time):`,stats.birthtime);
// console.log(`file modification time:`, stats.mtime)});

//data append
// const apendData = "---------* soheb shaikh *-------------";
// fs.appendFile(filepath,apendData, (err)=>{
//     if (err) {
//         console.log(err);
//         return ;
//     }
//     console.log(`append data sucefully...`);
// });

// const filepath1 = 'sample.txt';
// fs.unlink(filepath1,(err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File delete sucefully...");
// })

// const directory= 'new_directory';
// fs.mkdir(directory,(err)=>
// {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(`Directory created sucefully----`);
    
// })

// console.log(`-------------------Date:25-03-2025: Assignment--------------------------`);
// console.log("====== url-module.js =======");
// require('./url-module');
// console.log(`==================how to start server========================`);
// const http = require('http');

// const httpServer = http.createServer( (request, response)=>{
//     console.log("I have received request....");
//     console.log('Let me response....');
//     response.end("Hello, from server....");
// } );

// httpServer.listen(8080, ()=>{
//     console.log(`Server started on port 8080`); 
// });
// console.log("My first node-app");
// console.log(`--------------------- date 26 - 03 -2025---------------------`);

// require('./server.js');
require('./express.js');

