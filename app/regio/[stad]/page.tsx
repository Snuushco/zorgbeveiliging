import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regios, getRegioBySlug } from "@/lib/regio";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ stad: string }>;
}

export async function generateStaticParams() {
  return regios.map((r) => ({ stad: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stad } = await params;
  const regio = getRegioBySlug(stad);
  if (!regio) return {};
  return {
    title: `Zorgbeveiliging ${regio.stad} — Professionele beveiliging voor zorginstellingen`,
    description: `Zorgbeveiliging in ${regio.stad} en omgeving. De-escalatie getrainde beveiligers voor ziekenhuizen, verpleeghuizen en GGZ. Praesidion Security — vergunning ND 6250.`,
  };
}

export default async function RegioPage({ params }: Props) {
  const { stad } = await params;
  const regio = getRegioBySlug(stad);
  if (!regio) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/" className="text-teal-300 text-sm font-medium hover:text-white transition-colors">
              ← Terug naar home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">
              Zorgbeveiliging in {regio.stad}
            </h1>
            <p className="text-xl text-teal-200 leading-relaxed">
              Professionele zorgbeveiliging voor zorginstellingen in {regio.stad} en omgeving. 
              Vaste teams, de-escalatie getraind, 24/7 beschikbaar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Zorgbeveiliging in {regio.stad}
                </h2>
                <p className="text-gray-600 leading-relaxed">{regio.beschrijving}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zorginstellingen in de regio</h3>
                <p className="text-gray-600 leading-relaxed">{regio.instellingen}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lokale context</h3>
                <p className="text-gray-600 leading-relaxed">{regio.extraInfo}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Onze diensten in {regio.stad}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Ziekenhuisbeveiliging", href: "/diensten/ziekenhuisbeveiliging" },
                    { title: "Verpleeghuisbeveiliging", href: "/diensten/verpleeghuisbeveiliging" },
                    { title: "GGZ-beveiliging", href: "/diensten/ggz-beveiliging" },
                    { title: "AZC-beveiliging", href: "/diensten/azc-beveiliging" },
                    { title: "Thuiszorg-beveiliging", href: "/diensten/thuiszorg-beveiliging" },
                  ].map((dienst) => (
                    <Link
                      key={dienst.href}
                      href={dienst.href}
                      className="flex items-center gap-3 p-4 bg-warm-gray rounded-xl hover:bg-primary/5 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                        {dienst.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-accent rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Waarom Praesidion in {regio.stad}?</h3>
                <ul className="space-y-3">
                  {[
                    "Vaste beveiligingsteams die uw instelling kennen",
                    "De-escalatie getrainde beveiligers met zorginzicht",
                    "24/7 beschikbaar, ook in het weekend en op feestdagen",
                    "Korte aanrijtijden door regionale focus op Limburg",
                    "Bewezen ervaring bij zorginstellingen in de regio",
                    "Beveiligingsvergunning ND 6250",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact opnemen</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Vraag een gratis intakegesprek aan voor uw instelling in {regio.stad}.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other regions */}
      <section className="py-16 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ook actief in andere regio&apos;s
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {regios
              .filter((r) => r.slug !== regio.slug)
              .map((r) => (
                <Link
                  key={r.slug}
                  href={`/regio/${r.slug}`}
                  className="px-6 py-3 bg-white rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  {r.stad}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
