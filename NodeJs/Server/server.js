const http=require('http');
const fs=require('fs');
const path=require('path');

const port=3000;
//ceate a server where the port is 3000 , it is a object of http module
//write a callback function to handle requests and responses from the server
const server=http.createServer((req,res)=>{
const filePath=path.join(__dirname,req.url==="/"? "index.html" : req.url);
    //this joins the current directory name with the file name to acces the file path


    //extract the extension name of the file
    const extname=String(path.extname(filePath)).toLowerCase();

//supported file types by the server
    const mimeTypes={
        ".html":"text/html",
        ".js":"text/javascript",
        ".css":"text/css",
        ".png":"image/png"
    }

    const contentType=mimeTypes[extname]||"application/octet-stream";
    //default content type if the file type is not found in the mimeTypes object

    fs.readFile(filePath,(err,content)=>{
        if(err){
            //check the error code
            if(err.code==="ENOENT"){
                //file not found
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end("<h1>File not found Broo!</h1>",'utf-8');
            }
        }else{
            //successfully read the file
            res.writeHead(200,{'Content-Type':contentType});//write the header with status code 200 and content type
            res.end(content,'utf-8');//end the response with the content of the file
        }
    })

});

//what to do when we listen to the server
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});// the server will now continously listen to the port 3000

