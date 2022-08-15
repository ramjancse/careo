import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Customer from './pages/Customer'
import Home from './pages/Home'
import Service from './pages/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/customer" element={<Customer/>} />
      </Routes>
     
      
    </>
  )
}

export default App
