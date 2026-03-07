import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten — Zorgbeveiliging op maat",
  description:
    "Ontdek onze diensten: ziekenhuisbeveiliging, verpleeghuisbeveiliging, GGZ-beveiliging, AZC-beveiliging en thuiszorg-beveiliging.",
};

const diensten = [
  {
    title: "Ziekenhuisbeveiliging",
    href: "/diensten/ziekenhuisbeveiliging",
    desc: "SEH, psychiatrie en bezoekersstromen veilig en beheersbaar houden.",
  },
  {
    title: "Verpleeghuisbeveiliging",
    href: "/diensten/verpleeghuisbeveiliging",
    desc: "Bescherming van kwetsbare bewoners met respect voor hun leefomgeving.",
  },
  {
    title: "GGZ-beveiliging",
    href: "/diensten/ggz-beveiliging",
    desc: "Specialistische beveiliging voor open en gesloten GGZ-afdelingen.",
  },
  {
    title: "AZC-beveiliging",
    href: "/diensten/azc-beveiliging",
    desc: "Cultureel sensitieve beveiliging in opvanglocaties en AZC's.",
  },
  {
    title: "Thuiszorg-beveiliging",
    href: "/diensten/thuiszorg-beveiliging",
    desc: "Veilige huisbezoeken met buddy-beveiliging en alarmopvolging.",
  },
];

export default function DienstenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Onze diensten</h1>
          <p className="text-xl text-teal-200 max-w-3xl">
            Gespecialiseerde zorgbeveiliging voor elke zorgomgeving in Limburg.
          </p>
        </div>
      </section>

      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {diensten.map((dienst) => (
              <Link
                key={dienst.href}
                href={dienst.href}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-3">{dienst.title}</h2>
                <p className="text-gray-600 mb-4">{dienst.desc}</p>
                <span className="text-primary font-semibold text-sm">Meer informatie →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
