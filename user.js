import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write('<head><title>Compelete Coding</title></head>');
    res.write('<body><h1>Enter your Details</h1></body>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type = "text" name = "username" placeholder = "Enter your name..."><br>');
    res.write('<lable for="male">Male </lable>');
    res.write('<input type="radio"  id="male" name="gender" value = "male" />');
    res.write('<lable for="female">Female </lable>');
    res.write('<input type="radio"  id="Female" name="gender" value = "Female" />');
    res.write('<br> <input type= "submit" value = "Submit"/>');
    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if(req.url.toLowerCase() === "/submit-details" && req.method === "POST"){
      const filePath = path.join(__dirname, 'user.text');
    fs.writeFileSync(filePath, 'Kamla Fuleshri');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Comlete Coding</title></head>");
    res.write("<body><h1> like/ Share/ Comment</h1></body>");
    res.write("</html>");
    res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
