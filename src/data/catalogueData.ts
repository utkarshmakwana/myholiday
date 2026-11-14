export interface HolidayThemeCategory {
  id: string;
  number: number;
  title: string;
  description: string;
  regions: string[];
  recommendedSeason: string;
  iconName: string;
}

export interface WildlifeCategoryStat {
  label: string;
  count: string;
  note?: string;
}

export interface WildlifeDestinationItem {
  id: string;
  name: string;
  stateOrCountry: string;
  region: 'India' | 'International';
  keyFauna: string;
  bestSeason: string;
  highlight: string;
}

export interface WildlifeTourismCategory {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface KidsDestinationItem {
  id: string;
  name: string;
  location: string;
  country: string;
  region: 'India' | 'International';
  suggestedAge: string;
  suggestedStay: string;
  budgetStyle: 'Budget' | 'Budget–Mid-range' | 'Mid-range' | 'Mid-range–Luxury' | 'Luxury' | 'Budget–Luxury' | 'Varies';
  description: string;
  highlight: string;
}

export interface HistoricalDestinationItem {
  id: string;
  name: string;
  location: string;
  country: string;
  region: 'India' | 'International';
  eraOrDynasty: string;
  suggestedSeason: string;
  description: string;
}

export interface SampleItinerary {
  id: string;
  catalogue: 'Kids Dream' | 'Historical Heritage' | 'Wildlife Safari';
  title: string;
  duration: string;
  overview: string;
  days: { day: number; title: string; desc: string }[];
}

// 1. Master Brochure & 10 Core Holiday Themes (Image 3)
export const MASTER_HOLIDAY_THEMES: HolidayThemeCategory[] = [
  {
    id: 'theme-india',
    number: 1,
    title: 'India Holidays',
    description: 'Ancient heritage, tranquil backwaters, misty hill stations, and vibrant cultural circuits across all 28 states.',
    regions: ['Rajasthan', 'Kerala', 'Himachal', 'Goa', 'Uttarakhand', 'Andaman'],
    recommendedSeason: 'October to March',
    iconName: 'MapPin'
  },
  {
    id: 'theme-asia',
    number: 2,
    title: 'Asia Holidays',
    description: 'Tropical beaches, ancient temples, futuristic cities, and rich culinary traditions across East & Southeast Asia.',
    regions: ['Thailand', 'Bali (Indonesia)', 'Singapore', 'Malaysia', 'Japan', 'Vietnam'],
    recommendedSeason: 'November to April',
    iconName: 'Globe'
  },
  {
    id: 'theme-europe',
    number: 3,
    title: 'Europe Holidays',
    description: 'Fairytale castles, alpine landscapes, Mediterranean coastlines, and timeless art across historic European capitals.',
    regions: ['Switzerland', 'France', 'Italy', 'United Kingdom', 'Spain', 'Greece'],
    recommendedSeason: 'May to September',
    iconName: 'Compass'
  },
  {
    id: 'theme-middle-east',
    number: 4,
    title: 'Middle East Holidays',
    description: 'Iconic modern architecture, desert adventures, rose-rock heritage cities, and luxury Arabian hospitality.',
    regions: ['Dubai & Abu Dhabi (UAE)', 'Jordan (Petra)', 'Oman', 'Saudi Arabia', 'Qatar'],
    recommendedSeason: 'November to March',
    iconName: 'Sun'
  },
  {
    id: 'theme-africa',
    number: 5,
    title: 'Africa Holidays',
    description: 'The world’s premier wildlife safaris, dramatic Great Rift valleys, Victoria Falls, and endless savannah horizons.',
    regions: ['Kenya (Maasai Mara)', 'Tanzania (Serengeti)', 'South Africa (Kruger)', 'Botswana', 'Rwanda'],
    recommendedSeason: 'June to October (Dry Safari Season)',
    iconName: 'ShieldAlert'
  },
  {
    id: 'theme-north-america',
    number: 6,
    title: 'North America Holidays',
    description: 'Grand canyons, world-class national parks, iconic theme parks, and vibrant cultural metropolises.',
    regions: ['USA (Yellowstone, Orlando, California)', 'Canada (Banff & Jasper Rockies)', 'Mexico'],
    recommendedSeason: 'May to October',
    iconName: 'Mountain'
  },
  {
    id: 'theme-south-america',
    number: 7,
    title: 'South America Holidays',
    description: 'Ancient Incan citadel ruins, Amazonian biodiversity, patagonian glaciers, and colorful carnival cities.',
    regions: ['Peru (Machu Picchu)', 'Brazil (Amazon & Pantanal)', 'Argentina', 'Chile'],
    recommendedSeason: 'May to September (Andes Dry Season)',
    iconName: 'TreePine'
  },
  {
    id: 'theme-aus-nz',
    number: 8,
    title: 'Australia & New Zealand Holidays',
    description: 'Great Barrier Reef marine wonders, Gold Coast theme parks, geothermal geysers, and alpine fjord landscapes.',
    regions: ['Sydney & Gold Coast', 'Great Barrier Reef & Daintree', 'Queenstown & Rotorua (NZ)'],
    recommendedSeason: 'September to April',
    iconName: 'Waves'
  },
  {
    id: 'theme-islands',
    number: 9,
    title: 'Island & Beach Holidays',
    description: 'Turquoise lagoons, overwater thatched villas, coral reef snorkeling, and secluded private sands.',
    regions: ['Maldives (Atolls)', 'Mauritius', 'Seychelles', 'Phuket & Krabi', 'Havelock (Andaman)'],
    recommendedSeason: 'November to April',
    iconName: 'Palmtree'
  },
  {
    id: 'theme-luxury',
    number: 10,
    title: 'Honeymoon & Luxury Holidays',
    description: 'Private pool villas, bespoke butler service, Michelin-starred dining, and romantic sunset yacht excursions.',
    regions: ['Maldives Overwater Suites', 'Santorini & Amalfi', 'Swiss Alpine Chalets', 'Ubud Rainforests'],
    recommendedSeason: 'Year-Round Bespoke Travel',
    iconName: 'Sparkles'
  }
];

// 2. Wildlife Tourism Statistics & Destinations (Image 4, 5, 6)
export const WILDLIFE_STATS: WildlifeCategoryStat[] = [
  { label: 'National Parks', count: '106', note: 'Protected pristine biodiversity reserves across India' },
  { label: 'Wildlife Sanctuaries', count: '573+', note: 'Government protected species conservation habitats' },
  { label: 'Tiger Reserves', count: '58', note: 'Project Tiger reserves for Royal Bengal tiger tracking' },
  { label: 'Elephant Reserves', count: '33', note: 'Dedicated protected Asian elephant natural corridors' },
  { label: 'Biosphere Reserves', count: '18', note: 'UNESCO & National ecosystems combining nature & research' }
];

export const POPULAR_INDIAN_WILDLIFE: WildlifeDestinationItem[] = [
  {
    id: 'wild-in-1',
    name: 'Jim Corbett National Park',
    stateOrCountry: 'Uttarakhand',
    region: 'India',
    keyFauna: 'Royal Bengal Tigers, Asian Elephants, Leopards, Gharials',
    bestSeason: 'November to June (Dhikala Zone opens Nov 15)',
    highlight: 'India’s oldest national park on the foothills of the Himalayas along the Ramganga River.'
  },
  {
    id: 'wild-in-2',
    name: 'Ranthambore National Park',
    stateOrCountry: 'Rajasthan',
    region: 'India',
    keyFauna: 'Bengal Tigers, Sloth Bears, Marsh Crocodiles, Chital',
    bestSeason: 'October to June',
    highlight: 'Historic 10th-century hill fortress rising majestically over prime tiger watering holes and Padam Talao.'
  },
  {
    id: 'wild-in-3',
    name: 'Kaziranga National Park',
    stateOrCountry: 'Assam',
    region: 'India',
    keyFauna: 'Great One-Horned Rhinoceros, Wild Water Buffalo, Swamp Deer',
    bestSeason: 'November to April',
    highlight: 'UNESCO World Heritage Site hosting two-thirds of the world’s one-horned rhinoceros population.'
  },
  {
    id: 'wild-in-4',
    name: 'Gir National Park',
    stateOrCountry: 'Gujarat',
    region: 'India',
    keyFauna: 'Asiatic Lions, Indian Leopards, Striped Hyenas, Sambar',
    bestSeason: 'December to March',
    highlight: 'The only remaining natural habitat and sanctuary of the majestic Asiatic Lion in the entire world.'
  },
  {
    id: 'wild-in-5',
    name: 'Bandipur National Park',
    stateOrCountry: 'Karnataka',
    region: 'India',
    keyFauna: 'Elephants, Tigers, Indian Gaur, Dholes (Wild Dogs)',
    bestSeason: 'October to May',
    highlight: 'Key portion of the Nilgiri Biosphere Reserve, renowned for dry deciduous forest elephant herds.'
  },
  {
    id: 'wild-in-6',
    name: 'Nagarhole National Park',
    stateOrCountry: 'Karnataka',
    region: 'India',
    keyFauna: 'Black Panther, Leopards, Elephants, Otters, Marsh Crocodiles',
    bestSeason: 'October to May',
    highlight: 'Scenic Kabini River boat safaris, high leopard density, and elusive black panther sightings.'
  },
  {
    id: 'wild-in-7',
    name: 'Periyar National Park',
    stateOrCountry: 'Kerala',
    region: 'India',
    keyFauna: 'Wild Elephants, Bengal Tigers, Nilgiri Tahr, Lion-tailed Macaques',
    bestSeason: 'September to April',
    highlight: 'Tranquil reservoir boat safaris in the Cardamom and Pandalam Hills of the Western Ghats.'
  },
  {
    id: 'wild-in-8',
    name: 'Kanha National Park',
    stateOrCountry: 'Madhya Pradesh',
    region: 'India',
    keyFauna: 'Barasingha (Swamp Deer), Royal Bengal Tigers, Indian Wild Dogs',
    bestSeason: 'October to June',
    highlight: 'Inspiration for Rudyard Kipling’s "The Jungle Book", lush sal and bamboo meadows with rare hardground barasingha.'
  },
  {
    id: 'wild-in-9',
    name: 'Bandhavgarh National Park',
    stateOrCountry: 'Madhya Pradesh',
    region: 'India',
    keyFauna: 'Bengal Tigers, White Tigers (historically), Leopards, Nilgai',
    bestSeason: 'October to June',
    highlight: 'Boasts the highest recorded density of Bengal tigers in India, set around an ancient 2,000-year-old fort.'
  },
  {
    id: 'wild-in-10',
    name: 'Sundarbans National Park',
    stateOrCountry: 'West Bengal',
    region: 'India',
    keyFauna: 'Swimming Bengal Tigers, Saltwater Crocodiles, Olive Ridley Turtles',
    bestSeason: 'September to March',
    highlight: 'World’s largest mangrove forest delta, traversed exclusively by motorboats through tidal estuaries.'
  },
  {
    id: 'wild-in-11',
    name: 'Tadoba Andhari Tiger Reserve',
    stateOrCountry: 'Maharashtra',
    region: 'India',
    keyFauna: 'Bengal Tigers, Sloth Bears, Leopards, Honey Badgers',
    bestSeason: 'October to June',
    highlight: 'The "Jewel of Vidarbha" with year-round tiger sightings around Tadoba Lake and bamboo thickets.'
  },
  {
    id: 'wild-in-12',
    name: 'Pench National Park',
    stateOrCountry: 'Madhya Pradesh & Maharashtra',
    region: 'India',
    keyFauna: 'Royal Bengal Tigers, Indian Leopards, Chital, Gaur',
    bestSeason: 'October to June',
    highlight: 'Straddles MP and Maharashtra with rich teak canopies, the real Mowgli homeland of Seoni hills.'
  }
];

export const FAMOUS_INTERNATIONAL_WILDLIFE: WildlifeDestinationItem[] = [
  { id: 'wild-intl-1', name: 'Maasai Mara, Amboseli, Tsavo', stateOrCountry: 'Kenya', region: 'International', keyFauna: 'The Big Five, Cheetahs, Great Wildebeest Migration', bestSeason: 'July to October (Migration), Jan to Feb', highlight: 'World-famous open savannah with dramatic predator interactions and iconic views of Mount Kilimanjaro.' },
  { id: 'wild-intl-2', name: 'Serengeti, Ngorongoro, Tarangire', stateOrCountry: 'Tanzania', region: 'International', keyFauna: 'Lions, Black Rhinos, Wildebeest, Giant Elephants', bestSeason: 'June to October; Jan to March (Calving)', highlight: 'Endless plains of Serengeti and the world’s largest intact volcanic caldera at Ngorongoro.' },
  { id: 'wild-intl-3', name: 'Kruger National Park, Addo Elephant Park', stateOrCountry: 'South Africa', region: 'International', keyFauna: 'Big Five (Lion, Leopard, Elephant, Rhino, Buffalo), Wild Dogs', bestSeason: 'May to September (Dry Winter)', highlight: 'World-class safari infrastructure, private game lodges, and dense malaria-free elephant sanctuaries.' },
  { id: 'wild-intl-4', name: 'Bwindi Impenetrable, Queen Elizabeth NP', stateOrCountry: 'Uganda', region: 'International', keyFauna: 'Mountain Gorillas, Tree-Climbing Lions, Chimpanzees', bestSeason: 'June to August; Dec to Feb', highlight: 'Misty rainforest mountain gorilla tracking and rare tree-climbing lions of Ishasha sector.' },
  { id: 'wild-intl-5', name: 'Volcanoes National Park', stateOrCountry: 'Rwanda', region: 'International', keyFauna: 'Endangered Mountain Gorillas, Golden Monkeys', bestSeason: 'June to September; Dec to Feb', highlight: 'Dian Fossey’s historic research base amid Virunga volcanic peaks and bamboo forests.' },
  { id: 'wild-intl-6', name: 'Chobe National Park, Okavango Delta', stateOrCountry: 'Botswana', region: 'International', keyFauna: 'Elephants (over 120,000), Wild Dogs, Hippos, Lechwe', bestSeason: 'May to October', highlight: 'Canoeing by traditional mokoro through crystal-clear delta waterways and massive elephant river crossings.' },
  { id: 'wild-intl-7', name: 'Etosha National Park', stateOrCountry: 'Namibia', region: 'International', keyFauna: 'Desert Elephants, Black Rhinos, Lions, Springbok', bestSeason: 'May to October', highlight: 'Massive white salt pan visible from space, with illuminated waterholes attracting rare nocturnal species.' },
  { id: 'wild-intl-8', name: 'South Luangwa National Park', stateOrCountry: 'Zambia', region: 'International', keyFauna: 'Leopards (highest concentration), Thornicroft Giraffes', bestSeason: 'June to October', highlight: 'The birthplace of authentic walking safaris in untouched African bush along the Luangwa River.' },
  { id: 'wild-intl-9', name: 'Hwange National Park', stateOrCountry: 'Zimbabwe', region: 'International', keyFauna: 'Massive Elephant Herds, Cape Wild Dogs, Lions', bestSeason: 'July to October', highlight: 'Huge wildlife sanctuary seamlessly combinable with world-wonder visits to Victoria Falls.' },
  { id: 'wild-intl-10', name: 'Yellowstone & Yosemite National Parks', stateOrCountry: 'USA', region: 'International', keyFauna: 'American Bison, Grizzly Bears, Grey Wolves, Moose', bestSeason: 'May to September', highlight: 'Old Faithful geysers, Lamar Valley wolves, and Yosemite’s sheer granite monoliths.' },
  { id: 'wild-intl-11', name: 'Banff & Jasper National Parks', stateOrCountry: 'Canada', region: 'International', keyFauna: 'Grizzly Bears, Black Bears, Elk, Bighorn Sheep', bestSeason: 'June to September', highlight: 'Glacial turquoise lakes like Lake Louise surrounded by soaring Canadian Rocky Mountain peaks.' },
  { id: 'wild-intl-12', name: 'Kakadu & Daintree Rainforest', stateOrCountry: 'Australia', region: 'International', keyFauna: 'Saltwater Crocodiles, Cassowaries, Tree Kangaroos', bestSeason: 'May to September (Dry Season)', highlight: 'Oldest continuous living tropical rainforest in the world meeting the Great Barrier Reef.' },
  { id: 'wild-intl-13', name: 'Pantanal Wetlands & Amazon Basin', stateOrCountry: 'Brazil', region: 'International', keyFauna: 'Jaguars, Giant Anteaters, Capybaras, Pink River Dolphins', bestSeason: 'July to October (Dry Wildlife Season)', highlight: 'The world’s highest density of wild jaguars and unmatched wetland biodiversity.' },
  { id: 'wild-intl-14', name: 'Komodo National Park', stateOrCountry: 'Indonesia', region: 'International', keyFauna: 'Komodo Dragons, Manta Rays, Coral Reef Turtles', bestSeason: 'April to December', highlight: 'Only place on Earth where 3-meter living dragons roam freely across rugged volcanic islands.' },
  { id: 'wild-intl-15', name: 'Chitwan & Bardia National Parks', stateOrCountry: 'Nepal', region: 'International', keyFauna: 'One-Horned Rhinos, Bengal Tigers, Gharials', bestSeason: 'October to March', highlight: 'Terai lowlands safari on elephant back or open jeeps against backdrop of the Himalayas.' },
  { id: 'wild-intl-16', name: 'Yala & Udawalawe National Parks', stateOrCountry: 'Sri Lanka', region: 'International', keyFauna: 'Sri Lankan Leopards, Sloth Bears, Asian Elephants', bestSeason: 'February to July', highlight: 'Block 1 in Yala has one of the highest recorded leopard population densities on Earth.' }
];

export const WILDLIFE_TOURISM_CATEGORIES: WildlifeTourismCategory[] = [
  { id: 'cat-tiger', title: 'Tiger Safari Holidays', desc: 'Expert naturalist guided tracking through India’s premier Project Tiger reserves.', icon: 'Eye' },
  { id: 'cat-bigfive', title: 'African Big Five Safaris', desc: 'Encounter Lions, Leopards, Rhinos, Elephants, and Buffalos across Maasai Mara, Serengeti, & Kruger.', icon: 'Compass' },
  { id: 'cat-elephant', title: 'Elephant Tourism', desc: 'Ethical sanctuaries, protected migration corridors, and river bathing interactions.', icon: 'ShieldCheck' },
  { id: 'cat-birdwatching', title: 'Birdwatching Holidays', desc: 'Explore Ramsar wetland sanctuaries, Bharatpur Keoladeo, and endemic avian migratory routes.', icon: 'Feather' },
  { id: 'cat-jungle', title: 'Jungle Adventure Packages', desc: 'Deep-canopy treks, treehouse stays, night trails, and eco-lodge glamping.', icon: 'Trees' },
  { id: 'cat-marine', title: 'Marine Wildlife & Dolphin Watching', desc: 'Coral reef snorkeling, wild spinner dolphin cruises, and manta ray encounters.', icon: 'Waves' },
  { id: 'cat-gorilla', title: 'Gorilla & Chimpanzee Trekking', desc: 'Once-in-a-lifetime mountain gorilla encounters in Uganda and Rwanda volcanic cloud forests.', icon: 'Mountain' },
  { id: 'cat-eco', title: 'Nature & Eco-Tourism', desc: 'Responsible low-impact travel preserving pristine flora and supporting indigenous ranger communities.', icon: 'Leaf' }
];

// 3. Kids Dream Destinations Catalogue (PDF Highlights)
export const KIDS_INDIAN_DESTINATIONS: KidsDestinationItem[] = [
  { id: 'k-in-1', name: 'Wonderla Theme Park', location: 'Bengaluru, Kochi & Hyderabad', country: 'India', region: 'India', suggestedAge: 'All ages; especially 6–15', suggestedStay: '1 Day', budgetStyle: 'Mid-range', description: 'State-of-the-art thrill rides, splash water lagoons, and wave pools.', highlight: 'India’s top-rated amusement park chain with international safety standards.' },
  { id: 'k-in-2', name: 'Imagicaa Theme & Water Park', location: 'Khopoli (near Mumbai/Pune), Maharashtra', country: 'India', region: 'India', suggestedAge: 'All ages; height rules apply', suggestedStay: '1–2 Days', budgetStyle: 'Mid-range', description: 'Mega theme park, snow park, and themed water zones with on-site resort hotel.', highlight: 'Features "I For India" flying theater and themed indoor coaster experiences.' },
  { id: 'k-in-3', name: 'Ramoji Film City', location: 'Hyderabad, Telangana', country: 'India', region: 'India', suggestedAge: 'All ages', suggestedStay: '1–2 Days', budgetStyle: 'Mid-range', description: 'World’s largest film studio complex featuring studio sets, live stunt shows, and adventure parks.', highlight: 'Behind-the-scenes movie magic, thematic gardens, and fundustan kids park.' },
  { id: 'k-in-4', name: 'Science City', location: 'Kolkata, West Bengal', country: 'India', region: 'India', suggestedAge: 'Best for 5–16', suggestedStay: 'Half–1 Day', budgetStyle: 'Budget–Mid-range', description: 'Interactive science galleries, space odyssey dome theater, and giant animatronic dinosaurs.', highlight: 'Hands-on physics exploration and aquatic life exhibits.' },
  { id: 'k-in-5', name: 'National Science Centre', location: 'New Delhi', country: 'India', region: 'India', suggestedAge: 'Best for 6–16', suggestedStay: 'Half–1 Day', budgetStyle: 'Budget', description: 'Multi-story interactive science museum with hands-on learning labs and energy ball displays.', highlight: 'Prehistoric life gallery with life-sized prehistoric models.' },
  { id: 'k-in-6', name: 'Nehru Science Centre', location: 'Mumbai, Maharashtra', country: 'India', region: 'India', suggestedAge: 'Best for 6–16', suggestedStay: 'Half–1 Day', budgetStyle: 'Budget', description: 'Over 500 hands-on science exhibits on kinematics, light, sound, and technology.', highlight: 'Sprawling green park with outdoor working mechanical exhibits.' },
  { id: 'k-in-7', name: 'Bannerghatta Biological Park Safari', location: 'Bengaluru, Karnataka', country: 'India', region: 'India', suggestedAge: 'All ages with adult supervision', suggestedStay: '1 Day', budgetStyle: 'Budget–Mid-range', description: 'Caged AC bus safari through lion, tiger, and bear enclosures, plus butterfly conservatory.', highlight: 'Close-up wildlife viewing just 22 km outside Bengaluru city.' },
  { id: 'k-in-8', name: 'Mysuru Zoo (Sri Chamarajendra Zoological Gardens)', location: 'Mysuru, Karnataka', country: 'India', region: 'India', suggestedAge: 'All ages', suggestedStay: 'Half–1 Day', budgetStyle: 'Budget', description: 'Historic 130-year-old zoological park celebrated for conservation, giraffes, and elephants.', highlight: 'Scenic green pathways with lake views and botanical trees.' },
  { id: 'k-in-9', name: 'Goa Family Beach Holiday', location: 'Goa Coast', country: 'India', region: 'India', suggestedAge: 'All ages', suggestedStay: '3–5 Days', budgetStyle: 'Budget–Luxury', description: 'Calm sands at Candolim and Benaulim, dolphin cruises, and family resort kids clubs.', highlight: 'Safe supervised beaches and historical Portuguese forts.' },
  { id: 'k-in-10', name: 'Andaman Islands Marine Adventure', location: 'Port Blair & Havelock', country: 'India', region: 'India', suggestedAge: 'All ages (activities age-dependent)', suggestedStay: '4–6 Days', budgetStyle: 'Mid-range–Luxury', description: 'Glass-bottom boat tours, shallow coral reef snorkeling, and sea turtle spotting.', highlight: 'Asia’s cleanest turquoise waters at Radhanagar Beach.' },
  { id: 'k-in-11', name: 'Ooty & Coonoor Toy Train', location: 'Nilgiris, Tamil Nadu', country: 'India', region: 'India', suggestedAge: 'All ages', suggestedStay: '3–4 Days', budgetStyle: 'Budget–Mid-range', description: 'UNESCO Nilgiri Mountain Railway toy train ride, tea factory tours, and chocolate tasting.', highlight: 'Spectacular mountain viaducts and botanical gardens.' },
  { id: 'k-in-12', name: 'Kashmir Valley Family Break', location: 'Srinagar, Gulmarg & Pahalgam', country: 'India', region: 'India', suggestedAge: 'All ages', suggestedStay: '5–7 Days', budgetStyle: 'Mid-range–Luxury', description: 'Shikara boat rides on Dal Lake, Gulmarg Gondola cable car ride to snow peaks, pony treks.', highlight: 'World’s second-highest operating cable car with snow play for children.' }
];

export const KIDS_INTERNATIONAL_DESTINATIONS: KidsDestinationItem[] = [
  { id: 'k-intl-1', name: 'Walt Disney World Resort', location: 'Orlando, Florida', country: 'USA', region: 'International', suggestedAge: 'All ages', suggestedStay: '4–6 Days', budgetStyle: 'Luxury', description: 'Four world-renowned theme parks (Magic Kingdom, Epcot, Hollywood Studios, Animal Kingdom).', highlight: 'Cinderella Castle fireworks, Star Wars: Galaxy’s Edge, and character breakfasts.' },
  { id: 'k-intl-2', name: 'Disneyland Paris', location: 'Marne-la-Vallée, Paris', country: 'France', region: 'International', suggestedAge: 'All ages', suggestedStay: '2–3 Days', budgetStyle: 'Mid-range–Luxury', description: 'Sleeping Beauty Castle, Disneyland Park, Walt Disney Studios, and Avengers Campus.', highlight: 'Magical Disney experience conveniently located 35 minutes from Paris center.' },
  { id: 'k-intl-3', name: 'Tokyo Disney Resort', location: 'Tokyo / Chiba', country: 'Japan', region: 'International', suggestedAge: 'All ages', suggestedStay: '2–3 Days', budgetStyle: 'Mid-range–Luxury', description: 'Tokyo Disneyland and Tokyo DisneySea — universally regarded as the world’s most detailed park.', highlight: 'Exclusive DisneySea nautical themes: Mysterious Island, Mermaid Lagoon, Fantasy Springs.' },
  { id: 'k-intl-4', name: 'Universal Studios Singapore', location: 'Sentosa Island', country: 'Singapore', region: 'International', suggestedAge: 'All ages (height rules apply)', suggestedStay: '1–2 Days', budgetStyle: 'Mid-range', description: 'Transformer 3D rides, Battlestar Galactica dueling coasters, and Jurassic Park Rapids.', highlight: 'Seamlessly combined with S.E.A. Aquarium and Sentosa cable cars.' },
  { id: 'k-intl-5', name: 'LEGOLAND Malaysia', location: 'Johor Bahru', country: 'Malaysia', region: 'International', suggestedAge: 'Best for 2–12', suggestedStay: '1–2 Days', budgetStyle: 'Budget–Mid-range', description: 'Interactive Lego theme park, dedicated Lego water park, and SEA LIFE aquarium.', highlight: 'Miniland featuring Asian landmarks built from over 30 million Lego bricks.' },
  { id: 'k-intl-6', name: 'Warner Bros. World Abu Dhabi', location: 'Yas Island, Abu Dhabi', country: 'UAE', region: 'International', suggestedAge: 'All ages', suggestedStay: '1 Day', budgetStyle: 'Mid-range–Luxury', description: 'World’s largest indoor air-conditioned theme park with Gotham City and Metropolis lands.', highlight: 'Year-round 24°C climate control, ideal for hot summer getaways.' },
  { id: 'k-intl-7', name: 'Ferrari World & SeaWorld Yas Island', location: 'Yas Island, Abu Dhabi', country: 'UAE', region: 'International', suggestedAge: 'All ages', suggestedStay: '1–2 Days', budgetStyle: 'Mid-range–Luxury', description: 'Home to Formula Rossa (world’s fastest coaster) and the world’s largest multi-species aquarium.', highlight: 'High-speed motorsport excitement and next-generation marine animal exhibits.' },
  { id: 'k-intl-8', name: 'Kennedy Space Center Visitor Complex', location: 'Cape Canaveral, Florida', country: 'USA', region: 'International', suggestedAge: 'Best for 6+', suggestedStay: '1 Day', budgetStyle: 'Mid-range–Luxury', description: 'Walk beneath the massive Saturn V moon rocket, view Space Shuttle Atlantis, and meet astronauts.', highlight: 'Interactive astronaut flight simulators and active launch pad viewing areas.' },
  { id: 'k-intl-9', name: 'Santa Claus Village & Lapland', location: 'Rovaniemi', country: 'Finland', region: 'International', suggestedAge: 'All ages', suggestedStay: '3–5 Days', budgetStyle: 'Luxury', description: 'Cross the Arctic Circle, meet real Santa Claus, husky and reindeer sledding through snowy pines.', highlight: 'Sleep in glass igloos to gaze at the magical Northern Lights (Aurora Borealis).' },
  { id: 'k-intl-10', name: 'Gold Coast Theme Parks & Surfers Paradise', location: 'Queensland', country: 'Australia', region: 'International', suggestedAge: 'All ages', suggestedStay: '4–6 Days', budgetStyle: 'Mid-range–Luxury', description: 'Warner Bros. Movie World, Sea World marine park, Dreamworld, and golden patrolled surf beaches.', highlight: 'Koala cuddling sanctuaries and southern hemisphere’s tallest thrill rides.' },
  { id: 'k-intl-11', name: 'Swiss Alps Family Adventure', location: 'Interlaken & Jungfrau Region', country: 'Switzerland', region: 'International', suggestedAge: 'All ages', suggestedStay: '4–6 Days', budgetStyle: 'Mid-range–Luxury', description: 'Cogwheel trains up to the "Top of Europe", glacier ice palaces, First mountain gliders.', highlight: 'Panoramic open-air cable cars and snow parks even in peak summer.' }
];

// 4. Historical Destinations Catalogue (PDF Highlights)
export const HISTORICAL_INDIAN_DESTINATIONS: HistoricalDestinationItem[] = [
  { id: 'hist-in-1', name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', country: 'India', region: 'India', eraOrDynasty: 'Mughal Empire (Shah Jahan, 1632–1653)', suggestedSeason: 'October to March', description: 'The pinnacle of Mughal ivory-white marble architecture, built by Emperor Shah Jahan in memory of Mumtaz Mahal. A UNESCO World Heritage Site.' },
  { id: 'hist-in-2', name: 'Agra Fort', location: 'Agra, Uttar Pradesh', country: 'India', region: 'India', eraOrDynasty: 'Mughal Empire (Akbar to Shah Jahan, 16th c.)', suggestedSeason: 'October to March', description: 'Vast red-sandstone citadel housing royal audience halls (Diwan-i-Am, Diwan-i-Khas) and the Musamman Burj tower overlooking the Taj Mahal.' },
  { id: 'hist-in-3', name: 'Fatehpur Sikri', location: 'Uttar Pradesh', country: 'India', region: 'India', eraOrDynasty: 'Mughal Empire (Emperor Akbar, 1571)', suggestedSeason: 'October to March', description: 'Akbar’s magnificent red sandstone capital city, featuring the colossal 54-meter Buland Darwaza and the marble tomb of Sheikh Salim Chishti.' },
  { id: 'hist-in-4', name: 'Qutub Minar Complex', location: 'New Delhi', country: 'India', region: 'India', eraOrDynasty: 'Delhi Sultanate (Qutb-ud-din Aibak, 1192)', suggestedSeason: 'October to March', description: 'World’s tallest brick minaret standing at 72.5 meters, flanked by the rust-resistant 4th-century Gupta Iron Pillar and Quwwat-ul-Islam Mosque.' },
  { id: 'hist-in-5', name: 'Red Fort (Lal Qila)', location: 'Old Delhi', country: 'India', region: 'India', eraOrDynasty: 'Mughal Empire (Shah Jahan, 1638)', suggestedSeason: 'October to March', description: 'Imperial red-sandstone fortress palace of the Mughal dynasty, center of Indian independence celebrations from Lahore Gate.' },
  { id: 'hist-in-6', name: 'Humayun’s Tomb', location: 'New Delhi', country: 'India', region: 'India', eraOrDynasty: 'Mughal Empire (Bega Begum, 1565–1572)', suggestedSeason: 'October to March', description: 'First substantial example of Mughal charbagh garden-tomb architecture in India, serving as the direct architectural predecessor to the Taj Mahal.' },
  { id: 'hist-in-7', name: 'Hampi Ruins (Vijayanagara)', location: 'Bellary / Vijayanagara, Karnataka', country: 'India', region: 'India', eraOrDynasty: 'Vijayanagara Empire (14th–16th century)', suggestedSeason: 'October to February', description: 'Vast boulder-strewn open-air museum with the iconic stone chariot of Vijaya Vittala Temple, Virupaksha Temple, and lotus mahal pavilions.' },
  { id: 'hist-in-8', name: 'Mysore Palace (Amba Vilas)', location: 'Mysuru, Karnataka', country: 'India', region: 'India', eraOrDynasty: 'Wadiyar Dynasty (Henry Irwin, 1912)', suggestedSeason: 'October to February', description: 'Indo-Saracenic royal palace adorned with stained glass domes, carved rosewood doorways, and 100,000 golden incandescent bulbs during Dasara.' },
  { id: 'hist-in-9', name: 'Ajanta & Ellora Caves', location: 'Aurangabad (Chhatrapati Sambhajinagar), Maharashtra', country: 'India', region: 'India', eraOrDynasty: '2nd c. BCE to 10th c. CE (Rashtrakuta & Vakataka)', suggestedSeason: 'November to March', description: 'Ajanta’s ancient Buddhist fresco murals and Ellora’s monolith Kailasa Temple (Cave 16) — the largest rock-cut temple carved from a single cliff.' },
  { id: 'hist-in-10', name: 'Konark Sun Temple', location: 'Konark, Odisha', country: 'India', region: 'India', eraOrDynasty: 'Eastern Ganga Dynasty (King Narasimhadeva I, 1250)', suggestedSeason: 'October to February', description: 'Monumental 13th-century stone chariot of the Sun God Surya, complete with 24 intricately carved stone sundial wheels and 7 galloping horses.' },
  { id: 'hist-in-11', name: 'Khajuraho Group of Monuments', location: 'Chhatarpur, Madhya Pradesh', country: 'India', region: 'India', eraOrDynasty: 'Chandela Dynasty (950–1050 CE)', suggestedSeason: 'October to March', description: 'Celebrated Nagara-style sandstone temples renowned for intricate stone carvings depicting celestial nymphs, deities, and daily medieval life.' },
  { id: 'hist-in-12', name: 'Sanchi Stupa', location: 'Raisen, Madhya Pradesh', country: 'India', region: 'India', eraOrDynasty: 'Maurya Empire (Emperor Ashoka, 3rd c. BCE)', suggestedSeason: 'October to March', description: 'One of India’s oldest surviving stone structures with grand hemispherical dome and four exquisitely carved torana ornamental gateways.' },
  { id: 'hist-in-13', name: 'Gwalior Fort', location: 'Gwalior, Madhya Pradesh', country: 'India', region: 'India', eraOrDynasty: 'Tomar Dynasty (Man Singh Tomar, 8th–15th c.)', suggestedSeason: 'October to March', description: 'Described by Babur as "the pearl among fortresses of Hind", featuring turquoise ceramic tile mosaics at Man Mandir Palace and giant Jain Tirthankara rock carvings.' },
  { id: 'hist-in-14', name: 'Rani ki Vav (Queen’s Stepwell)', location: 'Patan, Gujarat', country: 'India', region: 'India', eraOrDynasty: 'Solanki / Chaulukya Dynasty (Queen Udayamati, 1063 CE)', suggestedSeason: 'October to March', description: 'Subterranean seven-level architectural masterpiece designed as an inverted temple on the Saraswati River, featuring over 500 sculpted Vishnu avatars.' },
  { id: 'hist-in-15', name: 'Dholavira: Harappan City', location: 'Khadir Bet, Kutch, Gujarat', country: 'India', region: 'India', eraOrDynasty: 'Indus Valley Civilisation (c. 3000–1500 BCE)', suggestedSeason: 'November to February', description: 'UNESCO World Heritage Harappan metropolis showcasing advanced urban town planning, stone architecture, and sophisticated stormwater reservoirs.' },
  { id: 'hist-in-16', name: 'Chittorgarh & Kumbhalgarh Forts', location: 'Mewar, Rajasthan', country: 'India', region: 'India', eraOrDynasty: 'Sisodia Rajputs (Mewar Dynasty)', suggestedSeason: 'October to March', description: 'Vast hilltop strongholds: Chittor’s Vijay Stambha (Tower of Victory) and Kumbhalgarh’s 36-km perimeter wall (world’s second longest after Great Wall).' },
  { id: 'hist-in-17', name: 'Amer Fort & Hawa Mahal', location: 'Jaipur, Rajasthan', country: 'India', region: 'India', eraOrDynasty: 'Kachhwaha Rajputs (Man Singh I & Sawai Pratap Singh)', suggestedSeason: 'October to March', description: 'Amer’s glistening Sheesh Mahal mirror palace and the iconic five-story pink honeycomb façade of Hawa Mahal (Palace of Winds).' },
  { id: 'hist-in-18', name: 'Mahabalipuram Shore Temples', location: 'Coromandel Coast, Tamil Nadu', country: 'India', region: 'India', eraOrDynasty: 'Pallava Dynasty (Narasimhavarman II, 7th–8th c.)', suggestedSeason: 'November to February', description: 'Granite monolithic rock shrines, Pancha Rathas chariots, and the monumental open-air rock relief of "Arjuna’s Penance" beside the Bay of Bengal.' }
];

export const HISTORICAL_INTERNATIONAL_DESTINATIONS: HistoricalDestinationItem[] = [
  { id: 'hist-intl-1', name: 'Pyramids of Giza & Great Sphinx', location: 'Giza Plateau, Cairo', country: 'Egypt', region: 'International', eraOrDynasty: 'Old Kingdom (4th Dynasty, c. 2560 BCE)', suggestedSeason: 'October to April', description: 'The only surviving wonder of the ancient world. The Great Pyramid of Khufu, Khafre, and the mythical human-headed lion Sphinx.' },
  { id: 'hist-intl-2', name: 'Petra: The Rose-Red City', location: 'Ma’an Governorate', country: 'Jordan', region: 'International', eraOrDynasty: 'Nabataean Kingdom (c. 1st century BCE)', suggestedSeason: 'March to May; September to November', description: 'Carved directly into red sandstone cliff canyon walls through the narrow Siq gorge, anchored by the iconic Al-Khazneh (The Treasury) and The Monastery.' },
  { id: 'hist-intl-3', name: 'Colosseum & Roman Forum', location: 'Rome', country: 'Italy', region: 'International', eraOrDynasty: 'Flavian Dynasty (Emperor Vespasian & Titus, 70–80 CE)', suggestedSeason: 'April to June; September to October', description: 'The grandest amphitheater of the ancient Roman Empire, seating 50,000 spectators for gladiatorial games, overlooking the political forum ruins.' },
  { id: 'hist-intl-4', name: 'Acropolis & Parthenon', location: 'Athens', country: 'Greece', region: 'International', eraOrDynasty: 'Classical Golden Age (Pericles, 5th c. BCE)', suggestedSeason: 'April to June; September to October', description: 'The citadel of ancient Athenian democracy and philosophy, crowned by the marble Doric temple dedicated to goddess Athena.' },
  { id: 'hist-intl-5', name: 'Machu Picchu: Lost City of the Incas', location: 'Urubamba Valley, Andes', country: 'Peru', region: 'International', eraOrDynasty: 'Inca Empire (Pachacuti, c. 1450 CE)', suggestedSeason: 'May to September (Dry Andean Winter)', description: 'Spectacular 15th-century mountain citadel perched 2,430 meters above sea level amid mystical cloud forests, featuring mortar-free dry-stone walls.' },
  { id: 'hist-intl-6', name: 'Chichén Itzá Maya City', location: 'Yucatán Peninsula', country: 'Mexico', region: 'International', eraOrDynasty: 'Late Classic Maya Civilisation (c. 600–1200 CE)', suggestedSeason: 'November to April', description: 'Step-pyramid El Castillo (Temple of Kukulcán), engineered so equinox sunlight casts a shadow of a serpent slithering down the balustrade.' },
  { id: 'hist-intl-7', name: 'Angkor Wat Temple Complex', location: 'Siem Reap', country: 'Cambodia', region: 'International', eraOrDynasty: 'Khmer Empire (King Suryavarman II, 12th century)', suggestedSeason: 'November to February', description: 'The largest religious monument in the world, dedicated first to Vishnu and later to Buddha, surrounded by a massive moat with bas-reliefs.' },
  { id: 'hist-intl-8', name: 'Great Wall of China & Forbidden City', location: 'Beijing / Northern Frontier', country: 'China', region: 'International', eraOrDynasty: 'Ming & Qing Dynasties (14th–17th century)', suggestedSeason: 'April to May; September to October', description: 'Thousands of kilometers of defensive masonry watchtowers, and Beijing’s 980-building imperial palace complex guarded by golden dragon roofs.' },
  { id: 'hist-intl-9', name: 'Borobudur Buddhist Monument', location: 'Central Java', country: 'Indonesia', region: 'International', eraOrDynasty: 'Shailendra Dynasty (8th–9th century CE)', suggestedSeason: 'April to October (Dry Season)', description: 'World’s largest Buddhist temple stepped pyramid decorated with 2,672 carved relief panels and 504 Buddha statues crowned by perforated stupas.' },
  { id: 'hist-intl-10', name: 'Kyoto Historic Monuments & Temples', location: 'Kyoto', country: 'Japan', region: 'International', eraOrDynasty: 'Heian to Edo Periods (794–1868 CE)', suggestedSeason: 'March to May (Cherry Blossom); Oct–Nov', description: 'Kinkaku-ji (Golden Pavilion), Fushimi Inari-taisha’s thousands of vermilion torii gates, and bamboo groves of Arashiyama.' },
  { id: 'hist-intl-11', name: 'Hagia Sophia & Ephesus', location: 'Istanbul & Aegean Coast', country: 'Türkiye', region: 'International', eraOrDynasty: 'Byzantine & Roman Empires (Emperor Justinian, 537 CE)', suggestedSeason: 'April to May; September to October', description: 'The legendary pendentive dome of Hagia Sophia, and the marble streets, Library of Celsus, and theater of Ephesus.' },
  { id: 'hist-intl-12', name: 'Stonehenge & Tower of London', location: 'Wiltshire & London', country: 'United Kingdom', region: 'International', eraOrDynasty: 'Neolithic (c. 3000 BCE) & Norman (William the Conqueror, 1078)', suggestedSeason: 'May to September', description: 'Prehistoric sarsen stone circle aligned with summer solstice sunrises, and the medieval fortress guarding the Crown Jewels.' },
  { id: 'hist-intl-13', name: 'Palace of Versailles', location: 'Versailles (near Paris)', country: 'France', region: 'International', eraOrDynasty: 'Kingdom of France (Louis XIV "Sun King", 17th c.)', suggestedSeason: 'April to June; September to October', description: 'The golden Hall of Mirrors with 357 crystal mirrors, royal apartments, and 800 hectares of geometric fountain gardens.' },
  { id: 'hist-intl-14', name: 'Pompeii Archaeological City', location: 'Campania (near Naples)', country: 'Italy', region: 'International', eraOrDynasty: 'Roman Empire (Preserved 79 CE by Mount Vesuvius)', suggestedSeason: 'April to June; September to October', description: 'Frozen in time under volcanic ash: walk ancient Roman streets, villas with preserved frescoes, bakeries, and thermal baths.' },
  { id: 'hist-intl-15', name: 'Alhambra Fortress & Nasrid Palaces', location: 'Granada, Andalusia', country: 'Spain', region: 'International', eraOrDynasty: 'Nasrid Dynasty (13th–14th century Moorish Spain)', suggestedSeason: 'April to June; September to October', description: 'Intricate stucco arabesques, Court of the Lions fountain, and Generalife gardens showcasing Islamic palatial engineering.' }
];

// Sample Curated Itineraries from Official Catalogues
export const SAMPLE_CATALOGUE_ITINERARIES: SampleItinerary[] = [
  {
    id: 'itin-golden-triangle',
    catalogue: 'Historical Heritage',
    title: 'India: Golden Triangle Heritage Route',
    duration: '6 Days / 5 Nights',
    overview: 'The definitive royal circuit connecting Mughal Delhi, the romantic Taj Mahal in Agra, and Rajput pink palaces of Jaipur.',
    days: [
      { day: 1, title: 'Arrival in Delhi', desc: 'Welcome transfer, check-in, visit India Gate, Rashtrapati Bhavan promenade, and evening Qutub Minar.' },
      { day: 2, title: 'Old Delhi & Mughal Splendors', desc: 'Rickshaw ride in Chandni Chowk, Jama Masjid, Red Fort photo stop, and Humayun’s Tomb.' },
      { day: 3, title: 'Drive to Agra & Agra Fort', desc: 'Express highway to Agra, check-in to heritage hotel, guided exploration of Agra Fort and Mehtab Bagh sunset.' },
      { day: 4, title: 'Sunrise Taj Mahal & Fatehpur Sikri', desc: 'Dawn visit to the Taj Mahal as marble glows golden; drive to Jaipur with stopover at Akbar’s Fatehpur Sikri.' },
      { day: 5, title: 'Amer Fort & Jaipur Pink City', desc: 'Jeep ascent to Amer Fort, Sheesh Mahal, stop at Hawa Mahal, City Palace museum and Jantar Mantar observatory.' },
      { day: 6, title: 'Departure', desc: 'Breakfast, handicraft textile shopping in Johari Bazaar, departure flight or drive back to Delhi.' }
    ]
  },
  {
    id: 'itin-singapore-kids',
    catalogue: 'Kids Dream',
    title: 'Singapore Family Dream Vacation',
    duration: '5 Days / 4 Nights',
    overview: 'Action-packed family holiday featuring Universal Studios, world-class aquariums, and Gardens by the Bay supertrees.',
    days: [
      { day: 1, title: 'Touchdown & Marina Bay', desc: 'Arrival at Changi Airport with Jewel waterfall light show, hotel check-in, evening Marina Bay stroll.' },
      { day: 2, title: 'Universal Studios Singapore', desc: 'Full-day VIP access across Sentosa: Transformers ride, Jurassic Park, Sesame Street, and Minion encounters.' },
      { day: 3, title: 'S.E.A. Aquarium & Sentosa Cable Car', desc: 'Morning with 100,000 marine animals and hammerhead sharks, afternoon cable car and beach luge cart rides.' },
      { day: 4, title: 'Gardens by the Bay & Science Centre', desc: 'Explore Cloud Forest waterfall dome, walk the OCBC Skyway among Supertrees, and evening light show.' },
      { day: 5, title: 'Family Shopping & Departure', desc: 'Souvenir shopping on Orchard Road, Changi playground visits, and departure flight.' }
    ]
  },
  {
    id: 'itin-wildlife-safari',
    catalogue: 'Wildlife Safari',
    title: 'Royal Bengal Tiger Circuit: Ranthambore & Corbett',
    duration: '6 Days / 5 Nights',
    overview: 'Double-park flagship tiger safari covering Rajasthan’s ancient fort lakes and the misty Ramganga foothills of Uttarakhand.',
    days: [
      { day: 1, title: 'Arrival in Ranthambore', desc: 'Drive to Sawai Madhopur, check-in to jungle luxury resort, briefing with senior wildlife naturalist.' },
      { day: 2, title: 'Dawn & Dusk Safaris in Zones 1–5', desc: 'Two open 4x4 Gypsy safaris tracking tiger pugmarks around Rajbagh and Malik talao lakes.' },
      { day: 3, title: 'Ranthambore Fort & Transfer to Delhi', desc: 'Morning visit to the 10th-century Ranthambore cliff fort; executive transfer to Delhi.' },
      { day: 4, title: 'Corbett Wilderness Welcome', desc: 'Scenic drive to Corbett National Park; riverfront nature walk along the Kosi river and evening wildlife film.' },
      { day: 5, title: 'Dhikala / Bijrani Deep Forest Safaris', desc: 'Jeep safari through dense sal tree forest corridors, tracking wild elephant herds, sambar, and big cats.' },
      { day: 6, title: 'Birdwatching & Departure', desc: 'Morning Himalayan foothills birdwatching walk (over 600 species recorded), farewell breakfast, and transfer.' }
    ]
  },
  {
    id: 'itin-abu-dhabi-kids',
    catalogue: 'Kids Dream',
    title: 'Abu Dhabi Theme Park Extravaganza',
    duration: '4 Days / 3 Nights',
    overview: 'Mega thrill rides and marine discoveries across Yas Island’s world-record indoor theme parks.',
    days: [
      { day: 1, title: 'Arrival in Abu Dhabi', desc: 'Check-in to Yas Island family resort, relax by lagoon pool, and explore Yas Bay waterfront.' },
      { day: 2, title: 'Warner Bros. World Abu Dhabi', desc: 'Immersive indoor climate-controlled wonderland: Cartoon Junction, Bedrock, and Superman Metropolis rides.' },
      { day: 3, title: 'Ferrari World or SeaWorld Abu Dhabi', desc: 'Choice of Formula Rossa roller coaster or SeaWorld’s multi-realm marine ecosystems.' },
      { day: 4, title: 'Sheikh Zayed Mosque & Departure', desc: 'Morning visit to the breathtaking white marble Grand Mosque before airport transfer.' }
    ]
  }
];
