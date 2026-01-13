import http from 'http'
import fs from 'fs'
import url from 'url'


const PORTNO = 5000

// Return instance of Server.
http.createServer((request,response) => {
       console.log(request.method)
       console.log(request.url)
       console.log("=================")

       var obj = url.parse(request.url,true)
       console.log("Url : ",obj)

       var msg = ""
       if(obj.pathname === '/'){
              var data = fs.readFileSync('./Mview/home.html')
              msg = data.toString()
       }else if (obj.pathname === '/contact'){
              var data = fs.readFileSync('./Mview/contact.html')
              msg = data.toString()
       }else if(obj.pathname === '/login'){
              var data = fs.readFileSync('./Mview/login.html')
              msg = data.toString()
       }else if(obj.pathname === '/register') {
              var data = fs.readFileSync('./Mview/register.html') 
              msg = data.toString()
       }else if(obj.pathname === '/result'){
              var obj1 = obj.query
              console.log("OBJ1 : ",obj1)
              var content = "<h1>Rollno is : "+obj1.rollno+" Collage Name : "+obj1.collage+"</h1>"
              var data = fs.readFileSync('./Mview/result.html')
              msg = data.toString() + content
       }else {
              var data = fs.readFileSync('./Mview/error.html')
              msg = data.toString()
       }
       response.write(msg)
       response.end()
})
.listen(PORTNO,()=> {
       console.log(`Server listen at http://localhost:${PORTNO}`)
})