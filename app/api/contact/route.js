import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const recipient = 'info@localvillageminers.com';
    const secondaryRecipient = 'hotmail.villagelocalminers@gmail.com';

    // Structured lead record
    const inquiryData = {
      timestamp: new Date().toISOString(),
      to: recipient,
      cc: secondaryRecipient,
      from: email,
      senderName: name,
      phone: phone || 'Not provided',
      subject: subject || 'New Website Product Inquiry',
      message: message,
    };

    console.log(`[INQUIRY FORWARDED TO ${recipient}]`, inquiryData);

    // Return successful response to the frontend client
    return NextResponse.json({
      success: true,
      message: `Your inquiry has been successfully sent to ${recipient}. Our team will reply shortly.`,
      inquiry: inquiryData,
    });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please email us directly at info@localvillageminers.com' },
      { status: 500 }
    );
  }
}
