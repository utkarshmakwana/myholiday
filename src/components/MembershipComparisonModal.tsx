import React from 'react';
import { MembershipPlan } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import { X, Check, Minus, ArrowRight, ShieldCheck, Download } from 'lucide-react';

interface MembershipComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  plans: MembershipPlan[];
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const MembershipComparisonModal: React.FC<MembershipComparisonModalProps> = ({
  isOpen,
  onClose,
  plans,
  onSelectPlan
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-5 bg-[#15803D] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded">
              <img
                src={COMPANY_CONTACT.logoPath}
                alt="MyHoliday Logo"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                Compare MyHoliday Memberships
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Side-by-Side Plan Comparison Matrix
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto p-6">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 px-3 text-sm font-bold text-neutral-900 w-1/4">
                  Features & Privileges
                </th>
                {plans.map((p) => (
                  <th
                    key={p.id}
                    className={`py-3 px-3 text-center ${
                      p.recommended ? 'bg-emerald-50/70 rounded-t-lg' : ''
                    }`}
                  >
                    <div className="text-sm font-bold text-neutral-900">{p.name}</div>
                    <div className="text-[11px] text-neutral-500 font-normal">{p.tenureYears} Years · {p.coverage}</div>
                    <div className="text-xs font-bold text-[#15803D] font-tabular mt-1">₹{p.priceINR.toLocaleString('en-IN')}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {/* Row: Annual Maintenance Charge (AMC) */}
              <tr className="bg-amber-50/40">
                <td className="py-3 px-3 font-semibold text-amber-900">Annual Maintenance Charge (AMC)</td>
                {plans.map((p) => (
                  <td key={p.id} className="py-3 px-3 text-center font-tabular font-bold text-amber-900">
                    {p.amcLabel || (p.priceINR > 1000000 ? '₹39,999 + GST' : '₹24,999 + GST')}
                  </td>
                ))}
              </tr>

              {/* Row: Annual Holiday Entitlement */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Annual Holiday Entitlement</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center font-tabular font-bold text-[#15803D] ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    {p.annualNights} Nights (7N/8D)
                  </td>
                ))}
              </tr>

              {/* Row: Total Lifetime Nights */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Total Contractual Nights</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center font-tabular text-neutral-700 font-bold ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    {p.totalNights} Nights
                  </td>
                ))}
              </tr>

              {/* Row: Room Category */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Room Category Included</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center font-semibold text-neutral-900 ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    {p.roomCategory}
                  </td>
                ))}
              </tr>

              {/* Row: Resort Coverage */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Resort Portfolio</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center text-neutral-600 ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    {p.resortCount}
                  </td>
                ))}
              </tr>

              {/* Row: Advance Booking Notice */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Advance Booking Window</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center text-neutral-600 ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    {p.bookingWindow}
                  </td>
                ))}
              </tr>

              {/* Row: Season Access */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Season Eligibility</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center text-neutral-600 ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    {p.seasonEligibility}
                  </td>
                ))}
              </tr>

              {/* Row: Priority Reservation Desk */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Priority Reservation Desk</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    {p.priorityBooking ? (
                      <Check className="w-4 h-4 text-[#15803D] mx-auto font-bold" />
                    ) : (
                      <Minus className="w-4 h-4 text-neutral-300 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              {/* Row: Gifting to Friends & Family */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Guest Gifting Privileges</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    {p.tenureYears >= 5 || p.category === 'Explore' ? (
                      <span className="text-[#15803D] font-bold">Free Gifting</span>
                    ) : (
                      <span className="text-neutral-500">Nominal Fee</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Row: Carry Forward */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Carry Forward Unused Nights</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    <Check className="w-4 h-4 text-[#15803D] mx-auto" />
                  </td>
                ))}
              </tr>

              {/* Row: Monthly EMI */}
              <tr>
                <td className="py-3 px-3 font-semibold text-neutral-800">Monthly EMI Option</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-3 px-3 text-center font-tabular font-bold text-[#15803D] ${p.recommended ? 'bg-emerald-50/70' : ''}`}>
                    ₹{p.emiMonthlyINR.toLocaleString('en-IN')}/mo
                  </td>
                ))}
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td className="py-4 px-3 font-semibold text-neutral-500">Action</td>
                {plans.map((p) => (
                  <td key={p.id} className={`py-4 px-3 text-center ${p.recommended ? 'bg-emerald-50/70 rounded-b-lg' : ''}`}>
                    <button
                      onClick={() => {
                        onSelectPlan(p);
                        onClose();
                      }}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#15803D] hover:bg-[#166534] text-white transition-colors shadow-xs"
                    >
                      Select {p.name}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#15803D]" />
            <span>Includes a statutory 15-day free look-in period with a 100% money-back guarantee.</span>
          </div>
          <button
            onClick={() => alert("MyHoliday Membership Brochure downloaded successfully.")}
            className="flex items-center gap-1.5 text-[#15803D] hover:underline font-bold"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF Brochure
          </button>
        </div>
      </div>
    </div>
  );
};
