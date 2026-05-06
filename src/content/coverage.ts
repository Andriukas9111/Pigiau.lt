export type Region = {
  id: string;
  nameLt: string;
  nameRu: string;
  nameEn: string;
  responseTimeHours: number;
  cities: string[];
};

export const regions: Region[] = [
  {
    id: "vilniaus",
    nameLt: "Vilniaus apskritis",
    nameRu: "Вильнюсский уезд",
    nameEn: "Vilnius County",
    responseTimeHours: 24,
    cities: ["Vilnius", "Trakai", "Elektrėnai", "Šalčininkai", "Švenčionys", "Ukmergė"],
  },
  {
    id: "kauno",
    nameLt: "Kauno apskritis",
    nameRu: "Каунасский уезд",
    nameEn: "Kaunas County",
    responseTimeHours: 24,
    cities: ["Kaunas", "Jonava", "Kėdainiai", "Prienai", "Birštonas", "Raseiniai"],
  },
  {
    id: "klaipedos",
    nameLt: "Klaipėdos apskritis",
    nameRu: "Клайпедский уезд",
    nameEn: "Klaipėda County",
    responseTimeHours: 24,
    cities: ["Klaipėda", "Palanga", "Šilutė", "Kretinga", "Skuodas", "Neringa"],
  },
  {
    id: "siauliu",
    nameLt: "Šiaulių apskritis",
    nameRu: "Шяуляйский уезд",
    nameEn: "Šiauliai County",
    responseTimeHours: 48,
    cities: ["Šiauliai", "Joniškis", "Kelmė", "Pakruojis", "Radviliškis"],
  },
  {
    id: "panevezio",
    nameLt: "Panevėžio apskritis",
    nameRu: "Паневежский уезд",
    nameEn: "Panevėžys County",
    responseTimeHours: 48,
    cities: ["Panevėžys", "Biržai", "Kupiškis", "Pasvalys", "Rokiškis"],
  },
  {
    id: "alytaus",
    nameLt: "Alytaus apskritis",
    nameRu: "Алитусский уезд",
    nameEn: "Alytus County",
    responseTimeHours: 48,
    cities: ["Alytus", "Druskininkai", "Lazdijai", "Varėna"],
  },
  {
    id: "marijampoles",
    nameLt: "Marijampolės apskritis",
    nameRu: "Мариямпольский уезд",
    nameEn: "Marijampolė County",
    responseTimeHours: 48,
    cities: ["Marijampolė", "Vilkaviškis", "Šakiai", "Kazlų Rūda", "Kalvarija"],
  },
  {
    id: "telsiu",
    nameLt: "Telšių apskritis",
    nameRu: "Тельшяйский уезд",
    nameEn: "Telšiai County",
    responseTimeHours: 48,
    cities: ["Telšiai", "Mažeikiai", "Plungė", "Rietavas"],
  },
  {
    id: "taurages",
    nameLt: "Tauragės apskritis",
    nameRu: "Таурагский уезд",
    nameEn: "Tauragė County",
    responseTimeHours: 48,
    cities: ["Tauragė", "Šilalė", "Jurbarkas", "Pagėgiai"],
  },
  {
    id: "utenos",
    nameLt: "Utenos apskritis",
    nameRu: "Утенский уезд",
    nameEn: "Utena County",
    responseTimeHours: 48,
    cities: ["Utena", "Anykščiai", "Ignalina", "Molėtai", "Visaginas", "Zarasai"],
  },
];
