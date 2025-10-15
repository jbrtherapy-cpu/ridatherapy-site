import React from 'react'
import { Link } from 'react-router-dom'
export default function GuidanceLibrary(){
  const items = [
    {id:'anxiety', title:'How to manage anxiety', excerpt:'Grounding techniques and practical steps.'},
    {id:'sleep', title:'Improving sleep hygiene', excerpt:'Routines and gentle cognitive tips.'},
    {id:'islamic', title:'Islamic-based guidance for wellbeing', excerpt:'Faith-integrated reflections.'}
  ]
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold" style={{color:'var(--brand-1)'}}>Guidance Library</h2>
      <p className="mt-3 text-neutral-700">A growing library of guidance and articles.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map(it=>(
          <div key={it.id} className="p-4 bg-white rounded-lg border shadow-sm">
            <div className="font-semibold">{it.title}</div>
            <div className="text-sm text-neutral-600 mt-2">{it.excerpt}</div>
            <div className="mt-4"><Link to="/islamic-guidance" className="text-sm underline">Read</Link></div>
          </div>
        ))}
      </div>
    </div>
  )
}
