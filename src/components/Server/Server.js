app.post('/message', (req, res) => {
    const {
        name = '',
        email = '',
        role = '',
        org = '',
        done = '',
        more = '',
        price = '',
        launch = '',
        message = '',
        inquiryType = ''
    } = req.body;

    const mail = {
        from: name,
        to: '24cl8077@medinabees.org',  //Change this to your email address
        subject: 'Contact form message',
        text:
            `Message from: ${name} (${email})
         
         Type of inquiry: ${inquiryType}
         ${inquiryType === 'Business' ? `Role: ${role}
         Organization: ${org}
         What needs to be done: ${done}
         More information: ${more}
         Price range: ${price}
         Target launch: ${launch}` : ''}
         Message: ${message}`
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    });
});
