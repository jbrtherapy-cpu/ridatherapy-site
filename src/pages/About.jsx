import React from 'react'
export default function About(){
  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="w-full bg-white rounded-lg overflow-hidden shadow">
            <img src="/counsellor-placeholder.jpg" alt="Counsellor" className="w-full h-80 object-cover" />
          </div>
          <div className="mt-4 text-sm text-neutral-600">
            <div className="font-semibold">Contact</div>
            <div>0782 366 3208</div>
            <div>contact@ridatherapy.com</div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold" style={{color:'var(--brand-1)'}}>About the counsellor</h2>
          <p className="mt-4 text-neutral-700">Hello — I’m [Your Name], the lead counsellor at Rida Psychotherapy and Counselling Service. I trained in integrative psychotherapy and hold additional training in culturally sensitive and faith-aware approaches.</p>

          <h3 className="mt-6 text-xl font-semibold">My approach</h3>
          <p className="mt-2 text-neutral-700">I work collaboratively to build acceptance, practical coping strategies and longer-term life changes. For Muslim clients I offer faith-informed reflections when desired.</p>

          <h3 className="mt-6 text-xl font-semibold">Qualifications & experience</h3>
          <ul className="list-disc ml-6 mt-2 text-neutral-700 space-y-1">
            <li>Accredited counselling/psychotherapy qualification (replace with your actual qualification)</li>
            <li>Experience with adults, couples and families</li>
            <li>Training in culture-informed therapy and Islamic faith-sensitive practice</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
