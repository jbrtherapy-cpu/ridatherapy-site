import React from 'react'
export default function Home(){
  return (
    <div className="container py-12">
      <section className="grid md:grid-cols-2 gap-8 items-center bg-white/70 p-6 rounded-lg shadow">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold" style={{color:'var(--brand-1)'}}>Rida Psychotherapy & Counselling</h1>
          <p className="mt-4 text-neutral-700">Working together to accept and improve. Culture-informed, trauma-aware, and accessible care with a warm, inclusive approach.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="px-4 py-2 rounded bg-[var(--brand-1)] text-white">Book a session</a>
            <a href="/services" className="px-4 py-2 border rounded">See services</a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-white rounded shadow-sm"><strong>Individual & Family</strong><div className="text-sm text-neutral-600">One-to-one therapy and family sessions.</div></div>
            <div className="p-3 bg-white rounded shadow-sm"><strong>Islamic-informed</strong><div className="text-sm text-neutral-600">Faith-respecting therapy.</div></div>
            <div className="p-3 bg-white rounded shadow-sm"><strong>Accessible</strong><div className="text-sm text-neutral-600">Remote and in-person options.</div></div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <img src="/placeholder-therapy.jpg" alt="Calming therapy scene" className="w-full h-72 object-cover" />
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold" style={{color:'var(--accent)'}}>Who I work with</h3>
        <p className="mt-3 text-neutral-700">Adults, couples and families from diverse backgrounds including those seeking faith-sensitive therapy.</p>
      </section>
    </div>
  )
}
