const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // For using environment variables
console.log(process.env) // remove this after you've confirmed it is working

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "index" directory
app.use(express.static(path.join(__dirname, 'iLearn.ng')));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Outlook',
    auth: {
        user: process.env.EMAIL_USER, // Using environment variables
        pass: process.env.EMAIL_PASS  // Using environment variables
    }
});

// Endpoint to handle score submission
app.post('/send-score', (req, res) => {
    const { email, score, totalQuestions } = req.body;

    if (!email || !score || !totalQuestions) {
        return res.status(400).json({ success: false, message: 'Invalid input' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Quiz Score',
        text: `You scored ${score} out of ${totalQuestions}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Error sending email' });
        }
        console.log('Email sent:', info.response);
        res.json({ success: true, message: 'Email sent successfully' });
    });
});

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'iLearn.ng', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});