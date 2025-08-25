// Netlify Function to handle contact form submissions
// This will work with any static site hosting (GitHub Pages, Netlify, etc.)

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    };
  }

  try {
    const { name, email, company, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ 
          success: false, 
          message: 'Name, email, and message are required' 
        })
      };
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email content
    const emailSubject = subject ? `[Flight Atlas] ${subject}` : '[Flight Atlas] New Contact Form Submission';
    const emailBody = `
New contact form submission from Flight Atlas website:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Subject: ${subject || 'Not provided'}

Message:
${message}

---
Sent from Flight Atlas contact form
Reply directly to this email to respond to ${name} at ${email}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'nima@flightatlas.com',
      replyTo: email,
      subject: emailSubject,
      text: emailBody
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: false, 
        message: 'Failed to send email. Please try again or contact directly at nima@flightatlas.com' 
      })
    };
  }
};