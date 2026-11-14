import React, { useState } from 'react';
import {
  MemberUser,
  BookingRequest,
  EntitlementLedgerEntry,
  Resort,
  SupportTicket
} from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import {
  Calendar,
  CreditCard,
  QrCode,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  FileText,
  UserPlus,
  Users,
  Wallet,
  Download,
  Plus,
  ChevronRight,
  MapPin,
  Send
} from 'lucide-react';

interface MemberPortalViewProps {
  member: MemberUser;
  resorts: Resort[];
  bookings: BookingRequest[];
  ledger: EntitlementLedgerEntry[];
  supportTickets: SupportTicket[];
  onSubmitBooking: (newBooking: BookingRequest) => void;
  onAddLedgerEntry: (entry: EntitlementLedgerEntry) => void;
  onCreateTicket: (ticket: SupportTicket) => void;
  preselectedResort?: Resort | null;
}

export const MemberPortalView: React.FC<MemberPortalViewProps> = ({
  member,
  resorts,
  bookings,
  ledger,
  supportTickets,
  onSubmitBooking,
  onAddLedgerEntry,
  onCreateTicket,
  preselectedResort
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'book-holiday' | 'bookings' | 'ledger' | 'family' | 'support'>('dashboard');

  // Booking Form State
  const [selectedResortId, setSelectedResortId] = useState<string>(preselectedResort?.id || resorts[0]?.id || '');
  const [checkIn, setCheckIn] = useState<string>('2026-12-15');
  const [checkOut, setCheckOut] = useState<string>('2026-12-18');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(2);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [bookingSuccessRef, setBookingSuccessRef] = useState<string | null>(null);

  // Digital Card Flip State
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Voucher Preview Modal State
  const [viewingVoucher, setViewingVoucher] = useState<BookingRequest | null>(null);

  // New Ticket State
  const [ticketCategory, setTicketCategory] = useState<SupportTicket['category']>('Booking Assistance');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [ticketSuccess, setTicketSuccess] = useState(false);

  // Current selected resort object
  const currentResort = resorts.find((r) => r.id === selectedResortId) || resorts[0];

  // Calculate nights
  const calculateNights = (start: string, end: string) => {
    const d1 = new Date(start);
    const d2 = new Date(end);
    const diffTime = d2.getTime() - d1.getTime();
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 1;
  };

  const calculatedNights = calculateNights(checkIn, checkOut);
  const hasEnoughNights = member.remainingNights >= calculatedNights;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasEnoughNights) {
      alert(`You only have ${member.remainingNights} night(s) remaining this year. Request requires ${calculatedNights} night(s).`);
      return;
    }

    const refNo = `MYH-RES-${Math.floor(2000 + Math.random() * 8000)}`;
    const selectedRoom = currentResort.roomTypes.find((r) => r.id === selectedRoomId) || currentResort.roomTypes[0];
    const addCharge = selectedRoom.upgradeFeePerNightINR * calculatedNights;

    const newBooking: BookingRequest = {
      id: `bkg-${Date.now()}`,
      referenceNumber: refNo,
      memberId: member.id,
      memberName: member.name,
      memberEmail: member.email,
      memberPhone: member.phone,
      resortId: currentResort.id,
      resortName: currentResort.name,
      resortLocation: `${currentResort.location}, ${currentResort.country}`,
      resortImage: currentResort.coverImage,
      roomCategory: selectedRoom.name,
      checkIn,
      checkOut,
      nights: calculatedNights,
      guests: { adults, children },
      status: 'Requested',
      entitlementDeducted: calculatedNights,
      additionalChargesINR: addCharge,
      specialRequests: specialRequests || 'None',
      createdDate: new Date().toISOString().split('T')[0]
    };

    // Deduct from entitlement ledger
    const newEntry: EntitlementLedgerEntry = {
      id: `ent-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Booking Deduction',
      nights: -calculatedNights,
      balanceAfter: member.remainingNights - calculatedNights,
      referenceId: refNo,
      description: `Reservation request for ${calculatedNights} night(s) at ${currentResort.name}`
    };

    onSubmitBooking(newBooking);
    onAddLedgerEntry(newEntry);
    setBookingSuccessRef(refNo);
  };

  const handleCreateTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMessage) return;

    const newTicket: SupportTicket = {
      id: `tkt-${Date.now()}`,
      ticketNo: `MYH-TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      category: ticketCategory,
      subject: ticketSubject,
      status: 'Open',
      priority: 'High',
      createdDate: new Date().toISOString().split('T')[0],
      messages: [
        { sender: 'member', text: ticketMessage, time: 'Just now' }
      ]
    };

    onCreateTicket(newTicket);
    setTicketSubject('');
    setTicketMessage('');
    setTicketSuccess(true);
    setTimeout(() => setTicketSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Member Top Bar: Identity & Entitlement Banner in myholidayz.in Green */}
        <div className="bg-gradient-to-r from-[#15803D] to-[#166534] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-200">
                Official Member Portal · myholidayz.in
              </span>
              <span className="text-white/30">·</span>
              <span className="bg-white/20 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                {member.status}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Welcome back, {member.name}
            </h1>

            <p className="text-xs text-emerald-100">
              Membership ID: <span className="font-tabular font-bold text-white">{member.membershipId}</span> · {member.planName} (Valid until {member.expiryDate})
            </p>
          </div>

          {/* Entitlement Balance Pill Counter */}
          <div className="flex items-center gap-4 bg-black/20 backdrop-blur-xs p-4 rounded-xl border border-white/20">
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#4ade80] font-tabular">
                {member.remainingNights}
              </div>
              <div className="text-[11px] text-emerald-100 font-semibold">Available Nights</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-tabular">
                {member.usedNightsThisYear}
              </div>
              <div className="text-[11px] text-emerald-100 font-semibold">Used This Year</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-200 font-tabular">
                {member.annualNights}
              </div>
              <div className="text-[11px] text-emerald-100 font-semibold">Annual Quota</div>
            </div>
          </div>
        </div>

        {/* Member Navigation Tabs */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 border-b border-emerald-100">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'dashboard'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            Overview & Digital Card
          </button>
          <button
            onClick={() => setActiveTab('book-holiday')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'book-holiday'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Request Holiday Stay
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'bookings'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            My Stays ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('ledger')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'ledger'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            Entitlement Ledger
          </button>
          <button
            onClick={() => setActiveTab('family')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'family'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            Authorized Travellers
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'support'
                ? 'bg-[#15803D] text-white shadow-xs'
                : 'text-neutral-700 hover:text-[#15803D] hover:bg-emerald-50'
            }`}
          >
            Concierge Support
          </button>
        </div>

        {/* Tab 1: Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Digital Membership Card with MyHoliday logo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                <span>Official Digital Membership Card</span>
                <span className="text-[11px] text-neutral-400 font-normal">Click to flip</span>
              </div>

              {/* Interactive Flip Card */}
              <div
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className="relative h-60 w-full rounded-2xl cursor-pointer perspective-1000 group transition-all"
              >
                {!isCardFlipped ? (
                  /* Card Front */
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#15803D] via-[#166534] to-[#0F172A] p-6 text-white shadow-xl border border-emerald-400/30 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="bg-white p-1.5 rounded-md inline-block shadow-sm">
                        <img
                          src={COMPANY_CONTACT.logoPath}
                          alt="MyHoliday Logo"
                          className="h-7 w-auto object-contain"
                        />
                      </div>

                      <div className="text-right">
                        <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-[#DC2626] text-white uppercase tracking-wider shadow-xs">
                          {member.loyaltyLevel} Tier
                        </span>
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-[10px] text-emerald-200 uppercase tracking-wider font-semibold">Membership Number</div>
                      <div className="text-lg font-mono tracking-widest text-white font-extrabold">
                        {member.membershipId}
                      </div>
                    </div>

                    <div className="flex items-end justify-between pt-2 border-t border-emerald-400/20">
                      <div>
                        <div className="text-[10px] text-emerald-200 uppercase font-semibold">Primary Member</div>
                        <div className="text-sm font-bold text-white">{member.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-emerald-200 uppercase font-semibold">Valid Thru</div>
                        <div className="text-xs font-bold font-tabular text-[#4ade80]">{member.expiryDate}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Card Back with QR */
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#15803D] p-6 text-white shadow-xl border border-white/20 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-300 font-semibold">Digital Check-in Gatepass</span>
                      <span className="text-[#4ade80] font-mono font-bold">VERIFIED</span>
                    </div>

                    <div className="flex items-center gap-5 justify-center py-2">
                      <div className="p-2.5 bg-white rounded-lg">
                        <QrCode className="w-20 h-20 text-[#15803D]" />
                      </div>
                      <div className="text-xs space-y-1 text-neutral-200">
                        <div><strong className="text-white">Active Nights:</strong> {member.remainingNights} Remaining</div>
                        <div><strong className="text-white">Authorized Adults:</strong> 2</div>
                        <div><strong className="text-white">Club Desk:</strong> +91 73533 33701</div>
                        <div className="text-[10px] text-emerald-300 pt-1">Scan at resort reception for VIP privileges</div>
                      </div>
                    </div>

                    <div className="text-[10px] text-center text-neutral-300 border-t border-white/10 pt-2">
                      Bengaluru Office: No. 19/1, Chetana Tower, Infantry Rd Cross · myholidayz.in
                    </div>
                  </div>
                )}
              </div>

              {/* Wallet & Rewards Card */}
              <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#15803D] flex items-center justify-center">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900">Member Wallet Credits</div>
                    <div className="text-[11px] text-neutral-500">
                      ₹{member.walletBalanceINR.toLocaleString('en-IN')} Credits · {member.loyaltyPoints} Rewards
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => alert("Wallet credits can be applied toward room category upgrades or airport transfers.")}
                  className="px-3 py-1.5 text-[11px] font-bold text-[#15803D] hover:bg-emerald-50 border border-emerald-200 rounded-md transition-colors"
                >
                  Manage
                </button>
              </div>
            </div>

            {/* Right: Upcoming Reservations */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-neutral-900">
                  Active & Upcoming Stays
                </h3>
                <button
                  onClick={() => setActiveTab('book-holiday')}
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Book New Stay</span>
                </button>
              </div>

              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={booking.resortImage}
                        alt={booking.resortName}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                              booking.status === 'Confirmed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : booking.status === 'Requested'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-neutral-100 text-neutral-700'
                            }`}
                          >
                            {booking.status}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono font-medium">
                            {booking.referenceNumber}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-neutral-900 mt-1">
                          {booking.resortName}
                        </h4>

                        <div className="text-xs text-neutral-500 mt-0.5 flex items-center gap-2">
                          <span className="font-tabular font-medium text-neutral-700">
                            {booking.checkIn} to {booking.checkOut}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{booking.nights} Nights ({booking.roomCategory})</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      {booking.voucherNumber ? (
                        <button
                          onClick={() => setViewingVoucher(booking)}
                          className="px-3 py-1.5 text-xs font-bold text-[#15803D] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors flex items-center gap-1.5"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>View Voucher</span>
                        </button>
                      ) : (
                        <span className="text-[11px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 font-medium">
                          Awaiting Resort Confirmation
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Book Holiday Request */}
        {activeTab === 'book-holiday' && (
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs">
            {bookingSuccessRef ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#15803D] uppercase tracking-wider">
                    Reservation Request Logged
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Reference: {bookingSuccessRef}
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-lg mx-auto pt-2">
                    Your booking request has been assigned to our Bengaluru Reservation Desk. We verify inventory directly with {currentResort.name} and send your voucher to your email and WhatsApp within 2 hours.
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setBookingSuccessRef(null);
                      setActiveTab('bookings');
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#15803D] rounded-lg hover:bg-[#166534] transition-colors"
                  >
                    View in My Stays
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
                    Reservation Desk
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                    Book Your Next Member Holiday
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    Choose from 1,000+ verified properties across 195 countries worldwide. Nights will be deducted from your remaining balance of {member.remainingNights} night(s).
                  </p>
                </div>

                {/* Step 1: Select Resort */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    1. Choose Resort Property
                  </label>
                  <select
                    value={selectedResortId}
                    onChange={(e) => {
                      setSelectedResortId(e.target.value);
                      setSelectedRoomId('');
                    }}
                    className="w-full text-xs font-semibold bg-neutral-50 border border-neutral-300 rounded-lg p-3 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                  >
                    {resorts.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} — {r.location}, {r.country} ({r.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 2: Dates & Party */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider block mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-xs bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider block mb-1">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-xs bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider block mb-1">
                      Adults
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full text-xs bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults (Member Base)</option>
                      <option value={3}>3 Adults (+ Extra Bed)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider block mb-1">
                      Children (&lt;12)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full text-xs bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    >
                      <option value={0}>0 Children</option>
                      <option value={1}>1 Child</option>
                      <option value={2}>2 Children</option>
                    </select>
                  </div>
                </div>

                {/* Step 3: Room Category Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    2. Select Room Type at {currentResort.name}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentResort.roomTypes.map((room) => {
                      const isSelected = selectedRoomId === room.id || (!selectedRoomId && room.upgradeFeePerNightINR === 0);
                      return (
                        <div
                          key={room.id}
                          onClick={() => setSelectedRoomId(room.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#15803D] bg-emerald-50/60 ring-2 ring-[#15803D]/30'
                              : 'border-neutral-200 bg-white hover:border-neutral-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-neutral-900">{room.name}</span>
                            {room.upgradeFeePerNightINR === 0 ? (
                              <span className="text-[10px] font-bold text-[#15803D] bg-emerald-100 px-2 py-0.5 rounded">
                                Included in Tier
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold text-neutral-700 font-tabular">
                                +₹{room.upgradeFeePerNightINR.toLocaleString('en-IN')}/nt
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-neutral-600 mt-1">{room.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Entitlement Verification Box */}
                <div className={`p-4 rounded-xl border ${hasEnoughNights ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                  <div className="flex items-start gap-3">
                    {hasEnoughNights ? (
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div className="text-xs space-y-1">
                      <div className="font-bold text-neutral-900">
                        Entitlement Deduction: {calculatedNights} Night(s) Required
                      </div>
                      <div className="text-neutral-600">
                        Available Balance: <strong className="font-tabular font-bold text-[#15803D]">{member.remainingNights} Nights</strong>. Balance after confirmation: <strong className="font-tabular font-bold text-neutral-900">{member.remainingNights - calculatedNights} Nights</strong>.
                      </div>
                      {!hasEnoughNights && (
                        <div className="text-red-700 font-bold">
                          Insufficient nights remaining. Please select shorter dates or contact support.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider block mb-1">
                    Special Requests
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Valley view cottage, quiet room, late check-in..."
                    className="w-full text-xs bg-neutral-50 border border-neutral-300 rounded-lg p-3 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!hasEnoughNights}
                    className="w-full py-3.5 px-6 bg-[#DC2626] hover:bg-[#b91c1c] disabled:bg-neutral-300 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Holiday Booking Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Tab 3: Stays & Bookings History */}
        {activeTab === 'bookings' && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-neutral-900">
                Reservation History
              </h3>
              <span className="text-xs text-neutral-500 font-semibold font-tabular">
                {bookings.length} Total Bookings
              </span>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-4 font-bold text-neutral-700">Ref #</th>
                      <th className="py-3 px-4 font-bold text-neutral-700">Resort</th>
                      <th className="py-3 px-4 font-bold text-neutral-700">Travel Dates</th>
                      <th className="py-3 px-4 font-bold text-neutral-700">Nights</th>
                      <th className="py-3 px-4 font-bold text-neutral-700">Guests</th>
                      <th className="py-3 px-4 font-bold text-neutral-700">Status</th>
                      <th className="py-3 px-4 font-bold text-neutral-700 text-right">Voucher</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {bookings.map((b) => (
                      <tr key={b.id} className="hover:bg-neutral-50/60">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#15803D]">{b.referenceNumber}</td>
                        <td className="py-3.5 px-4 font-semibold text-neutral-900">{b.resortName}</td>
                        <td className="py-3.5 px-4 font-tabular text-neutral-600">{b.checkIn} to {b.checkOut}</td>
                        <td className="py-3.5 px-4 font-tabular font-bold text-neutral-900">{b.nights}</td>
                        <td className="py-3.5 px-4 text-neutral-600">{b.guests.adults}A, {b.guests.children}C</td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                              b.status === 'Confirmed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : b.status === 'Requested'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-neutral-100 text-neutral-700'
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          {b.voucherNumber ? (
                            <button
                              onClick={() => setViewingVoucher(b)}
                              className="text-xs text-[#15803D] hover:underline font-bold"
                            >
                              View Voucher
                            </button>
                          ) : (
                            <span className="text-[11px] text-neutral-400">Processing</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Entitlement Ledger */}
        {activeTab === 'ledger' && (
          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  Holiday Entitlement Ledger
                </h3>
                <p className="text-xs text-neutral-500">
                  Transparent digital ledger recording annual allocations, stay deductions, and courtesy credits.
                </p>
              </div>

              <div className="bg-[#15803D] text-white px-4 py-2 rounded-lg text-xs flex items-center gap-3 shadow-xs">
                <span className="text-emerald-100">Live Balance:</span>
                <span className="font-extrabold text-[#4ade80] font-tabular text-sm">
                  {member.remainingNights} Nights Available
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-4 font-bold text-neutral-700">Date</th>
                      <th className="py-3 px-4 font-bold text-neutral-700">Transaction Type</th>
                      <th className="py-3 px-4 font-bold text-neutral-700">Reference ID</th>
                      <th className="py-3 px-4 font-bold text-neutral-700">Description</th>
                      <th className="py-3 px-4 font-bold text-neutral-700 text-center">Nights</th>
                      <th className="py-3 px-4 font-bold text-neutral-700 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 font-tabular">
                    {ledger.map((entry) => (
                      <tr key={entry.id} className="hover:bg-neutral-50/60">
                        <td className="py-3 px-4 text-neutral-600">{entry.date}</td>
                        <td className="py-3 px-4 font-bold text-neutral-900">{entry.type}</td>
                        <td className="py-3 px-4 font-mono text-neutral-500">{entry.referenceId || '—'}</td>
                        <td className="py-3 px-4 text-neutral-600 font-sans">{entry.description}</td>
                        <td className="py-3 px-4 text-center font-bold">
                          <span className={entry.nights > 0 ? 'text-[#15803D]' : 'text-[#DC2626]'}>
                            {entry.nights > 0 ? `+${entry.nights}` : entry.nights}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-extrabold text-neutral-900">{entry.balanceAfter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Family & Authorized Guests */}
        {activeTab === 'family' && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  Authorized Family & Travellers
                </h3>
                <p className="text-xs text-neutral-500">
                  Authorized guests entitled to check in and enjoy member stays.
                </p>
              </div>
              <button
                onClick={() => alert("Family member added. Verification documents can be uploaded for instant gatepass.")}
                className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Add Family Member</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {member.familyMembers.map((fam, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-900">{fam.name}</span>
                    <span className="text-[10px] font-bold text-[#15803D] bg-emerald-50 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  </div>
                  <div className="text-xs text-neutral-600">
                    Relation: {fam.relation} · Age: {fam.age} yrs
                  </div>
                  <div className="pt-2 text-[11px] text-neutral-400">
                    Authorized for hotel check-in & buffet passes
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Concierge Support */}
        {activeTab === 'support' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-neutral-900">
                Submit Support Ticket
              </h3>
              <p className="text-xs text-neutral-500">
                Direct desk for booking modifications, airport transfers, or queries.
              </p>

              {ticketSuccess && (
                <div className="p-3 bg-emerald-50 text-[#15803D] text-xs font-bold rounded-lg border border-emerald-200">
                  Ticket logged successfully. Bengaluru concierge team will respond shortly.
                </div>
              )}

              <form onSubmit={handleCreateTicketSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-neutral-600 uppercase block mb-1">
                    Category
                  </label>
                  <select
                    value={ticketCategory}
                    onChange={(e) => setTicketCategory(e.target.value as any)}
                    className="w-full text-xs bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                  >
                    <option value="Booking Assistance">Booking Assistance / Modification</option>
                    <option value="Entitlement Query">Entitlement Query / Carry Forward</option>
                    <option value="Payment / Installment">Payment / Installment Inquiry</option>
                    <option value="Resort Information">Resort Information & Weather</option>
                    <option value="Membership Upgrade">Membership Upgrade</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-neutral-600 uppercase block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="Brief summary of request..."
                    className="w-full text-xs bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-neutral-600 uppercase block mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={ticketMessage}
                    onChange={(e) => setTicketMessage(e.target.value)}
                    placeholder="Describe your query in detail..."
                    className="w-full text-xs bg-neutral-50 border border-neutral-300 rounded-lg p-2 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                >
                  Submit Ticket
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-neutral-900">
                Your Support History
              </h3>

              <div className="space-y-3">
                {supportTickets.map((tkt) => (
                  <div key={tkt.id} className="p-4 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#15803D]">{tkt.ticketNo}</span>
                        <span className="text-[11px] font-bold text-[#15803D] bg-emerald-50 px-2 py-0.5 rounded">
                          {tkt.category}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                        {tkt.status}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-neutral-800">{tkt.subject}</div>

                    <div className="space-y-2 pt-2 border-t border-neutral-100">
                      {tkt.messages.map((m, idx) => (
                        <div
                          key={idx}
                          className={`p-2.5 rounded-lg text-xs ${
                            m.sender === 'support' ? 'bg-emerald-50 text-emerald-900' : 'bg-neutral-50 text-neutral-700'
                          }`}
                        >
                          <div className="text-[10px] font-bold uppercase text-neutral-400 mb-0.5">
                            {m.sender === 'support' ? 'Bengaluru Concierge Desk' : 'You'} · {m.time}
                          </div>
                          <div>{m.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Official Confirmation Voucher Modal */}
      {viewingVoucher && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-6">
            <div className="p-6 bg-[#15803D] text-white flex items-center justify-between">
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
                    Official Booking Voucher
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Voucher #{viewingVoucher.voucherNumber}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setViewingVoucher(null)}
                className="text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-neutral-700">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-200">
                <div>
                  <span className="font-bold text-neutral-900 block">Resort Property:</span>
                  <span className="font-semibold text-[#15803D]">{viewingVoucher.resortName}</span>
                  <div className="text-neutral-500 text-[11px]">{viewingVoucher.resortLocation}</div>
                </div>
                <div>
                  <span className="font-bold text-neutral-900 block">Primary Guest:</span>
                  <span>{viewingVoucher.memberName} ({viewingVoucher.memberPhone})</span>
                  <div className="text-neutral-500 text-[11px]">{viewingVoucher.memberEmail}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 font-tabular">
                <div>
                  <span className="text-neutral-500 block text-[11px]">Check-In</span>
                  <span className="font-bold text-[#15803D]">{viewingVoucher.checkIn}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[11px]">Check-Out</span>
                  <span className="font-bold text-[#15803D]">{viewingVoucher.checkOut}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[11px]">Stay Duration</span>
                  <span className="font-bold text-neutral-900">{viewingVoucher.nights} Nights</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-neutral-900 block">Room Category & Entitlement Inclusions:</span>
                <div>{viewingVoucher.roomCategory} with Complimentary Buffet Breakfast for {viewingVoucher.guests.adults} Adults and {viewingVoucher.guests.children} Children.</div>
              </div>

              {viewingVoucher.specialRequests && (
                <div className="space-y-1">
                  <span className="font-bold text-neutral-900 block">Special Arrangements:</span>
                  <div className="text-neutral-600">{viewingVoucher.specialRequests}</div>
                </div>
              )}

              <div className="p-3 bg-neutral-100 rounded-lg text-[11px] text-neutral-500">
                Please present photo ID and this confirmed voucher at the resort reception. Issued by MyHoliday (myholidayz.in), Bengaluru.
              </div>
            </div>

            <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex justify-end gap-3">
              <button
                onClick={() => alert(`Voucher #${viewingVoucher.voucherNumber} sent to ${viewingVoucher.memberEmail} and WhatsApp (+91 73533 33701).`)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF Voucher</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
