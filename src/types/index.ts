export type AppMode = 'website' | 'member-portal' | 'sales-crm' | 'admin' | 'ai-planner';

export interface MembershipPlan {
  id: string;
  name: string;
  category: 'Escape' | 'Explore';
  tenureYears: number;
  coverage: 'Domestic' | 'Domestic + International';
  priceINR: number;
  downPaymentINR: number;
  emiMonthlyINR: number;
  annualNights: number;
  totalNights: number;
  roomCategory: 'Standard' | 'Deluxe' | 'Premium Studio' | 'Royal Suite';
  occupancy: { adults: number; children: number };
  bookingWindow: string; // e.g., "15 to 180 days advance"
  seasonEligibility: string; // "All Regular & Mid Seasons"
  priorityBooking: boolean;
  resortCount: string;
  recommended?: boolean;
  highlights: string[];
}

export interface EntitlementLedgerEntry {
  id: string;
  date: string;
  type: 'Annual Allocation' | 'Booking Deduction' | 'Cancellation Restored' | 'Admin Adjustment' | 'Carry Forward';
  nights: number;
  balanceAfter: number;
  referenceId?: string;
  description: string;
}

export interface RoomType {
  id: string;
  name: string;
  capacity: { adults: number; children: number };
  description: string;
  amenities: string[];
  upgradeFeePerNightINR: number;
}

export interface Resort {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  country: string;
  isInternational: boolean;
  category: 'Beach' | 'Mountain & Hills' | 'Heritage & Palace' | 'Tropical Island' | 'Spa & Wellness';
  starRating: number;
  coverImage: string;
  gallery: string[];
  description: string;
  amenities: string[];
  roomTypes: RoomType[];
  eligiblePlans: string[]; // plan names or IDs
  checkInTime: string;
  checkOutTime: string;
  nearbyAttractions: string[];
}

export type BookingStatus =
  | 'Draft'
  | 'Requested'
  | 'Under review'
  | 'Availability pending'
  | 'Confirmed'
  | 'Cancelled'
  | 'Completed';

export interface BookingRequest {
  id: string;
  referenceNumber: string;
  memberId: string;
  memberName: string;
  memberEmail: string;
  memberPhone: string;
  resortId: string;
  resortName: string;
  resortLocation: string;
  resortImage: string;
  roomCategory: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: { adults: number; children: number };
  status: BookingStatus;
  entitlementDeducted: number;
  additionalChargesINR: number;
  specialRequests?: string;
  voucherNumber?: string;
  createdDate: string;
  confirmationDate?: string;
}

export type LeadStatus =
  | 'New enquiry'
  | 'Contact attempted'
  | 'Connected'
  | 'Interested'
  | 'Consultation scheduled'
  | 'Proposal shared'
  | 'Negotiation'
  | 'Payment initiated'
  | 'Membership sold'
  | 'Lost lead';

export interface Lead {
  id: string;
  enquiryNumber: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  interestedPlan: string;
  preferredDestination: string;
  budgetRange: string;
  source: 'Website Form' | 'Resort Enquiry' | 'WhatsApp' | 'Campaign' | 'Referral';
  status: LeadStatus;
  priority: 'High' | 'Medium' | 'Standard';
  assignedTo: string;
  createdDate: string;
  followUpDate: string;
  notes: string[];
  quotedAmountINR?: number;
}

export interface HolidayPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  startingPriceINR: number;
  category: 'Family' | 'Honeymoon' | 'Luxury Escapes' | 'Group' | 'Adventure';
  coverImage: string;
  inclusions: string[];
  itinerary: { day: number; title: string; desc: string }[];
}

export interface MemberUser {
  id: string;
  membershipId: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  planId: string;
  planName: string;
  status: 'Active' | 'Pending Verification' | 'Renewed';
  startDate: string;
  expiryDate: string;
  annualNights: number;
  remainingNights: number;
  usedNightsThisYear: number;
  loyaltyLevel: 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  loyaltyPoints: number;
  walletBalanceINR: number;
  familyMembers: { name: string; relation: string; age: number; verified: boolean }[];
}

export interface SupportTicket {
  id: string;
  ticketNo: string;
  category: 'Booking Assistance' | 'Entitlement Query' | 'Payment / Installment' | 'Resort Information' | 'Membership Upgrade';
  subject: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  priority: 'High' | 'Medium' | 'Low';
  createdDate: string;
  messages: { sender: 'member' | 'support'; text: string; time: string }[];
}
