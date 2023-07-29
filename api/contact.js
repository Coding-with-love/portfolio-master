const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
  origin: 'https://www.connorlove.com', // replace with your origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // respond OK to OPTIONS request
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Added GET endpoint for testing
app.get('/', (req, res) => {
  res.send("Server is running correctly");
});

app.post('/', async (req, res) => {
  let { email, name, message, role, org, more, done, price, launch, inquiryType } = req.body;

  let mailTransporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'loveconnor2005@outlook.com',
      pass: 'Cando145!',
    }
  });

  let mailDetails = {
    from: 'loveconnor2005@outlook.com',
    to: 'loveconnor2005@gmail.com',
    subject: `Inquiry from ${name}`,
    text: `Email: ${email}\nName: ${name}\nMessage: ${message}\nInquiry Type: ${inquiryType}`,
  };

  if (inquiryType === 'Business') {
    mailDetails.text += `\nRole: ${role}\nOrganization: ${org}\nMore: ${more}\nDone: ${done}\nPrice: ${price}\nLaunch: ${launch}`;
  }

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log('Error Occurs', err);
      res.status(500).json({ error: err });
    } else {
      console.log('Email sent successfully');
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

// Export the server middleware
module.exports = app;
