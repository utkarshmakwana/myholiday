import React, { useState } from 'react';
import { Lead } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

interface CustomHolidayFormProps {
  onAddLead: (lead: Lead) => void;
  prefilledPlan?: string;
  prefilledDestination?: string;
}

export const CustomHolidayForm: React.FC<CustomHolidayFormProps> = ({
  onAddLead,
  prefilledPlan = 'Escape Elite',
  prefilledDestination = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [destination, setDestination] = useState(prefilledDestination || 'Coorg & Munnar Estates');
  const [travelDate, setTravelDate] = useState('2026-12-20');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('2');
  const [interestedPlan, setInterestedPlan] = useState(prefilledPlan);
  const [budget, setBudget] = useState('₹3,00,000 - ₹5,00,000');
  const [specialRequests, setSpecialRequests] = useState('');

  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone || !email) {
      alert('Please fill in your name, phone number, and email.');
      return;
    }

    const newEnquiryId = `MYH-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      enquiryNumber: newEnquiryId,
      name: fullName,
      phone,
      email,
      city: city || 'Bengaluru',
      interestedPlan,
      preferredDestination: destination,
      budgetRange: budget,
      source: 'Website Form',
      status: 'New enquiry',
      priority: 'High',
      assignedTo: 'Bengaluru Head Office',
      createdDate: new Date().toISOString().split('T')[0],
      followUpDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      notes: [
        `Enquiry via myholidayz.in for ${adults} adults & ${children} kids.`,
        `Departure city: ${city || 'Bengaluru'}. Travel date: ${travelDate}.`,
        specialRequests ? `Special notes: ${specialRequests}` : 'No special notes.'
      ]
    };

    onAddLead(newLead);
    setSubmittedEnquiryId(newEnquiryId);
  };

  return (
    <section id="custom-enquiry-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact & Company Details from myholidayz.in */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <span>Contact MyHoliday</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              Get in Touch with Our Bengaluru Holiday Desk
            </h2>

            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Have questions about our 3 or 5-year memberships, resort availability, or annual holiday entitlements? Our team at Chetana Tower, Shivaji Nagar is ready to assist you.
            </p>

            {/* Direct Official Contact Cards */}
            <div className="pt-2 space-y-3.5 text-xs">
              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#15803D] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Direct Calling Line</div>
                  <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-[#15803D] font-bold text-sm font-tabular">
                    {COMPANY_CONTACT.phoneDisplay}
                  </a>
                  <div className="text-neutral-500 text-[11px] mt-0.5">{COMPANY_CONTACT.hours}</div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">WhatsApp Support</div>
                  <a
                    href={COMPANY_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#15803D] font-semibold hover:underline"
                  >
                    Chat on WhatsApp (+91 73533 33701)
                  </a>
                  <div className="text-neutral-500 text-[11px] mt-0.5">Instant resort brochures & tariff charts</div>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#4ade80]" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Registered Office Address</div>
                  <div className="text-neutral-600 leading-snug mt-0.5">
                    {COMPANY_CONTACT.address}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#4ade80]" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Email Address</div>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-neutral-700 hover:text-[#15803D]">
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inbound Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F8FAF8] p-6 sm:p-8 rounded-2xl border border-emerald-100 shadow-sm">
            {submittedEnquiryId ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
                    Enquiry Logged on myholidayz.in
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Reference: {submittedEnquiryId}
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto pt-2">
                    Thank you, {fullName}! Your request has been assigned to our Bengaluru membership team. An official proposal with full resort catalogues will be sent to your WhatsApp and email.
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmittedEnquiryId(null);
                      setFullName('');
                      setPhone('');
                      setEmail('');
                      setSpecialRequests('');
                    }}
                    className="px-4 py-2 text-xs font-bold text-[#15803D] bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#15803D] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Request Membership Callback & Free Brochure</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Mobile Number (with WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98200 12345"
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ramesh@example.com"
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      City of Residence
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bengaluru / Mumbai / Hyderabad"
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Interested Membership
                    </label>
                    <select
                      value={interestedPlan}
                      onChange={(e) => setInterestedPlan(e.target.value)}
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    >
                      <option value="Escape Select">Escape Select (3 Yr Domestic)</option>
                      <option value="Escape Elite">Escape Elite (5 Yr Domestic - Most Popular)</option>
                      <option value="Explore Select">Explore Select (3 Yr Global)</option>
                      <option value="Explore Elite">Explore Elite (5 Yr Worldwide)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Preferred Destination
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    >
                      <option value="Coorg & Munnar Estates">Coorg & Munnar Estates</option>
                      <option value="Andaman Havelock Beach">Andaman Havelock Beach</option>
                      <option value="Goa Coastal Plunge Villas">Goa Coastal Plunge Villas</option>
                      <option value="Manali Alpine Chalets">Manali Alpine Chalets</option>
                      <option value="Bali Ubud Rainforest">Bali Ubud Rainforest</option>
                      <option value="Maldives Overwater Lagoon">Maldives Overwater Lagoon</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Budget Range
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    >
                      <option value="₹1,50,000 - ₹2,50,000">₹1,50,000 - ₹2,50,000</option>
                      <option value="₹3,00,000 - ₹5,00,000">₹3,00,000 - ₹5,00,000</option>
                      <option value="₹5,00,000 - ₹8,00,000">₹5,00,000 - ₹8,00,000</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Approx Travel Date
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Adults (12+ yrs)
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults (Couple)</option>
                      <option value="3">3 Adults</option>
                      <option value="4+">4+ Adults</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Children (Under 12)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Inquire about monthly EMI options, Coorg plantation cottage availability, or family gifting..."
                    className="w-full text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-[#DC2626] hover:bg-[#b91c1c] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry & Get Instant Callback</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
