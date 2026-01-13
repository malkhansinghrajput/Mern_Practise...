import http from 'http'
import fs from 'fs'
const PORTNO = 5000


//Returns a new instance of Server.
http.createServer((request,response)=>{
    fs.readFile('./views/Home.html',(err,data)=>{
        if (err) {
            console.log(err)
        }else{
            response.write(data.toString())
            response.end()
        }
    })
})
.listen(PORTNO,()=>{
    console.log(`Server listening at http://localhost:${PORTNO}`)
})