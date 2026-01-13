import http from 'http'
import url from 'url'
import fs from 'fs'

const portno = 4000

http.createServer((request,response)=>{
       console.log(request.method)
       console.log(request.url)
       console.log("==================");

 var obj = url.parse(request.url,true)
 console.log( "Url :",obj)

  var msg=''
 if (obj.pathname ==='/'){
       var data = fs.readFileSync('./Mview/home.html')
       msg= data.toString()

 } else if(obj.pathname === '/contact'){
       var data =fs.readFileSync('./Mview/contact.html')
       msg= data.toString()

 } else if(obj.pathname === '/register'){
       var data = fs.readFileSync('./Mview/register.html')
       msg = data.toString()

 } else if(obj.pathname === '/login'){
       var data = fs.readFileSync('./Mview/login.html')
       msg = data.toString()

 }else if(obj.pathname === '/result'){
       var obj1 = obj.query
       var content = "<h1>Roll no=" + obj1.rollno + " " + "Collage name =" + obj1.collage + "</h1>"
       var data = fs.readFileSync('./Mview/result.html')
       msg = data.toString() + content

 }else {
       var data = fs.readFileSync('./Mview/error.html')
       msg = data.toString()
 }

      response.write(msg)
      response.end()
})

.listen(portno,()=>{
       console.log(`Server created at http://localhost:${portno}`)
})