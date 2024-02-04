// Import Nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rushikeshtekale918@gmail.com',  // Your Gmail email address
        pass: 'Rushi7887'           // Your Gmail password
    }
});
 
// Define email content
let mailOptions = {
    from: 'rushikeshtekale918@gmail.com',
    to: 'rushikeshtekale918@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email from Node.js using Nodemailer.'
};

// Send email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
