import React, { useEffect, useState } from "react";

export default function FormObj() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "Male",
    city: "",
    dob: "",
    language: [],
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
        //uncheck
      } else {
        setFormData((prevData) => ({
          ...prevData,
          language: formData.language.filter((e) => e !== value),
        }));
      }
    }
  };

  const handleSubmit = (event) => {
    // to prevent from browser reload or refresh
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "Male",
      city: "",
      address: "",
      dob: "",
      language: [],
    });
  };
  return (
    <div>
      <h1>Controlled Componenet ObjForm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Name"
          style={{ fontSize: 28, fontWeight: "bold" }}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br></br>

        <input
          type="email"
          placeholder="Enter a email"
          style={{ fontSize: 28, fontWeight: "bold" }}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br></br>

        <input
          type="password"
          placeholder="Enter a password"
          style={{ fontSize: 28, fontWeight: "bold" }}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br></br>

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        <span style={{ fontSize: 28, fontWeight: "bold" }}>Male</span>

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        <span style={{ fontSize: 28, fontWeight: "bold" }}>Female</span>

        <input
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === "other"}
          onChange={handleChange}
        />
        <span style={{ fontSize: 28, fontWeight: "bold" }}>other</span>

        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          style={{ fontSize: 28, fontWeight: "bold" }}
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
        </select>
        <br></br>

        <textarea
          placeholder="Enter a Address"
          style={{ fontSize: 28, fontWeight: "bold" }}
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={5}
          cols={15}
        ></textarea>
        <br></br>

        <input
          type="date"
          name="dob"
          style={{ fontSize: 28, fontWeight: "bold" }}
          value={formData.dob}
          onChange={handleChange}
        ></input>
        <br></br>

        <input
          type="checkbox"
          name="language"
          value="Hindi"
          onChange={handleChange}
        />
        <span style={{ fontSize: 28, fontWeight: "bold" }}>Hindi</span>

        <input
          type="checkbox"
          name="language"
          value="English"
          onChange={handleChange}
        />
        <span style={{ fontSize: 28, fontWeight: "bold" }}>English</span>

        <input
          type="checkbox"
          name="language"
          value="other"
          onChange={handleChange}
        />
        <span style={{ fontSize: 28, fontWeight: "bold" }}>other</span>
        <br></br>

        <button type="submit">
          <h3>Register</h3>
        </button>
      </form>
    </div>
  );
}
