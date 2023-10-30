import axios from "axios";
import React, { useState } from "react";

import { toast } from "react-toastify";



const SignUp = () => {
 
  const [firstname, setfirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let url = "http://localhost:3300/user/newuser";
  const takeDetails = (e) => {
    axios.post(url, { firstname, lastname, email, password })
    .then((res)=>{
      console.log(res);
      toast(res.data.message)
        
    }).catch((err)=>{
      console.log(err);
    })
    
    setfirstName("");
    setLastname("");
    setEmail("");
    setPassword("");
   
  };
  return (
    <>
      <div
        action=""
        method=""
        className="container mt-5 col-6 p-5 border shadow-lg rounded"
      >
        <h4 className="text-center fst-italic text-black">Sign Up Here</h4>
        <br />
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="fw-bold form-label" for="form3Example1">
                First name
              </label>
              <input
                value={firstname}
                onChange={(e) => setfirstName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="fw-bold form-label" for="form3Example2">
                Last name
              </label>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                name="lastname"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <label className="fw-bold form-label" for="form3Example3">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="fw-bold form-label" for="form3Example4">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className="form-control"
          />
        </div>

        <button
          onClick={takeDetails}
          className="btn btn-warning btn-block mb-4 w-100 text-white fw-bold"
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default SignUp;
