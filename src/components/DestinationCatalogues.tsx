import React, { useState } from 'react';
import {
  MASTER_HOLIDAY_THEMES,
  WILDLIFE_STATS,
  POPULAR_INDIAN_WILDLIFE,
  FAMOUS_INTERNATIONAL_WILDLIFE,
  WILDLIFE_TOURISM_CATEGORIES,
  KIDS_INDIAN_DESTINATIONS,
  KIDS_INTERNATIONAL_DESTINATIONS,
  HISTORICAL_INDIAN_DESTINATIONS,
  HISTORICAL_INTERNATIONAL_DESTINATIONS,
  SAMPLE_CATALOGUE_ITINERARIES,
  HolidayThemeCategory,
  WildlifeDestinationItem,
  KidsDestinationItem,
  HistoricalDestinationItem,
  SampleItinerary
} from '../data/catalogueData';
import {
  Compass,
  FileText,
  Download,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  CheckCircle2,
  TreePine,
  Landmark,
  Baby,
  Globe2,
  Eye,
  Info
} from 'lucide-react';

interface DestinationCataloguesProps {
  onOpenEnquiry: (planName?: string) => void;
}

export const DestinationCatalogues: React.FC<DestinationCataloguesProps> = ({
  onOpenEnquiry
}) => {
  const [activeMainTab, setActiveMainTab] = useState<'wildlife' | 'historical' | 'kids' | 'master'>('wildlife');

  // Sub-filters
  const [wildlifeScope, setWildlifeScope] = useState<'india' | 'international'>('india');
  const [historicalScope, setHistoricalScope] = useState<'india' | 'international'>('india');
  const [kidsScope, setKidsScope] = useState<'india' | 'international'>('india');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItinerary, setSelectedItinerary] = useState<SampleItinerary | null>(SAMPLE_CATALOGUE_ITINERARIES[0]);

  return (
    <section id="destination-catalogues-section" className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <Compass className="w-3.5 h-3.5" />
            <span>Official Destination Catalogues</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            MY HOLIDAYS Destination Catalogues & Holiday Themes
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-light">
            Explore curated itineraries, best visiting seasons, wildlife sanctuaries, and family adventures across 195 countries and 1,000+ popular tourist destinations.
          </p>
        </div>

        {/* Official PDF Download Center */}
        <div className="mt-8 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl p-6 text-white shadow-lg border border-slate-700">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Official Download Center</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Download Official PDF Travel Catalogues
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl font-light">
                Instant access to our comprehensive Kids Dream Destinations and Historical Heritage Travel inspiration guides for your family vacation planning.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="/catalogues/MY_HOLIDAYS_Kids_Dream_Destinations_Catalogue.pdf"
                download="MY_HOLIDAYS_Kids_Dream_Destinations_Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Kids Dream Catalogue (PDF)</span>
              </a>

              <a
                href="/catalogues/My_Holidays_Historical_Destinations_Catalogue.pdf"
                download="My_Holidays_Historical_Destinations_Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Historical Destinations (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Category Navigation Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 bg-white border border-neutral-200 rounded-xl shadow-xs overflow-x-auto max-w-full">
            <button
              onClick={() => { setActiveMainTab('wildlife'); setSearchQuery(''); }}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeMainTab === 'wildlife'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <TreePine className="w-4 h-4" />
              <span>Wildlife Tourism (60 Parks)</span>
            </button>

            <button
              onClick={() => { setActiveMainTab('historical'); setSearchQuery(''); }}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeMainTab === 'historical'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>Historical Destinations (50 Wonders)</span>
            </button>

            <button
              onClick={() => { setActiveMainTab('kids'); setSearchQuery(''); }}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeMainTab === 'kids'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Baby className="w-4 h-4" />
              <span>Kids Dream Destinations (38 Parks)</span>
            </button>

            <button
              onClick={() => { setActiveMainTab('master'); setSearchQuery(''); }}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeMainTab === 'master'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>10 Holiday Themes & Master Catalogue</span>
            </button>
          </div>
        </div>

        {/* TAB 1: WILDLIFE TOURISM (From Image 4, 5, 6) */}
        {activeMainTab === 'wildlife' && (
          <div className="mt-10 space-y-8">
            {/* Wildlife Statistics Strip (Image 4) */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <h4 className="text-base font-bold text-neutral-900">
                    India Wildlife Protected Ecosystems
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Official statistics of India's conservation network (categories overlap as interconnected habitats)
                  </p>
                </div>
                <div className="text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
                  Project Tiger & Elephant Corridors
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {WILDLIFE_STATS.map((s, idx) => (
                  <div key={idx} className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-100 text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#15803D] font-tabular">
                      {s.count}
                    </div>
                    <div className="text-xs font-bold text-neutral-800 mt-1">
                      {s.label}
                    </div>
                    <div className="text-[10px] text-neutral-500 mt-0.5 font-light">
                      {s.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 Wildlife Categories (Image 6) */}
            <div>
              <div className="mb-4">
                <h4 className="text-lg font-bold text-neutral-900">
                  Suggested MY HOLIDAYS Wildlife Tourism Categories
                </h4>
                <p className="text-xs text-neutral-600">
                  Customizable wildlife travel packages curated for photographers, nature enthusiasts, and families
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {WILDLIFE_TOURISM_CATEGORIES.map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-white p-4 rounded-xl border border-neutral-200 hover:border-emerald-400 hover:shadow-xs transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#15803D] flex items-center justify-center font-bold text-sm mb-3">
                      ✓
                    </div>
                    <h5 className="text-sm font-bold text-neutral-900">{cat.title}</h5>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope Toggle & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="inline-flex p-1 bg-neutral-200/60 rounded-lg">
                <button
                  onClick={() => setWildlifeScope('india')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    wildlifeScope === 'india'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  12 Popular Indian Wildlife Parks
                </button>
                <button
                  onClick={() => setWildlifeScope('international')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    wildlifeScope === 'international'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  16 Famous International Destinations
                </button>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by park, animal, country..."
                  className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                />
              </div>
            </div>

            {/* Wildlife Destination Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(wildlifeScope === 'india' ? POPULAR_INDIAN_WILDLIFE : FAMOUS_INTERNATIONAL_WILDLIFE)
                .filter(item =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.stateOrCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.keyFauna.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((park) => (
                  <div
                    key={park.id}
                    className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
                        <span className="font-semibold text-[#15803D] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {park.stateOrCountry}
                        </span>
                        <span className="text-[11px] bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
                          {park.region}
                        </span>
                      </div>

                      <h5 className="text-base font-bold text-neutral-900">
                        {park.name}
                      </h5>

                      <p className="text-xs text-neutral-600 mt-2 font-light leading-relaxed">
                        {park.highlight}
                      </p>

                      <div className="mt-4 pt-3 border-t border-neutral-100 space-y-2 text-xs">
                        <div>
                          <span className="text-neutral-500 font-medium">Key Fauna: </span>
                          <span className="font-semibold text-neutral-800">{park.keyFauna}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-medium">Best Season: </span>
                          <span className="font-semibold text-[#15803D]">{park.bestSeason}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[11px] text-neutral-400">3–5 Day Safaris Available</span>
                      <button
                        onClick={() => onOpenEnquiry(`Wildlife Safari: ${park.name}`)}
                        className="text-xs font-bold text-[#15803D] hover:text-[#166534] flex items-center gap-1"
                      >
                        <span>Enquire Safari</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 2: HISTORICAL DESTINATIONS (From PDF) */}
        {activeMainTab === 'historical' && (
          <div className="mt-10 space-y-8">
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  MY HOLIDAYS Historical Destinations Catalogue
                </div>
                <h4 className="text-lg font-bold text-neutral-900">
                  50 World Heritage Sites: Ancient Civilisations, Forts & Monolithic Wonders
                </h4>
                <p className="text-xs text-neutral-600 max-w-3xl">
                  Featuring 25 historic places in India and 25 international heritage wonders across Asia, Europe, Africa, and the Americas.
                </p>
              </div>

              <a
                href="/catalogues/My_Holidays_Historical_Destinations_Catalogue.pdf"
                download="My_Holidays_Historical_Destinations_Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Full Heritage PDF (8 Pages)</span>
              </a>
            </div>

            {/* Scope Toggle & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="inline-flex p-1 bg-neutral-200/60 rounded-lg">
                <button
                  onClick={() => setHistoricalScope('india')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    historicalScope === 'india'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Part 1: India Heritage (25 Sites)
                </button>
                <button
                  onClick={() => setHistoricalScope('international')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    historicalScope === 'international'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Part 2: International Heritage (25 Wonders)
                </button>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by monument, dynasty, city..."
                  className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>
            </div>

            {/* Historical Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(historicalScope === 'india' ? HISTORICAL_INDIAN_DESTINATIONS : HISTORICAL_INTERNATIONAL_DESTINATIONS)
                .filter(item =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.eraOrDynasty.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((site) => (
                  <div
                    key={site.id}
                    className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
                        <span className="font-semibold text-amber-700 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {site.location}
                        </span>
                        <span className="text-[11px] bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
                          {site.country}
                        </span>
                      </div>

                      <h5 className="text-base font-bold text-neutral-900">
                        {site.name}
                      </h5>

                      <div className="text-[11px] text-amber-900/80 font-medium mt-1">
                        {site.eraOrDynasty}
                      </div>

                      <p className="text-xs text-neutral-600 mt-2.5 font-light leading-relaxed">
                        {site.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <div className="text-xs text-neutral-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>Best: <strong className="text-neutral-800">{site.suggestedSeason}</strong></span>
                      </div>
                      <button
                        onClick={() => onOpenEnquiry(`Heritage Tour: ${site.name}`)}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 3: KIDS DREAM DESTINATIONS (From PDF) */}
        {activeMainTab === 'kids' && (
          <div className="mt-10 space-y-8">
            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-800">
                  MY HOLIDAYS Kids Dream Destinations Catalogue
                </div>
                <h4 className="text-lg font-bold text-neutral-900">
                  Family Holiday Inspiration: Theme Parks, Science Centres & Animal Encounters
                </h4>
                <p className="text-xs text-neutral-600 max-w-3xl">
                  Curated for toddlers, school-age kids, teenagers and parents across India and 20 top global destinations.
                </p>
              </div>

              <a
                href="/catalogues/MY_HOLIDAYS_Kids_Dream_Destinations_Catalogue.pdf"
                download="MY_HOLIDAYS_Kids_Dream_Destinations_Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Full Kids Dream PDF (6 Pages)</span>
              </a>
            </div>

            {/* Scope Toggle & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="inline-flex p-1 bg-neutral-200/60 rounded-lg">
                <button
                  onClick={() => setKidsScope('india')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    kidsScope === 'india'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Part 1: India Family Destinations (18 Attractions)
                </button>
                <button
                  onClick={() => setKidsScope('international')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    kidsScope === 'international'
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Part 2: International Family Wonders (20 Destinations)
                </button>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by theme park, aquarium, city..."
                  className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>
            </div>

            {/* Kids Destination Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(kidsScope === 'india' ? KIDS_INDIAN_DESTINATIONS : KIDS_INTERNATIONAL_DESTINATIONS)
                .filter(item =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((kid) => (
                  <div
                    key={kid.id}
                    className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
                        <span className="font-semibold text-purple-700 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {kid.location}
                        </span>
                        <span className="text-[11px] bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">
                          {kid.budgetStyle}
                        </span>
                      </div>

                      <h5 className="text-base font-bold text-neutral-900">
                        {kid.name}
                      </h5>

                      <p className="text-xs text-neutral-600 mt-2 font-light leading-relaxed">
                        {kid.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-500">Suggested Age:</span>
                          <span className="font-semibold text-neutral-800">{kid.suggestedAge}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-500">Recommended Stay:</span>
                          <span className="font-semibold text-purple-700">{kid.suggestedStay}</span>
                        </div>
                        <div className="text-[11px] text-neutral-500 italic mt-1">
                          ★ {kid.highlight}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[11px] text-neutral-400">Family Package Customisable</span>
                      <button
                        onClick={() => onOpenEnquiry(`Family Vacation: ${kid.name}`)}
                        className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 4: 10 HOLIDAY THEMES & MASTER CATALOGUE (From Image 3) */}
        {activeMainTab === 'master' && (
          <div className="mt-10 space-y-8">
            {/* Master Recommendation Card (From Image 3) */}
            <div className="bg-gradient-to-br from-[#15803D] to-[#0F172A] rounded-2xl p-6 sm:p-8 text-white shadow-lg">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                  <span>Official Architecture</span>
                  <span>·</span>
                  <span>195 Countries & 1,000+ Tourist Destinations</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  MY HOLIDAYS Master Destination Catalogue
                </h3>

                <p className="text-sm sm:text-base text-emerald-100 font-light leading-relaxed">
                  "Build a MY HOLIDAYS master catalogue with 195 countries and at least 1,000 popular tourist destinations, including itineraries, best seasons, sightseeing and hotel categories."
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs text-emerald-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                    <span>Comprehensive Itineraries (3 to 10 Days)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                    <span>Best Season Climate Guidance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                    <span>Verified Hotel & Resort Categories</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10 Core Holiday Categories (Image 3) */}
            <div>
              <div className="mb-4">
                <h4 className="text-lg font-bold text-neutral-900">
                  10 Core Holiday Categories
                </h4>
                <p className="text-xs text-neutral-600">
                  The recommended structural organisation for MY HOLIDAYS brochure and website
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {MASTER_HOLIDAY_THEMES.map((theme) => (
                  <div
                    key={theme.id}
                    className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs hover:border-[#15803D] hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center font-bold text-xs">
                          {theme.number}
                        </span>
                        <span className="text-[11px] text-neutral-500 font-medium">
                          {theme.recommendedSeason}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-neutral-900">
                        {theme.title}
                      </h5>

                      <p className="text-xs text-neutral-600 mt-2 font-light leading-relaxed">
                        {theme.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-neutral-100">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                          Featured Destinations
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {theme.regions.map((reg, rIdx) => (
                            <span key={rIdx} className="text-[10px] bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded">
                              {reg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-neutral-100">
                      <button
                        onClick={() => onOpenEnquiry(`Category: ${theme.title}`)}
                        className="w-full py-1.5 px-3 bg-neutral-100 hover:bg-[#15803D] hover:text-white text-neutral-800 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Explore Packages</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Curated Sample Itineraries Showcase (From Catalogues) */}
        <div className="mt-16 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <div className="text-xs font-bold text-[#15803D] uppercase tracking-wider">
                Curated Travel Routes
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
                Sample Itineraries from Official Catalogues
              </h4>
              <p className="text-xs text-neutral-500 mt-1">
                Starter itineraries crafted by travel directors; customize them freely with your membership entitlement.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {SAMPLE_CATALOGUE_ITINERARIES.map((itin) => (
                <button
                  key={itin.id}
                  onClick={() => setSelectedItinerary(itin)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    selectedItinerary?.id === itin.id
                      ? 'bg-[#15803D] text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {itin.title.split(':')[0]} ({itin.duration.split('/')[0].trim()})
                </button>
              ))}
            </div>
          </div>

          {selectedItinerary && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 bg-emerald-50/50 rounded-xl p-5 border border-emerald-100 space-y-3">
                <span className="text-[11px] font-bold text-[#15803D] uppercase tracking-wider px-2 py-0.5 bg-emerald-100 rounded">
                  {selectedItinerary.catalogue}
                </span>
                <h5 className="text-lg font-bold text-neutral-900">
                  {selectedItinerary.title}
                </h5>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                  <Clock className="w-4 h-4 text-[#15803D]" />
                  <span>Duration: {selectedItinerary.duration}</span>
                </div>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {selectedItinerary.overview}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenEnquiry(`Itinerary: ${selectedItinerary.title}`)}
                    className="w-full py-2 px-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white text-xs font-bold rounded-lg transition-all shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-3">
                {selectedItinerary.days.map((d) => (
                  <div
                    key={d.day}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#15803D] text-white flex flex-col items-center justify-center shrink-0 font-bold">
                      <span className="text-[9px] uppercase leading-none">Day</span>
                      <span className="text-sm font-extrabold leading-none mt-0.5">{d.day}</span>
                    </div>
                    <div className="space-y-0.5">
                      <h6 className="text-xs font-bold text-neutral-900">{d.title}</h6>
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
