const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  const { email, name, message, role, org, more, done, price, launch, inquiryType } = req.body;

  let content;

  if (inquiryType === 'Business') {
    content = {
      to: 'your-email@example.com',
      from: 'your-email@example.com',
      subject: `New Business Message From ${name} - ${email}`,
      text: `Message: ${message}
             Role: ${role}
             Organization: ${org}
             More Details: ${more}
             What Needs to be Done: ${done}
             Price Range: ${price}
             Target Launch: ${launch}`,
      html: `<p>${message}</p>
             <p>${role}</p>
             <p>${org}</p>
             <p>${more}</p>
             <p>${done}</p>
             <p>${price}</p>
             <p>${launch}</p>`
    };
  } else if (inquiryType === 'Personal') {
    content = {
      to: 'your-email@example.com',
      from: 'your-email@example.com',
      subject: `New Personal Message From ${name} - ${email}`,
      text: `Message: ${message}`,
      html: `<p>${message}</p>`
    };
  }

  try {
    await sendgrid.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
};
