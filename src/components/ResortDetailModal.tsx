import React from 'react';
import { Resort } from '../types';
import { X, Star, MapPin, Check, Clock, Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface ResortDetailModalProps {
  resort: Resort | null;
  onClose: () => void;
  onRequestStay: (resort: Resort) => void;
  onEnquireResort: (resort: Resort) => void;
}

export const ResortDetailModal: React.FC<ResortDetailModalProps> = ({
  resort,
  onClose,
  onRequestStay,
  onEnquireResort
}) => {
  if (!resort) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Modal Top Bar with Image & Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
          <img
            src={resort.coverImage}
            alt={resort.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Location Overlay */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex items-center gap-2 text-xs font-bold text-[#4ade80] tracking-wider uppercase">
              <span>{resort.category}</span>
              <span aria-hidden="true">·</span>
              <div className="flex items-center text-amber-300">
                {[...Array(resort.starRating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mt-1">
              {resort.name}
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#4ade80]" />
              {resort.location}, {resort.country}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Resort Overview & Experience
            </h4>
            <p className="text-sm text-neutral-700 font-light leading-relaxed mt-1.5">
              {resort.description}
            </p>
          </div>

          {/* Room Categories */}
          <div>
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
              Included Room Categories & Suites
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {resort.roomTypes.map((room) => (
                <div
                  key={room.id}
                  className="p-4 rounded-xl border border-neutral-200 bg-emerald-50/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-neutral-900">{room.name}</span>
                      {room.upgradeFeePerNightINR === 0 ? (
                        <span className="text-[11px] font-bold text-[#15803D] bg-emerald-100 px-2 py-0.5 rounded">
                          Included in Tier
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-neutral-700 font-tabular">
                          +₹{room.upgradeFeePerNightINR.toLocaleString('en-IN')}/nt upgrade
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{room.description}</p>
                    <div className="mt-2 text-[11px] text-neutral-500 font-medium">
                      Standard Occupancy: {room.capacity.adults} Adults, {room.capacity.children} Children
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-emerald-100 flex flex-wrap gap-1.5 text-[11px] text-neutral-600">
                    {room.amenities.map((a, i) => (
                      <span key={i} className="inline-block bg-white px-2 py-0.5 rounded border border-neutral-200">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities & Features */}
          <div>
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
              Resort Amenities & Inclusions
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-neutral-700">
              {resort.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Check-in Policies & Attractions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100 text-xs text-neutral-600">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#15803D] shrink-0" />
              <div>
                <span className="font-bold text-neutral-900">Check-in / Check-out: </span>
                {resort.checkInTime} / {resort.checkOutTime}
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-neutral-900">Nearby Highlights: </span>
              <span className="text-neutral-600">{resort.nearbyAttractions.join(' · ')}</span>
            </div>
          </div>

          {/* Membership Tier Access Note */}
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#15803D] shrink-0" />
              <div className="text-xs text-[#15803D]">
                <span className="font-bold">Eligible Memberships: </span>
                <span>{resort.eligiblePlans.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex flex-wrap items-center justify-end gap-3 shrink-0">
          <button
            onClick={() => {
              onEnquireResort(resort);
              onClose();
            }}
            className="px-4 py-2 text-xs font-bold text-neutral-700 hover:text-[#15803D] border border-neutral-300 rounded-lg bg-white hover:bg-neutral-100 transition-colors"
          >
            Enquire as Non-Member
          </button>
          <button
            onClick={() => {
              onRequestStay(resort);
              onClose();
            }}
            className="px-5 py-2 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Request Member Booking</span>
          </button>
        </div>
      </div>
    </div>
  );
};
