import React from 'react'
import { Link } from 'react-router-dom';
import SignUp from './SignUp';


const Navbar = () => {
  return (
    <>
       
        <ul className="nav nav-tabs bg-dark p-4 " id="navId" role="tablist">
            <li className="nav-item">
                <Link to={"/"} className="nav-link active"  aria-current="page">Home</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">View Components</a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" href="#tab2Id">
         
                    Sign Up
                    </Link>
                    <a className="dropdown-item" href="#tab3Id">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#tab4Id">Action</a>
                </div>
            </li>
            <li className="nav-item" role="presentation">
              <Link className='nav-link' to={"/SignUp"} >
               Sign Up
              </Link> 
            </li><li className="nav-item" role="presentation">
                <Link to={"/Login"} className="nav-link">
                    Login
                </Link>
            </li><li className="nav-item" role="presentation">
            <Link to={"/Formik"} className="nav-link">
                    Formik
                </Link>
            </li>
            <li className="nav-item" role="presentation">
                <a href="#" className="nav-link disabled" data-bs-toggle="tab">Disabled</a>
            </li>
        </ul>
        
    
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
            <div className="tab-pane fade" id="tab2Id" role="tabpanel"></div>
            <div className="tab-pane fade" id="tab3Id" role="tabpanel"></div>
            <div className="tab-pane fade" id="tab4Id" role="tabpanel"></div>
            <div className="tab-pane fade" id="tab5Id" role="tabpanel"></div>
        </div>
        
        {/* <!-- (Optional) - Place this js code after initializing bootstrap.min.js or bootstrap.bundle.min.js --> */}
     
        

        
    </>
  )
}

export default Navbar