export interface RegioData {
  stad: string;
  slug: string;
  beschrijving: string;
  instellingen: string;
  extraInfo: string;
}

export const regios: RegioData[] = [
  {
    stad: "Maastricht",
    slug: "maastricht",
    beschrijving: "Als hoofdstad van Limburg huisvest Maastricht enkele van de grootste zorginstellingen in de regio, waaronder het Maastricht UMC+, diverse verpleeghuizen en GGZ-voorzieningen. De combinatie van een grote studentenpopulatie, toerisme en een uitgebreid zorgaanbod maakt professionele zorgbeveiliging hier essentieel.",
    instellingen: "Maastricht UMC+, Envida verpleeghuizen, Mondriaan GGZ, huisartsenposten en diverse particuliere zorginstellingen",
    extraInfo: "Met meer dan 120.000 inwoners en jaarlijks miljoenen bezoekers kent Maastricht een dynamische zorgomgeving waar veiligheid hoog op de agenda staat.",
  },
  {
    stad: "Heerlen",
    slug: "heerlen",
    beschrijving: "Heerlen is het centrum van de Oostelijke Mijnstreek en kent een divers zorglandschap. Het Zuyderland Medisch Centrum, meerdere verpleeg- en verzorgingshuizen en GGZ-voorzieningen maken de stad tot een belangrijke regio voor zorgbeveiliging. De sociaaleconomische uitdagingen in de regio versterken de behoefte aan professionele beveiligingsoplossingen.",
    instellingen: "Zuyderland Medisch Centrum, Meander Groep verpleeghuizen, Mondriaan GGZ, AZC-locaties en thuiszorgorganisaties",
    extraInfo: "Heerlen kampt met specifieke uitdagingen op het gebied van GGZ en verslavingszorg, waarvoor gespecialiseerde zorgbeveiliging onmisbaar is.",
  },
  {
    stad: "Sittard",
    slug: "sittard",
    beschrijving: "Sittard-Geleen vormt samen een belangrijke zorgregio in Midden-Limburg. Met het Zuyderland Medisch Centrum als grootste werkgever en diverse verpleeg- en verzorgingshuizen in de omgeving is er een constante vraag naar professionele zorgbeveiliging die de lokale zorgcultuur begrijpt.",
    instellingen: "Zuyderland Medisch Centrum locatie Sittard, MeanderGroep, Vivantes verpleeghuizen en diverse huisartsenposten",
    extraInfo: "De fusiegemeente Sittard-Geleen biedt een breed zorgaanbod dat vraagt om beveiligers die flexibel inzetbaar zijn op verschillende locaties.",
  },
  {
    stad: "Roermond",
    slug: "roermond",
    beschrijving: "Roermond is de centrumstad van Midden-Limburg met een groeiend zorgaanbod. Het Laurentius Ziekenhuis, diverse verpleeghuizen en de nabijheid van het Designer Outlet — dat jaarlijks miljoenen bezoekers trekt — maken beveiliging in de zorgsector hier extra relevant. De combinatie van zorg en drukte vraagt om beveiligers die beide werelden begrijpen.",
    instellingen: "Laurentius Ziekenhuis, Land van Horne verpleeghuizen, GGZ-voorzieningen en thuiszorgorganisaties",
    extraInfo: "Roermond groeit als zorgregio en de vraag naar gespecialiseerde zorgbeveiliging neemt hier gestaag toe.",
  },
  {
    stad: "Venlo",
    slug: "venlo",
    beschrijving: "Venlo is de grootste stad in Noord-Limburg en een belangrijk logistiek en zorgknooppunt. Het VieCuri Medisch Centrum, verpleeghuizen en GGZ-instellingen vormen een uitgebreid zorgnetwerk. De grensligging met Duitsland en de multiculturele samenstelling van de bevolking vragen om beveiligers met interculturele competenties.",
    instellingen: "VieCuri Medisch Centrum, Proteion verpleeghuizen, Vincent van Gogh GGZ, AZC-locaties en diverse thuiszorgorganisaties",
    extraInfo: "De grensregio Venlo kent specifieke uitdagingen, waaronder grensoverschrijdende zorgvragen en een diverse patiëntenpopulatie.",
  },
  {
    stad: "Geleen",
    slug: "geleen",
    beschrijving: "Geleen, als onderdeel van de gemeente Sittard-Geleen, heeft een rijke industriële historie en een groeiende zorgsector. De nabijheid van Chemelot en de daarmee samenhangende bedrijfsgeneeskundige zorg, gecombineerd met reguliere zorginstellingen, maakt Geleen tot een interessante regio voor zorgbeveiliging.",
    instellingen: "Zuyderland Medisch Centrum regio, verpleeg- en verzorgingshuizen, bedrijfsgeneeskundige faciliteiten en thuiszorgorganisaties",
    extraInfo: "Geleen combineert industriële gezondheidszorg met reguliere zorg, wat vraagt om beveiligers die in beide contexten effectief kunnen opereren.",
  },
];

export function getRegioBySlug(slug: string): RegioData | undefined {
  return regios.find((r) => r.slug === slug);
}
