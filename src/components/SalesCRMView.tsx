import React, { useState } from 'react';
import { Lead, LeadStatus } from '../types';
import { COMPANY_CONTACT } from '../data/mockData';
import {
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Plus,
  Search,
  CheckCircle2,
  Send,
  UserCheck,
  TrendingUp,
  FileSpreadsheet,
  AlertCircle,
  MessageCircle
} from 'lucide-react';

interface SalesCRMViewProps {
  leads: Lead[];
  onUpdateLead: (updatedLead: Lead) => void;
  onAddLead: (newLead: Lead) => void;
}

export const SalesCRMView: React.FC<SalesCRMViewProps> = ({
  leads,
  onUpdateLead,
  onAddLead
}) => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(leads[0] || null);
  const [searchFilter, setSearchFilter] = useState('');
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [newNoteText, setNewNoteText] = useState('');
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);

  // New Lead Form state
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('');
  const [newLeadEmail, setNewLeadEmail] = useState('');
  const [newLeadCity, setNewLeadCity] = useState('');
  const [newLeadPlan, setNewLeadPlan] = useState('Escape Elite');
  const [newLeadBudget, setNewLeadBudget] = useState('₹3,50,000');

  const pipelineStages: LeadStatus[] = [
    'New enquiry',
    'Contact attempted',
    'Connected',
    'Interested',
    'Consultation scheduled',
    'Proposal shared',
    'Payment initiated',
    'Membership sold',
    'Lost lead'
  ];

  const filteredLeads = leads.filter((lead) => {
    if (stageFilter !== 'all' && lead.status !== stageFilter) return false;
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      const match =
        lead.name.toLowerCase().includes(q) ||
        lead.phone.includes(q) ||
        lead.enquiryNumber.toLowerCase().includes(q) ||
        lead.city.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const handleStageChange = (newStatus: LeadStatus) => {
    if (!selectedLead) return;
    const updated = {
      ...selectedLead,
      status: newStatus,
      notes: [
        ...selectedLead.notes,
        `Status updated to "${newStatus}" on ${new Date().toLocaleDateString('en-GB')}`
      ]
    };
    onUpdateLead(updated);
    setSelectedLead(updated);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim() || !selectedLead) return;

    const updated = {
      ...selectedLead,
      notes: [...selectedLead.notes, `${new Date().toLocaleDateString('en-GB')}: ${newNoteText.trim()}`]
    };
    onUpdateLead(updated);
    setSelectedLead(updated);
    setNewNoteText('');
  };

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName || !newLeadPhone) return;

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      enquiryNumber: `MYH-ENQ-${Math.floor(2000 + Math.random() * 8000)}`,
      name: newLeadName,
      phone: newLeadPhone,
      email: newLeadEmail || 'lead@example.com',
      city: newLeadCity || 'Bengaluru',
      interestedPlan: newLeadPlan,
      preferredDestination: 'Domestic & Global',
      budgetRange: newLeadBudget,
      source: 'Website Form',
      status: 'New enquiry',
      priority: 'High',
      assignedTo: 'Bengaluru Sales Desk',
      createdDate: new Date().toISOString().split('T')[0],
      followUpDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      notes: ['Lead recorded manually via CRM Desk.']
    };

    onAddLead(newLead);
    setSelectedLead(newLead);
    setShowAddLeadModal(false);
    setNewLeadName('');
    setNewLeadPhone('');
    setNewLeadEmail('');
    setNewLeadCity('');
  };

  // Pipeline Metrics Calculation
  const totalLeads = leads.length;
  const convertedLeads = leads.filter((l) => l.status === 'Membership sold').length;
  const activePipelineValue = leads
    .filter((l) => l.status !== 'Lost lead')
    .reduce((acc, curr) => acc + (curr.quotedAmountINR || 345000), 0);

  return (
    <div className="min-h-screen bg-[#F8FAF8] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* CRM Top Overview Bar in myholidayz.in Green */}
        <div className="bg-[#15803D] text-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-200">
                MyHoliday · Sales CRM Pipeline
              </span>
              <span className="text-white/30">·</span>
              <span className="text-xs text-emerald-100">Chetana Tower, Bengaluru Desk</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Membership Enquiries & Pipeline
            </h1>
            <p className="text-xs text-emerald-100 mt-0.5">
              Manage inbound enquiries from myholidayz.in, log consultation calls, share quotation proposals, and convert into active memberships.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4 bg-black/20 backdrop-blur-xs p-3.5 rounded-xl border border-white/20">
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-white font-tabular">{totalLeads}</div>
              <div className="text-[10px] text-emerald-100">Inbound Enquiries</div>
            </div>
            <div className="h-7 w-px bg-white/20" />
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-[#4ade80] font-tabular">
                ₹{(activePipelineValue / 100000).toFixed(1)}L
              </div>
              <div className="text-[10px] text-emerald-100">Pipeline Value</div>
            </div>
            <div className="h-7 w-px bg-white/20" />
            <div className="text-center px-2">
              <div className="text-xl sm:text-2xl font-bold text-white font-tabular">{convertedLeads}</div>
              <div className="text-[10px] text-emerald-100">Members Converted</div>
            </div>
          </div>
        </div>

        {/* Toolbar: Search, Filters, and New Lead Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search leads by name, phone..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
              />
            </div>

            <select
              value={stageFilter}
              onChange={(e) => setStageFilter(e.target.value)}
              className="text-xs bg-white border border-neutral-300 rounded-lg py-2 px-3 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
            >
              <option value="all">All Pipeline Stages</option>
              {pipelineStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setShowAddLeadModal(true)}
            className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Inbound Lead</span>
          </button>
        </div>

        {/* Main CRM Workspace: List on Left, Active Lead Drawer on Right */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Leads List */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-neutral-200 shadow-xs overflow-hidden">
            <div className="p-3.5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-700">
              <span>Leads ({filteredLeads.length})</span>
              <span className="text-neutral-400 font-normal">Click to manage</span>
            </div>

            <div className="divide-y divide-neutral-100 max-h-[650px] overflow-y-auto">
              {filteredLeads.map((lead) => {
                const isSelected = selectedLead?.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 cursor-pointer transition-colors ${
                      isSelected ? 'bg-emerald-50/70 border-l-4 border-[#15803D]' : 'hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-neutral-900">{lead.name}</span>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {lead.enquiryNumber}
                          </span>
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-0.5">
                          {lead.city} · {lead.phone}
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          lead.status === 'Membership sold'
                            ? 'bg-emerald-100 text-emerald-800'
                            : lead.status === 'Proposal shared' || lead.status === 'Payment initiated'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-[#15803D] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        {lead.interestedPlan}
                      </span>
                      <span className="text-neutral-400">
                        Follow-up: <strong className="font-tabular text-neutral-600">{lead.followUpDate}</strong>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Lead Details & Actions */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-neutral-200 shadow-xs p-6 space-y-6">
            {selectedLead ? (
              <>
                {/* Lead Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-neutral-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-neutral-400">
                        {selectedLead.enquiryNumber}
                      </span>
                      <span className="text-[11px] font-bold text-[#15803D] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Source: {selectedLead.source}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mt-1">
                      {selectedLead.name}
                    </h2>
                    <div className="text-xs text-neutral-500 flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#15803D]" /> {selectedLead.city}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-tabular">
                        <Phone className="w-3 h-3 text-[#15803D]" /> {selectedLead.phone}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#15803D]" /> {selectedLead.email}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
                      title="Call Lead"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedLead.name)}%2C%20thank%20you%20for%20contacting%20MyHoliday%20(myholidayz.in).%20Here%20is%20your%20membership%20proposal.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Lead</span>
                    </a>
                  </div>
                </div>

                {/* Pipeline Stage Transition */}
                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Sales Pipeline Stage
                    </span>
                    <span className="text-xs text-neutral-500">
                      Assigned to: <strong className="text-neutral-900">{selectedLead.assignedTo}</strong>
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {pipelineStages.map((stage) => {
                      const isCurrent = selectedLead.status === stage;
                      return (
                        <button
                          key={stage}
                          onClick={() => handleStageChange(stage)}
                          className={`px-3 py-1 text-xs rounded-md font-semibold transition-all ${
                            isCurrent
                              ? 'bg-[#15803D] text-white shadow-xs'
                              : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                          }`}
                        >
                          {stage}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Lead Specifications */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-50 text-xs">
                  <div>
                    <div className="text-neutral-400 font-medium">Interested Plan</div>
                    <div className="font-bold text-[#15803D] mt-0.5">{selectedLead.interestedPlan}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 font-medium">Budget Range</div>
                    <div className="font-semibold text-neutral-700 mt-0.5">{selectedLead.budgetRange}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 font-medium">Preferred Region</div>
                    <div className="font-semibold text-neutral-700 mt-0.5">{selectedLead.preferredDestination}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 font-medium">Next Follow-Up</div>
                    <div className="font-bold text-neutral-900 font-tabular mt-0.5">{selectedLead.followUpDate}</div>
                  </div>
                </div>

                {/* Official Proposal Generator */}
                <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center justify-between shadow-xs">
                  <div>
                    <div className="text-xs font-bold text-neutral-900">
                      Generate MyHoliday Official Proposal
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Creates branded PDF proposal with 7-night annual holiday breakdown and locked-in tariffs.
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Official Membership Proposal generated for ${selectedLead.name} (${selectedLead.interestedPlan} - ₹${selectedLead.quotedAmountINR?.toLocaleString('en-IN') || '3,45,000'}). Sent to ${selectedLead.email} & WhatsApp.`)}
                    className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#b91c1c] rounded-md transition-colors whitespace-nowrap shadow-xs"
                  >
                    Generate Proposal
                  </button>
                </div>

                {/* Call & Consultation Notes */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Consultation & Follow-up Notes
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {selectedLead.notes.map((note, i) => (
                      <div key={i} className="p-3 bg-neutral-50 rounded-lg text-xs text-neutral-600 border border-neutral-100">
                        {note}
                      </div>
                    ))}
                  </div>

                  {/* Add New Note Input */}
                  <form onSubmit={handleAddNote} className="flex gap-2 pt-1">
                    <input
                      type="text"
                      value={newNoteText}
                      onChange={(e) => setNewNoteText(e.target.value)}
                      placeholder="Log call outcome, schedule presentation, or note questions..."
                      className="flex-1 text-xs bg-white border border-neutral-300 rounded-lg p-2.5 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Log Note</span>
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="text-center py-16 text-neutral-400 text-xs">
                Select a lead from the left to view details and pipeline actions.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Manual New Lead Modal */}
      {showAddLeadModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <h3 className="text-base font-bold text-neutral-900">Create Inbound Lead</h3>
              <button
                onClick={() => setShowAddLeadModal(false)}
                className="text-neutral-400 hover:text-neutral-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-600 font-bold mb-1">Customer Name *</label>
                <input
                  type="text"
                  required
                  value={newLeadName}
                  onChange={(e) => setNewLeadName(e.target.value)}
                  placeholder="e.g. Ramesh Patel"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-md p-2 text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-neutral-600 font-bold mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={newLeadPhone}
                  onChange={(e) => setNewLeadPhone(e.target.value)}
                  placeholder="+91 98200 99881"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-md p-2 text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-neutral-600 font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  value={newLeadEmail}
                  onChange={(e) => setNewLeadEmail(e.target.value)}
                  placeholder="ramesh@example.com"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-md p-2 text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-neutral-600 font-bold mb-1">City</label>
                <input
                  type="text"
                  value={newLeadCity}
                  onChange={(e) => setNewLeadCity(e.target.value)}
                  placeholder="Bengaluru"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-md p-2 text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-neutral-600 font-bold mb-1">Interested Membership</label>
                <select
                  value={newLeadPlan}
                  onChange={(e) => setNewLeadPlan(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-md p-2 text-neutral-800"
                >
                  <option value="Escape Select">Escape Select (3 Yr Domestic)</option>
                  <option value="Escape Elite">Escape Elite (5 Yr Domestic)</option>
                  <option value="Explore Select">Explore Select (3 Yr Global)</option>
                  <option value="Explore Elite">Explore Elite (5 Yr Global)</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddLeadModal(false)}
                  className="px-3 py-1.5 border border-neutral-300 rounded-md text-neutral-600 hover:bg-neutral-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#15803D] text-white font-bold rounded-md hover:bg-[#166534]"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
