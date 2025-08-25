// Alternative email service using EmailJS (easier setup)
// To use this, you'll need to:
// 1. Sign up at https://www.emailjs.com/
// 2. Create a service, template, and get your public key
// 3. Add the EmailJS SDK to your HTML or install via npm

export const sendEmailViaEmailJS = async (formData) => {
  // This would use EmailJS - uncomment when ready to configure
  /*
  const emailjs = window.emailjs;
  
  try {
    const result = await emailjs.send(
      'your_service_id',      // Replace with your EmailJS service ID
      'your_template_id',     // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        subject: formData.subject || 'Website Inquiry',
        message: formData.message,
        to_email: 'nima@flightatlas.com'
      },
      'your_public_key'       // Replace with your EmailJS public key
    );
    
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error: error.text };
  }
  */
  
  // For now, return false so it falls back to mailto
  return { success: false, error: 'EmailJS not configured yet' };
};

// Simple form submission to Formspree (works immediately)
export const sendEmailViaFormspree = async (formData) => {
  try {
    // Using Formspree's direct email submission
    const response = await fetch('https://formspree.io/f/xdkobkbz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        subject: formData.subject || 'Website Inquiry',
        message: formData.message,
        _replyto: formData.email,
        _subject: `[Flight Atlas] ${formData.subject || 'New Contact Form Submission'}`,
        _format: 'plain'
      })
    });
    
    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Form submission failed');
    }
  } catch (error) {
    console.error('Formspree error:', error);
    return { success: false, error: error.message };
  }
};