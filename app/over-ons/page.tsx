import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons — Praesidion Security",
  description: "Praesidion Security is dé specialist in zorgbeveiliging in Limburg. Lees ons verhaal, onze missie en waarom zorginzicht in ons DNA zit.",
};

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Over Praesidion Security</h1>
            <p className="text-xl text-teal-200 leading-relaxed">
              Wij geloven dat beveiliging in de zorg vraagt om meer dan alleen een uniform en een portofoon. 
              Het vraagt om mensen die de zorg begrijpen.
            </p>
          </div>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ons verhaal</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                Ontstaan uit de overtuiging dat het beter kan
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Praesidion Security is opgericht vanuit een heldere visie: de beveiligingsbranche heeft een blinde vlek 
                  als het gaat om de zorgsector. Te veel zorginstellingen worden bediend door beveiligingsbedrijven die 
                  geen verschil zien tussen een ziekenhuis en een distributiecentrum.
                </p>
                <p>
                  Wij zagen hoe standaard beveiligers worstelden in zorgomgevingen. Hoe ze escaleerden waar 
                  de-escalatie nodig was. Hoe wisselende gezichten het vertrouwen van patiënten en bewoners 
                  ondermijnden. En hoe zorgmedewerkers zich onveilig bleven voelen ondanks de aanwezigheid 
                  van beveiliging.
                </p>
                <p>
                  Daarom kozen wij een andere weg. Praesidion Security levert uitsluitend beveiligers die de 
                  zorgsector begrijpen, getraind zijn in de-escalatie en als vaste gezichten onderdeel worden van 
                  het zorgteam. Niet als buitenstaander, maar als partner.
                </p>
              </div>
            </div>
            <div className="bg-accent rounded-2xl p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Praesidion in cijfers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "ND 8969", label: "Beveiligings­vergunning" },
                  { value: "24/7", label: "Beschikbaarheid" },
                  { value: "100%", label: "Vaste teams" },
                  { value: "KvK 97640794", label: "Ingeschreven" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missie & Visie */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Onze visie</h3>
              <p className="text-gray-600 leading-relaxed">
                Een zorgsector waarin elke medewerker zich veilig voelt op de werkvloer, elke patiënt met 
                respect wordt bejegend en beveiliging naadloos opgaat in de zorgomgeving. Beveiliging die 
                je niet ziet, maar wel voelt.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Onze missie</h3>
              <p className="text-gray-600 leading-relaxed">
                Het leveren van de beste zorgbeveiliging in Nederland door beveiligers met zorginzicht in te 
                zetten als vaste teamleden bij zorginstellingen. We combineren beveiligingsexpertise met 
                empathie, de-escalatie en een diep begrip van de zorgsector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze waarden</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">Waar wij voor staan</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Zorginzicht", desc: "Wij begrijpen de zorgsector en handelen daarnaar. Elke beslissing wordt getoetst aan de impact op patiënten en zorgverleners." },
              { title: "Menselijke maat", desc: "Achter elk incident zit een mens. Wij behandelen iedereen met waardigheid, ook — juist — in moeilijke situaties." },
              { title: "Betrouwbaarheid", desc: "Vaste gezichten, vaste afspraken, vaste kwaliteit. Geen verrassingen, wel vertrouwen." },
              { title: "Vakmanschap", desc: "Continue training, intervisie en bijscholing. Onze beveiligers zijn professionals die hun vak serieus nemen." },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ervaring */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze ervaring</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">Bewezen in de praktijk</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Praesidion Security heeft ervaring opgebouwd bij uiteenlopende zorginstellingen in Limburg. 
                Van regionale ziekenhuizen tot verpleeghuizen, van GGZ-instellingen tot asielzoekerscentra — 
                wij kennen de uitdagingen van elke sector.
              </p>
              <p>
                Onze beveiligers zijn actief bij onder andere Moveoo, diverse ouderenzorglocaties, GGZ-instellingen 
                en opvanglocaties. In al deze omgevingen combineren zij beveiligingsexpertise met het zorginzicht 
                dat deze sector vraagt.
              </p>
              <p>
                Wij zijn gevestigd in Limburg en focussen ons bewust op deze regio. Niet omdat we niet groter 
                willen worden, maar omdat nabijheid en korte lijnen essentieel zijn voor de kwaliteit die wij 
                willen leveren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Laten we kennismaken</h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
            Benieuwd hoe Praesidion Security uw zorginstelling veiliger kan maken? 
            Wij komen graag langs voor een vrijblijvend kennismakingsgesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-10 py-4 bg-white text-teal-800 font-bold rounded-lg hover:bg-teal-50 transition-colors"
            >
              Neem contact op
            </Link>
            <a
              href="tel:0462402401"
              className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Bel 046 240 2401
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
