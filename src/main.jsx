import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Zain from './Zain.jsx'
import Taha from './Taha.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Zain />
    <saim/>
    <saimmmm/>
    <Taha/>
    <App />
    </BrowserRouter>
  </StrictMode>
)
