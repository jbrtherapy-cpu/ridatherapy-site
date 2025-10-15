import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="bg-white/60 backdrop-blur-sm border-b border-neutral-200">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center"
               style={{background: 'linear-gradient(135deg,var(--brand-1),var(--accent))', color:'#fff', fontWeight:700}}>
            R
          </div>
          <div>
            <Link to='/' className="text-xl font-bold" style={{color:'var(--brand-1)'}}>Rida Psychotherapy</Link>
            <div className="text-xs text-neutral-600">Working together to accept and improve</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/library" className="hover:underline">Guidance Library</Link>
          <Link to="/islamic-guidance" className="hover:underline">Islamic Guidance</Link>
          <Link to="/contact" className="px-3 py-1 rounded border">Contact</Link>
        </nav>

        <div className="ml-4 text-sm text-neutral-700 hidden md:block">
          <div>0782 366 3208</div>
          <div className="text-xs">contact@ridatherapy.com</div>
        </div>
      </div>
    </header>
  )
}
