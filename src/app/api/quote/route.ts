import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    console.log("1. API Route hit!");
    const data = await request.json();
    const { name, email, phone, location, selectedServices } = data;
    console.log("2. Data received:", data);
    // Configure transporter with Gmail SMTP
    console.log("3. Transporter created");
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // REPLACE THESE WITH YOUR ACTUAL DETAILS:
        user: 'your_email@gmail.com',
        pass: 'your_16_character_app_password',
      },
    });

    const servicesList = selectedServices && selectedServices.length > 0
      ? selectedServices.join(', ')
      : 'None';

    // Mail options
    const mailOptions = {
      from: 'your_email@gmail.com', // REPLACE THIS
      to: 'your_email@gmail.com',   // REPLACE THIS
      replyTo: email, // so you can reply directly to the customer
      subject: `New Quote Request from ${name}`,
      text: `You have received a new quote request.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nServices: ${servicesList}`,
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Services:</strong> ${servicesList}</p>
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("4. Mail sent successfully!", info);
    return NextResponse.json({ success: true, message: 'Email sent successfully', info });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
