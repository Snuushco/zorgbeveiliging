import { Metadata } from "next";
import DienstPage from "@/components/DienstPage";

export const metadata: Metadata = {
  title: "Thuiszorg-beveiliging — Bescherming van thuiszorgmedewerkers",
  description: "Beveiliging voor thuiszorgmedewerkers bij risicovolle huisbezoeken. Buddy-beveiliging, risicotaxatie en 24/7 alarmopvolging. Praesidion Security.",
};

export default function ThuiszorgBeveiligingPage() {
  return (
    <DienstPage
      title="Thuiszorg-beveiliging"
      subtitle="Bescherming van zorgverleners bij huisbezoeken"
      heroText="Thuiszorgmedewerkers werken alleen, vaak in kwetsbare situaties. Van agressieve cliënten tot onveilige woonomgevingen — onze beveiligers zorgen ervoor dat uw medewerkers hun werk veilig kunnen doen."
      challenges={[
        { title: "Alleen werken in onbekende omgevingen", desc: "Thuiszorgmedewerkers komen bij mensen thuis — soms in wijken of situaties die risicovol zijn. Ze staan er alleen voor." },
        { title: "Agressieve cliënten of huisgenoten", desc: "Niet alleen de cliënt, maar ook huisgenoten, partners of buren kunnen een bedreiging vormen voor thuiszorgmedewerkers." },
        { title: "Psychische problematiek aan huis", desc: "Steeds meer cliënten met GGZ-problematiek ontvangen thuiszorg. Dit kan leiden tot onvoorspelbare situaties." },
        { title: "Geen collega's in de buurt", desc: "Bij een incident is er geen collega om te helpen. De reactietijd van politie kan te lang zijn." },
      ]}
      solutions={[
        { title: "Buddy-beveiliging", desc: "Een beveiliger gaat mee bij risicovolle huisbezoeken, zodat uw medewerker nooit alleen staat in gevaarlijke situaties." },
        { title: "Risicotaxatie vooraf", desc: "Wij beoordelen samen met u welke adressen en cliënten een verhoogd risico vormen en stellen een plan op." },
        { title: "Alarmopvolging", desc: "Bij een persoonlijk alarm rukken onze beveiligers direct uit naar de locatie van uw medewerker." },
        { title: "Preventieve huisbezoeken", desc: "Bij signalen van dreigend gevaar bezoeken onze beveiligers het adres vooraf om de situatie in te schatten." },
        { title: "Training voor thuiszorgteams", desc: "Wij trainen uw medewerkers in het herkennen van risicosignalen en basale de-escalatietechnieken." },
        { title: "Meldpunt en nazorg", desc: "Een laagdrempelig meldpunt voor uw medewerkers, met professionele nazorg na incidenten." },
      ]}
      usps={[
        "Buddy-beveiliging bij huisbezoeken",
        "Snelle alarmopvolging",
        "Risicotaxatie op maat",
        "Training voor uw team",
        "24/7 bereikbaar",
        "Vergunning ND 8969",
        "Ervaring met GGZ in thuissituatie",
        "Actief in heel Limburg",
      ]}
      ctaText="Bescherm uw thuiszorgmedewerkers — zij verdienen het"
    />
  );
}
