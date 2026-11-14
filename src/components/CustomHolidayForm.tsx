import React, { useState } from 'react';
import { Lead } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import { sendEnquiryEmail, PRIMARY_ENQUIRY_EMAIL, CC_ENQUIRY_EMAIL } from '../services/enquiryMailService';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone || !email) {
      alert('Please fill in your name, mobile number, and email address.');
      return;
    }

    setIsSubmitting(true);
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
        `Auto-emailed to ${PRIMARY_ENQUIRY_EMAIL} (cc: ${CC_ENQUIRY_EMAIL})`,
        `Enquiry via myholidayz.in for ${adults} adults & ${children} kids.`,
        `Departure city: ${city || 'Bengaluru'}. Travel date: ${travelDate}.`,
        specialRequests ? `Special notes: ${specialRequests}` : 'No special notes.'
      ]
    };

    // Auto-mail to enquiry@myholidayz.in and cc um18218@gmail.com
    await sendEnquiryEmail({
      enquiryNumber: newEnquiryId,
      fullName,
      phone,
      email,
      city,
      interestedPlan,
      preferredDestination: destination,
      budgetRange: budget,
      travelDate,
      adults,
      children,
      specialRequests,
      source: 'Request Membership Callback & Free Brochure Form'
    });

    onAddLead(newLead);
    setSubmittedEnquiryId(newEnquiryId);
    setIsSubmitting(false);
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
          <div className="lg:col-span-7 bg-[#F8FAF8] p-4 sm:p-8 rounded-2xl border border-emerald-100 shadow-sm">
            {submittedEnquiryId ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#15803D] flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Enquiry Dispatched Successfully</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Reference: {submittedEnquiryId}
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto pt-1 leading-relaxed">
                    Thank you, <strong className="text-neutral-900">{fullName}</strong>! Your holiday consultation request has been automatically routed to our reservations desk at <strong className="text-[#15803D]">{PRIMARY_ENQUIRY_EMAIL}</strong> and cc'd to <strong className="text-neutral-800">{CC_ENQUIRY_EMAIL}</strong>.
                  </p>
                  <p className="text-xs text-neutral-500 max-w-md mx-auto">
                    A senior holiday consultant from our Bengaluru Shivaji Nagar office will call you shortly on <span className="font-bold text-neutral-800 font-mono">{phone}</span> with custom tariffs and resort brochures.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/917353333701?text=${encodeURIComponent(
                      `Hello MyHoliday, I have submitted enquiry ref ${submittedEnquiryId} for ${interestedPlan}. My phone is ${phone}. Please share resort catalogues and details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Connect</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmittedEnquiryId(null);
                      setFullName('');
                      setPhone('');
                      setEmail('');
                      setSpecialRequests('');
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-[#15803D] bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 transition-colors"
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
                      <option value="Red Membership (5 Years)">Red Membership (5 Years - India & Asia)</option>
                      <option value="Red Membership (10 Years)">Red Membership (10 Years - India & Asia)</option>
                      <option value="Purple Membership (5 Years)">Purple Membership (5 Years - India & Intl - Popular)</option>
                      <option value="Purple Membership (10 Years)">Purple Membership (10 Years - India & Intl - Flagship)</option>
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
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#DC2626] hover:bg-[#b91c1c] active:scale-[0.99] disabled:opacity-75 disabled:cursor-wait text-white text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Request to Reservations...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Membership Callback & Free Brochure</span>
                      </>
                    )}
                  </button>
                  <div className="mt-2 text-[11px] text-neutral-500 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                    <span>Auto-dispatched to enquiry@myholidayz.in (cc: um18218@gmail.com)</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
