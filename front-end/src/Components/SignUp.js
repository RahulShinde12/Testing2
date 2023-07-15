import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async () => {
    console.warn(name, mail, phone, password);
    try {
      const response = await fetch("http://localhost:6000/register", {
        method: 'POST',
        body: JSON.stringify({ name, mail, phone, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      console.warn(result);
      //localStorage.setItem("user", JSON.stringify(result));
      // navigate('/')
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="sign-up">
      <h1>Register</h1>
      <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
      <input className="inputBox" type="text" value={mail} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
      <input className="inputBox" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Contact Number" />
      <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
      <button onClick={collectData} className='submit-btn' type="button">Sign Up</button>
    </div>
  );
}

export default SignUp;
