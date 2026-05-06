export type Testimonial = {
  id: string;
  quoteLt: string;
  quoteRu: string;
  quoteEn: string;
  author: string;
  city: string;
  service: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-001",
    quoteLt:
      "Trinkelės atrodo kaip naujos. Komanda atvyko punktualiai, dirbo tvarkingai, palikau juos vienus su raktu nuo vartų — viskas idealiai.",
    quoteRu:
      "Плитка как новая. Бригада приехала вовремя, работала аккуратно, оставила им ключ от ворот — всё идеально.",
    quoteEn:
      "The pavers look new. The crew arrived on time, worked cleanly, I even left them the gate key — everything was perfect.",
    author: "Mantas",
    city: "Vilnius",
    service: "Trinkelių plovimas",
    date: "2025-08",
  },
  {
    id: "t-002",
    quoteLt:
      "Po žiemos terasa buvo žalia nuo samanų. Nuotraukos prieš ir po nuvylė — net nemaniau, kad tas pats medis.",
    quoteRu:
      "После зимы терраса была зелёной от мха. Фото до и после удивили — не поверила, что это то же самое дерево.",
    quoteEn:
      "After winter the terrace was green with moss. The before/after photos shocked me — I couldn't tell it was the same wood.",
    author: "Rūta",
    city: "Kaunas",
    service: "Terasos plovimas",
    date: "2025-06",
  },
  {
    id: "t-003",
    quoteLt:
      "Buvome trys pasiūlymų gavę. Šie nebuvo pigiausi, bet vieninteliai atvyko apžiūrėti vietoje ir davė tikslią rašytinę sąmatą.",
    quoteRu:
      "Получили три предложения. Это были не самые дешёвые, но единственные, кто приехал на осмотр и дал точную письменную смету.",
    quoteEn:
      "We had three quotes. These weren't the cheapest, but the only ones who came on site and put it in writing.",
    author: "Andrius",
    city: "Klaipėda",
    service: "Komercinė aikštelė",
    date: "2025-09",
  },
];
