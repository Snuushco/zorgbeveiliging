import Link from "next/link";
import ContactForm from "./ContactForm";

interface DienstPageProps {
  title: string;
  subtitle: string;
  heroText: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  usps: string[];
  ctaText: string;
}

export default function DienstPage({ title, subtitle, heroText, challenges, solutions, usps, ctaText }: DienstPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/diensten/ziekenhuisbeveiliging" className="text-teal-300 text-sm font-medium hover:text-white transition-colors">
              ← Terug naar diensten
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">{title}</h1>
            <p className="text-xl text-teal-200 mb-2">{subtitle}</p>
            <p className="text-teal-100 text-lg leading-relaxed mt-6 max-w-2xl">{heroText}</p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">De uitdagingen</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">Waar uw instelling mee te maken heeft</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {challenges.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze oplossing</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">Hoe Praesidion het verschil maakt</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">Waarom Praesidion?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="py-20 bg-warm-gray" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{ctaText}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Neem vrijblijvend contact op om te bespreken hoe wij uw instelling veiliger kunnen maken. 
                Wij komen graag langs voor een gratis intakegesprek.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0462402401" className="font-semibold hover:text-primary transition-colors">046 240 2401</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:zorg@praesidion.nl" className="font-semibold hover:text-primary transition-colors">zorg@praesidion.nl</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Vraag een offerte aan</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
