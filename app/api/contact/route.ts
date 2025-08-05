import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Convert JSON to FormData to match Formsubmit.io's expected format
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message || '');
    formDataToSend.append('_captcha', 'false'); // Disable CAPTCHA for testing

    // Forward the form data to Formsubmit.io
    const response = await fetch('https://formsubmit.co/softspark.software@gmail.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json', // Request JSON response
      },
      body: formDataToSend,
    });

    // Log response status and headers for debugging
    console.log('Formsubmit.io response status:', response.status, response.statusText);
    console.log('Formsubmit.io response headers:', Object.fromEntries(response.headers));

    // Check if response is not OK
    if (!response.ok) {
      const responseText = await response.text();
      console.error('Formsubmit.io error response:', responseText);
      throw new Error(`Failed to submit form to Formsubmit.io: ${response.status} ${response.statusText}`);
    }

    // Attempt to parse JSON response
    let responseBody;
    try {
      responseBody = await response.json();
      console.log('Formsubmit.io JSON response:', responseBody);
    } catch (jsonError) {
      const responseText = await response.text();
      console.error('Failed to parse Formsubmit.io response as JSON:', responseText);
      throw new Error(`Invalid response from Formsubmit.io: Expected JSON but received HTML or other content: ${responseText.substring(0, 200)}...`);
    }

    // Check Formsubmit.io success field
    if (responseBody.success !== 'true') {
      throw new Error(`Formsubmit.io error: ${responseBody.message || 'Unknown error'}`);
    }

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: `Internal server error: ${(error as Error).message}` }, { status: 500 });
  }
}
