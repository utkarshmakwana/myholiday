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
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  onOpenEnquiry: (planName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onOpenEnquiry
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
            <span className="text-white font-semibold text-[10px] sm:text-[11px]">1,000+ Resorts · 195 Countries</span>
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
            Resorts ({`1,000+`})
          </button>
          <button
            onClick={() => handleNavClick('destination-catalogues-section')}
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0"
          >
            Destinations
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
              <span>Explore Resorts (1,000+ Verified Across 195 Countries)</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={() => handleNavClick('destination-catalogues-section')}
              className="w-full text-left py-2.5 px-3 text-sm font-semibold text-neutral-800 hover:bg-emerald-50 hover:text-[#15803D] rounded-lg transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#15803D]" />
                <span>Explore Destinations & Themes</span>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
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
          </div>
        </div>
      )}
    </header>
  );
};

