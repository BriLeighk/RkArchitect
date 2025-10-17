// Rate limiting storage (in-memory - for production, use Redis or similar)
const rateLimit = new Map();

// Clean up old entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of rateLimit.entries()) {
    if (now - data.resetTime > 900000) { // 15 minutes
      rateLimit.delete(key);
    }
  }
}, 900000);

async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();
  return data;
}

function checkRateLimit(identifier) {
  const now = Date.now();
  const userData = rateLimit.get(identifier);

  if (!userData) {
    rateLimit.set(identifier, {
      count: 1,
      resetTime: now,
    });
    return true;
  }

  // Reset if 15 minutes have passed
  if (now - userData.resetTime > 900000) {
    rateLimit.set(identifier, {
      count: 1,
      resetTime: now,
    });
    return true;
  }

  // Allow max 3 submissions per 15 minutes
  if (userData.count >= 3) {
    return false;
  }

  userData.count++;
  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, inquiryType, recaptchaToken } = req.body;

  // Basic validation
  if (!name || !email || !message || !inquiryType || !recaptchaToken) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Additional validation checks
  if (message.length < 10) {
    return res.status(400).json({ error: 'Message too short' });
  }

  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message too long' });
  }

  // Check for spam patterns
  const spamPatterns = [
    /\bcollection\b.*\bdebt\b/i,
    /\bcollection\b.*\bagency\b/i,
    /\bclick\s+here\b/i,
    /\bfree\s+money\b/i,
    /http[s]?:\/\/.*http[s]?:\/\//i, // Multiple URLs
    /\b(?:\d{4}[-\s]?){3}\d{4}\b/, // Credit card patterns
  ];

  for (const pattern of spamPatterns) {
    if (pattern.test(message) || pattern.test(name)) {
      // Silently reject but return success to fool spammers
      console.log('Spam detected via pattern matching');
      return res.status(200).json({ message: 'Message sent successfully' });
    }
  }

  // Get client IP for rate limiting
  const clientIp = req.headers['x-forwarded-for'] || 
                   req.headers['x-real-ip'] || 
                   req.socket.remoteAddress;

  // Check rate limit
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ 
      error: 'Too many requests. Please try again later.' 
    });
  }

  // Verify reCAPTCHA
  try {
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    
    if (!recaptchaResult.success) {
      console.log('reCAPTCHA verification failed:', recaptchaResult);
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }

    // Check reCAPTCHA score (v3 returns a score from 0.0 to 1.0)
    if (recaptchaResult.score < 0.5) {
      console.log('Low reCAPTCHA score:', recaptchaResult.score);
      // Silently reject but return success to fool bots
      return res.status(200).json({ message: 'Message sent successfully' });
    }

  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return res.status(500).json({ error: 'Verification failed' });
  }

  // Send email using Nodemailer
  try {
    const nodemailer = require('nodemailer');

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `New Contact Form: ${inquiryType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Sent via contact form with spam protection</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER);

    return res.status(200).json({ message: 'Message sent successfully' });

  } catch (error) {
    console.error('Email sending error:', error.message);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
}

