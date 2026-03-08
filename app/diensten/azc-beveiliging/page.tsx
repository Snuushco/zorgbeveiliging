import { Metadata } from "next";
import DienstPage from "@/components/DienstPage";

export const metadata: Metadata = {
  title: "AZC-beveiliging — Beveiliging voor asielzoekerscentra",
  description: "Cultureel sensitieve beveiliging voor AZC's en opvanglocaties. Mensgerichte aanpak met oog voor diverse achtergronden. Praesidion Security.",
};

export default function AZCBeveiligingPage() {
  return (
    <DienstPage
      title="AZC-beveiliging"
      subtitle="Mensgerichte beveiliging in een multiculturele omgeving"
      heroText="Asielzoekerscentra zijn complexe leefomgevingen waar mensen met diverse achtergronden, trauma's en verwachtingen samenleven. Onze beveiligers combineren professionaliteit met culturele sensitiviteit en menselijke maat."
      challenges={[
        { title: "Spanningen tussen bewoners", desc: "Verschillende culturele achtergronden, taalbarrières en de stress van het asielproces kunnen leiden tot onderlinge conflicten." },
        { title: "Trauma en onvoorspelbaar gedrag", desc: "Veel bewoners dragen oorlogstrauma's mee die kunnen leiden tot flashbacks, agressie of juist terugtrekking." },
        { title: "Taalbarrières", desc: "Communicatie is essentieel bij beveiliging, maar niet alle bewoners spreken Nederlands of Engels." },
        { title: "Maatschappelijke druk", desc: "AZC's staan onder maatschappelijke druk. Demonstraties, media-aandacht en buurtrelaties vragen om diplomatieke beveiliging." },
      ]}
      solutions={[
        { title: "Cultureel sensitieve benadering", desc: "Onze beveiligers zijn getraind in interculturele communicatie en begrijpen culturele verschillen in gedrag en lichaamstaal." },
        { title: "Traumasensitief werken", desc: "Wij herkennen signalen van trauma en weten hoe we moeten handelen zonder de situatie te verergeren." },
        { title: "De-escalatie in meerdere talen", desc: "Onze teams beschikken over meertalige beveiligers die in meerdere talen kunnen communiceren." },
        { title: "24/7 aanwezigheid", desc: "Dag en nacht beveiliging die bijdraagt aan een veilig gevoel voor bewoners én omwonenden." },
        { title: "Samenwerking met COA/opvang", desc: "Nauw overleg met het COA, locatiemanagement en maatschappelijk werk voor een integrale aanpak." },
        { title: "Perimeter- en toegangsbeveiliging", desc: "Professioneel beheer van toegang en perimeter, met oog voor de leefbaarheid van de locatie." },
      ]}
      usps={[
        "Ervaring met AZC-beveiliging",
        "Interculturele communicatietraining",
        "Traumasensitief werken",
        "Meertalige beveiligers",
        "24/7 inzetbaar",
        "Vergunning ND 8968",
        "Samenwerking met COA en gemeenten",
        "De-escalatie als uitgangspunt",
      ]}
      ctaText="Veiligheid met menselijke maat in uw opvanglocatie"
    />
  );
}
