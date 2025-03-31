

import './App.css'
import Navbar from './compontes/Navbar'
import { Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyAppoinment from './pages/MyAppoinment'
import Appoinment from './pages/Appoinment'
import Footer from './compontes/Footer'
import From from './compontes/From'
import Service from './pages/Service'

function App() {
  

  return (
    <>
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar></Navbar>
   <Routes>
     <Route  path='/'element={<Home/>}/>
     
     <Route  path='/doctors'element={<Doctors/>}/>
     <Route  path='/doctors/:speciality'element={<Doctors/>}/>
     <Route  path='/login'element={<Login/>}/>
     <Route  path='/About'element={<About/>}/>
     <Route  path='/Service'element={<Service/>}/>
     <Route  path='/contact'element={<Contact/>}/>
     <Route  path='/From'element={<From/>}/>
     <Route  path='/my-profile'element={<Myprofile/>}/>
     <Route  path='/my-Appoinment'element={<MyAppoinment/>}/>
          <Route path='/Appoinment/:docId'element={<Appoinment/>}/>

   </Routes>
   
   <Footer></Footer>
    </div>
  
    </>
  )
}

export default App
