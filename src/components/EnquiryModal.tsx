import React, { useState } from 'react';
import { Lead } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import { sendEnquiryEmail, PRIMARY_ENQUIRY_EMAIL, CC_ENQUIRY_EMAIL } from '../services/enquiryMailService';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, MessageCircle } from 'lucide-react';

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
  const [plan, setPlan] = useState(preselectedPlan || 'Purple Membership (5 Years)');
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
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
      notes: [
        `Auto-emailed to ${PRIMARY_ENQUIRY_EMAIL} (cc: ${CC_ENQUIRY_EMAIL})`,
        `Inbound modal enquiry for ${plan} on myholidayz.in.`
      ]
    };

    await sendEnquiryEmail({
      enquiryNumber: enqId,
      fullName: name,
      phone,
      email: email || 'client@myholidayz.in',
      city,
      interestedPlan: plan,
      source: 'Priority Consultation Modal'
    });

    onAddLead(newLead);
    setSubmittedId(enqId);
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-4 sm:my-6">
        <div className="p-4 sm:p-6 bg-[#15803D] text-white flex items-center justify-between">
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
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enquiry Transmitted</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900">
                Consultation Request Logged!
              </h4>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                Reference ID: <strong className="font-mono text-[#15803D] font-bold">{submittedId}</strong>. A copy has been automatically dispatched to <span className="font-semibold text-neutral-800">{PRIMARY_ENQUIRY_EMAIL}</span> (cc: {CC_ENQUIRY_EMAIL}).
              </p>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Our Bengaluru holiday desk will call you shortly on <span className="font-bold text-neutral-800 font-mono">{phone}</span>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={`https://wa.me/917353333701?text=${encodeURIComponent(
                    `Hello MyHoliday, I requested a callback for ${plan} (Ref: ${submittedId}). My phone is ${phone}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Concierge</span>
                </a>
                <button
                  onClick={() => {
                    setSubmittedId(null);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
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
                <label className="block text-neutral-700 font-bold mb-1">Email Address *</label>
                <input
                  type="email"
                  required
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
                  <option value="Red Membership (5 Years)">Red Membership (5 Years - India & Asia - ₹4,99,999)</option>
                  <option value="Red Membership (10 Years)">Red Membership (10 Years - India & Asia - ₹8,99,999)</option>
                  <option value="Purple Membership (5 Years)">Purple Membership (5 Years - India & Intl - ₹7,99,999)</option>
                  <option value="Purple Membership (10 Years)">Purple Membership (10 Years - India & Intl - ₹13,99,999)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#DC2626] hover:bg-[#b91c1c] active:scale-[0.99] disabled:opacity-75 disabled:cursor-wait text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Membership Callback & Free Brochure</span>
                    </>
                  )}
                </button>
                <div className="mt-2 text-[10px] text-neutral-500 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#15803D]" />
                  <span>Auto-dispatched to enquiry@myholidayz.in (cc: um18218@gmail.com)</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
