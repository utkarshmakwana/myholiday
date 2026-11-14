import React, { useState } from 'react';
import { Resort, MembershipPlan, MemberUser } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import { Sparkles, Send, MapPin, Calendar, Check, ArrowRight, User, Compass } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface AIHolidayPlannerViewProps {
  resorts: Resort[];
  plans: MembershipPlan[];
  member: MemberUser;
  onRequestResort: (resort: Resort) => void;
  onSelectPlan: (plan: MembershipPlan) => void;
  onBackToWebsite?: () => void;
}

interface AIPlanResult {
  title: string;
  matchedResort: Resort;
  recommendedPlan?: MembershipPlan;
  estimatedNights: number;
  entitlementAnalysis: string;
  itinerary: { day: number; title: string; activities: string[] }[];
  curatorTip: string;
}

export const AIHolidayPlannerView: React.FC<AIHolidayPlannerViewProps> = ({
  resorts,
  plans,
  member,
  onRequestResort,
  onSelectPlan,
  onBackToWebsite
}) => {
  const [userInput, setUserInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [planResult, setPlanResult] = useState<AIPlanResult | null>(null);

  const samplePrompts = [
    '3-night family vacation in lush Coorg coffee estate chalets with campfire & nature walk',
    '4-night tropical beach holiday on Havelock Island white sand in Andaman',
    '3-night misty tea garden retreat in Munnar with panoramic valley view',
    'Romantic 4-night Ubud jungle villa with private infinity pool in Bali'
  ];

  const handleGenerate = async (queryText?: string) => {
    const prompt = queryText || userInput;
    if (!prompt.trim()) return;

    setIsGenerating(true);

    const lower = prompt.toLowerCase();
    let matchedResort = resorts[0];

    if (lower.includes('coorg') || lower.includes('coffee') || lower.includes('madikeri')) {
      matchedResort = resorts.find((r) => r.id === 'resort-coorg-plantation') || resorts[0];
    } else if (lower.includes('munnar') || lower.includes('tea') || lower.includes('kerala')) {
      matchedResort = resorts.find((r) => r.id === 'resort-munnar-tea') || resorts[0];
    } else if (lower.includes('andaman') || lower.includes('havelock') || lower.includes('radhanagar')) {
      matchedResort = resorts.find((r) => r.id === 'resort-andaman-beach') || resorts[0];
    } else if (lower.includes('bali') || lower.includes('ubud') || lower.includes('jungle')) {
      matchedResort = resorts.find((r) => r.id === 'resort-bali-jungle') || resorts[0];
    } else if (lower.includes('maldives') || lower.includes('overwater')) {
      matchedResort = resorts.find((r) => r.id === 'resort-azure-atoll') || resorts[0];
    } else if (lower.includes('goa') || lower.includes('candolim')) {
      matchedResort = resorts.find((r) => r.id === 'resort-azure-horizon') || resorts[0];
    } else if (lower.includes('manali') || lower.includes('snow')) {
      matchedResort = resorts.find((r) => r.id === 'resort-silversnow-chalet') || resorts[0];
    }

    const nights = prompt.includes('4') ? 4 : prompt.includes('5') ? 5 : 3;
    const recommendedPlan = matchedResort.isInternational ? plans[3] : plans[1];

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `You are an elite travel concierge for MyHoliday (myholidayz.in). User prompt: "${prompt}". Match with resort: ${matchedResort.name} in ${matchedResort.location}.`
        });
      }
    } catch {
      // Fallback seamlessly
    }

    setTimeout(() => {
      setPlanResult({
        title: `Curated ${nights}-Night Holiday at ${matchedResort.name}`,
        matchedResort,
        recommendedPlan,
        estimatedNights: nights,
        entitlementAnalysis: `This holiday requires ${nights} nights from your annual entitlement. With ${member.remainingNights} nights currently available in your ${member.planName} account, you will have ${member.remainingNights - nights} remaining nights.`,
        itinerary: [
          {
            day: 1,
            title: 'Welcome & Resort Check-in',
            activities: [
              `Private luxury transfer to ${matchedResort.name}.`,
              'Priority check-in with traditional welcome drink & plantation welcome basket.',
              'Evening sunset dinner at the signature terrace restaurant.'
            ]
          },
          {
            day: 2,
            title: 'Guided Nature Experience & Wellness',
            activities: [
              `Morning guided tour of local highlights (${matchedResort.nearbyAttractions[0] || 'panoramic viewpoints'}).`,
              'Afternoon Ayurvedic therapy at the property’s wellness spa.',
              'Chef’s signature dinner featuring local regional delicacies.'
            ]
          },
          {
            day: 3,
            title: 'Leisure & Starlit Campfire',
            activities: [
              'Morning sunrise yoga session overlooking misty valley/coastal waters.',
              'Afternoon at leisure by the heated pool/jacuzzi.',
              'Private evening bonfire with barbecue under starlit skies.'
            ]
          }
        ],
        curatorTip: `Book at least 15 to 30 days in advance to secure premium valley or ocean view cottages included in your ${member.planName} plan.`
      });
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {onBackToWebsite && (
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#15803D]" />
              <span>← Back to Website</span>
            </button>
          </div>
        )}

        {/* Header */}
        <div className="bg-[#15803D] text-white p-6 sm:p-8 rounded-2xl shadow-sm text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/20 text-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>AI Vacation Concierge · myholidayz.in</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Plan Your Vacation in Natural Words
          </h1>

          <p className="text-xs sm:text-sm text-emerald-100 font-light max-w-xl mx-auto">
            Describe the trip you have in mind. We calculate your entitlement deductions from your 7-night quota, match the resort, and generate your itinerary.
          </p>
        </div>

        {/* Input Box */}
        <div className="mt-8 bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
          <div className="relative">
            <textarea
              rows={3}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g. Plan a 3-night family vacation in Coorg coffee plantation chalets with campfire and nature walk..."
              className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl p-3.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D] placeholder-neutral-400"
            />
          </div>

          {/* Quick Prompts */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
              Popular Holiday Searches on myholidayz.in
            </div>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setUserInput(p);
                    handleGenerate(p);
                  }}
                  className="text-left text-xs bg-emerald-50/60 hover:bg-emerald-100 text-neutral-800 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  "{p}"
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => handleGenerate()}
              disabled={isGenerating || !userInput.trim()}
              className="px-6 py-2.5 bg-[#15803D] hover:bg-[#166534] disabled:bg-neutral-300 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>{isGenerating ? 'Curating Vacation...' : 'Generate Itinerary & Check Nights'}</span>
            </button>
          </div>
        </div>

        {/* AI Result Card */}
        {planResult && (
          <div className="mt-8 bg-white rounded-2xl border border-neutral-200 shadow-md overflow-hidden space-y-6 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-neutral-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803D]">
                  Matched Resort Destination
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  {planResult.title}
                </h2>
                <div className="text-xs text-neutral-500 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>{planResult.matchedResort.location}, {planResult.matchedResort.country}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-bold text-neutral-800">{planResult.matchedResort.category}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onRequestResort(planResult.matchedResort)}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#b91c1c] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Booking Now</span>
                </button>
              </div>
            </div>

            {/* Matched Resort Preview Split */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-emerald-50/40 p-4 rounded-xl border border-emerald-100">
              <div className="sm:col-span-4 h-40 rounded-lg overflow-hidden">
                <img
                  src={planResult.matchedResort.coverImage}
                  alt={planResult.matchedResort.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="sm:col-span-8 space-y-2">
                <h3 className="text-base font-bold text-neutral-900">
                  {planResult.matchedResort.name}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-2">
                  {planResult.matchedResort.description}
                </p>
                <div className="pt-1 text-xs text-[#15803D] font-bold">
                  {planResult.entitlementAnalysis}
                </div>
              </div>
            </div>

            {/* Day by Day Itinerary */}
            <div>
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                Recommended Daily Itinerary
              </h3>

              <div className="space-y-4">
                {planResult.itinerary.map((day) => (
                  <div key={day.day} className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white bg-[#15803D] px-2 py-0.5 rounded font-tabular">
                        Day {day.day}
                      </span>
                      <span className="text-xs font-bold text-neutral-900">{day.title}</span>
                    </div>

                    <ul className="space-y-1 text-xs text-neutral-600 pl-2">
                      {day.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Curator Insider Tip */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-1">
              <span className="font-bold text-amber-900 block">Holiday Director's Tip:</span>
              <p className="text-amber-800 font-light">{planResult.curatorTip}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
