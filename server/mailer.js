import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const fromAddress = `"${process.env.FROM_NAME || 'PAYIVVA Technologies'}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`;

export const sendMail = async ({ to, subject, html, text }) => {
  const info = await transporter.sendMail({
    from: fromAddress,
    to,
    subject,
    html,
    text: text || '',
  });
  return info;
};

export const sendAdminNotification = async ({ subject, html }) => {
  return sendMail({
    to: process.env.COMPANY_EMAIL,
    subject,
    html,
  });
};
