const http = require('http');

const httpServer = http.createServer( (request, response)=>{
    const url = request.url;
    switch (url) {
        case '/':
            response.end(' Welcome to the website.... ');
            break;
        case '/home':
            response.end('Home page:');
            break;
        case '/about':
            response.end('About content:');
            break;
        case '/project':
            response.end('Project content');
            break;
    
        default:
            response.end(`Invalid error`);
            break;
    }
    // response.end(`Request URL - ${url}`);
    //response.end("Hello, from server....");
} );

httpServer.listen(3000, ()=>{
    console.log(`Server started on port 3000`); 
    console.log(`----Request receive----- `);
    console.log(`-- perform operation which you want---`);
    
    
});