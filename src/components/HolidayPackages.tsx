import React, { useState } from 'react';
import { HolidayPackage } from '../types';
import { Calendar, Users, MapPin, Clock, ArrowRight, Check, Sparkles } from 'lucide-react';

interface HolidayPackagesProps {
  packages: HolidayPackage[];
  onSelectPackage: (pkg: HolidayPackage) => void;
}

export const HolidayPackages: React.FC<HolidayPackagesProps> = ({ packages, onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedItineraryId, setExpandedItineraryId] = useState<string | null>(null);

  const categories = ['All', 'Luxury Escapes', 'Family', 'Honeymoon'];

  const filtered = packages.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="holiday-packages-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <span>All-Inclusive Tours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
              Curated Holiday Packages & Itineraries
            </h2>
            <p className="text-sm text-neutral-600 font-light mt-1">
              Complete vacation packages featuring private chauffeur cars, 5-star resort stays, sightseeing tours, and daily breakfast.
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#15803D] text-white shadow-xs'
                    : 'bg-white text-neutral-600 hover:bg-emerald-50 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={pkg.coverImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 bg-[#15803D] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-xs">
                    {pkg.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs flex items-center justify-between font-semibold">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#4ade80]" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#4ade80]" />
                      {pkg.destination}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                    {pkg.title}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-xs text-neutral-500 font-medium">Starting from</span>
                    <span className="text-xl font-extrabold text-[#15803D] font-tabular">
                      ₹{pkg.startingPriceINR.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-neutral-400">/ person</span>
                  </div>

                  {/* Inclusions */}
                  <div className="mt-4 space-y-1.5 text-xs text-neutral-600">
                    <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Package Inclusions
                    </div>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Day-wise Itinerary Accordion */}
                  <div className="mt-5 pt-4 border-t border-neutral-100">
                    <button
                      onClick={() =>
                        setExpandedItineraryId(expandedItineraryId === pkg.id ? null : pkg.id)
                      }
                      className="text-xs font-bold text-[#15803D] hover:underline flex items-center gap-1 transition-colors"
                    >
                      <span>{expandedItineraryId === pkg.id ? 'Hide Day-wise Plan' : 'View Day-wise Itinerary'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    {expandedItineraryId === pkg.id && (
                      <div className="mt-3 space-y-2.5 text-xs bg-emerald-50/40 p-3 rounded-xl border border-emerald-100">
                        {pkg.itinerary.map((item) => (
                          <div key={item.day} className="space-y-0.5">
                            <span className="font-bold text-neutral-900">
                              Day {item.day}: {item.title}
                            </span>
                            <p className="text-neutral-600 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-neutral-100 mt-3">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full py-2.5 px-4 bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Request Package Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
