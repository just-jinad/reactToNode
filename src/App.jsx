
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SignUp from './component/SignUp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './component/Login'
import  Formik from './component/Formik'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
  if ('ServiceWorker' in navigator) {
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('/sw.js')
      .then(registration=>{
        console.log('SW registered:', registration);
      })
      .catch(registrationError =>{
        console.log('SW registration Failed:', registrationError);
      })
    })
  }
  
 
  }, [])
  
  return (
    <>

  
    




    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" 
/>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Formik' element={<Formik/>}/>
    </Routes>
    </>
  )
}

export default App
