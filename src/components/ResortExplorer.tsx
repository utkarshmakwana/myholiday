import React, { useState } from 'react';
import { Resort } from '../types';
import { Search, MapPin, Star, ArrowRight, Check, Sparkles } from 'lucide-react';

interface ResortExplorerProps {
  resorts: Resort[];
  onSelectResort: (resort: Resort) => void;
  onRequestStay: (resort: Resort) => void;
  initialFilter?: { destination: string; category: string };
}

export const ResortExplorer: React.FC<ResortExplorerProps> = ({
  resorts,
  onSelectResort,
  onRequestStay,
  initialFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialFilter?.category || 'All');
  const [scopeFilter, setScopeFilter] = useState<'all' | 'domestic' | 'international'>('all');
  const [searchQuery, setSearchQuery] = useState<string>(initialFilter?.destination || '');

  const categories = ['All', 'Mountain & Hills', 'Beach', 'Heritage & Palace', 'Tropical Island'];

  const filteredResorts = resorts.filter((r) => {
    // Scope filter
    if (scopeFilter === 'domestic' && r.isInternational) return false;
    if (scopeFilter === 'international' && !r.isInternational) return false;

    // Category filter
    if (activeCategory !== 'All' && r.category !== activeCategory) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        r.name.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        r.country.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  return (
    <section id="resorts-explorer-section" className="py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <span>Verified Resort Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
              Explore Over 240+ Partner Properties
            </h2>
            <p className="text-sm text-neutral-600 font-light mt-1 max-w-xl">
              From Coorg coffee plantation chalets and Munnar tea gardens to Havelock Island white sands, Goan plunge villas, and Bali jungle sanctuaries.
            </p>
          </div>

          {/* Scope switch (Domestic vs International) */}
          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 bg-white border border-neutral-200 rounded-lg text-xs font-bold shadow-xs">
              <button
                onClick={() => setScopeFilter('all')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  scopeFilter === 'all' ? 'bg-[#15803D] text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                All Resorts ({resorts.length})
              </button>
              <button
                onClick={() => setScopeFilter('domestic')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  scopeFilter === 'domestic' ? 'bg-[#15803D] text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Domestic India
              </button>
              <button
                onClick={() => setScopeFilter('international')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  scopeFilter === 'international' ? 'bg-[#15803D] text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                International
              </button>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#15803D] text-white shadow-xs'
                    : 'bg-white text-neutral-600 hover:bg-emerald-50 hover:text-[#15803D] border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Coorg, Munnar, Goa, Bali..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
            />
          </div>
        </div>

        {/* Resorts Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResorts.map((resort) => (
            <div
              key={resort.id}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={resort.coverImage}
                    alt={resort.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#15803D] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {resort.category}
                  </div>

                  {/* Star Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-xs text-amber-300 px-2 py-0.5 rounded text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-bold">{resort.starRating}.0</span>
                  </div>

                  {/* Location badge on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#4ade80] shrink-0" />
                    <span className="truncate">{resort.location}, {resort.country}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#15803D] transition-colors leading-snug">
                    {resort.name}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-600 font-light line-clamp-2 leading-relaxed">
                    {resort.description}
                  </p>

                  {/* Amenities */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {resort.amenities.slice(0, 3).map((amenity, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100"
                      >
                        {amenity}
                      </span>
                    ))}
                    {resort.amenities.length > 3 && (
                      <span className="text-[11px] text-neutral-400 self-center">
                        +{resort.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-5 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between gap-3">
                <div className="text-[11px] text-neutral-500">
                  <span className="font-bold text-neutral-800">Tier: </span>
                  {resort.eligiblePlans.length === 4 ? 'All 4 Plans' : 'Explore Series'}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectResort(resort)}
                    className="px-3.5 py-1.5 text-xs font-bold text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50 border border-neutral-300 rounded-lg transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onRequestStay(resort)}
                    className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors flex items-center gap-1 shadow-xs"
                  >
                    <span>Book Stay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
