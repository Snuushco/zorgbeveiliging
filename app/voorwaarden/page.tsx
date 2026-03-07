import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van Zorgbewaking.nl en Praesidion Security B.V.",
};

export default function VoorwaardenPage() {
  return (
    <section className="py-20 bg-warm-gray min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Algemene voorwaarden</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Op alle diensten van Zorgbewaking.nl, onderdeel van Praesidion Security B.V. (KvK 97640794), zijn onze
            algemene voorwaarden van toepassing.
          </p>
          <p>
            Offertes zijn vrijblijvend tenzij schriftelijk anders overeengekomen. Overeenkomsten komen tot stand na
            schriftelijke bevestiging door beide partijen.
          </p>
          <p>
            Praesidion Security B.V. streeft naar maximale kwaliteit en professionaliteit in de uitvoering van
            beveiligingsdiensten. Aansprakelijkheid is beperkt tot het bedrag dat in het betreffende geval door de
            aansprakelijkheidsverzekering wordt uitgekeerd.
          </p>
          <p>
            Op alle rechtsverhoudingen is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde
            rechter in Nederland.
          </p>
          <p>
            Voor een volledige versie van de voorwaarden kunt u contact opnemen via
            <a className="text-primary hover:underline ml-1" href="mailto:zorg@praesidion.nl">zorg@praesidion.nl</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
