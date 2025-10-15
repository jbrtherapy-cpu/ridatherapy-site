import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import GuidanceLibrary from './pages/GuidanceLibrary'
import IslamicGuidance from './pages/IslamicGuidance'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/library' element={<GuidanceLibrary/>} />
          <Route path='/islamic-guidance' element={<IslamicGuidance/>} />
        </Routes>
      </main>
      <Footer />
    </div>
    
  )
}
