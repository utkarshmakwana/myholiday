import React from 'react';
import { Calendar, ShieldCheck, Gift, RefreshCw, KeyRound, ArrowRight } from 'lucide-react';

interface HowMembershipWorksProps {
  onExplorePlans: () => void;
}

export const HowMembershipWorks: React.FC<HowMembershipWorksProps> = ({ onExplorePlans }) => {
  const steps = [
    {
      num: '01',
      title: 'Select Your Membership Tier',
      desc: 'Choose from Escape Series (Domestic India) or Explore Series (Worldwide) in 3 or 5-year tenures. Lock in present-day tariffs and avoid hotel inflation.'
    },
    {
      num: '02',
      title: 'Receive 7 Guaranteed Nights Annually',
      desc: 'Each year on your anniversary, your digital ledger is credited with 7 vacation nights (7N/8D), recorded on an immutable ledger.'
    },
    {
      num: '03',
      title: 'Reserve 240+ Partner Resorts',
      desc: 'Search our 240+ verified properties, select your travel dates, verify room categories, and submit reservations with our Bengaluru team.'
    },
    {
      num: '04',
      title: 'Split, Gift, or Carry Forward',
      desc: 'Enjoy a 4-night beach holiday in Goa now and a 3-night coffee estate break in Coorg later. Roll over unused nights to the following year.'
    }
  ];

  const privileges = [
    { title: 'Split Holiday Nights', desc: 'Divide your annual 7 nights across multiple shorter 2 or 3-night getaways throughout the year.' },
    { title: 'Gift Stays to Family', desc: 'Authorize parents, siblings, or friends to holiday under your membership with digital vouchers.' },
    { title: 'Carry Forward Unused Nights', desc: 'Too busy to travel this year? Roll over your unused nights to the following year without penalty.' },
    { title: 'Worldwide Partner Resorts', desc: 'Exchange domestic stays for international partner resorts in Bali, Thailand, and the Maldives.' }
  ];

  return (
    <section id="how-it-works-section" className="py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <span>The MyHoliday Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            How Your Holiday Membership Works
          </h2>

          <p className="text-sm text-neutral-600 font-light">
            Designed to replace unpredictable seasonal surge tariffs with guaranteed vacation standards, flexible night rollover, and dedicated care.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-2xl font-black text-[#15803D] font-tabular">
                  {step.num}
                </span>
                <h3 className="mt-3 text-lg font-bold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flexibility Privileges Bento Grid */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-neutral-900">
              Vacation Flexibility Engineered for Real Life
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Your vacation entitlements adapt to your family's evolving travel calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {privileges.map((priv, i) => (
              <div key={i} className="p-5 rounded-xl border border-emerald-100 bg-white shadow-xs space-y-2">
                <div className="text-sm font-bold text-[#15803D]">
                  {priv.title}
                </div>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {priv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
