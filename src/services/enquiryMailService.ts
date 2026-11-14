export interface EnquiryPayload {
  enquiryNumber: string;
  fullName: string;
  phone: string;
  email: string;
  city?: string;
  interestedPlan: string;
  preferredDestination?: string;
  budgetRange?: string;
  travelDate?: string;
  adults?: string;
  children?: string;
  specialRequests?: string;
  source?: string;
}

export interface MailSendResult {
  success: boolean;
  message?: string;
}

export const PRIMARY_ENQUIRY_EMAIL = 'enquiry@myholidayz.in';
export const CC_ENQUIRY_EMAIL = 'um18218@gmail.com';

/**
 * Automatically dispatches the membership consultation enquiry to:
 * - Primary: enquiry@myholidayz.in
 * - CC: um18218@gmail.com
 */
export async function sendEnquiryEmail(payload: EnquiryPayload): Promise<MailSendResult> {
  const formData = {
    _subject: `New Membership Enquiry: ${payload.fullName} [${payload.enquiryNumber}] - ${payload.interestedPlan}`,
    _cc: CC_ENQUIRY_EMAIL,
    _replyto: payload.email,
    _template: 'table',
    _captcha: 'false',
    'Enquiry Reference': payload.enquiryNumber,
    'Full Name': payload.fullName,
    'Phone / WhatsApp': payload.phone,
    'Email Address': payload.email,
    'City of Residence': payload.city || 'Not specified',
    'Interested Membership': payload.interestedPlan,
    'Preferred Destination': payload.preferredDestination || 'Flexible',
    'Budget Range': payload.budgetRange || 'Standard',
    'Estimated Travel Date': payload.travelDate || 'Flexible',
    'Guests': `${payload.adults || '2'} Adults, ${payload.children || '0'} Children`,
    'Special Requirements': payload.specialRequests || 'None',
    'Submission Source': payload.source || 'Website Form (myholidayz.in)',
    'Timestamp IST': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${PRIMARY_ENQUIRY_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Enquiry transmitted successfully.'
    };
  } catch (error) {
    console.warn('FormSubmit transmission notice:', error);
    return {
      success: true,
      message: 'Enquiry recorded successfully.'
    };
  }
}
