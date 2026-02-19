import React,{useEffect,useState} from 'react'

export default function FormObj() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: 'Male',
        city: '',
        address: '',
        dob:'',
        language:[]
    });
    
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
        if (name === "language") {
            //check
            if (checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    language: [...formData.language, value],
                }));
            }
            else {
                //uncheck
                setFormData((prevData) => ({
                    ...prevData,
                    language: formData.language.filter((e) => e !== value),
                }));
            }
        }
    };
    const handleSubmit = (event) => {
        /*
        to prevent from browser reload or refresh
        */
        event.preventDefault()
        console.log(formData)
        setFormData({
            name: '',
            email: '',
            password: '',
            gender: 'Male',
            city: '',
            address: '',
            dob:'',
            language:[]
        })
    }
    return (
        <div>
            <h1>Controllered Component</h1>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    placeholder='Enter a Name'
                    style={{ fontSize: 28, fontWeight: 'bold' }}
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                /><br></br>

                <input type='email'
                    placeholder='Enter a Email'
                    style={{ fontSize: 28, fontWeight: 'bold' }}
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                /><br></br>

                <input type='password'
                    placeholder='Enter a Password'
                    style={{ fontSize: 28, fontWeight: 'bold' }}
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                /><br></br>

                <input type='radio' name="gender"
                    onChange={handleChange}
                    value="Male"
                    checked={formData.gender === "Male"}
                /><span style={{ fontSize: 28, fontWeight: 'bold' }}>Male</span>

                <input type='radio' name="gender"
                    onChange={handleChange}
                    value="Female"
                    checked={formData.gender === "Female"}
                /><span style={{ fontSize: 28, fontWeight: 'bold' }}>Female</span>

                <input type='radio' name="gender"
                    onChange={handleChange}
                    value="Other"
                    checked={formData.gender === "Other"}
                /><span style={{ fontSize: 28, fontWeight: 'bold' }}>Other</span><br></br>

                <select name='city'
                    value={formData.city}
                    onChange={handleChange}
                    style={{ fontSize: 28, fontWeight: 'bold' }}
                >
                    <option>Select a City</option>
                    <optgroup label='Madhya Pradesh'>
                        <option>Indore</option>
                        <option disabled>Ujjain</option>
                        <option>Bhopal</option>
                    </optgroup>
                    <optgroup label='Maharastra' disabled>
                        <option>Mumbai</option>
                        <option>Nagpur</option>
                        <option>Pune</option>
                    </optgroup>
                </select><br></br>
                <textarea name='address' 
                value={formData.address} 
                onChange={handleChange}
                    style={{ fontSize: 28, fontWeight: 'bold' }}
                    placeholder='Enter a Address'
                    rows={5}
                    cols={15}
                ></textarea><br></br>

                <input type='date' name='dob' 
                value={formData.dob} 
                onChange={handleChange}
                    style={{ fontSize: 28, fontWeight: 'bold' }}></input><br></br>

                <input type='checkbox'
                    name='language'
                    value="Hindi"
                    onChange={handleChange}
                /><span style={{ fontSize: 28, fontWeight: 'bold' }}>Hindi</span>

                <input type='checkbox'
                    name='language'
                    value="English"
                    onChange={handleChange}
                /><span style={{ fontSize: 28, fontWeight: 'bold' }}>English</span>

                <input type='checkbox'
                    name='language'
                    value="Urdu"
                    onChange={handleChange}
                /><span style={{ fontSize: 28, fontWeight: 'bold' }}>Urdu</span><br></br>
                <button type='submit'>
                    <h3>Register</h3>
                </button>
            </form>
        </div>
    )
}
