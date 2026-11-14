import React, { useState } from 'react';
import { MembershipPlan } from '../types';
import { Check, ArrowRight, ShieldCheck, Calendar, Globe, Building, Award } from 'lucide-react';

interface MembershipPlansProps {
  plans: MembershipPlan[];
  onSelectPlan: (plan: MembershipPlan) => void;
  onOpenComparison: () => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({
  plans,
  onSelectPlan,
  onOpenComparison
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'red' | 'purple'>('all');

  const filteredPlans = plans.filter((plan) => {
    if (selectedFilter === 'red') return plan.category === 'Red' || plan.name.toLowerCase().includes('red');
    if (selectedFilter === 'purple') return plan.category === 'Purple' || plan.name.toLowerCase().includes('purple');
    return true;
  });

  return (
    <section id="membership-plans-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <span>Official Holiday Memberships & Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Red & Purple Holiday Membership Packages
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-light">
            Enjoy 7 Nights / 8 Days of guaranteed holidays every year. Choose between our Red Membership (India & Asia) and Purple Membership (India & International) in 5-Year and 10-Year tenures with locked-in tariffs.
          </p>

          {/* Interactive filter control */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex items-center p-1 bg-neutral-100 rounded-lg">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                  selectedFilter === 'all'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                All 4 Plans
              </button>
              <button
                onClick={() => setSelectedFilter('red')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${
                  selectedFilter === 'red'
                    ? 'bg-[#DC2626] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-[#DC2626]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#DC2626] border border-white" />
                Red Membership (India & Asia)
              </button>
              <button
                onClick={() => setSelectedFilter('purple')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${
                  selectedFilter === 'purple'
                    ? 'bg-[#7E22CE] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-[#7E22CE]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#9333EA] border border-white" />
                Purple Membership (India & Intl)
              </button>
            </div>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredPlans.map((plan) => {
            const isRec = plan.recommended;
            const isPurple = plan.category === 'Purple' || plan.name.toLowerCase().includes('purple');
            const isRed = plan.category === 'Red' || plan.name.toLowerCase().includes('red');

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between bg-white rounded-2xl transition-all duration-200 border ${
                  isRec
                    ? 'border-[#7E22CE] shadow-xl ring-2 ring-[#7E22CE]/40'
                    : isPurple
                    ? 'border-purple-200 shadow-sm hover:shadow-md'
                    : 'border-red-200 shadow-sm hover:shadow-md'
                } p-6`}
              >
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#7E22CE] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase ${
                        isPurple ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {isPurple ? 'Purple Tier' : 'Red Tier'}
                      </span>
                      <span className="font-semibold text-neutral-700">{plan.tenureYears} Years</span>
                    </div>
                    <span className="text-[11px] font-medium text-neutral-500">{plan.coverage}</span>
                  </div>

                  <h3 className="mt-2.5 text-2xl font-bold text-neutral-900">
                    {plan.name}
                  </h3>

                  {/* Pricing Block */}
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-neutral-500 font-medium">Membership</span>
                      <span className="text-2xl font-extrabold text-neutral-900 font-tabular">
                        ₹{plan.priceINR.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* AMC Notice from User Specs */}
                    <div className="mt-1.5 px-2.5 py-1 bg-amber-50 rounded-md border border-amber-200 text-amber-900 text-xs font-semibold flex items-center justify-between">
                      <span className="text-[11px] text-amber-800 uppercase tracking-wider">AMC:</span>
                      <span className="font-bold">{plan.amcLabel || (plan.priceINR > 1000000 ? '₹39,999 + GST' : '₹24,999 + GST')}</span>
                    </div>

                    <div className="text-xs text-neutral-600 mt-2 flex items-center justify-between">
                      <span>EMI from</span>
                      <span className="font-bold text-neutral-900 font-tabular">₹{plan.emiMonthlyINR.toLocaleString('en-IN')}/mo</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-0.5 flex items-center justify-between">
                      <span>Down payment:</span>
                      <span>₹{plan.downPaymentINR.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Entitlements Details */}
                  <div className={`mt-5 space-y-2.5 text-xs text-neutral-700 p-3.5 rounded-xl border ${
                    isPurple ? 'bg-purple-50/50 border-purple-100' : 'bg-red-50/50 border-red-100'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Annual Holidays</span>
                      <span className={`font-bold font-tabular ${isPurple ? 'text-[#7E22CE]' : 'text-[#DC2626]'}`}>
                        {plan.annualNights} Nights (7N/8D)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Total Nights</span>
                      <span className="font-bold text-neutral-900 font-tabular">{plan.totalNights} Nights</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Room Category</span>
                      <span className="font-semibold text-neutral-900">{plan.roomCategory}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Occupancy</span>
                      <span className="font-medium text-neutral-800">2 Adults + 2 Kids</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Territory</span>
                      <span className="font-medium text-neutral-900">{plan.coverage}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Key Plan Inclusions
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      {plan.highlights.slice(0, 4).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPurple ? 'text-[#7E22CE]' : 'text-[#DC2626]'}`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-col gap-2">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                      isPurple
                        ? 'bg-[#7E22CE] hover:bg-[#6B21A8] text-white'
                        : 'bg-[#DC2626] hover:bg-[#B91C1C] text-white'
                    }`}
                  >
                    <span>Enquire {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Trigger Bar */}
        <div className="mt-12 bg-neutral-50 rounded-2xl border border-neutral-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#15803D] flex items-center justify-center shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-neutral-900">
                Compare Plan Privileges & Advance Booking Windows
              </h4>
              <p className="text-xs text-neutral-600 mt-0.5">
                Side-by-side view of room categories, carry forward rights, gifting policies, and festive season rules.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenComparison}
            className="px-5 py-2.5 text-xs font-bold text-[#15803D] bg-white hover:bg-emerald-50 border border-emerald-300 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            Open Comparison Table
          </button>
        </div>
      </div>
    </section>
  );
};
