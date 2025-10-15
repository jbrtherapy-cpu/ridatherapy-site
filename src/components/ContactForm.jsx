import React from 'react'

export default function ContactForm(){
  const handleSubmit = (e)=>{ e.preventDefault(); window.location.href = 'mailto:contact@ridatherapy.com'; }
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="block"><div className="text-sm font-medium">Name</div><input required className="mt-1 w-full px-3 py-2 border rounded" /></label>
      <label className="block"><div className="text-sm font-medium">Email</div><input type="email" required className="mt-1 w-full px-3 py-2 border rounded" /></label>
      <label className="block"><div className="text-sm font-medium">Message</div><textarea required className="mt-1 w-full px-3 py-2 border rounded h-32" /></label>
      <div className="flex gap-2"><button type="submit" className="px-4 py-2 rounded bg-[var(--brand-1)] text-white">Send message</button></div>
    </form>
  )
}
