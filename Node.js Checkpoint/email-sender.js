const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: 'akinsmayo@gmail.com',
    pass: 'ajil' // You should use environment variables for security
  }
});

const mailOptions = {
  from: 'akinsmayo@gmail.com',
  to: 'wick505021@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello! This is a test email sent from Node.js.'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error: ' + err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
