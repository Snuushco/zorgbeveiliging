import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const diensten = [
  {
    title: "Ziekenhuisbeveiliging",
    href: "/diensten/ziekenhuisbeveiliging",
    icon: "🏥",
    desc: "SEH, psychiatrie, bezoekersstromen — onze beveiligers kennen de protocollen en handelen met empathie.",
  },
  {
    title: "Verpleeghuisbeveiliging",
    href: "/diensten/verpleeghuisbeveiliging",
    icon: "🏡",
    desc: "Bescherming van kwetsbare ouderen met respect voor hun leefomgeving en waardigheid.",
  },
  {
    title: "GGZ-beveiliging",
    href: "/diensten/ggz-beveiliging",
    icon: "🧠",
    desc: "Gespecialiseerde beveiliging voor psychiatrische instellingen met de-escalatie als kerncompetentie.",
  },
  {
    title: "AZC-beveiliging",
    href: "/diensten/azc-beveiliging",
    icon: "🤝",
    desc: "Cultureel sensitieve beveiliging in asielzoekerscentra, met oog voor menselijke waardigheid.",
  },
  {
    title: "Thuiszorg-beveiliging",
    href: "/diensten/thuiszorg-beveiliging",
    icon: "🏠",
    desc: "Bescherming van thuiszorgmedewerkers bij huisbezoeken in risicovolle situaties.",
  },
];

const testimonials = [
  {
    quote: "Sinds Praesidion onze beveiliging verzorgt, is het aantal incidenten op de SEH met 40% gedaald. De beveiligers zijn onderdeel van ons team geworden.",
    name: "M. Jansen",
    role: "Facilitair Manager, regionaal ziekenhuis Limburg",
  },
  {
    quote: "Het verschil met onze vorige beveiligingspartij is dag en nacht. Deze mensen begrijpen onze bewoners en weten wanneer de-escalatie beter werkt dan ingrijpen.",
    name: "A. de Vries",
    role: "Locatiemanager, verpleeghuis Zuid-Limburg",
  },
  {
    quote: "Vaste gezichten, korte lijnen, en beveiligers die onze GGZ-patiënten met respect benaderen. Precies wat we nodig hadden.",
    name: "R. Bakker",
    role: "Hoofd Veiligheid, GGZ-instelling",
  },
];

const stats = [
  { value: "ND 8969", label: "Beveiligingsvergunning" },
  { value: "24/7", label: "Beschikbaarheid" },
  { value: "100%", label: "Vaste teams" },
  { value: "Limburg", label: "Onze regio" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              60% van zorgmedewerkers maakt agressie mee op de werkvloer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Zorgbeveiliging<br />
              <span className="text-teal-300">met zorginzicht</span>
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 leading-relaxed mb-10 max-w-2xl">
              Professionele beveiligers die de zorgsector begrijpen. Getraind in de-escalatie, 
              vertrouwd met protocollen, en altijd met respect voor patiënten en medewerkers. 
              Dat is zorgbeveiliging door Praesidion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-white text-teal-800 font-bold rounded-lg hover:bg-teal-50 transition-colors text-center"
              >
                Gratis intakegesprek →
              </Link>
              <Link
                href="/diensten/ziekenhuisbeveiliging"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Bekijk onze diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-20 lg:py-28 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Het probleem</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Agressie in de zorg neemt alarmerend toe
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Uit recent onderzoek (NOS, februari 2026) blijkt dat <strong className="text-gray-900">60% van de zorgmedewerkers</strong> te 
                  maken heeft gehad met agressie op de werkvloer. Sinds de coronapandemie is dit percentage alleen maar gestegen.
                </p>
                <p>
                  Van verbale bedreigingen op de spoedeisende hulp tot fysiek geweld in verpleeghuizen — 
                  zorgverleners staan dagelijks bloot aan situaties waarvoor zij niet zijn opgeleid. Het gevolg: 
                  ziekteverzuim, personeelsverloop en een onveilig gevoel dat de kwaliteit van zorg ondermijnt.
                </p>
                <p>
                  Ondertussen groeit de vraag naar zorgbeveiliging explosief, maar zijn beveiligers 
                  met <strong className="text-gray-900">échte zorginzicht</strong> schaars. Standaard beveiliging volstaat niet in een omgeving 
                  waar kwetsbare mensen centraal staan.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">De uitdagingen</h3>
              <div className="space-y-5">
                {[
                  { title: "Stijgende agressie", desc: "Verbaal en fysiek geweld tegen zorgpersoneel neemt toe sinds corona." },
                  { title: "Personeelstekort", desc: "Zorgmedewerkers verlaten het vak door onveiligheidsgevoelens." },
                  { title: "Complexe zorgvragen", desc: "GGZ, dementie en verslaving vragen om specialistische beveiligingskennis." },
                  { title: "Wisselende krachten", desc: "Steeds nieuwe gezichten verstoren het vertrouwen van patiënten en bewoners." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze aanpak</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Beveiliging die de zorg begrijpt
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Praesidion levert geen standaard beveiligers. Onze zorgbeveiligers zijn getraind in de-escalatie, 
              kennen de zorgsector en worden vaste gezichten in uw instelling.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Vaste teams",
                desc: "Geen wisselende inhuurkrachten, maar vaste beveiligers die uw instelling, medewerkers en patiënten kennen.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Mensgerichte aanpak",
                desc: "Onze beveiligers behandelen elke persoon met respect en empathie — ook in moeilijke situaties.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "De-escalatie training",
                desc: "Al onze zorgbeveiligers zijn getraind in de-escalatietechnieken — voorkomen is beter dan ingrijpen.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "24/7 beschikbaar",
                desc: "Dag en nacht, doordeweeks en in het weekend — zorgbeveiliging wanneer u het nodig heeft.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Sectorkennis",
                desc: "Ervaring in ziekenhuizen, verpleeghuizen, GGZ, AZC's en thuiszorg — wij kennen de sector.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "Protocollen op maat",
                desc: "Samen stellen we beveiligingsprotocollen op die aansluiten bij uw instelling en zorgvisie.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten overzicht */}
      <section className="py-20 lg:py-28 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onze diensten</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Zorgbeveiliging voor elke zorgsector
            </h2>
            <p className="text-gray-600 text-lg">
              Van ziekenhuizen tot thuiszorg — wij leveren gespecialiseerde beveiliging op maat.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diensten.map((dienst) => (
              <Link
                key={dienst.href}
                href={dienst.href}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-4xl mb-4 block">{dienst.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {dienst.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{dienst.desc}</p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Meer informatie
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ervaringen</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Wat onze opdrachtgevers zeggen
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Klaar voor professionele zorgbeveiliging?
          </h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
            Plan een gratis intakegesprek en ontdek hoe wij uw zorginstelling veiliger kunnen maken — 
            zonder de menselijke maat te verliezen.
          </p>
          <Link
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-teal-800 font-bold rounded-lg hover:bg-teal-50 transition-colors text-lg"
          >
            Plan een gratis intakegesprek →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Neem vrijblijvend contact op
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Heeft u vragen over zorgbeveiliging of wilt u een offerte op maat? 
                Neem contact met ons op — wij reageren binnen 24 uur.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Telefoon</div>
                    <a href="tel:0462402401" className="font-semibold text-gray-900 hover:text-primary transition-colors">046 240 2401</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">E-mail</div>
                    <a href="mailto:zorg@praesidion.nl" className="font-semibold text-gray-900 hover:text-primary transition-colors">zorg@praesidion.nl</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Beschikbaarheid</div>
                    <span className="font-semibold text-gray-900">24/7 bereikbaar</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Stuur ons een bericht</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
