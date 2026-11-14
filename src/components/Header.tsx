import React from 'react';
import { AppMode } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import { Compass, User, Briefcase, ShieldCheck, Sparkles, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  onOpenEnquiry: (planName?: string) => void;
  onOpenLogin: () => void;
  memberInitials?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onOpenEnquiry,
  onOpenLogin,
  memberInitials = 'RM'
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-emerald-100 shadow-xs">
      {/* Top Announcement Bar - With exact contact details from myholidayz.in */}
      <div className="bg-[#15803D] text-white px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] text-emerald-100">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="hover:text-white flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>{COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <span className="text-emerald-400/50 hidden sm:inline">|</span>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hover:text-white hidden sm:flex items-center gap-1.5 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-300" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <span className="text-emerald-400/50 hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              <span>{COMPANY_CONTACT.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-100 hover:text-white font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#4ade80]" />
              <span>WhatsApp Chat</span>
            </a>
            <span className="text-emerald-400/50">|</span>
            <span className="text-white font-semibold">240+ Partner Resorts</span>
          </div>
        </div>
      </div>

      {/* Experience Mode Switcher Bar */}
      <div className="bg-emerald-50/70 border-b border-emerald-100 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0 py-0.5">
            <span className="text-[#15803D] font-bold text-[10px] uppercase tracking-wider mr-1 hidden sm:inline">
              Platform Views:
            </span>
            <button
              onClick={() => onSelectMode('website')}
              className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'website'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Public Website
            </button>
            <button
              onClick={() => onSelectMode('member-portal')}
              className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'member-portal'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Member Portal
            </button>
            <button
              onClick={() => onSelectMode('sales-crm')}
              className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'sales-crm'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Sales CRM
            </button>
            <button
              onClick={() => onSelectMode('admin')}
              className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'admin'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin & Operations
            </button>
            <button
              onClick={() => onSelectMode('ai-planner')}
              className={`px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'ai-planner'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              AI Holiday Concierge
            </button>
          </div>

          <div className="hidden lg:flex items-center text-[11px] text-neutral-500 shrink-0">
            <span>Bengaluru · Shivaji Nagar</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: [Brand Logo] — [4-5 Nav Links] — [1 Primary CTA] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo from user's attachment */}
        <button
          onClick={() => onSelectMode('website')}
          className="text-left shrink-0 focus:outline-none flex items-center"
        >
          <img
            src={COMPANY_CONTACT.logoPath}
            alt="MyHoliday Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </button>

        {/* Zone 2: Single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-700">
          <button
            onClick={() => {
              onSelectMode('website');
              const el = document.getElementById('membership-plans-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Membership Plans
          </button>
          <button
            onClick={() => {
              onSelectMode('website');
              const el = document.getElementById('resorts-explorer-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Resorts ({`240+`})
          </button>
          <button
            onClick={() => {
              onSelectMode('website');
              const el = document.getElementById('holiday-packages-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Holiday Packages
          </button>
          <button
            onClick={() => {
              onSelectMode('website');
              const el = document.getElementById('destination-catalogues-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 text-emerald-800"
          >
            <span>Catalogues</span>
            <span className="text-[10px] bg-emerald-100 text-[#15803D] px-1.5 py-0.2 rounded font-bold">PDF</span>
          </button>
          <button
            onClick={() => {
              onSelectMode('website');
              const el = document.getElementById('how-it-works-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Benefits
          </button>
          <button
            onClick={() => {
              onSelectMode('website');
              const el = document.getElementById('custom-enquiry-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Contact Us
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA Button + Member Profile */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectMode('member-portal')}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-[#15803D] border border-neutral-300 rounded-lg hover:border-emerald-300 transition-colors whitespace-nowrap"
            title="Member Dashboard"
          >
            <span className="w-5 h-5 rounded-full bg-[#15803D] text-white flex items-center justify-center font-bold text-[10px]">
              {memberInitials}
            </span>
            <span>Member Login</span>
          </button>

          <button
            onClick={() => onOpenEnquiry()}
            className="px-4 py-2 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#b91c1c] active:scale-[0.98] rounded-lg transition-all shadow-sm whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Enquire Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};
