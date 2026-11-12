import React, { useState } from 'react';
import {
  BookingRequest,
  MemberUser,
  Resort,
  EntitlementLedgerEntry
} from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FileText,
  Building,
  Users,
  CreditCard,
  Plus,
  Send,
  AlertTriangle,
  Hotel
} from 'lucide-react';

interface AdminOperationsViewProps {
  bookings: BookingRequest[];
  member: MemberUser;
  resorts: Resort[];
  onConfirmBooking: (bookingId: string, voucherNumber: string) => void;
  onRejectBooking: (bookingId: string) => void;
  onAdminAdjustNights: (nights: number, reason: string) => void;
}

export const AdminOperationsView: React.FC<AdminOperationsViewProps> = ({
  bookings,
  member,
  resorts,
  onConfirmBooking,
  onRejectBooking,
  onAdminAdjustNights
}) => {
  const [activeTab, setActiveTab] = useState<'reservations' | 'entitlements' | 'resorts'>('reservations');
  const [adjustNightsVal, setAdjustNightsVal] = useState<number>(1);
  const [adjustReason, setAdjustReason] = useState<string>('Courtesy loyalty adjustment granted by Bengaluru Head Office');
  const [adjustSuccessMsg, setAdjustSuccessMsg] = useState<string | null>(null);

  const pendingBookings = bookings.filter((b) => b.status === 'Requested' || b.status === 'Under review');
  const confirmedBookings = bookings.filter((b) => b.status === 'Confirmed');

  const handleConfirm = (b: BookingRequest) => {
    const voucherNo = `MYH-VOU-${Math.floor(10000 + Math.random() * 90000)}`;
    onConfirmBooking(b.id, voucherNo);
  };

  const handleAdjustSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adjustNightsVal || !adjustReason.trim()) return;

    onAdminAdjustNights(adjustNightsVal, adjustReason.trim());
    setAdjustSuccessMsg(`Successfully adjusted ${adjustNightsVal > 0 ? `+${adjustNightsVal}` : adjustNightsVal} night(s) for ${member.name} (${member.membershipId}).`);
    setTimeout(() => setAdjustSuccessMsg(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Admin Top Dashboard Banner */}
        <div className="bg-[#15803D] text-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-200">
                MyHoliday · Operations & Reservation Desk
              </span>
              <span className="text-white/30">·</span>
              <span className="text-xs text-emerald-100">Super Admin / Reservation Executive</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Admin & Operations Desk
            </h1>
            <p className="text-xs text-emerald-100 mt-0.5">
              Review member booking requests, verify resort partner room availability, generate official vouchers, and manage entitlement ledgers.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 bg-black/20 backdrop-blur-xs p-3.5 rounded-xl border border-white/20">
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-amber-300 font-tabular">
                {pendingBookings.length}
              </div>
              <div className="text-[10px] text-emerald-100">Pending Requests</div>
            </div>
            <div className="h-7 w-px bg-white/20" />
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-white font-tabular">
                {confirmedBookings.length}
              </div>
              <div className="text-[10px] text-emerald-100">Confirmed Vouchers</div>
            </div>
            <div className="h-7 w-px bg-white/20" />
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-[#4ade80] font-tabular">
                {resorts.length}
              </div>
              <div className="text-[10px] text-emerald-100">Resort Partners</div>
            </div>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 border-b border-emerald-100">
          <button
            onClick={() => setActiveTab('reservations')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'reservations'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            Reservation Desk Queue ({pendingBookings.length} Pending)
          </button>
          <button
            onClick={() => setActiveTab('entitlements')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'entitlements'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            Member Entitlement Adjustments
          </button>
          <button
            onClick={() => setActiveTab('resorts')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'resorts'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            Resort Portfolio ({resorts.length} Verified Properties)
          </button>
        </div>

        {/* Tab 1: Reservation Desk Queue */}
        {activeTab === 'reservations' && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  Incoming Member Reservation Requests
                </h3>
                <p className="text-xs text-neutral-500">
                  Verify partner room availability and authorize confirmation voucher.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={booking.resortImage}
                      alt={booking.resortName}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#15803D]">
                          {booking.referenceNumber}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            booking.status === 'Confirmed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : booking.status === 'Requested'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          {booking.status}
                        </span>
                        {booking.voucherNumber && (
                          <span className="text-[11px] text-[#15803D] font-bold">
                            Voucher: #{booking.voucherNumber}
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-bold text-neutral-900">
                        {booking.resortName}
                      </div>

                      <div className="text-xs text-neutral-500 flex flex-wrap items-center gap-2">
                        <span>Member: <strong className="text-neutral-800">{booking.memberName}</strong> ({booking.memberPhone})</span>
                        <span>·</span>
                        <span className="font-tabular font-medium text-neutral-700">{booking.checkIn} to {booking.checkOut}</span>
                        <span>·</span>
                        <span className="font-bold text-neutral-900">{booking.nights} Nights ({booking.roomCategory})</span>
                      </div>

                      {booking.specialRequests && (
                        <div className="text-[11px] text-neutral-500 italic">
                          Special notes: "{booking.specialRequests}"
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end lg:self-center">
                    {booking.status !== 'Confirmed' ? (
                      <>
                        <button
                          onClick={() => handleConfirm(booking)}
                          className="px-4 py-2 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Verify & Issue Voucher</span>
                        </button>
                        <button
                          onClick={() => onRejectBooking(booking.id)}
                          className="px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 border border-red-200 rounded-lg transition-colors"
                        >
                          Reject & Restore Nights
                        </button>
                      </>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#15803D] bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                          Resort Confirmed & Voucher Issued
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Entitlement Adjustments */}
        {activeTab === 'entitlements' && (
          <div className="mt-8 max-w-2xl bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
                Member Entitlement Manager
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">
                Adjust Holiday Entitlement Ledger
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Credit promotional bonus nights, restore nights for approved cancellations, or carry forward expired allocations.
              </p>
            </div>

            {adjustSuccessMsg && (
              <div className="p-3 bg-emerald-50 text-[#15803D] text-xs font-bold rounded-lg border border-emerald-200">
                {adjustSuccessMsg}
              </div>
            )}

            {/* Target Member Card */}
            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-1 text-xs">
              <div className="font-bold text-neutral-900 text-sm">{member.name}</div>
              <div className="text-neutral-600">ID: {member.membershipId} · Plan: {member.planName}</div>
              <div className="pt-2 flex items-center gap-4 text-neutral-700 font-tabular">
                <div>Current Available: <strong className="text-[#15803D] font-bold">{member.remainingNights} Nights</strong></div>
                <div>Used This Year: <strong className="text-neutral-900">{member.usedNightsThisYear} Nights</strong></div>
                <div>Annual Allocation: <strong className="text-neutral-900">{member.annualNights} Nights</strong></div>
              </div>
            </div>

            <form onSubmit={handleAdjustSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-neutral-700 font-bold uppercase tracking-wider block mb-1">
                  Adjustment Value (Nights)
                </label>
                <select
                  value={adjustNightsVal}
                  onChange={(e) => setAdjustNightsVal(Number(e.target.value))}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 font-bold"
                >
                  <option value={1}>+1 Bonus / Courtesy Holiday Night</option>
                  <option value={2}>+2 Bonus Holiday Nights</option>
                  <option value={3}>+3 Restoration Nights (Cancellation Refund)</option>
                  <option value={-1}>-1 Night Manual Correction</option>
                  <option value={-2}>-2 Nights Manual Correction</option>
                </select>
              </div>

              <div>
                <label className="text-neutral-700 font-bold uppercase tracking-wider block mb-1">
                  Reason & Audit Justification *
                </label>
                <textarea
                  rows={2}
                  required
                  value={adjustReason}
                  onChange={(e) => setAdjustReason(e.target.value)}
                  placeholder="Explain why this adjustment is being made (will appear on member ledger)..."
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#15803D] hover:bg-[#166534] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Record Entitlement Adjustment</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: Resort Portfolio */}
        {activeTab === 'resorts' && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  Resort Network & Partner Inventory (240+ Properties)
                </h3>
                <p className="text-xs text-neutral-500">
                  Verified partner properties spanning Coorg, Munnar, Andaman, Goa, Manali, Udaipur, Bali, and Maldives.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resorts.map((resort) => (
                <div key={resort.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs p-4 flex flex-col justify-between">
                  <div className="flex gap-3">
                    <img
                      src={resort.coverImage}
                      alt={resort.name}
                      className="w-20 h-20 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-bold text-[#15803D]">{resort.category}</div>
                      <div className="text-xs font-bold text-neutral-900 line-clamp-1">{resort.name}</div>
                      <div className="text-[11px] text-neutral-500">{resort.location}</div>
                      <div className="text-[10px] text-[#15803D] font-semibold">Status: Active & Available</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-500">{resort.roomTypes.length} Room Types</span>
                    <button
                      onClick={() => alert(`Property rates drawer opened for ${resort.name}`)}
                      className="text-[#15803D] hover:underline font-bold"
                    >
                      Manage Rates
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
