// api/sendEmail.js

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { email, name, message, role, org, more, done, price, launch } = req.body;

  const content = {
    to: 'YOUR_EMAIL_HERE',
    from: email,
    subject: `New Message From ${name}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent');
  }
}
