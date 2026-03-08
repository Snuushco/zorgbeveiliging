import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Zorgbewaking</span>
                <span className="text-xs block text-gray-400">by Praesidion Security</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Dé specialist in zorgbeveiliging in Limburg. Professionele beveiligers met zorginzicht voor een veilige zorgomgeving.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Vergunning ND 8968 | KvK 97640794
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-white font-semibold mb-4">Diensten</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/diensten/ziekenhuisbeveiliging" className="hover:text-primary transition-colors">Ziekenhuisbeveiliging</Link></li>
              <li><Link href="/diensten/verpleeghuisbeveiliging" className="hover:text-primary transition-colors">Verpleeghuisbeveiliging</Link></li>
              <li><Link href="/diensten/ggz-beveiliging" className="hover:text-primary transition-colors">GGZ-beveiliging</Link></li>
              <li><Link href="/diensten/azc-beveiliging" className="hover:text-primary transition-colors">AZC-beveiliging</Link></li>
              <li><Link href="/diensten/thuiszorg-beveiliging" className="hover:text-primary transition-colors">Thuiszorg-beveiliging</Link></li>
            </ul>
          </div>

          {/* Regio */}
          <div>
            <h3 className="text-white font-semibold mb-4">Regio&apos;s</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/regio/maastricht" className="hover:text-primary transition-colors">Maastricht</Link></li>
              <li><Link href="/regio/heerlen" className="hover:text-primary transition-colors">Heerlen</Link></li>
              <li><Link href="/regio/sittard" className="hover:text-primary transition-colors">Sittard</Link></li>
              <li><Link href="/regio/roermond" className="hover:text-primary transition-colors">Roermond</Link></li>
              <li><Link href="/regio/venlo" className="hover:text-primary transition-colors">Venlo</Link></li>
              <li><Link href="/regio/geleen" className="hover:text-primary transition-colors">Geleen</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0462402401" className="hover:text-primary transition-colors">046 240 2401</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:zorg@praesidion.nl" className="hover:text-primary transition-colors">zorg@praesidion.nl</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Limburg, Nederland</span>
              </li>
            </ul>
            <Link
              href="/#contact"
              className="inline-block mt-6 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Praesidion Security B.V. — Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacybeleid</Link>
            <Link href="/voorwaarden" className="hover:text-primary transition-colors">Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
