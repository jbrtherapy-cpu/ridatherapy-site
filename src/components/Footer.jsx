import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-neutral-200 bg-white/60 py-8">
      <div className="container flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h4 className="font-semibold" style={{color:'var(--brand-1)'}}>Rida Psychotherapy and Counselling Service</h4>
          <p className="text-sm text-neutral-600 max-w-md">An inclusive therapeutic service offering individual, couples, family and culture-informed counselling with an emphasis on Islamic-informed guidance when requested.</p>
        </div>

        <div className="text-sm">
          <div className="font-medium">Contact</div>
          <div>Phone: <a href="tel:+447823663208" className="underline">0782 366 3208</a></div>
          <div>Email: <a href="mailto:contact@ridatherapy.com" className="underline">contact@ridatherapy.com</a></div>
          <div className="mt-4 text-xs text-neutral-500">© {new Date().getFullYear()} Rida Psychotherapy</div>
        </div>
      </div>
    </footer>
  )
}
