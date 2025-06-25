import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AboutMohsan from './AboutMohsan'

function App() {
  return (
    <>
    <Routes>
      <Route path='/aboutMohsan'element={<AboutMohsan/>}/>
    </Routes>
    </>
  )
}

export default App