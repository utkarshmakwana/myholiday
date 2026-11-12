import React, { useState } from 'react';
import { Lead } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import { X, CheckCircle2, Sparkles, Send, Phone } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Lead) => void;
  preselectedPlan?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  onAddLead,
  preselectedPlan
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [plan, setPlan] = useState(preselectedPlan || 'Escape Elite');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const enqId = `MYH-ENQ-${Math.floor(2000 + Math.random() * 8000)}`;
    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      enquiryNumber: enqId,
      name,
      phone,
      email: email || 'enquiry@example.com',
      city: city || 'Bengaluru',
      interestedPlan: plan,
      preferredDestination: 'Domestic & Global',
      budgetRange: '₹3,00,000 - ₹5,00,000',
      source: 'Website Form',
      status: 'New enquiry',
      priority: 'High',
      assignedTo: 'Bengaluru Head Office',
      createdDate: new Date().toISOString().split('T')[0],
      followUpDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      notes: [`Inbound modal enquiry for ${plan} on myholidayz.in.`]
    };

    onAddLead(newLead);
    setSubmittedId(enqId);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-6">
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
              <div className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Priority Consultation</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Enquire About Holiday Membership
              </h3>
            </div>
          </div>
          <button
            onClick={() => {
              setSubmittedId(null);
              onClose();
            }}
            className="text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submittedId ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-neutral-900">
                Consultation Request Logged!
              </h4>
              <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                Reference ID: <strong className="font-mono text-[#15803D] font-bold">{submittedId}</strong>. A dedicated holiday advisor from our Bengaluru desk will call you shortly on <span className="font-bold text-neutral-800">{phone}</span>.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmittedId(null);
                    onClose();
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#15803D] rounded-lg hover:bg-[#166534]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-neutral-700 font-bold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Patel"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Mobile (with WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98200 12345"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Bengaluru"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ramesh@example.com"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Selected Membership Plan</label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                >
                  <option value="Escape Select">Escape Select (3 Yrs Domestic)</option>
                  <option value="Escape Elite">Escape Elite (5 Yrs Domestic - Most Popular)</option>
                  <option value="Explore Select">Explore Select (3 Yrs Global)</option>
                  <option value="Explore Elite">Explore Elite (5 Yrs Global Luxury)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Instant Callback & Brochure</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
