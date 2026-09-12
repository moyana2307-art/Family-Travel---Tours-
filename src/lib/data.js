export const COMPANY = {
  name: "Family Travel and Tours",
  tagline: "Together We Explore. Together We Create Memories.",
  location: "Based in Victoria Falls, Zimbabwe",
  city: "Victoria Falls, Zimbabwe",
  phones: ["+263 779 257 661", "+263 712 540 998", "+44 772 213 7884"],
  whatsapp: ["263779257661", "263712540998", "447722137884"],
  email: "info@familytraveltours.com",
  waMessage:
    "Hello Family Travel and Tours, I'd like to plan a trip!",
};

// Local images served from /public (renamed to clean, space-free filenames).
// Slots not backed by a local asset keep their Unsplash placeholder until a
// matching image is provided.
export const IMAGES = {
  heroMain: "/victoria-falls.jpg",
  heroFalls: "/hero-sec.jpg",
  heroSafari: "/african-bush-elephant-44011a-1350x844.webp",
  family: "/family.jpg",
  group: "/family-1.jfif",
  falls: "/falls.jpg",
  zambezi: "/zimbabwe-tourism1.jpg",
  hwange: "/hwange-national-park.jfif",
  chobe: "/wildlife.jpg",
  elephant: "/chobe.jpg",
  helicopter: "/helicopter-flight.jfif",
  rafting: "/white-water-rafting.jpg",
  culture: "/cultural-experience.jpg",
  lion: "/safari.webp",
  giraffe: "/Walking-with-African-Lions.webp",
  livingstone: "/livingstone.jpg",
  matobo: "/matobo.jpg",
  travel: "/LC202306_ZimbabweWildlife_062_432960_reduced.jpg",
  womanTravel: "/Mana-Pools-Ecotourism-Safaris-510x600_c.jpg",
  adventure: "/image.jpg",
  sunset: "/sunset-cruise.jpg",
  africaMap: "/g.jpg",
  logo: "/icon.svg",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Family Travel", href: "/family-travel" },
  { label: "Custom Travel", href: "/custom-travel" },
  { label: "Contact", href: "/contact" },
];

export const TOURS = [
  {
    slug: "victoria-falls-experience",
    name: "Victoria Falls Experience",
    lead: "Witness One of Africa's Greatest Wonders",
    description:
      "Experience the breathtaking beauty and power of Victoria Falls, one of the world's most spectacular natural attractions. Walk through the rainforest trails, experience the mist rising from the falls, capture unforgettable photographs, and discover why Victoria Falls is known as 'The Smoke That Thunders.'",
    perfectFor: "Families, couples, groups, and first-time visitors.",
    image: IMAGES.falls,
    tag: "Falls",
  },
  {
    slug: "zambezi-sunset-cruise",
    name: "Zambezi Sunset Cruise",
    lead: "Relax. Explore. Watch the Sunset.",
    description:
      "Enjoy a peaceful journey along the Zambezi River while taking in spectacular African sunsets. Look out for wildlife along the riverbanks and enjoy the changing colors of the African sky as the sun disappears beyond the horizon.",
    perfectFor: "Relaxation seekers and couples.",
    image: IMAGES.sunset,
    tag: "Cruise",
  },
  {
    slug: "hwange-safari",
    name: "Hwange Safari",
    lead: "Into The Wild",
    description:
      "Discover Zimbabwe's incredible wildlife in Hwange National Park. Experience the excitement of an African safari while searching for elephants, lions, buffalo, giraffes, zebras, antelope, and many other species. An unforgettable experience for wildlife lovers and families.",
    perfectFor: "Wildlife lovers and families.",
    image: IMAGES.hwange,
    tag: "Safari",
  },
  {
    slug: "chobe-day-trip",
    name: "Chobe Day Trip",
    lead: "Discover Botswana",
    description:
      "Cross into Botswana for an exciting day exploring the Chobe region. Experience incredible wildlife, beautiful river landscapes, and the unique atmosphere of one of Southern Africa's most famous wildlife destinations.",
    perfectFor: "Adventure and wildlife travelers.",
    image: IMAGES.elephant,
    tag: "Botswana",
  },
  {
    slug: "zambezi-river-adventure",
    name: "Zambezi River Adventure",
    lead: "Where Nature Meets Adventure",
    description:
      "Experience the mighty Zambezi River through a selection of exciting activities and relaxing experiences. Whether you prefer adventure or simply want to enjoy the river's natural beauty, there is something for every traveler.",
    perfectFor: "Adventurers and nature lovers.",
    image: IMAGES.zambezi,
    tag: "Adventure",
  },
  {
    slug: "helicopter-experience",
    name: "Helicopter Experience",
    lead: "See Victoria Falls From Above",
    description:
      "Take your Victoria Falls experience to another level with an unforgettable aerial view. See the Falls, Zambezi River, surrounding landscapes, and dramatic natural scenery from the sky.",
    perfectFor: "First-time visitors and thrill seekers.",
    image: IMAGES.helicopter,
    tag: "Aerial",
  },
  {
    slug: "white-water-rafting",
    name: "White Water Rafting",
    lead: "Adventure Meets The Zambezi",
    description:
      "For travelers looking for excitement, experience the power of the Zambezi River through an exhilarating white-water adventure. Perfect for adventure seekers looking for an unforgettable experience.",
    perfectFor: "Adventure seekers.",
    image: IMAGES.rafting,
    tag: "Adventure",
  },
  {
    slug: "cultural-experiences",
    name: "Cultural Experiences",
    lead: "Discover Zimbabwe Beyond The Landscape",
    description:
      "Meet local communities, discover Zimbabwean traditions, learn about local culture, and experience the warmth and hospitality of Zimbabwe. Travel deeper. Connect with the people. Experience the culture.",
    perfectFor: "Culture and community travelers.",
    image: IMAGES.culture,
    tag: "Culture",
  },
];

export const DESTINATIONS = [
  {
    name: "Victoria Falls",
    country: "Zimbabwe",
    description:
      "The home of one of the world's most spectacular waterfalls and the heart of our travel experiences.",
    image: IMAGES.falls,
  },
  {
    name: "Hwange National Park",
    country: "Zimbabwe",
    description:
      "A spectacular wildlife destination offering unforgettable safari experiences and incredible encounters with African wildlife.",
    image: IMAGES.hwange,
  },
  {
    name: "Zambezi River",
    country: "Zimbabwe",
    description:
      "A magnificent river offering wildlife, adventure, relaxation, cruises, and unforgettable sunsets.",
    image: IMAGES.zambezi,
  },
  {
    name: "Chobe National Park",
    country: "Botswana",
    description:
      "A world-renowned wildlife destination known for its spectacular landscapes and incredible wildlife experiences.",
    image: IMAGES.elephant,
  },
  {
    name: "Livingstone",
    country: "Zambia",
    description:
      "Discover the Zambian side of Victoria Falls and experience the culture, adventure, and beauty of Livingstone.",
    image: IMAGES.livingstone,
  },
  {
    name: "Matobo",
    country: "Zimbabwe",
    description:
      "Explore dramatic granite landscapes, ancient history, wildlife, and the unique cultural heritage of the Matobo region.",
    image: IMAGES.matobo,
  },
];

export const TESTIMONIALS = [
  {
    quote: "An unforgettable experience.",
    text: "Our trip was beautifully organized from start to finish. Victoria Falls was incredible and our family had an amazing time.",
    author: "Happy Traveler",
  },
  {
    quote: "Professional and friendly.",
    text: "The team made our journey easy and enjoyable. Everything was well planned and we felt taken care of throughout our trip.",
    author: "Happy Traveler",
  },
  {
    quote: "Zimbabwe is beautiful.",
    text: "Family Travel and Tours helped us discover experiences we would never have found on our own. We cannot wait to come back.",
    author: "Happy Traveler",
  },
];




