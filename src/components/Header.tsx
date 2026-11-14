import React, { useState } from 'react';
import { AppMode } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import {
  Compass,
  User,
  Briefcase,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Download,
  BookOpen
} from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onSelectMode('website');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-emerald-100 shadow-xs">
      {/* Top Announcement Bar - With exact contact details from myholidayz.in */}
      <div className="bg-[#15803D] text-white px-3 sm:px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-emerald-100 overflow-x-auto no-scrollbar py-0.5">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="hover:text-white flex items-center gap-1.5 font-medium whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>{COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <span className="text-emerald-400/50 hidden sm:inline">|</span>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hover:text-white hidden sm:flex items-center gap-1.5 font-medium whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <span className="text-emerald-400/50 hidden lg:inline">|</span>
            <span className="hidden lg:flex items-center gap-1 text-emerald-200 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>{COMPANY_CONTACT.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[11px] shrink-0">
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-100 hover:text-white font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#4ade80]" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <span className="text-emerald-400/50">|</span>
            <span className="text-white font-semibold text-[10px] sm:text-[11px]">240+ Resorts</span>
          </div>
        </div>
      </div>

      {/* Experience Mode Switcher Bar */}
      <div className="bg-emerald-50/70 border-b border-emerald-100 px-3 sm:px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0 py-0.5">
            <span className="text-[#15803D] font-bold text-[10px] uppercase tracking-wider mr-1 hidden sm:inline">
              Platform Views:
            </span>
            <button
              onClick={() => onSelectMode('website')}
              className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'website'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Website</span>
            </button>
            <button
              onClick={() => onSelectMode('member-portal')}
              className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'member-portal'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Portal</span>
            </button>
            <button
              onClick={() => onSelectMode('sales-crm')}
              className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'sales-crm'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>CRM</span>
            </button>
            <button
              onClick={() => onSelectMode('admin')}
              className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'admin'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
            <button
              onClick={() => onSelectMode('ai-planner')}
              className={`px-2.5 sm:px-3 py-1 rounded-md transition-colors whitespace-nowrap font-semibold text-xs flex items-center gap-1.5 ${
                currentMode === 'ai-planner'
                  ? 'bg-[#15803D] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-[#15803D] hover:bg-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>AI Planner</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center text-[11px] text-neutral-500 shrink-0">
            <span>Bengaluru · Shivaji Nagar</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: [Brand Logo] — [Nav Links] — [CTAs + Mobile Hamburger] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Logo */}
        <button
          onClick={() => {
            onSelectMode('website');
            setIsMobileMenuOpen(false);
          }}
          className="text-left shrink-0 focus:outline-none flex items-center"
        >
          <img
            src={COMPANY_CONTACT.logoPath}
            alt="MyHoliday Logo"
            className="h-8 sm:h-11 w-auto object-contain"
          />
        </button>

        {/* Zone 2: Desktop clean nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-neutral-700">
          <button
            onClick={() => handleNavClick('membership-plans-section')}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Membership Plans
          </button>
          <button
            onClick={() => handleNavClick('resorts-explorer-section')}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Resorts ({`240+`})
          </button>
          <button
            onClick={() => handleNavClick('holiday-packages-section')}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Holiday Packages
          </button>
          <button
            onClick={() => handleNavClick('destination-catalogues-section')}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 text-emerald-800"
          >
            <span>Catalogues</span>
            <span className="text-[10px] bg-emerald-100 text-[#15803D] px-1.5 py-0.2 rounded font-bold">PDF</span>
          </button>
          <button
            onClick={() => handleNavClick('how-it-works-section')}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Benefits
          </button>
          <button
            onClick={() => handleNavClick('custom-enquiry-section')}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Contact Us
          </button>
        </nav>

        {/* Zone 3: CTA Buttons + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => {
              onSelectMode('member-portal');
              setIsMobileMenuOpen(false);
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-[#15803D] border border-neutral-300 rounded-lg hover:border-emerald-300 transition-colors whitespace-nowrap"
            title="Member Dashboard"
          >
            <span className="w-5 h-5 rounded-full bg-[#15803D] text-white flex items-center justify-center font-bold text-[10px]">
              {memberInitials}
            </span>
            <span>Login</span>
          </button>

          <button
            onClick={() => {
              onOpenEnquiry();
              setIsMobileMenuOpen(false);
            }}
            className="px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#b91c1c] active:scale-[0.98] rounded-lg transition-all shadow-sm whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Enquire</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-neutral-900" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Visible when hamburger is opened on mobile) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-4 pt-3 pb-6 shadow-xl space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('membership-plans-section')}
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-neutral-800 hover:bg-emerald-50 hover:text-[#15803D] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Membership Plans (Red & Purple)</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={() => handleNavClick('resorts-explorer-section')}
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-neutral-800 hover:bg-emerald-50 hover:text-[#15803D] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Explore Resorts (240+ Verified)</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={() => handleNavClick('holiday-packages-section')}
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-neutral-800 hover:bg-emerald-50 hover:text-[#15803D] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Holiday Packages</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={() => handleNavClick('destination-catalogues-section')}
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-emerald-800 bg-emerald-50/60 rounded-lg transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#15803D]" />
                <span>Travel Catalogues & PDF Guides</span>
              </div>
              <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded">PDF</span>
            </button>

            <button
              onClick={() => handleNavClick('how-it-works-section')}
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-neutral-800 hover:bg-emerald-50 hover:text-[#15803D] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>How Membership Works</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={() => handleNavClick('custom-enquiry-section')}
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-neutral-800 hover:bg-emerald-50 hover:text-[#15803D] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Contact Us & Bengaluru Office</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>

          {/* Quick PDF Downloads on Mobile */}
          <div className="pt-2 border-t border-neutral-100 grid grid-cols-2 gap-2">
            <a
              href="/catalogues/MY_HOLIDAYS_Kids_Dream_Destinations_Catalogue.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-neutral-100 rounded-lg text-neutral-800 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-emerald-100 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#15803D]" />
              <span>Kids PDF</span>
            </a>
            <a
              href="/catalogues/My_Holidays_Historical_Destinations_Catalogue.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-neutral-100 rounded-lg text-neutral-800 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-amber-100 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-amber-700" />
              <span>Heritage PDF</span>
            </a>
          </div>

          {/* Direct Mobile Quick Contact Buttons */}
          <div className="pt-2 border-t border-neutral-100 flex items-center gap-2">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="flex-1 py-2.5 px-3 bg-[#15803D] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 bg-[#25D366] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onSelectMode('member-portal');
                setIsMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 border border-neutral-300 text-neutral-800 rounded-lg text-xs font-bold"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

