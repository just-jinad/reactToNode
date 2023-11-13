import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let url = "http://localhost:3300/user/login";

  const passDetails = (e) => {
    let userInput = {
      email,
      password
    };

    axios.post(url,  userInput )
    .then((res)=>{
      console.log(res);
      if (res.data.status === true) {
        toast.success(res.data.message)
          
      }else{
        toast.error(res.data.message)
      }
        
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>

        <div className='container mx-auto border mt-5 rounded w-50 shadow-lg '>
            <h4 className='fst-italic text-center mt-4'>Login Here</h4>
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

            <button className='btn btn-warning fw-bold text-center text-white mb-5 w-100' onClick={passDetails}>Login in</button>
        </div>

    </>
 )
}

export default Login