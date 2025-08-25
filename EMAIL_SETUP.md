# Email Setup Guide for Flight Atlas Contact Form

The contact form is currently set up with multiple email service options. Choose the one that works best for your setup:

## Option 1: EmailJS (Recommended - Easiest)

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (nima@flightatlas.com)

4. Get your Service ID, Template ID, and Public Key
5. Update `src/components/EmailService.js` with your IDs:
   ```javascript
   const result = await emailjs.send(
     'your_service_id',      // Replace with your service ID
     'your_template_id',     // Replace with your template ID  
     // ... template variables
     'your_public_key'       // Replace with your public key
   );
   ```

6. Add EmailJS script to `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
     (function(){
       emailjs.init("your_public_key");
     })();
   </script>
   ```

## Option 2: Formspree

1. Go to [Formspree.io](https://formspree.io/) and create an account
2. Create a new form and get your form ID
3. Update `src/components/EmailService.js`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## Option 3: Netlify Functions (For advanced users)

If you deploy to Netlify, you can use the included Netlify function:

1. Set environment variables in Netlify:
   - `SMTP_HOST` (e.g., smtp.gmail.com)
   - `SMTP_PORT` (587)
   - `SMTP_USER` (your email)
   - `SMTP_PASS` (your app password)
   - `CONTACT_EMAIL` (nima@flightatlas.com)

2. The function is already set up in `netlify/functions/contact.js`

## Current Fallback

If none of the above services work, the form will fall back to opening the user's mail client with a pre-filled email.

## Testing

1. Fill out the contact form
2. Check your email for the message
3. The form should show a success message and close automatically

## Security Note

Never commit API keys or sensitive credentials to your repository. Use environment variables or Netlify's environment settings.