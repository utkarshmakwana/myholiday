import { MembershipPlan, Resort, MemberUser, BookingRequest, Lead, HolidayPackage, EntitlementLedgerEntry, SupportTicket } from '../types';

export const COMPANY_CONTACT = {
  brandName: 'MyHoliday',
  domain: 'myholidayz.in',
  tagline: 'Your Holidays. Your World. Your Membership.',
  phone: '+91 73533 33701',
  phoneDisplay: '+91 73533 33701',
  hours: 'Mon - Sat: 10:00 AM – 7:00 PM',
  email: 'enquiry@myholidayz.in',
  address: 'No. 19/1, Chetana Tower, Infantry Road Cross, Opp. Gulistan Shaadi Mahal, Shivaji Nagar, Bengaluru, Karnataka – 560001, India',
  city: 'Bengaluru, Karnataka',
  logoPath: '/assets/aistudio/myholidayzlogo_07865a8e.webp',
  whatsappUrl: 'https://wa.me/917353333701?text=Hello%20MyHoliday%2C%20I%20am%20interested%20in%20your%20Holiday%20Membership'
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-red-5yr',
    name: 'Red Membership (5 Years)',
    category: 'Red',
    tierColor: 'red',
    tenureYears: 5,
    coverage: 'India & Asia',
    priceINR: 499999,
    amcINR: 24999,
    amcLabel: '₹24,999 + GST',
    downPaymentINR: 75000,
    emiMonthlyINR: 8999,
    annualNights: 7,
    totalNights: 35,
    roomCategory: 'Deluxe',
    occupancy: { adults: 2, children: 2 },
    bookingWindow: '15 to 180 days advance',
    seasonEligibility: 'All Regular & High Seasons',
    priorityBooking: true,
    resortCount: '240+ Partner Resorts across India & Asia',
    highlights: [
      '35 Total Holiday Nights (7 Nights / 8 Days annually for 5 years)',
      'India & Asia coverage: Coorg, Goa, Munnar, Manali, Thailand & Sri Lanka',
      'Annual Maintenance Charge (AMC): ₹24,999 + GST',
      'Complimentary daily buffet breakfast for 2 Adults + 2 Kids',
      'Flexible holiday splitting (2 or 3-night mini vacations)',
      'Unutilized night carry-forward privilege to subsequent year',
      'Holiday gifting rights for family and friends'
    ]
  },
  {
    id: 'plan-red-10yr',
    name: 'Red Membership (10 Years)',
    category: 'Red',
    tierColor: 'red',
    tenureYears: 10,
    coverage: 'India & Asia',
    priceINR: 899999,
    amcINR: 24999,
    amcLabel: '₹24,999 + GST',
    downPaymentINR: 125000,
    emiMonthlyINR: 12999,
    annualNights: 7,
    totalNights: 70,
    roomCategory: 'Premium Studio',
    occupancy: { adults: 2, children: 2 },
    bookingWindow: '15 to 240 days advance',
    seasonEligibility: 'All Regular & High Seasons',
    priorityBooking: true,
    resortCount: '240+ Partner Resorts across India & Asia',
    highlights: [
      '70 Total Holiday Nights (7 Nights / 8 Days annually for 10 years)',
      '10-year inflation-proof luxury vacations across India & Asia',
      'Annual Maintenance Charge (AMC): ₹24,999 + GST locked across tenure',
      'Priority reservation desk allocation for festive dates',
      'Complimentary room upgrades subject to availability',
      'Full membership transferability & heritage legacy rights',
      'Dedicated relationship concierge desk on WhatsApp & Call'
    ]
  },
  {
    id: 'plan-purple-5yr',
    name: 'Purple Membership (5 Years)',
    category: 'Purple',
    tierColor: 'purple',
    tenureYears: 5,
    coverage: 'India & International',
    priceINR: 799999,
    amcINR: 24999,
    amcLabel: '₹24,999 + GST',
    downPaymentINR: 115000,
    emiMonthlyINR: 13999,
    annualNights: 7,
    totalNights: 35,
    roomCategory: 'Premium Studio',
    occupancy: { adults: 2, children: 2 },
    bookingWindow: '10 to 300 days advance',
    seasonEligibility: 'All Seasons (India + International)',
    priorityBooking: true,
    resortCount: '300+ Global Luxury Properties & Villas',
    recommended: true,
    highlights: [
      '35 Prime Global Holiday Nights across 5 years',
      'India & International coverage: Maldives, Bali, Dubai, Thailand, Europe',
      'Annual Maintenance Charge (AMC): ₹24,999 + GST',
      'Access to overwater villas, beachfront sanctuaries & mountain retreats',
      'Complimentary airport lounge vouchers on international trips',
      'Priority booking window up to 300 days in advance',
      'Uncapped night gifting & transferability privileges'
    ]
  },
  {
    id: 'plan-purple-10yr',
    name: 'Purple Membership (10 Years)',
    category: 'Purple',
    tierColor: 'purple',
    tenureYears: 10,
    coverage: 'India & International',
    priceINR: 1399999,
    amcINR: 39999,
    amcLabel: '₹39,999 + GST',
    downPaymentINR: 199000,
    emiMonthlyINR: 21999,
    annualNights: 7,
    totalNights: 70,
    roomCategory: 'Royal Suite',
    occupancy: { adults: 2, children: 2 },
    bookingWindow: '7 to 365 days advance (Guaranteed)',
    seasonEligibility: 'All 365 Days Access (Zero Blackout Dates)',
    priorityBooking: true,
    resortCount: '350+ Global Signature Resorts & Suites',
    highlights: [
      '70 Global Ultra-Luxury Nights (7 Nights annually for 10 years)',
      'The Ultimate Global Tier: Worldwide access (195 countries catalogued)',
      'Annual Maintenance Charge (AMC): ₹39,999 + GST locked across decade',
      'Suite & Villa level accommodation guaranteed worldwide',
      'Personal Travel Director & bespoke holiday itineraries included',
      '25% food, beverage & wellness spa discounts worldwide',
      'VIP airport transfers & lounge access for member family'
    ]
  }
];

export const INITIAL_RESORTS: Resort[] = [
  {
    id: 'resort-coorg-plantation',
    name: 'The Green Haven Plantation Resort & Spa',
    location: 'Madikeri, Coorg',
    city: 'Coorg',
    state: 'Karnataka',
    country: 'India',
    isInternational: false,
    category: 'Mountain & Hills',
    starRating: 5,
    coverImage: '/assets/images/resort_coorg_plantation_1794462695704.jpg',
    gallery: [
      '/assets/images/resort_coorg_plantation_1794462695704.jpg',
      '/assets/images/resort_munnar_tea_1794462696487.jpg'
    ],
    description: 'Immerse in lush coffee and spice plantation serenity in Madikeri, Coorg. Features private pinewood chalets, misty morning walking trails, stream-side bonfires, and authentic Kodava cuisine.',
    amenities: [
      'Coffee Plantation Nature Walk',
      'Ayurvedic Herbal Spa',
      'Campfire & Barbecue Patio',
      'Infinity Forest Pool',
      'Traditional Kodava Dining',
      'Birdwatching Guided Tours',
      'Children Play Area'
    ],
    roomTypes: [
      {
        id: 'room-plantation-cottage',
        name: 'Plantation View Wooden Cottage',
        capacity: { adults: 2, children: 2 },
        description: 'Cozy 520 sq ft wooden cottage with panoramic glass balcony overlooking misty coffee estates.',
        amenities: ['King Bed', 'Coffee Bean Roaster', 'Private Balcony', 'Rain Shower'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-stream-villa',
        name: 'Private Stream Jacuzzi Villa',
        capacity: { adults: 3, children: 2 },
        description: 'Independent luxury cottage with heated outdoor jacuzzi and personal butler service.',
        amenities: ['Private Jacuzzi', 'Open Hearth', 'Forest Stream View', 'Complimentary High Tea'],
        upgradeFeePerNightINR: 2500
      }
    ],
    eligiblePlans: ['Red Membership (5 Years)', 'Red Membership (10 Years)', 'Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Escape Select', 'Escape Elite', 'Explore Select', 'Explore Elite'],
    checkInTime: '13:00',
    checkOutTime: '11:00',
    nearbyAttractions: ['Abbey Falls (6 km)', 'Raja’s Seat (4 km)', 'Dubare Elephant Camp (22 km)']
  },
  {
    id: 'resort-munnar-tea',
    name: 'Tea Valley Panoramic Sanctuary',
    location: 'Pallivasal, Munnar',
    city: 'Munnar',
    state: 'Kerala',
    country: 'India',
    isInternational: false,
    category: 'Mountain & Hills',
    starRating: 5,
    coverImage: '/assets/images/resort_munnar_tea_1794462696487.jpg',
    gallery: [
      '/assets/images/resort_munnar_tea_1794462696487.jpg',
      '/assets/images/resort_coorg_plantation_1794462695704.jpg'
    ],
    description: 'Perched high in the misty Western Ghats overlooking undulating emerald tea plantations. Breathe in pure mountain air with cliffside dining, heated infinity pool, and tea tasting sessions.',
    amenities: [
      'Heated Cliffside Pool',
      'Artisan Tea Tasting Pavilion',
      'Ayurvedic Wellness Spa',
      'Mountain Trekking Guides',
      'Cloud-Deck Restaurant',
      'Kids Indoor Game Lounge',
      'Campfire with Stargazing'
    ],
    roomTypes: [
      {
        id: 'room-tea-valley-deluxe',
        name: 'Valley View Deluxe Room',
        capacity: { adults: 2, children: 2 },
        description: 'Elegant room with private deck facing the morning sun rising over emerald tea slopes.',
        amenities: ['Floor-to-Ceiling Windows', 'Balcony Deck', 'Artisan Kettle Set', 'Heated Blanket'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-cloud-suite',
        name: 'The Cloud Panorama Suite',
        capacity: { adults: 3, children: 2 },
        description: 'Top-tier corner suite with 270-degree valley views and deep soaking bathtub.',
        amenities: ['270-degree View', 'Bathtub with Mountain View', 'Fruit Basket', 'Fireplace'],
        upgradeFeePerNightINR: 3000
      }
    ],
    eligiblePlans: ['Red Membership (5 Years)', 'Red Membership (10 Years)', 'Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Escape Select', 'Escape Elite', 'Explore Select', 'Explore Elite'],
    checkInTime: '14:00',
    checkOutTime: '11:00',
    nearbyAttractions: ['Mattupetty Dam (11 km)', 'Eravikulam National Park (14 km)', 'Tea Museum (7 km)']
  },
  {
    id: 'resort-andaman-beach',
    name: 'Havelock Sands Oceanfront Retreat',
    location: 'Radhanagar Beach, Havelock Island',
    city: 'Andaman Islands',
    state: 'Andaman & Nicobar',
    country: 'India',
    isInternational: false,
    category: 'Beach',
    starRating: 5,
    coverImage: '/assets/images/resort_andaman_beach_1794462696704.jpg',
    gallery: [
      '/assets/images/resort_andaman_beach_1794462696704.jpg',
      '/assets/images/resort_beachfront_villa_1794461557618.jpg'
    ],
    description: 'Set on the world-renowned white sands of Radhanagar Beach. Step from your beachfront villa directly into warm crystal turquoise waters, enjoy scuba diving coral reefs, and sunset barbecues.',
    amenities: [
      'Direct White Sand Beach Access',
      'PADI Scuba & Snorkel Desk',
      'Fresh Seafood Beach Bar',
      'Beachside Sun Loungers & Cabanas',
      'Sunset Cruise Catamaran',
      'Tropical Island Spa',
      'Speedboat Port Transfers'
    ],
    roomTypes: [
      {
        id: 'room-andaman-villa',
        name: 'Tropical Beachfront Villa',
        capacity: { adults: 2, children: 2 },
        description: 'Thatched timber villa nestled under coconut palms with private sandy terrace.',
        amenities: ['Private Hammock', 'Open Air Rain Shower', 'Ocean Breezes', 'King Bed'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-andaman-royal-suite',
        name: 'Coral Reef Sunset Pavilion',
        capacity: { adults: 3, children: 2 },
        description: 'Spacious beachfront pavilion featuring a private plunge pool and direct private beach gate.',
        amenities: ['Private Plunge Pool', 'Personal Butler', 'Sunset Barbecue Night', 'Snorkel Gear'],
        upgradeFeePerNightINR: 4500
      }
    ],
    eligiblePlans: ['Red Membership (5 Years)', 'Red Membership (10 Years)', 'Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Escape Select', 'Escape Elite', 'Explore Select', 'Explore Elite'],
    checkInTime: '12:00',
    checkOutTime: '10:00',
    nearbyAttractions: ['Elephant Beach (15 min boat)', 'Kalapathar Beach (8 km)', 'Scuba Coral Trails (500 m)']
  },
  {
    id: 'resort-azure-horizon',
    name: 'Azure Horizon Beachfront Sanctuary',
    location: 'Candolim Beach, North Goa',
    city: 'Goa',
    state: 'Goa',
    country: 'India',
    isInternational: false,
    category: 'Beach',
    starRating: 5,
    coverImage: '/assets/images/resort_beachfront_villa_1794461557618.jpg',
    gallery: [
      '/assets/images/resort_beachfront_villa_1794461557618.jpg',
      '/assets/images/hero_luxury_resort_1794461557327.jpg'
    ],
    description: 'Premier seaside luxury along Candolim sands. Featuring private pool cabanas, open-air sunbeds, seaside dining, and Ayurvedic rejuvenation therapies.',
    amenities: [
      'Private Beachfront Access',
      'Infinity Pool & Sun Loungers',
      'Goan Gourmet Shack & Grill',
      'Ayurvedic Wellness Spa',
      'Water Sports Activity Desk',
      'Live Acoustic Evenings',
      'Kids Recreation Club'
    ],
    roomTypes: [
      {
        id: 'room-deluxe-beach',
        name: 'Deluxe Ocean View Room',
        capacity: { adults: 2, children: 2 },
        description: 'Spacious 480 sq ft room with private sit-out overlooking the Arabian Sea waves.',
        amenities: ['King Bed', 'Rain Shower', 'Private Balcony', 'Espresso Machine'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-pool-villa',
        name: 'Presidential Beachfront Plunge Villa',
        capacity: { adults: 3, children: 2 },
        description: 'Ultra-luxury independent thatched villa with private temperature-controlled pool.',
        amenities: ['Private Pool', 'Butler Service', 'Outdoor Cabana', 'Whirlpool Tub'],
        upgradeFeePerNightINR: 3500
      }
    ],
    eligiblePlans: ['Red Membership (5 Years)', 'Red Membership (10 Years)', 'Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Escape Select', 'Escape Elite', 'Explore Select', 'Explore Elite'],
    checkInTime: '14:00',
    checkOutTime: '11:00',
    nearbyAttractions: ['Aguada Fort (4 km)', 'Candolim Strip (1.5 km)', 'Dolphin Bay Cruise (3 km)']
  },
  {
    id: 'resort-silversnow-chalet',
    name: 'The Silversnow Alpine Chalet & Sanctuary',
    location: 'Solang Valley, Manali',
    city: 'Manali',
    state: 'Himachal Pradesh',
    country: 'India',
    isInternational: false,
    category: 'Mountain & Hills',
    starRating: 5,
    coverImage: '/assets/images/resort_mountain_retreat_1794461557865.jpg',
    gallery: [
      '/assets/images/resort_mountain_retreat_1794461557865.jpg',
      '/assets/images/hero_luxury_resort_1794461557327.jpg'
    ],
    description: 'Perched amidst pine forests and snowy summits in Solang Valley. Features heated outdoor cedar jacuzzis, stone fire pits, panoramic pine-deck dining, and ski access.',
    amenities: [
      'Heated Outdoor Cedar Jacuzzi',
      'Pine Forest Trail',
      'Wood-fired Hearth Lounge',
      'Ski & Sled Equipment',
      'Mountain Bicycle Rental',
      'Alpine Café & Bakery',
      'Kids Games Loft'
    ],
    roomTypes: [
      {
        id: 'room-cedar-deluxe',
        name: 'Cedar Valley Deluxe Room',
        capacity: { adults: 2, children: 1 },
        description: 'Warm pinewood interiors with glass wall facing snow peaks and valley mists.',
        amenities: ['Radiant Floor Heating', 'Electric Blanket', 'Tea Artisan Bar', 'Bathtub'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-duplex-loft',
        name: 'Alpine Panoramic Suite',
        capacity: { adults: 3, children: 2 },
        description: 'Two-tier loft suite with private balcony, stone fireplace, and stargazing telescope.',
        amenities: ['Stone Fireplace', 'Telescope', 'Jacuzzi Bath', 'Complimentary Hot Cocoa'],
        upgradeFeePerNightINR: 2800
      }
    ],
    eligiblePlans: ['Red Membership (5 Years)', 'Red Membership (10 Years)', 'Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Escape Select', 'Escape Elite', 'Explore Select', 'Explore Elite'],
    checkInTime: '13:00',
    checkOutTime: '10:30',
    nearbyAttractions: ['Solang Ropeway (1.2 km)', 'Atal Tunnel (12 km)', 'Old Manali Café Trail (9 km)']
  },
  {
    id: 'resort-royal-haveli',
    name: 'Royal Haveli Grand Palace & Spa',
    location: 'Lake Pichola Outskirts, Udaipur',
    city: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    isInternational: false,
    category: 'Heritage & Palace',
    starRating: 5,
    coverImage: '/assets/images/resort_heritage_palace_1794461557979.jpg',
    gallery: [
      '/assets/images/resort_heritage_palace_1794461557979.jpg',
      '/assets/images/resort_mountain_retreat_1794461557865.jpg'
    ],
    description: 'Mewari royal hospitality in a lakeside sandstone palace with carved jharokhas, courtyards with lantern-lit pools, evening cultural dances, and royal feasts.',
    amenities: [
      'Marble Reflection Pool',
      'Royal Mewari Fine Dine',
      'Evening Cultural Folk Show',
      'Ayurvedic Royal Spa',
      'Lake Pichola Boat Transfer',
      'Vintage Car Tour Desk',
      'Yoga & Meditation Pavilion'
    ],
    roomTypes: [
      {
        id: 'room-palace-deluxe',
        name: 'Maharani Heritage Room',
        capacity: { adults: 2, children: 2 },
        description: 'Authentic carved jharokha window seating, hand-painted ceiling motifs, and marble bath.',
        amenities: ['Four-Poster Bed', 'Handmade Brass Fittings', 'Courtyard View', 'Silk Robes'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-royal-suite',
        name: 'Mewar Royal Suite',
        capacity: { adults: 2, children: 2 },
        description: 'Regal suite featuring a private marble dip pool and sunset view of the Aravalli hills.',
        amenities: ['Private Dip Pool', 'Royal Butler', 'Welcome Garland & Thali', 'Lake Sunset View'],
        upgradeFeePerNightINR: 4200
      }
    ],
    eligiblePlans: ['Red Membership (5 Years)', 'Red Membership (10 Years)', 'Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Escape Select', 'Escape Elite', 'Explore Select', 'Explore Elite'],
    checkInTime: '14:00',
    checkOutTime: '12:00',
    nearbyAttractions: ['City Palace Udaipur (5 km)', 'Jag Mandir Island (4 km)', 'Saheliyon-ki-Bari (7 km)']
  },
  {
    id: 'resort-bali-jungle',
    name: 'Ubud Rainforest Villa & Infinity Pool',
    location: 'Tegallalang Valley, Ubud',
    city: 'Bali',
    state: 'Bali Province',
    country: 'Indonesia',
    isInternational: true,
    category: 'Tropical Island',
    starRating: 5,
    coverImage: '/assets/images/resort_bali_jungle_1794462696707.jpg',
    gallery: [
      '/assets/images/resort_bali_jungle_1794462696707.jpg',
      '/assets/images/resort_island_overwater_1794461557821.jpg'
    ],
    description: 'Secluded Balinese valley villa overlooking terraced rice paddies and tropical jungle canopy. Features private infinity plunge pool, sunrise yoga, and organic culinary experiences.',
    amenities: [
      'Private Jungle Infinity Pool',
      'Floating Breakfast Tray',
      'Holistic Balinese Spa',
      'Rice Terrace Yoga Pavilion',
      'Cooking Class with Chef',
      'Airport Limousine Transfer',
      'Artisan Coffee Roastery'
    ],
    roomTypes: [
      {
        id: 'room-bali-villa',
        name: 'One-Bedroom Rainforest Pool Villa',
        capacity: { adults: 2, children: 1 },
        description: 'Private 1200 sq ft pavilion with private infinity pool facing morning sun over tropical jungle.',
        amenities: ['Private Pool', 'Sun Deck', 'Outdoor Terrazzo Bath', 'Floating Tray'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-bali-presidential',
        name: 'Royal Valley Panorama Villa',
        capacity: { adults: 3, children: 2 },
        description: 'Two-story luxury residence with 35-ft infinity pool and uninterrupted views of Mount Agung.',
        amenities: ['Private Chef', 'Spa Pavilion', 'Sunset Gazebo', 'Personal Butler'],
        upgradeFeePerNightINR: 5500
      }
    ],
    eligiblePlans: ['Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Explore Select', 'Explore Elite'],
    checkInTime: '14:00',
    checkOutTime: '12:00',
    nearbyAttractions: ['Tegallalang Rice Terraces (3 km)', 'Sacred Monkey Forest (8 km)', 'Ubud Palace (7 km)']
  },
  {
    id: 'resort-azure-atoll',
    name: 'Azure Atoll Overwater Villas & Spa',
    location: 'South Malé Atoll',
    city: 'South Malé',
    state: 'Kaafu Atoll',
    country: 'Maldives',
    isInternational: true,
    category: 'Tropical Island',
    starRating: 5,
    coverImage: '/assets/images/resort_island_overwater_1794461557821.jpg',
    gallery: [
      '/assets/images/resort_island_overwater_1794461557821.jpg',
      '/assets/images/hero_luxury_resort_1794461557327.jpg'
    ],
    description: 'Suspended above iridescent turquoise lagoons. Walk out on your private sun deck with glass floor panels to watch manta rays, dive into coral reefs, and relish sunset dining.',
    amenities: [
      'Direct Lagoon Access Deck',
      'Glass Floor Living Panels',
      'PADI 5-Star Dive Centre',
      'Overwater Cocktail Bar',
      'Speedboat Airport Transfers',
      'Sunset Dolphin Cruise',
      'Floating Breakfast Service'
    ],
    roomTypes: [
      {
        id: 'room-lagoon-villa',
        name: 'Overwater Lagoon Villa',
        capacity: { adults: 2, children: 1 },
        description: 'Private thatched roof villa perched on stilts with direct stairs into azure sea.',
        amenities: ['Ocean Hammock', 'Glass Floor Panel', 'Outdoor Sun Loungers', 'Snorkeling Gear'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-sunset-pool-villa',
        name: 'Grand Sunset Ocean Pool Villa',
        capacity: { adults: 3, children: 2 },
        description: 'Largest overwater pavilion with 25-ft private infinity pool and uninterrupted sunset vistas.',
        amenities: ['Private Ocean Pool', 'Champagne on Arrival', 'Island Concierge', 'Stargazing Net'],
        upgradeFeePerNightINR: 7500
      }
    ],
    eligiblePlans: ['Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Explore Select', 'Explore Elite'],
    checkInTime: '15:00',
    checkOutTime: '12:00',
    nearbyAttractions: ['Banana Reef Diving Spot (10 min boat)', 'Malé City Tour (25 min speedboat)']
  },
  {
    id: 'resort-vista-grand',
    name: 'The Vista Grand Cliffside Sanctuary',
    location: 'Kata Noi Beach, Phuket',
    city: 'Phuket',
    state: 'Phuket Province',
    country: 'Thailand',
    isInternational: true,
    category: 'Beach',
    starRating: 5,
    coverImage: '/assets/images/hero_luxury_resort_1794461557327.jpg',
    gallery: [
      '/assets/images/hero_luxury_resort_1794461557327.jpg',
      '/assets/images/resort_beachfront_villa_1794461557618.jpg'
    ],
    description: 'Elevated cliffside luxury sanctuary overlooking Kata Noi Bay with an iconic three-tier infinity pool, private daybeds, authentic Royal Thai cuisine, and private yacht charters.',
    amenities: [
      'Three-Tier Horizon Pool',
      'Cliffside Sky Lounge',
      'Traditional Royal Thai Spa',
      'Private Yacht Excursion Desk',
      'Beachside Shuttle Buggy',
      'Wine & Sommelier Cellar',
      'Infinity Sunbeds & Daybeds'
    ],
    roomTypes: [
      {
        id: 'room-cliff-studio',
        name: 'Ocean Panorama Studio',
        capacity: { adults: 2, children: 2 },
        description: 'Floor-to-ceiling glass panoramic room capturing 180-degree Andaman Sea sunsets.',
        amenities: ['King Daybed', 'Terrazzo Soaking Tub', 'Double Vanity', 'Smart Room Controls'],
        upgradeFeePerNightINR: 0
      },
      {
        id: 'room-cliff-pool-penthouse',
        name: 'Sky Cliff Infinity Penthouse',
        capacity: { adults: 3, children: 2 },
        description: 'Top-tier cliff penthouse with wraparound terrace and private panoramic lap pool.',
        amenities: ['Private Lap Pool', 'Private Chef On Request', 'Evening Cocktail Service', 'Telescope'],
        upgradeFeePerNightINR: 5200
      }
    ],
    eligiblePlans: ['Purple Membership (5 Years)', 'Purple Membership (10 Years)', 'Explore Select', 'Explore Elite'],
    checkInTime: '14:00',
    checkOutTime: '12:00',
    nearbyAttractions: ['Kata Noi Beach (300 m)', 'Big Buddha Phuket (7 km)', 'Promthep Cape (8 km)']
  }
];

export const INITIAL_MEMBER: MemberUser = {
  id: 'usr-10492',
  membershipId: 'MYH-PUR-5028',
  name: 'Rajesh Makwana',
  email: 'utkarshmakwana31@gmail.com',
  phone: '+91 73533 33701',
  planId: 'plan-purple-5yr',
  planName: 'Purple Membership (5 Years)',
  status: 'Active',
  startDate: '2025-04-15',
  expiryDate: '2030-04-14',
  annualNights: 7,
  remainingNights: 5,
  usedNightsThisYear: 2,
  loyaltyLevel: 'Platinum',
  loyaltyPoints: 3450,
  walletBalanceINR: 15000,
  familyMembers: [
    { name: 'Neelam Makwana', relation: 'Spouse', age: 36, verified: true },
    { name: 'Aarav Makwana', relation: 'Son', age: 9, verified: true },
    { name: 'Kavya Makwana', relation: 'Daughter', age: 6, verified: true }
  ]
};

export const INITIAL_ENTITLEMENT_LEDGER: EntitlementLedgerEntry[] = [
  {
    id: 'ent-001',
    date: '2025-04-15',
    type: 'Annual Allocation',
    nights: 7,
    balanceAfter: 7,
    description: 'Year 1 Annual entitlement allocation for Explore Elite (myholidayz.in)'
  },
  {
    id: 'ent-002',
    date: '2025-09-20',
    type: 'Booking Deduction',
    nights: -2,
    balanceAfter: 5,
    referenceId: 'MYH-RES-4019',
    description: 'Stay deduction for 2 nights at The Silversnow Alpine Chalet, Manali'
  },
  {
    id: 'ent-003',
    date: '2025-11-05',
    type: 'Admin Adjustment',
    nights: 1,
    balanceAfter: 6,
    referenceId: 'ADJ-882',
    description: 'Loyalty bonus credit granted by MyHoliday Membership Desk'
  },
  {
    id: 'ent-004',
    date: '2026-02-12',
    type: 'Booking Deduction',
    nights: -1,
    balanceAfter: 5,
    referenceId: 'MYH-RES-5102',
    description: 'Weekend stay deduction at Royal Haveli Palace, Udaipur'
  }
];

export const INITIAL_BOOKINGS: BookingRequest[] = [
  {
    id: 'bkg-101',
    referenceNumber: 'MYH-RES-4019',
    memberId: 'usr-10492',
    memberName: 'Rajesh Makwana',
    memberEmail: 'utkarshmakwana31@gmail.com',
    memberPhone: '+91 73533 33701',
    resortId: 'resort-silversnow-chalet',
    resortName: 'The Silversnow Alpine Chalet & Sanctuary',
    resortLocation: 'Manali, Himachal Pradesh',
    resortImage: '/assets/images/resort_mountain_retreat_1794461557865.jpg',
    roomCategory: 'Cedar Valley Deluxe Room',
    checkIn: '2025-10-18',
    checkOut: '2025-10-20',
    nights: 2,
    guests: { adults: 2, children: 1 },
    status: 'Completed',
    entitlementDeducted: 2,
    additionalChargesINR: 0,
    voucherNumber: 'MYH-VOU-98214',
    createdDate: '2025-09-20',
    confirmationDate: '2025-09-21'
  },
  {
    id: 'bkg-102',
    referenceNumber: 'MYH-RES-7890',
    memberId: 'usr-10492',
    memberName: 'Rajesh Makwana',
    memberEmail: 'utkarshmakwana31@gmail.com',
    memberPhone: '+91 73533 33701',
    resortId: 'resort-coorg-plantation',
    resortName: 'The Green Haven Plantation Resort & Spa',
    resortLocation: 'Madikeri, Coorg, Karnataka',
    resortImage: '/assets/images/resort_coorg_plantation_1794462695704.jpg',
    roomCategory: 'Plantation View Wooden Cottage',
    checkIn: '2026-12-10',
    checkOut: '2026-12-13',
    nights: 3,
    guests: { adults: 2, children: 2 },
    status: 'Confirmed',
    entitlementDeducted: 3,
    additionalChargesINR: 0,
    specialRequests: 'High floor cottage with valley view, extra pillows for children.',
    voucherNumber: 'MYH-VOU-99031',
    createdDate: '2026-10-02',
    confirmationDate: '2026-10-04'
  },
  {
    id: 'bkg-103',
    referenceNumber: 'MYH-RES-9122',
    memberId: 'usr-10492',
    memberName: 'Rajesh Makwana',
    memberEmail: 'utkarshmakwana31@gmail.com',
    memberPhone: '+91 73533 33701',
    resortId: 'resort-azure-atoll',
    resortName: 'Azure Atoll Overwater Villas & Spa',
    resortLocation: 'South Malé, Maldives',
    resortImage: '/assets/images/resort_island_overwater_1794461557821.jpg',
    roomCategory: 'Overwater Lagoon Villa',
    checkIn: '2027-01-20',
    checkOut: '2027-01-22',
    nights: 2,
    guests: { adults: 2, children: 0 },
    status: 'Requested',
    entitlementDeducted: 2,
    additionalChargesINR: 0,
    specialRequests: '10th Wedding Anniversary celebration. Request flower bed decoration.',
    createdDate: '2026-11-10'
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-301',
    enquiryNumber: 'MYH-ENQ-8924',
    name: 'Vikramaditya Singhania',
    phone: '+91 98210 55432',
    email: 'vikram.singhania@apextech.com',
    city: 'Bengaluru',
    interestedPlan: 'Explore Elite',
    preferredDestination: 'Maldives / Bali',
    budgetRange: '₹5,00,000 - ₹7,00,000',
    source: 'Website Form',
    status: 'Proposal shared',
    priority: 'High',
    assignedTo: 'Bengaluru Sales Desk',
    createdDate: '2026-11-09',
    followUpDate: '2026-11-13',
    notes: [
      'Customer visited myholidayz.in seeking 5-year global membership with 7-night annual entitlement.',
      'Sent customized proposal with complimentary Bali villa upgrade voucher.'
    ],
    quotedAmountINR: 595000
  },
  {
    id: 'lead-302',
    enquiryNumber: 'MYH-ENQ-8925',
    name: 'Pooja Mehta',
    phone: '+91 97112 33410',
    email: 'pooja.mehta@studioarch.in',
    city: 'Bengaluru',
    interestedPlan: 'Escape Elite',
    preferredDestination: 'Coorg / Munnar / Goa',
    budgetRange: '₹3,00,000 - ₹4,00,000',
    source: 'Campaign',
    status: 'Connected',
    priority: 'Medium',
    assignedTo: 'Ananya Roy',
    createdDate: '2026-11-10',
    followUpDate: '2026-11-12',
    notes: [
      'Looking for family vacation solution without peak season surge.',
      'Requested Coorg coffee plantation weekend stay details.'
    ],
    quotedAmountINR: 345000
  },
  {
    id: 'lead-303',
    enquiryNumber: 'MYH-ENQ-8926',
    name: 'Dr. Amitav Banerjee',
    phone: '+91 98300 12890',
    email: 'amitav.banerjee@apollohosp.org',
    city: 'Bengaluru',
    interestedPlan: 'Explore Select',
    preferredDestination: 'Bali / Phuket',
    budgetRange: '₹3,50,000 - ₹4,50,000',
    source: 'Referral',
    status: 'Payment initiated',
    priority: 'High',
    assignedTo: 'Bengaluru Sales Desk',
    createdDate: '2026-11-08',
    followUpDate: '2026-11-12',
    notes: [
      'Referred by Rajesh Makwana (Explore Elite Member).',
      'Opted for 12-month EMI plan with down payment of ₹65,000.',
      'Payment link generated; awaiting bank authorization.'
    ],
    quotedAmountINR: 385000
  }
];

export const HOLIDAY_PACKAGES: HolidayPackage[] = [
  {
    id: 'pkg-coorg-munnar',
    title: 'Emerald Trails of South: Coorg & Munnar Estates',
    destination: 'Coorg & Munnar, Western Ghats',
    duration: '4 Nights / 5 Days',
    startingPriceINR: 38000,
    category: 'Luxury Escapes',
    coverImage: '/assets/images/resort_coorg_plantation_1794462695704.jpg',
    inclusions: ['5-Star Plantation Chalets', 'Private AC Chauffeur Car', 'Daily Gourmet Plantation Breakfast', 'Guided Spice & Tea Walks'],
    itinerary: [
      { day: 1, title: 'Arrival in Coorg', desc: 'Welcome drink in coffee estate, walking tour through spice gardens, and evening bonfire.' },
      { day: 2, title: 'Abbey Falls & Raja’s Seat', desc: 'Visit picturesque cascades, coffee berry tasting, and romantic sunset viewpoint.' },
      { day: 3, title: 'Scenic Drive to Munnar', desc: 'Pass through lush forest corridors to Munnar tea slopes, check-in to cliffside resort.' },
      { day: 4, title: 'Tea Museum & Cloud Peaks', desc: 'Artisan tea making masterclass, Mattupetty dam visit, and signature Ayurvedic massage.' },
      { day: 5, title: 'Departure', desc: 'Farewell breakfast and private transfer to Cochin/Bengaluru.' }
    ]
  },
  {
    id: 'pkg-andaman-paradise',
    title: 'Turquoise Waters: Havelock & Radhanagar Beach',
    destination: 'Havelock & Neil Islands, Andaman',
    duration: '4 Nights / 5 Days',
    startingPriceINR: 52000,
    category: 'Family',
    coverImage: '/assets/images/resort_andaman_beach_1794462696704.jpg',
    inclusions: ['White Sand Beach Villa', 'Speedboat Catamaran Ferry', 'Daily Breakfast Buffet', 'Guided Coral Snorkel Trip'],
    itinerary: [
      { day: 1, title: 'Touchdown in Port Blair & Cruise to Havelock', desc: 'Catamaran cruise across indigo seas to Havelock Island, check-in to beach villa.' },
      { day: 2, title: 'Radhanagar Sunset & Lagoon Swim', desc: 'Relax on Asia’s top-ranked white sand beach with fresh coconut water.' },
      { day: 3, title: 'Elephant Beach Coral Adventure', desc: 'Speedboat transfer to reef shallows for snorkeling among colorful clownfish and turtles.' },
      { day: 4, title: 'Neil Island Natural Bridge', desc: 'Day trip to tranquil Neil Island, exploring limestone rock formations and shallow lagoons.' },
      { day: 5, title: 'Port Blair Farewell', desc: 'Catamaran transfer to Port Blair airport with souvenir seashell gift.' }
    ]
  },
  {
    id: 'pkg-bali-escape',
    title: 'Bali Harmony: Ubud Rainforest & Ocean Villas',
    destination: 'Ubud & Seminyak, Bali',
    duration: '5 Nights / 6 Days',
    startingPriceINR: 68000,
    category: 'Honeymoon',
    coverImage: '/assets/images/resort_bali_jungle_1794462696707.jpg',
    inclusions: ['Private Pool Valley Villa', 'Private Airport Transfers', 'Floating Breakfast in Villa', 'Sunset Beach Club Passes'],
    itinerary: [
      { day: 1, title: 'Arrival in Bali', desc: 'Garland flower greeting at Ngurah Rai Airport, scenic transfer to Ubud valley villa.' },
      { day: 2, title: 'Tegallalang Rice Terraces & Jungle Swing', desc: 'Trek the iconic green stepped terraces, visit sacred water temples.' },
      { day: 3, title: 'Mount Batur Sunrise & Hot Springs', desc: 'Dawn jeep safari with panoramic volcano views, soak in mineral volcanic springs.' },
      { day: 4, title: 'Transfer to Coast & Sunset Cocktail', desc: 'Move to private seaside suites, evening beach club daybed reservation.' },
      { day: 5, title: 'Balinese Spa Rejuvenation', desc: '2-hour traditional lulur scrub and herbal bath, romantic candlelit beach dinner.' },
      { day: 6, title: 'Farewell Bali', desc: 'Morning floating breakfast, handicraft market shopping, and airport transfer.' }
    ]
  }
];

export const INITIAL_SUPPORT_TICKETS: SupportTicket[] = [
  {
    id: 'tkt-001',
    ticketNo: 'MYH-TKT-1082',
    category: 'Booking Assistance',
    subject: 'Requesting room upgrade for anniversary trip in Maldives',
    status: 'In Progress',
    priority: 'High',
    createdDate: '2026-11-10',
    messages: [
      { sender: 'member', text: 'Hi team, I submitted reservation MYH-RES-9122 for Maldives. Can I use wallet points to upgrade to Sunset Pool Villa?', time: '10:15 AM' },
      { sender: 'support', text: 'Hello Mr. Makwana! Certainly. The upgrade difference is ₹7,500/night and you have ₹15,000 in your Member Wallet which completely covers both nights. Would you like us to apply it?', time: '11:30 AM' }
    ]
  }
];
