const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  //Home page
  if(url === '/')
  {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Home page</h1>");
  }
  //About page
  else if (url ==='/about'){
    res.writeHead(200, { "content-type": "text/html" });
    res.write('<h1>About Page</h1>');
  }
  //404
  else{
    res.writeHead(404, { "content-type": "text/html" });
    res.write('<h1>Page Not Found</h1>')
    res.write('<a href="/">Home page</a>');
  }
  res.end();
});
server.listen(5000);
