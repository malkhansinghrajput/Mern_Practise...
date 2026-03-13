import React, {useEffect,useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserFormHook = () => {
     const [name, setname] = useState("") 
     const [email, setemail] = useState("")  
     const [password, setpassword] = useState("") 
     const [gender, setgender] = useState("Male") 
     const [city, setcity] = useState("") 
     const [address, setaddress] = useState("") 
     const [dob, setdob] = useState("") 
     const[language, setlanguage]= useState([])

     const handleChange =(event) => {
          const {name,value,checked} = event.target

          if(name==="language") {
               // case 1: Select check
               if(checked){
                    setlanguage([...language,value])
               }else {
                    //case 1: unselect chekbox
                    setlanguage(language.filter(data=>data!==value))

               }
          }
     }

     const handleSubmit=(e)=>{
      //prevent browser reload or refresh
      e.preventDefault()
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(gender);
      console.log(city);
      console.log(address);
      console.log(dob);
      console.log(language);
     setname("")
     setemail("")
     setpassword("")
     setgender("Male")
     setcity("")
     setaddress("")
     setdob("")
     setlanguage([])
     }

     return(
          <div>
          <marquee scrollamount='20' style={{marginTop:70}}>
              <h2> Student Registration HOOK Form</h2>
          </marquee>
                 <Form style={{ marginTop:30}} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter a Name"
              name="name"
              value={name}
              onChange={(event)=> setname(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter a Email"
              name="email"
              value={email}
              onChange={(event)=> setemail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter a Password"
              name="password"
              value={password}
              onChange={(event)=> setpassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              inline
              label="Male"
              name="gender"
              value="Male"
              onChange={(event)=> setgender(event.target.value)}
              checked={gender === "Male"}
              type={"radio"}
              id={`inline-radio-1`}
            />

            <Form.Check
              inline
              label="Female"
              name="gender"
              value="Female"
              onChange={(event)=>setgender(event.target.value) }
              checked={gender === "Female"}
              type={"radio"}
              id={`inline-radio-2`}
            />

            <Form.Check
              inline
              label="other"
              name="gender"
              value="other"
              onChange={(event)=>setgender(event.target.value)}
              checked={gender === "other"}
              type={"radio"}
              id={`inline-radio-3`}
            />
          </Form.Group>

          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            name="city"
            value={city}
            onChange={(event)=>setcity(event.target.value)}
          >
            <option>Select a City</option>
            <optgroup label="Madhya Pardesh">
              <option value="indor">Indore</option>
              <option value="bhopal">Bhopal</option>
              <option value="Ujjain">Ujjain</option>
            </optgroup>
            <optgroup label="Maharastra" disabled>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="thane">thane</option>
            </optgroup>
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Enter a address"
              rows={5}
              name='address'
              value={address}
              onChange={(event)=>setaddress(event.target.value)}
              aria-label="with textarea"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              name='dob'
              value={dob}
              onChange={(event)=>setdob(event.target.value)}
              max="2001-01-01"
              min="1990-01-01"
            />
          </Form.Group>

          <Form.Group>
            <Form.Check
              inline
              label="Hindi"
              name="language"
              value={"Hindi"}
              onChange={handleChange}
              type={"checkbox"}
              id={`inline-chekbox-1`}
            />

            <Form.Check
              inline
              label="English"
              name="language"
              value={"English"}
              onChange={handleChange}
              type={"checkbox"}
              id={`inline-chekbox-2`}
            />

            <Form.Check
              inline
              label="other"
              name="language"
              value={"other"}
              onChange={handleChange}
              type={"checkbox"}
              id={`inline-chekbox-3`}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
          </div>
     )
}

export default UserFormHook