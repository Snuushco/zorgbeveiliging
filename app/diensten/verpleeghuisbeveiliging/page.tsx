import { Metadata } from "next";
import DienstPage from "@/components/DienstPage";

export const metadata: Metadata = {
  title: "Verpleeghuisbeveiliging — Beveiliging voor verpleeg- en verzorgingshuizen",
  description: "Professionele beveiliging voor verpleeghuizen en verzorgingshuizen. Bescherming van kwetsbare ouderen met respect en empathie. Praesidion Security.",
};

export default function VerpleeghuisbeveiligingPage() {
  return (
    <DienstPage
      title="Verpleeghuisbeveiliging"
      subtitle="Bescherming met warmte voor kwetsbare bewoners"
      heroText="Verpleeg- en verzorgingshuizen zijn de leefomgeving van kwetsbare ouderen. Beveiliging moet hier onzichtbaar maar effectief zijn — met respect voor de waardigheid en het comfort van bewoners."
      challenges={[
        { title: "Dwalende bewoners", desc: "Bewoners met dementie kunnen ongemerkt de instelling verlaten. Dit vraagt om alertheid zonder vrijheidsbeperkende maatregelen." },
        { title: "Agressie door dementie", desc: "Onbegrepen gedrag bij dementie kan leiden tot agressie richting medebewoners en zorgpersoneel. Dit vraagt om een specifieke benadering." },
        { title: "Ongewenste bezoekers", desc: "Niet elk bezoek is welkom. Familieconflicten, ex-partners of kwaadwillenden kunnen een bedreiging vormen voor bewoners." },
        { title: "Nachtelijke onrust", desc: "Nachtdiensten in verpleeghuizen zijn kwetsbaar. Minder personeel, onrustige bewoners en beperkt zicht vragen om extra waakzaamheid." },
      ]}
      solutions={[
        { title: "Beveiligers met ouderenzorgervaring", desc: "Onze beveiligers begrijpen dementie, onbegrepen gedrag en de kwetsbaarheid van ouderen." },
        { title: "Nacht- en weekenddiensten", desc: "Extra beveiliging tijdens de meest kwetsbare uren, wanneer de bezetting op de afdeling laag is." },
        { title: "Toegangscontrole", desc: "Discreet beheer van wie er binnenkomt, zonder het huiselijke karakter van de instelling te verstoren." },
        { title: "Rondes en surveillances", desc: "Regelmatige controles door het gebouw, gericht op het welzijn van bewoners én de veiligheid van medewerkers." },
        { title: "Samenwerking met zorgteam", desc: "Onze beveiligers zijn een verlengstuk van het zorgteam en weten wanneer ze moeten handelen of juist afwachten." },
        { title: "Incidentpreventie", desc: "Door aanwezigheid en bekendheid worden incidenten voorkomen voordat ze escaleren." },
      ]}
      usps={[
        "Beveiligers met kennis van ouderenzorg",
        "Vaste gezichten die bewoners kennen",
        "24/7 inzetbaar",
        "De-escalatie bij onbegrepen gedrag",
        "Discreet en respectvol",
        "Ervaring in heel Limburg",
        "Vergunning ND 8969",
        "Korte lijnen met locatiemanagement",
      ]}
      ctaText="Veiligheid en warmte voor uw bewoners"
    />
  );
}
