import React from 'react'
export default function Services(){
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold" style={{color:'var(--brand-1)'}}>Services & Fees</h2>
      <p className="mt-3 text-neutral-700">Outline of core services offered.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="flex items-baseline justify-between"><h4 className="font-semibold">Individual Therapy</h4><div className="text-sm">£60 - £90</div></div>
          <ul className="mt-3 list-disc ml-5 text-neutral-700">
            <li>One-to-one sessions</li>
            <li>CBT-informed & integrative</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="flex items-baseline justify-between"><h4 className="font-semibold">Couples Therapy</h4><div className="text-sm">£90 - £120</div></div>
          <ul className="mt-3 list-disc ml-5 text-neutral-700">
            <li>Relationship work</li>
            <li>Communication & conflict resolution</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="flex items-baseline justify-between"><h4 className="font-semibold">Family Sessions</h4><div className="text-sm">Variable</div></div>
          <ul className="mt-3 list-disc ml-5 text-neutral-700">
            <li>Multiple family members</li>
            <li>Culturally-informed approach</li>
          </ul>
        </div>
      </div>

      <section className="mt-8 bg-white/80 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold">Islamic-informed counselling</h3>
        <p className="mt-3 text-neutral-700">For clients wanting to explore how Islamic faith and practices intersect with mental health, I offer faith-informed clinical reflection.</p>
      </section>
    </div>
  )
}
