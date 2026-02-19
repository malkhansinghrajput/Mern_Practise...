import React,{useEffect,useState} from 'react'
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
    const [language, setlanguage] = useState([])


    const handleChange = (event) => {
        const { name, value,checked } = event.target
        // console.log([name], value)

        if (name==="language") {
            //case 1: select checkbox
            if (checked) {
                setlanguage([...language,value])
            } else {
                //case 1: unselect checkbox
                setlanguage(language.filter(data=>data!==value))
            }
        }
    }

    const handleSubmit=(e)=>{
        //prevent browser reload or refresh
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(gender)
        console.log(city)
        console.log(address)
        console.log(dob)
        console.log(language)
        setname("")
        setemail("")
        setpassword("")
        setgender("Male")
        setcity("")
        setaddress("")
        setdob("")
        setlanguage([])
    }

   
    
    return (
        <>
            <marquee scrollamount='20'>
                <h3 style={{ color: 'brown',marginTop:60 }}>STUDENT REGISTRATION Hook</h3>
            </marquee>
            <Form style={{ margin: 20 }} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter Name"
                            name='name'
                            value={name}
                            onChange={(event)=> setname(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email"
                            name='email'
                            value={email}
                            onChange={(event)=> setemail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"
                            name='password'
                            value={password}
                            onChange={(event)=> setpassword(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGender">
                        <Form.Check
                            inline
                            label="Male"
                            name="gender"
                            value="Male"
                            onChange={(event)=> setgender(event.target.value)}
                            checked={gender === "Male"}
                            type="radio"
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="gender"
                            value="Female"
                            onChange={(event)=> setgender(event.target.value)}
                            checked={gender === "Female"}
                            type="radio"
                            id={`inline-radio-2`}
                        />
                        <Form.Check
                            inline
                            label="Other"
                            name="gender"
                            value="Other"
                            onChange={(event)=> setgender(event.target.value)}
                            checked={gender === "Other"}
                            type="radio"
                            id={`inline-radio-3`}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Select aria-label="Default select example"
                            name='city'
                            value={city}
                            onChange={(event)=> setcity(event.target.value)}
                        >
                            <option>Select a City</option>
                            <optgroup label='Madhya Pradesh'>
                                <option value="Indore">Indore</option>
                                <option value="Ujjain">Ujjain</option>
                                <option value="Bhopal" disabled>Bhopal</option>
                            </optgroup>
                            <optgroup label='Maharastra' disabled>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Thane">Thane</option>
                            </optgroup>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={5}
                            placeholder='Enter a Address'
                            name='address'
                            value={address}
                            onChange={(event)=> setaddress(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDOB">
                        <Form.Control type="date"
                            name='dob'
                            value={dob}
                            onChange={(event)=> setdob(event.target.value)}
                            min="2001-01-01"
                            max="2012-05-01"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDOB">
                        <Form.Check
                            inline
                            label="Hindi"
                            name="language"
                            type="checkbox"
                            value="Hindi"
                            onChange={handleChange}
                            id={`checkbox-1`}
                        />
                        <Form.Check
                            inline
                            label="English"
                            name="language"
                            type="checkbox"
                            value="English"
                            onChange={handleChange}
                            id={`checkbox-2`}
                        />
                        <Form.Check
                            inline
                            label="Urdu"
                            name="language"
                            type="checkbox"
                            value="Urdu"
                            onChange={handleChange}
                            id={`checkbox-3`}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

        </>
    )
}

export default UserFormHook
