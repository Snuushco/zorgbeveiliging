import { Metadata } from "next";
import DienstPage from "@/components/DienstPage";

export const metadata: Metadata = {
  title: "GGZ-beveiliging — Specialistische beveiliging voor de geestelijke gezondheidszorg",
  description: "Gespecialiseerde beveiliging voor GGZ-instellingen. De-escalatie getrainde beveiligers die psychiatrische zorg begrijpen. Praesidion Security — vergunning ND 8968.",
};

export default function GGZBeveiligingPage() {
  return (
    <DienstPage
      title="GGZ-beveiliging"
      subtitle="Specialistische beveiliging voor de geestelijke gezondheidszorg"
      heroText="De GGZ is een van de meest uitdagende omgevingen voor beveiliging. Patiënten met psychiatrische problematiek vragen om beveiligers die niet alleen ingrijpen, maar vooral begrijpen. Onze GGZ-beveiligers zijn getraind in de-escalatie en kennen de dynamiek van de psychiatrie."
      challenges={[
        { title: "Onvoorspelbaar gedrag", desc: "Patiënten in een psychose, manische episode of met ernstige persoonlijkheidsproblematiek kunnen onvoorspelbaar reageren. Dit vereist beveiligers die rust uitstralen." },
        { title: "Dwang en drang dilemma's", desc: "De balans tussen veiligheid en de rechten van patiënten (Wvggz) is complex. Beveiligers moeten weten wanneer ingrijpen noodzakelijk is en wanneer niet." },
        { title: "Agressie tegen behandelaars", desc: "GGZ-medewerkers lopen een hoog risico op verbale en fysieke agressie. Dit leidt tot uitval en personeelsverloop." },
        { title: "Middelen en contraband", desc: "Het binnensmokkelen van drugs, alcohol of scherpe voorwerpen is een voortdurend risico in gesloten en open afdelingen." },
      ]}
      solutions={[
        { title: "De-escalatie als kerncompetentie", desc: "Onze GGZ-beveiligers zijn getraind in verbale de-escalatie, motiverende gespreksvoering en crisisinterventie." },
        { title: "Kennis van psychiatrie", desc: "Onze beveiligers begrijpen ziektebeelden, medicatie-effecten en de impact hiervan op gedrag." },
        { title: "Samenwerking met behandelteam", desc: "Beveiligers functioneren als onderdeel van het multidisciplinaire team en volgen het behandelplan." },
        { title: "Separeerondersteuning", desc: "Professionele ondersteuning bij separaties en fixaties, conform de geldende richtlijnen." },
        { title: "Toegangs- en controlebeleid", desc: "Systematische controles op contraband en toegangsbeheer, met respect voor de patiënt." },
        { title: "Rapportage en analyse", desc: "Gedetailleerde incidentrapportage die bijdraagt aan het veiligheidsbeleid van uw instelling." },
      ]}
      usps={[
        "Beveiligers met GGZ-ervaring",
        "De-escalatie getraind (verbaal & fysiek)",
        "Kennis van Wvggz en BOPZ",
        "Vaste teams per locatie",
        "24/7 beschikbaar",
        "Ervaring bij meerdere GGZ-instellingen",
        "Vergunning ND 8968",
        "Maatwerk voor open en gesloten afdelingen",
      ]}
      ctaText="Professionele GGZ-beveiliging begint met het juiste team"
    />
  );
}
