// app/travelrecs/data.ts
//
// ─── HOW TO UPDATE ───────────────────────────────────────────────────────
// Add a city: find the region, add { city, country, url } to its cities array
// Add a region: copy an existing region block, change the name
// Update a URL: just change the url string
// After changes: `npx opennextjs-cloudflare build && npx wrangler deploy`
// ────────────────────────────────────────────────────────────────────────

export type HomeCityCard =
  | {
      number: string;
      kicker: string;
      title: string;
      titleEmphasis: string;
      dek: string;
      type: "single";
      ctaLabel: string;
      ctaFormat: string;
      url: string;
    }
  | {
      number: string;
      kicker: string;
      title: string;
      titleEmphasis: string;
      dek: string;
      type: "series";
      maps: { name: string; meta: string; url: string }[];
    };

export type TaiwanSection = {
  kicker: string;
  title: string;
  titleEmphasis: string;
  dek: string;
  ctaLabel: string;
  url: string;
};

export type Region = {
  name: string;
  cities: { city: string; country: string; url: string }[];
};

export type FoodExpert = {
  name: string;
  url: string;
  description: string;
};

export const homeCities: HomeCityCard[] = [
  {
    number: "01",
    kicker: "A working spreadsheet · New York City",
    title: "The New York Notebook",
    titleEmphasis: "New York",
    dek: "Years of eating, drinking, and gallivanting: restaurants, coffee shops, and bars logged across the five boroughs all in one searchable list, sortable by neighborhood, type, and cuisine.",
    type: "single",
    ctaLabel: "Open the spreadsheet",
    ctaFormat: "Google Sheets",
    url: "https://docs.google.com/spreadsheets/d/15x7MZZACdnSSekNusrqCm1ws91tuPU_C6WzMewf9Ykg/edit?usp=sharing",
  },
  {
    number: "02",
    kicker: "A series of maps · Los Angeles",
    title: "Where to Eat in LA",
    titleEmphasis: "Eat",
    dek: "LA food by region",
    type: "series",
    maps: [
      {
        name: "San Gabriel Valley",
        meta: "the SGV",
        url: "https://www.google.com/maps/d/u/0/edit?mid=1IzwUUdCBqfywkyT0fklOlS8ADcA&usp=sharing",
      },
      {
        name: "DTLA, Ktown, & Eastside",
        meta: "east",
        url: "https://www.google.com/maps/d/u/0/edit?mid=1xRQbKqSVC-bUyKkXgrFsR1x9-SU&usp=sharing",
      },
      {
        name: "West of Western",
        meta: "the west side",
        url: "https://www.google.com/maps/d/u/0/edit?mid=1FLZK9aRWINNQRg2iJWkuI4AacUc&usp=sharing",
      },
    ],
  },
];

export const taiwan: TaiwanSection = {
  kicker: "Taiwanese Expat",
  title: "The Taiwan Guide",
  titleEmphasis: "Guide",
  dek: "My dedicated guide to Taiwan with city and genre specific food maps, where to go beyond Taipei, and writing on Taiwan.",
  ctaLabel: "Visit the Taiwan Guide",
  url: "https://www.taiwanese-expat.com",
};

export const regions: Region[] = [
  {
    name: "Asia",
    cities: [
      { city: "Tokyo", country: "Japan", url: "https://www.google.com/maps/d/u/0/edit?mid=1MisMeBvENGMGiP04ldqSCr8shCl6ZaZw&usp=sharing" },
      { city: "Kyoto", country: "Japan", url: "https://www.google.com/maps/d/u/0/edit?mid=1QNUIa9pikT38lPR2YQE1rJ2yUvHzxpg4&usp=sharing" },
      { city: "Osaka", country: "Japan", url: "https://www.google.com/maps/d/u/0/edit?mid=1HGNF-3z__jTbWtZRDVbED6GsPpJt7guy&usp=sharing" },
      { city: "Hiroshima", country: "Japan", url: "https://www.google.com/maps/d/u/0/edit?mid=1GfOsNqbcJHGa47dX5iJrcyX_k8dG2x8f&usp=sharing" },
      { city: "Uji", country: "Japan", url: "https://www.google.com/maps/d/u/0/edit?mid=1j_uWmZQVwl7LhX7XFviK_bcF11D07GgY&usp=sharing" },
      { city: "Seoul", country: "South Korea", url: "https://www.google.com/maps/d/u/0/edit?mid=1KDl_cP4kujuL-8gnHiP7JIXqY47RRoWC&usp=sharing" },
      { city: "Chiang Mai", country: "Thailand", url: "https://www.google.com/maps/d/u/0/edit?mid=177SijUQNKkE5D04SWJmT0WzGwSJi0un_&usp=sharing" },
      { city: "Kuala Lumpur", country: "Malaysia", url: "https://www.google.com/maps/d/u/0/edit?mid=1g_sECjEGKlTF0pYONKHnjlIqX839PqeZ&usp=sharing" },
    ],
  },
  {
    name: "Europe",
    cities: [
      { city: "London", country: "United Kingdom", url: "https://www.google.com/maps/d/u/0/edit?mid=1MGQorLGcydFW5BpMlU0AUtsn2yc&usp=sharing" },
      { city: "Dublin", country: "Ireland", url: "https://www.google.com/maps/d/u/0/edit?mid=10wUdhOsAFPmWvsNbA9f_ZfskRsA&usp=sharing" },
      { city: "Copenhagen", country: "Denmark", url: "https://www.google.com/maps/d/u/0/edit?mid=1NAB8U_FweDsV9dlCOnelSoEjwfM&usp=sharing" },
      { city: "Stockholm", country: "Sweden", url: "https://www.google.com/maps/d/u/0/edit?mid=1GIB1yCw-haItWmpo5ZuDcPqmboJ9bs4&usp=sharing" },
      { city: "Helsinki", country: "Finland", url: "https://www.google.com/maps/d/u/0/edit?mid=1-QEbxniUGjPyiuL5zpwfeVDnMCAbcS4&usp=sharing" },
      { city: "Tallinn", country: "Estonia", url: "https://www.google.com/maps/d/u/0/edit?mid=1MBq04gEjYwNkyF-aEyN5MeXl5H_x25o&usp=sharing" },
      { city: "Munich", country: "Germany", url: "https://www.google.com/maps/d/u/0/edit?mid=1J6b_zKWWEPlCxVO9woDOmm45PeLfuDXU&usp=sharing" },
      { city: "Prague", country: "Czech Republic", url: "https://www.google.com/maps/d/u/0/edit?mid=10xUNmC7_JlPMEfiDa3wykED9t91SMnmf&usp=sharing" },
      { city: "Lisbon", country: "Portugal", url: "https://www.google.com/maps/d/u/0/edit?mid=1ZJ-UXowHcMhrmZHjmdQhrJIkv4I&usp=sharing" },
      { city: "Porto", country: "Portugal", url: "https://www.google.com/maps/d/u/0/edit?mid=1cIPNcz-7ZV7kYBq51Pgy5P0Oos4VssKH&usp=sharing" },
      { city: "Split", country: "Croatia", url: "https://www.google.com/maps/d/u/0/edit?mid=1jH03aNlFIWTdK6Ho-bHJF9CsUaBtiAWs&usp=sharing" },
    ],
  },
  {
    name: "The Americas",
    cities: [
      { city: "Mexico City", country: "Mexico", url: "https://www.google.com/maps/d/u/0/edit?mid=1warg6vI-ftoe3wPNP8eoOk6tIJu75tHY&usp=sharing" },
      { city: "Lima", country: "Peru", url: "https://www.google.com/maps/d/u/0/edit?mid=1aXWmSyBJXgc_05mkEsrgPYbtvOLH9mtF&usp=sharing" },
      { city: "Medellín", country: "Colombia", url: "https://www.google.com/maps/d/u/0/edit?mid=1h-6GosRFzB4kkmwN9UTlYFIn_hYXYxWE&usp=sharing" },
      { city: "Santiago", country: "Chile", url: "https://www.google.com/maps/d/u/0/edit?mid=1fwqwBHvPDOBcvcHXBnyjLBQQPM-RjYjv&usp=sharing" },
    ],
  },
];

export const foodExperts: FoodExpert[] = [
  {
    name: "Between Drinks",
    url: "https://betweendrinks.co/",
    description: "Podcast from Caro Griffin, an expert on cocktails and history of spirits.",
  },
  {
    name: "Sonya Bites Life",
    url: "https://www.instagram.com/sonyabiteslife/",
    description: "Taiwan-based Food creator on Instagram.",
  },
  {
    name: "Clarissa Wei",
    url: "https://clarissawei.com/",
    description: "Taiwan-based journalist and author of Made in Taiwan.",
  },
];
