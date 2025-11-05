// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables: {{from_name}}, {{from_email}}, {{company}}, {{message}}
// 4. Get your Public Key from Account > API Keys
// 5. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (from dashboard.emailjs.com/admin/account)
  PUBLIC_KEY: 'hIsyisQeQDmzRoplo',

  // Your EmailJS Service ID (from dashboard.emailjs.com/admin)
  SERVICE_ID: 'service_wn3lj16',

  // Your EmailJS Template ID (from dashboard.emailjs.com/admin/templates)
  TEMPLATE_ID: 'template_dk4vbxo'
};

// Example template content for EmailJS:
/*
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}
*/
