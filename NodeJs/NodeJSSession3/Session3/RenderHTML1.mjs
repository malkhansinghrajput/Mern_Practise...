import http from 'http'
import url from 'url'
import fs from 'fs'

const PORTNO = 5000


//Returns a new instance of Server.
http.createServer((request, response) => {
    console.log(request.method)
    console.log(request.url)
    console.log("===============")

    /*
    @param urlString — The URL string to parse.

    @param parseQueryString
If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string.
    */
    var obj = url.parse(request.url,true)
    console.log("URL:",obj)

    var msg = ""
    if (obj.pathname === "/") {
        var data = fs.readFileSync('./views/Home.html')
        msg = data.toString()
    }
    else if (obj.pathname === "/contact") {
        var data = fs.readFileSync('./views/Contact.html')
        msg = data.toString()
    }
    else if (obj.pathname === "/login") {
        var data = fs.readFileSync('./views/Login.html')
        msg = data.toString()
    }
    else if (obj.pathname === "/register") {
        var data = fs.readFileSync('./views/Register.html')
        msg = data.toString()
    }
    else if (obj.pathname === "/result") {
        var obj1 = obj.query
        console.log(obj1)
        var content = "<h1>Rollno is:"+obj1.rollno+" College Name:"+obj1.college+"</h1>"
        var data = fs.readFileSync('./views/Result.html')
        msg = data.toString()+content
    }
    else {
        var data = fs.readFileSync('./views/Error.html')
        msg = data.toString()
    }
    response.write(msg)
    response.end()
})
    .listen(PORTNO, () => {
        console.log(`Server listening at http://localhost:${PORTNO}`)
    })