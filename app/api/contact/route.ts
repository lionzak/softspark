import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs'; // Resend SDK needs Node runtime

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, honeypot } = await req.json();

    // Basic validation
    if (honeypot) {
      // Silent success for bots
      return NextResponse.json({ ok: true });
    }
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const to = process.env.CONTACT_TO!;
    const from = process.env.CONTACT_FROM || 'SoftSpark <onboarding@resend.dev>';

    const subject = `New contact form: ${name}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111;">
        <h2 style="margin:0 0 8px;">New Message from SoftSpark Contact Form</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap; border:1px solid #eee; padding:12px; border-radius:8px;">
          ${escapeHtml(message)}
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
      // Make replies go to the sender:
      replyTo: email, // Resend Node SDK supports `replyTo`
    });

    if (error) {
      return NextResponse.json({ error: 'Email send failed', detail: error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

/** simple HTML escape to avoid broken markup */
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
