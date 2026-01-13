import http from 'http'
import fs from 'fs'
const PORTNO = 5000

// Return a instance of server 

http.createServer((request, response) => {
       fs.readFile('./Mview/home.html',(err, data) => {
              if(err){
                     console.log(err)
              }else{
                     response.write(data.toString())
                     response.end()
              }
       })
})
.listen(PORTNO,()=> {
       console.log(`Server listen at http://localhost:${PORTNO}`)
})