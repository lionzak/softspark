import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, honeypot } = await req.json();

    // Basic validation
    if (honeypot) {
      // Silent success for bots
      console.log('Honeypot field detected, likely a bot. Silently succeeding.'); // Added logging
      return NextResponse.json({ ok: true });
    }
    if (!name || !email || !message) {
      console.warn('Missing fields in contact form submission.'); // Added logging
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Sanitize inputs before using them in the email
    const sanitizedName = escapeHtml(name);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedMessage = escapeHtml(message);

    const to = process.env.CONTACT_TO!;
    // Fallback for 'from' address, ensuring it's always set
    const from = process.env.CONTACT_FROM || 'SoftSpark <onboarding@resend.dev>';

    const subject = `New contact form: ${sanitizedName}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111;">
        <h2 style="margin:0 0 8px;">New Message from SoftSpark Contact Form</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap; border:1px solid #eee; padding:12px; border-radius:8px;">
          ${sanitizedMessage}
        </div>
        <hr />
        <p style="font-size:12px; color:#666;">Sent from softspark-solutions.vercel.app</p>
      </div>
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: sanitizedEmail, // Use sanitized email for replyTo
    });

    if (error) {
      console.error('Resend email send failed:', error); // Added detailed error logging
      return NextResponse.json({ error: 'Email send failed', detail: error }, { status: 500 });
    }

    console.log('Email sent successfully:', data?.id); // Added success logging
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('Server error during contact form submission:', err); // Added detailed error logging
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

/** simple HTML escape to avoid broken markup */
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;') // Added double quote escape
    .replace(/'/g, '&#039;'); // Added single quote escape
}
