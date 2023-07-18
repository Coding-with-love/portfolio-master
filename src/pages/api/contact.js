import { SuperfaceClient } from '@superfaceai/one-sdk';

const sdk = new SuperfaceClient();

// Check if all required fields are provided
function formValid(body, type) {
    if (type === 'Personal') {
        return body.email && body.message;
    }
    return (
        body.email &&
        body.name &&
        body.role &&
        body.org &&
        body.done &&
        body.more &&
        body.price &&
        body.launch
    );
}

export default async function handler(req, res) {
    console.log("contact.js endpoint accessed");  // Added console.log statement

    const body = req.body;
    const type = body.type; // Assuming you have a 'type' field that holds 'Business' or 'Personal'

    if (!formValid(body, type)) {
        res.status(422).end();
        return;
    }

    const profile = await sdk.getProfile('communication/send-email@2.1.0');
    let message = '';
    if (type === 'Personal') {
        message = `
      Email: ${body.email}
      Message: ${body.message}
    `;
    } else {
        message = `
      Email: ${body.email}
      Name: ${body.name}
      Role: ${body.role}
      Organization: ${body.org}
      Task: ${body.done}
      Details: ${body.more}
      Price: ${body.price}
      Launch Date: ${body.launch}
    `;
    }
    const result = await profile.getUseCase('SendEmail').perform(
        {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: 'Message from contact form',
            text: message,
        },
        {
            provider: 'sendgrid',
            security: {
                bearer_token: {
                    token: process.env.SENDGRID_API_KEY,
                },
            },
        }
    );

    try {
        const data = result.unwrap();
        console.log(data);
        res.status(201).end();
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}
