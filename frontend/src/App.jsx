import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Signup from './Login/Signup'

import Contact from './Contact/Contact'
import Reviews from './Reviews/Reviews'
import Booking from './Booking/Booking'
import Info from './Info/Info'
import Temple from './Temple/Temple'
import About from './About/About'
import Red from './Red/Red'
import Ag from './Ag/Ag'
import Thank from './Thank/Thank'

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Reviews' element={<Reviews />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/Info' element={<Info />} />
        <Route path='/Temple' element={<Temple />} />
        <Route path='/Red' element={<Red />} />
        <Route path='/Ag' element={<Ag />} />
        <Route path='/Thank' element={<Thank />} />
        
        
      </Routes>
    </Router>
  )
}

export default App
