import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Sparkles, ArrowRight, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface HeroProps {
  onExplorePlans: () => void;
  onExploreResorts: () => void;
  onSearch: (criteria: { destination: string; category: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePlans, onExploreResorts, onSearch }) => {
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('');
  const [month, setMonth] = useState('Dec 2026');
  const [guests, setGuests] = useState('2 Adults, 2 Kids');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, category });
    const el = document.getElementById('resorts-explorer-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#14532D] to-[#0F172A] text-white overflow-hidden">
      {/* Background Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/resort_coorg_plantation_1794462695704.jpg"
          alt="MyHoliday Nature & Resort Getaways"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#15803D]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold tracking-wide border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span>India's Trusted Family Holiday Membership</span>
              <span aria-hidden="true">·</span>
              <span>myholidayz.in</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18]">
              Make Every Vacation <br />
              <span className="text-[#4ade80]">Unforgettable</span> with <br />
              <span className="inline-flex items-center gap-2 text-white">
                <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#4ade80] -rotate-3 inline-block font-bold">My</span>
                <span className="tracking-tight font-black text-white">Holiday</span>
                <span className="text-white/90 font-semibold text-3xl sm:text-4xl lg:text-5xl ml-1">Membership</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-2xl leading-relaxed">
              Lock in transparent, inflation-free holidays for the next 3 to 5 years. Enjoy 7 guaranteed nights every year across 240+ verified resorts in Coorg, Munnar, Goa, Andaman, Manali, Bali, and the Maldives.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplorePlans}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-emerald-900/40 flex items-center gap-2"
              >
                <span>View Membership Plans</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreResorts}
                className="px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 active:scale-[0.98] border border-white/30 rounded-lg backdrop-blur-xs transition-all"
              >
                Explore 240+ Resorts
              </button>
            </div>

            {/* Quick trust checkmarks */}
            <div className="flex flex-wrap items-center gap-5 pt-3 text-xs text-emerald-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>Zero Peak Surge Tariffs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>Flexible Night Carry Forward</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>Complimentary Buffet Breakfast</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group">
              <img
                src="/assets/images/resort_munnar_tea_1794462696487.jpg"
                alt="MyHoliday Luxury Resort Munnar"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4ade80] uppercase tracking-wider">
                  <span>Munnar Tea Valley Sanctuary</span>
                  <span aria-hidden="true">·</span>
                  <span>Kerala</span>
                </div>
                <div className="text-sm font-medium text-neutral-200 mt-0.5">
                  Included in Escape & Explore Membership Tiers
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white text-neutral-900 rounded-xl p-3 shadow-xl border border-emerald-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#15803D] text-white flex items-center justify-center font-bold text-sm">
                240+
              </div>
              <div className="text-xs">
                <div className="font-bold text-neutral-900">Partner Resorts</div>
                <div className="text-neutral-500 text-[11px]">Across India & Abroad</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Holiday Discovery Strip (myholidayz.in colors) */}
        <div className="mt-14 bg-white rounded-xl p-4 sm:p-5 text-neutral-800 shadow-xl border border-emerald-100">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-center">
            {/* Destination */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#15803D]" />
                Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
              >
                <option value="">All Destinations (240+)</option>
                <option value="Coorg">Coorg (Coffee Estates & Chalets)</option>
                <option value="Munnar">Munnar (Tea Valley Sanctuaries)</option>
                <option value="Andaman">Andaman (Havelock White Sand Beach)</option>
                <option value="Goa">Goa (Candolim Plunge Villas)</option>
                <option value="Manali">Manali (Solang Alpine Chalet)</option>
                <option value="Udaipur">Udaipur (Heritage Haveli & Palaces)</option>
                <option value="Bali">Bali (Ubud Rainforest Villas)</option>
                <option value="Maldives">Maldives (Overwater Lagoon Villas)</option>
              </select>
            </div>

            {/* Holiday Type */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#15803D]" />
                Resort Style
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
              >
                <option value="">All Resort Styles</option>
                <option value="Mountain & Hills">Hills & Plantation Retreats</option>
                <option value="Beach">Beach & Coastal Sanctuaries</option>
                <option value="Heritage & Palace">Royal Heritage Palaces</option>
                <option value="Tropical Island">Tropical Overwater Islands</option>
              </select>
            </div>

            {/* Travel Month */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#15803D]" />
                Travel Month
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
              >
                <option value="Dec 2026">Dec 2026 - Winter Holidays</option>
                <option value="Jan 2027">Jan 2027 - New Year Vacations</option>
                <option value="Feb 2027">Feb 2027 - Spring Getaways</option>
                <option value="Summer 2027">Summer 2027 - Hill Station Breaks</option>
              </select>
            </div>

            {/* Party Size */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#15803D]" />
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
              >
                <option value="2 Adults, 2 Kids">2 Adults + 2 Kids (Member Base)</option>
                <option value="2 Adults">Couple / 2 Adults</option>
                <option value="3 Adults, 2 Kids">Family Suite (Up to 5)</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="pt-2 sm:pt-4 lg:pt-5">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#DC2626] hover:bg-[#b91c1c] active:scale-[0.98] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span>Search Resorts</span>
              </button>
            </div>
          </form>
        </div>

        {/* Quantitative Proof Metrics Strip from Official Brand Showcase (Image 2) */}
        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E05344] font-serif tracking-tight">240+</div>
            <div className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">Partner Resorts</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E05344] font-serif tracking-tight">50+</div>
            <div className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">Destinations</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E05344] font-serif tracking-tight">15,000+</div>
            <div className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">Happy Members</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E05344] font-serif tracking-tight">24+</div>
            <div className="text-xs sm:text-sm text-neutral-300 font-medium mt-1">Hour Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
