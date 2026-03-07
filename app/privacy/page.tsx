import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van Zorgbewaking.nl en Praesidion Security B.V.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-warm-gray min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacybeleid</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Zorgbewaking.nl is onderdeel van Praesidion Security B.V. (KvK 97640794). Wij verwerken persoonsgegevens
            zorgvuldig en in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
          </p>
          <p>
            Wanneer u via ons contactformulier gegevens invult, gebruiken wij deze uitsluitend om uw aanvraag te
            behandelen en contact met u op te nemen. Wij delen uw gegevens niet met derden zonder wettelijke grondslag.
          </p>
          <p>
            U heeft het recht op inzage, correctie en verwijdering van uw persoonsgegevens. Voor vragen of verzoeken kunt
            u contact opnemen via <a className="text-primary hover:underline" href="mailto:zorg@praesidion.nl">zorg@praesidion.nl</a> of telefonisch via 046 240 2401.
          </p>
          <p>
            Wij bewaren persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor ze zijn verstrekt, tenzij
            een wettelijke bewaarplicht anders bepaalt.
          </p>
        </div>
      </div>
    </section>
  );
}
