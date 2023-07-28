const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  let { email, name, message, role, org, more, done, price, launch, inquiryType } = req.body;

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password',
    }
  });

  let mailDetails = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks',
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log('Error Occurs', err);
      res.status(500).send(err);
    } else {
      console.log('Email sent successfully');
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
