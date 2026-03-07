import { Metadata } from "next";
import DienstPage from "@/components/DienstPage";

export const metadata: Metadata = {
  title: "Ziekenhuisbeveiliging — Professionele beveiliging voor ziekenhuizen",
  description: "Gespecialiseerde ziekenhuisbeveiliging met de-escalatie getrainde beveiligers. SEH, psychiatrie, bezoekersstromen. Praesidion Security — vergunning ND 6250.",
};

export default function ZiekenhuisbeveiligingPage() {
  return (
    <DienstPage
      title="Ziekenhuisbeveiliging"
      subtitle="Veiligheid op de werkvloer, met respect voor de patiënt"
      heroText="Ziekenhuizen zijn complexe omgevingen waar emoties hoog kunnen oplopen. Van de spoedeisende hulp tot de psychiatrische afdeling — onze beveiligers kennen de dynamiek en handelen altijd met empathie en professionaliteit."
      challenges={[
        { title: "Agressie op de SEH", desc: "De spoedeisende hulp is een van de meest risicovolle afdelingen. Wachttijden, pijn, alcohol en drugs leiden regelmatig tot agressie tegen zorgpersoneel." },
        { title: "Psychiatrische afdelingen", desc: "Patiënten met psychiatrische problematiek vragen om een bijzondere benadering. Standaard beveiliging kan juist escalerend werken." },
        { title: "Bezoekersstromen", desc: "Grote ziekenhuizen ontvangen honderden bezoekers per dag. Toegangscontrole en bewegingsstromen managen zonder de gastvrijheid te verliezen is een uitdaging." },
        { title: "Diefstal en vandalisme", desc: "Medische apparatuur, medicijnen en persoonlijke eigendommen van patiënten zijn kwetsbaar voor diefstal." },
      ]}
      solutions={[
        { title: "De-escalatie getrainde beveiligers", desc: "Onze beveiligers zijn specifiek getraind in het de-escaleren van agressie in een medische omgeving." },
        { title: "Bekendheid met zorgprotocollen", desc: "Onze teams kennen de protocollen rondom agressie, BOPZ/Wvggz en calamiteiten in ziekenhuizen." },
        { title: "Flexibele inzet", desc: "Van 24/7 vaste posten tot piekurenondersteuning op de SEH — wij schalen mee met uw behoefte." },
        { title: "Incidentregistratie", desc: "Professionele rapportage van elk incident, ter ondersteuning van uw veiligheidsbeleid." },
        { title: "Rondediensten", desc: "Systematische surveillance door het gebouw, gericht op preventie en vroegtijdige signalering." },
        { title: "Samenwerking met zorgteam", desc: "Onze beveiligers werken samen met verpleegkundigen, artsen en facilitaire diensten als onderdeel van uw team." },
      ]}
      usps={[
        "Vaste beveiligers die uw ziekenhuis kennen",
        "24/7 beschikbaar, ook in het weekend",
        "Vergunning ND 6250",
        "De-escalatie als kerncompetentie",
        "Ervaring met SEH, psychiatrie, IC",
        "Korte lijnen, directe communicatie",
        "Maatwerk beveiligingsplan",
        "Actief in heel Limburg",
      ]}
      ctaText="Veiligheid in uw ziekenhuis begint hier"
    />
  );
}
