import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Quote } from 'lucide-react';

export const TestimonialsFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const testimonials = [
    {
      name: 'Rajesh & Neelam Makwana',
      plan: 'Explore Elite Member (5 Years)',
      city: 'Bengaluru',
      quote: 'We booked the Havelock Island beach villa in Andaman and the Coorg coffee estate cottage. Booking through myholidayz.in was completely seamless, and saving on peak festive tariffs was huge for our family.',
      rating: 5
    },
    {
      name: 'Dr. Ananya Mukherjee',
      plan: 'Escape Elite Member (5 Years)',
      city: 'Kolkata',
      quote: 'Being able to split my 7 annual nights into weekend breaks in Munnar and Goa without losing unused days gave me complete peace of mind. The Bengaluru team is very responsive.',
      rating: 5
    },
    {
      name: 'Siddharth & Priya Dave',
      plan: 'Explore Select Member (3 Years)',
      city: 'Ahmedabad',
      quote: 'We compared MyHoliday with other timeshare clubs. Transparent digital entitlement ledger, zero maintenance surcharges in Year 1, and verified 240+ properties made this an obvious decision.',
      rating: 5
    }
  ];

  const faqs = [
    {
      q: 'How does the annual 7-night holiday entitlement work?',
      a: 'On your membership enrollment date and on every subsequent anniversary, your digital account is credited with 7 holiday nights (7N/8D) for that year. You can use these nights in a single 7-night vacation or split them into multiple shorter stays (e.g., 3 nights in Coorg and 4 nights in Munnar or Goa).'
    },
    {
      q: 'What happens if I do not use all my holiday nights in a given year?',
      a: 'Under our Escape Elite and Explore series plans, unutilized vacation nights can be carried forward into the subsequent membership year, ensuring your holiday investment is always protected.'
    },
    {
      q: 'Can my parents, children, or friends travel without me?',
      a: 'Yes. MyHoliday permits authorized guest bookings. You can simply submit an Authorized Guest Booking through your Member Portal or WhatsApp, and our reservation desk will issue the hotel voucher directly in their name.'
    },
    {
      q: 'How far in advance can I request a resort booking?',
      a: 'Booking windows range from 10 days up to 365 days in advance depending on your plan tier. Priority reservation desk support is provided for Elite members to secure high-demand holiday dates.'
    },
    {
      q: 'What is included in the room entitlement, and are there extra fees?',
      a: 'Your membership covers the room accommodation and complimentary buffet breakfast for 2 adults and up to 2 children (under 12) in eligible categories across our 240+ partner resorts. Nominal optional fees apply only for room category upgrades (e.g. Presidential Jacuzzi Villa).'
    },
    {
      q: 'Where is the registered office of MyHoliday located?',
      a: 'Our registered office is at No. 19/1, Chetana Tower, Infantry Road Cross, Opp. Gulistan Shaadi Mahal, Shivaji Nagar, Bengaluru, Karnataka – 560001, India. Our helpline is +91 73533 33701 (Monday to Saturday, 10:00 AM to 7:00 PM).'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Testimonials */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-[#15803D] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <span>Customer Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Loved by 14,000+ Vacation Families
          </h2>
          <p className="text-sm text-neutral-600 font-light">
            Genuine experiences from members who holiday every year with myholidayz.in.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#F8FAF8] p-6 rounded-2xl border border-emerald-100 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-neutral-700 font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200/60">
                <div className="font-bold text-xs text-neutral-900">{t.name}</div>
                <div className="text-[11px] text-[#15803D] font-bold">{t.plan}</div>
                <div className="text-[11px] text-neutral-400">{t.city}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-neutral-500">
              Clear, transparent answers about memberships, entitlements, and reservations.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="bg-[#F8FAF8] rounded-xl border border-neutral-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm font-bold text-neutral-900">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#15803D] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-neutral-600 font-light leading-relaxed border-t border-emerald-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
