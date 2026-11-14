import React, { useState } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import {
  AppMode,
  MembershipPlan,
  Resort,
  MemberUser,
  BookingRequest,
  EntitlementLedgerEntry,
  Lead,
  HolidayPackage,
  SupportTicket
} from './types';
import {
  COMPANY_CONTACT,
  MEMBERSHIP_PLANS,
  INITIAL_RESORTS,
  INITIAL_MEMBER,
  INITIAL_ENTITLEMENT_LEDGER,
  INITIAL_BOOKINGS,
  INITIAL_LEADS,
  HOLIDAY_PACKAGES,
  INITIAL_SUPPORT_TICKETS
} from './data/mockData';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MembershipPlans } from './components/MembershipPlans';
import { MembershipComparisonModal } from './components/MembershipComparisonModal';
import { ResortExplorer } from './components/ResortExplorer';
import { ResortDetailModal } from './components/ResortDetailModal';
import { HowMembershipWorks } from './components/HowMembershipWorks';
import { CustomHolidayForm } from './components/CustomHolidayForm';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { MemberPortalView } from './components/MemberPortalView';
import { SalesCRMView } from './components/SalesCRMView';
import { AdminOperationsView } from './components/AdminOperationsView';
import { AIHolidayPlannerView } from './components/AIHolidayPlannerView';
import { DestinationCatalogues } from './components/DestinationCatalogues';
import { EnquiryModal } from './components/EnquiryModal';
import { Footer } from './components/Footer';

export function App() {
  // Navigation & Platform View State
  const [currentMode, setCurrentMode] = useState<AppMode>('website');

  // Core Business Entities State
  const [plans, setPlans] = useState<MembershipPlan[]>(MEMBERSHIP_PLANS);
  const [resorts, setResorts] = useState<Resort[]>(INITIAL_RESORTS);
  const [member, setMember] = useState<MemberUser>(INITIAL_MEMBER);
  const [bookings, setBookings] = useState<BookingRequest[]>(INITIAL_BOOKINGS);
  const [ledger, setLedger] = useState<EntitlementLedgerEntry[]>(INITIAL_ENTITLEMENT_LEDGER);
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [packages, setPackages] = useState<HolidayPackage[]>(HOLIDAY_PACKAGES);
  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>(INITIAL_SUPPORT_TICKETS);

  // Modals & Overlays State
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalPlan, setEnquiryModalPlan] = useState<string>('Purple Membership (5 Years)');
  const [selectedResortForDetail, setSelectedResortForDetail] = useState<Resort | null>(null);
  const [bookingPrefillResort, setBookingPrefillResort] = useState<Resort | null>(null);
  const [heroSearchCriteria, setHeroSearchCriteria] = useState<{ destination: string; category: string }>({ destination: '', category: '' });

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Business Action Handlers
  const handleAddLead = (newLead: Lead) => {
    setLeads((prev) => [newLead, ...prev]);
    showToast(`Enquiry ${newLead.enquiryNumber} recorded in Sales CRM pipeline.`);
  };

  const handleUpdateLead = (updatedLead: Lead) => {
    setLeads((prev) => prev.map((l) => (l.id === updatedLead.id ? updatedLead : l)));
    showToast(`Lead ${updatedLead.name} updated to ${updatedLead.status}.`);
  };

  const handleSubmitBooking = (newBooking: BookingRequest) => {
    setBookings((prev) => [newBooking, ...prev]);
    setMember((prev) => ({
      ...prev,
      remainingNights: prev.remainingNights - newBooking.nights,
      usedNightsThisYear: prev.usedNightsThisYear + newBooking.nights
    }));
    showToast(`Reservation request ${newBooking.referenceNumber} submitted successfully.`);
  };

  const handleAddLedgerEntry = (newEntry: EntitlementLedgerEntry) => {
    setLedger((prev) => [newEntry, ...prev]);
  };

  const handleConfirmBooking = (bookingId: string, voucherNumber: string) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === bookingId
          ? {
              ...b,
              status: 'Confirmed',
              voucherNumber,
              confirmationDate: new Date().toISOString().split('T')[0]
            }
          : b
      )
    );
    showToast(`Booking confirmed! Voucher #${voucherNumber} generated.`);
  };

  const handleRejectBooking = (bookingId: string) => {
    const targetBooking = bookings.find((b) => b.id === bookingId);
    if (!targetBooking) return;

    // Restore entitlement nights as per PRD Section 18
    setMember((prev) => ({
      ...prev,
      remainingNights: prev.remainingNights + targetBooking.nights,
      usedNightsThisYear: Math.max(0, prev.usedNightsThisYear - targetBooking.nights)
    }));

    const restorationEntry: EntitlementLedgerEntry = {
      id: `ent-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Cancellation Restored',
      nights: targetBooking.nights,
      balanceAfter: member.remainingNights + targetBooking.nights,
      referenceId: targetBooking.referenceNumber,
      description: `Restored ${targetBooking.nights} night(s) for rejected reservation at ${targetBooking.resortName}`
    };

    setLedger((prev) => [restorationEntry, ...prev]);

    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: 'Cancelled' } : b))
    );
    showToast(`Booking cancelled. ${targetBooking.nights} night(s) restored to member ledger.`);
  };

  const handleAdminAdjustNights = (nights: number, reason: string) => {
    const newBal = member.remainingNights + nights;
    setMember((prev) => ({
      ...prev,
      remainingNights: newBal
    }));

    const adjEntry: EntitlementLedgerEntry = {
      id: `ent-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Admin Adjustment',
      nights,
      balanceAfter: newBal,
      referenceId: `ADJ-${Math.floor(100 + Math.random() * 900)}`,
      description: reason
    };

    setLedger((prev) => [adjEntry, ...prev]);
    showToast(`Member ledger updated: ${nights > 0 ? `+${nights}` : nights} night(s).`);
  };

  const handleCreateTicket = (newTicket: SupportTicket) => {
    setSupportTickets((prev) => [newTicket, ...prev]);
    showToast(`Ticket ${newTicket.ticketNo} submitted to concierge desk.`);
  };

  // Navigational Helpers
  const handleOpenPlanEnquiry = (plan?: MembershipPlan) => {
    setEnquiryModalPlan(plan ? plan.name : 'Purple Membership (5 Years)');
    setIsEnquiryModalOpen(true);
  };

  const handleRequestStayDirect = (resort: Resort) => {
    setBookingPrefillResort(resort);
    setCurrentMode('member-portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Opening Member Reservation Desk for ${resort.name}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] flex flex-col font-sans text-[#0F172A]">
      {/* Universal Top Header with Navigation & Mode Switcher */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => {
          setCurrentMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenEnquiry={(planName) => {
          setEnquiryModalPlan(planName || 'Purple Membership (5 Years)');
          setIsEnquiryModalOpen(true);
        }}
        onOpenLogin={() => {
          setCurrentMode('member-portal');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        memberInitials="RM"
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#0F172A] text-white text-xs font-medium py-3 px-4 rounded-xl shadow-xl border border-emerald-500/30 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#15803D]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Area based on Mode */}
      <main className="flex-1">
        {currentMode === 'website' && (
          <>
            {/* 1. Hero with Photography, Discovery Bar & Proof Metrics */}
            <Hero
              onExplorePlans={() => {
                const el = document.getElementById('membership-plans-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onExploreResorts={() => {
                const el = document.getElementById('resorts-explorer-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onSearch={(criteria) => {
                setHeroSearchCriteria(criteria);
              }}
            />

            {/* 2. Featured Membership Plans (Section 6.3 PRD) */}
            <MembershipPlans
              plans={plans}
              onSelectPlan={(plan) => handleOpenPlanEnquiry(plan)}
              onOpenComparison={() => setIsComparisonModalOpen(true)}
            />

            {/* 3. How Membership Works & Flexibility (Section 7 PRD) */}
            <HowMembershipWorks
              onExplorePlans={() => {
                const el = document.getElementById('membership-plans-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 4. Resort Discovery Explorer (Section 6.6 PRD) */}
            <ResortExplorer
              resorts={resorts}
              onSelectResort={(resort) => setSelectedResortForDetail(resort)}
              onRequestStay={(resort) => handleRequestStayDirect(resort)}
              initialFilter={heroSearchCriteria}
            />

            {/* Official Destination Catalogues & Master Themes */}
            <DestinationCatalogues
              onOpenEnquiry={(targetName) => {
                setEnquiryModalPlan(targetName || 'Purple Membership (5 Years)');
                setIsEnquiryModalOpen(true);
              }}
            />

            {/* 6. Customized Holiday & Membership Enquiry Form (Section 6.10 PRD) */}
            <CustomHolidayForm
              onAddLead={handleAddLead}
              prefilledPlan="Purple Membership (5 Years)"
              prefilledDestination={heroSearchCriteria.destination || 'Goa & Coastal Escapes'}
            />

            {/* 7. Testimonials & Frequently Asked Questions (Section 6.1 PRD) */}
            <TestimonialsFAQ />
          </>
        )}

        {currentMode === 'member-portal' && (
          <MemberPortalView
            member={member}
            resorts={resorts}
            bookings={bookings}
            ledger={ledger}
            supportTickets={supportTickets}
            onSubmitBooking={handleSubmitBooking}
            onAddLedgerEntry={handleAddLedgerEntry}
            onCreateTicket={handleCreateTicket}
            preselectedResort={bookingPrefillResort}
          />
        )}

        {currentMode === 'sales-crm' && (
          <SalesCRMView
            leads={leads}
            onUpdateLead={handleUpdateLead}
            onAddLead={handleAddLead}
          />
        )}

        {currentMode === 'admin' && (
          <AdminOperationsView
            bookings={bookings}
            member={member}
            resorts={resorts}
            onConfirmBooking={handleConfirmBooking}
            onRejectBooking={handleRejectBooking}
            onAdminAdjustNights={handleAdminAdjustNights}
          />
        )}

        {currentMode === 'ai-planner' && (
          <AIHolidayPlannerView
            resorts={resorts}
            plans={plans}
            member={member}
            onRequestResort={(resort) => handleRequestStayDirect(resort)}
            onSelectPlan={(plan) => handleOpenPlanEnquiry(plan)}
            onBackToWebsite={() => {
              setCurrentMode('website');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Global Modals */}
      <MembershipComparisonModal
        isOpen={isComparisonModalOpen}
        onClose={() => setIsComparisonModalOpen(false)}
        plans={plans}
        onSelectPlan={(p) => handleOpenPlanEnquiry(p)}
      />

      <ResortDetailModal
        resort={selectedResortForDetail}
        onClose={() => setSelectedResortForDetail(null)}
        onRequestStay={(r) => handleRequestStayDirect(r)}
        onEnquireResort={(r) => {
          setEnquiryModalPlan(`Resort Stay: ${r.name}`);
          setIsEnquiryModalOpen(true);
        }}
      />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        onAddLead={handleAddLead}
        preselectedPlan={enquiryModalPlan}
      />

      {/* Floating Action Buttons: WhatsApp & AI Holiday Planner */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3">
        {/* Floating WhatsApp Action */}
        <a
          href={COMPANY_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all border-2 border-white group relative shrink-0"
          title="Chat with us on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute bottom-14 right-0 bg-neutral-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
        </a>

        {/* Floating AI Holiday Planner Button */}
        <button
          onClick={() => {
            if (currentMode === 'ai-planner') {
              setCurrentMode('website');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              setCurrentMode('ai-planner');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#15803D] via-[#166534] to-[#0F172A] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-white/80 cursor-pointer group"
          aria-label="AI Holiday Planner"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ade80] animate-pulse shrink-0" />
          <span className="text-xs sm:text-sm font-extrabold tracking-wide whitespace-nowrap">
            {currentMode === 'ai-planner' ? 'Close AI Planner' : 'AI Holiday Planner'}
          </span>
        </button>
      </div>

      {/* Global Luxury Footer */}
      <Footer
        onSelectMode={(mode) => {
          setCurrentMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenEnquiry={() => {
          setEnquiryModalPlan('Purple Membership (5 Years)');
          setIsEnquiryModalOpen(true);
        }}
      />
    </div>
  );
}
export default App;
