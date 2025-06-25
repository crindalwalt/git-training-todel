import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AboutMohsan from './AboutMohsan'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <>
    <NavLink to='/aboutMohsan'> Go to Mohsan's Profile</NavLink>
    
    <Routes>
      <Route path='/aboutMohsan'element={<AboutMohsan/>}/>
      
    </Routes>
    </>
  )
}

export default App