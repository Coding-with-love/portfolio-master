const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    let { email, name, message, role, org, more, done, price, launch, inquiryType } = req.body;

    if (!email || !name || !message || !inquiryType) {
        return res.status(400).json({ error: "Email, Name, Message, and Inquiry Type are required fields." });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailDetails = {
        from: 'loveconnor2005@gmail.com',
        to: 'loveconnor2005@gmail.com',
        subject: `New ${inquiryType} Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nRole: ${role || 'N/A'}\nOrganization: ${org || 'N/A'}\nWhat to be done: ${done || 'N/A'}\nAdditional Details: ${more || 'N/A'}\nPrice Range: ${price || 'N/A'}\nTarget Launch: ${launch || 'N/A'}\nMessage: ${message || 'N/A'}`,
    };

    try {
        let info = await transporter.sendMail(mailDetails);
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error in sending email: ', error);
        res.status(500).json({ error: 'Error in sending email' });
    }

});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
