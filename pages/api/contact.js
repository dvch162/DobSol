import nodemailer from 'nodemailer';
import AWS from 'aws-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Set up AWS SES credentials
    AWS.config.update({
        accessKeyId: 'AKIAWWLCFS6FGCYSPNP6',
        secretAccessKey: 'ubVohlD0mJEL3CxKh02vjzg40IojmiN2WXj/rkV9',
        region: 'eu-north-1', // e.g., 'us-east-1'
    });

    // Create a new Nodemailer transporter using the AWS SES transport
    const transporter = nodemailer.createTransport({
      SES: new AWS.SES({ apiVersion: '2010-12-01' }),
    });

    const { name, company, email, budget, message } = req.body;

    // Create email content
    const emailContent = {
      from: 'cheremnovdv@gmail.com', // Replace with your verified SES email
      to: 'cheremnovdv@gmail.com', // Replace with the recipient's email address
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nBudget: ${budget}\nMessage: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(emailContent);
    console.log('Email sent:', info.messageId);

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'An error occurred while processing the form' });
  }
}
