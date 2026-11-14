import React from 'react';
import { AppMode } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectMode: (mode: AppMode) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectMode, onOpenEnquiry }) => {
  return (
    <footer className="bg-[#0F172A] text-neutral-300 text-xs border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Exact Contact Info from myholidayz.in */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 rounded-lg inline-block">
              <img
                src={COMPANY_CONTACT.logoPath}
                alt="MyHoliday Logo"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-neutral-300 font-light max-w-sm leading-relaxed">
              MyHoliday (myholidayz.in) is India's premium holiday membership network, providing family vacation ownership, guaranteed annual vacation quotas, and 240+ verified resorts across India and worldwide.
            </p>

            <div className="space-y-2 pt-2 text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4ade80] shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4ade80] shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="hover:text-white font-medium text-emerald-300 font-tabular">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4ade80] shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#4ade80] shrink-0" />
                <span>{COMPANY_CONTACT.hours}</span>
              </div>
            </div>
          </div>

          {/* Memberships */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Membership Plans
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('membership-plans-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Red Membership (5 Yrs - India & Asia)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('membership-plans-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Red Membership (10 Yrs - India & Asia)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('membership-plans-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-purple-300 font-semibold"
                >
                  Purple Membership (5 Yrs - Popular)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('membership-plans-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Purple Membership (10 Yrs - Worldwide)
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Destinations */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Destinations (240+)
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('resorts-explorer-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Coorg Coffee Estates & Chalets
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('resorts-explorer-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Munnar Tea Valley Sanctuaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('resorts-explorer-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Andaman Havelock Beach Retreats
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('resorts-explorer-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Goa Candolim Plunge Villas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectMode('website');
                    const el = document.getElementById('resorts-explorer-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Bali Ubud Jungle & Rice Terraces
                </button>
              </li>
            </ul>
          </div>

          {/* Business Portals & Direct Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Platform Views
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={() => onSelectMode('member-portal')} className="hover:text-white transition-colors text-left">
                  Member Portal (Dashboard & Card)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectMode('sales-crm')} className="hover:text-white transition-colors text-left">
                  Sales CRM & Pipeline
                </button>
              </li>
              <li>
                <button onClick={() => onSelectMode('admin')} className="hover:text-white transition-colors text-left">
                  Admin & Reservation Desk
                </button>
              </li>
              <li>
                <button onClick={() => onSelectMode('ai-planner')} className="hover:text-white transition-colors text-left">
                  AI Holiday Concierge
                </button>
              </li>
              <li>
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {COMPANY_CONTACT.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © 2026 MyHoliday (myholidayz.in). All rights reserved. Shivaji Nagar, Bengaluru, Karnataka.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              15-Day Look-in Guarantee
            </span>
            <span className="text-neutral-700">|</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
