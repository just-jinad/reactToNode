import React from 'react'

const Login = () => {
  return (
    <>

        <div className='container mx-auto border mt-5 rounded w-50 shadow-lg '>
            <h4 className='fst-italic text-center mt-4'>Login Here</h4>
            <label className="fw-bold form-label" for="form3Example3">
            Email address
          </label>
            <input className='form-control my-2' type="text" placeholder='' /> 

            <label className="fw-bold form-label" for="form3Example3">
            Enter Password
          </label>
            <input className='form-control my-2' type="text" placeholder='' />
            <button className='btn btn-warning fw-bold text-center text-white mb-5 w-100'>Login in</button>
        </div>

    </>
 )
}

export default Login