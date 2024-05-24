const express = require('express');
const router = express.Router();
const pool = require('../db');
const nodemailer = require('nodemailer');

router.post('/create', async (req, res) => {
  try {
    const { issue, category, assigned_to, complainant_email, complainant_phone } = req.body;
    const tracking_number = Math.random().toString(36).substring(2, 15);

    const [result] = await pool.query(
      'INSERT INTO Issues (issue, category, assigned_to, complainant_email, complainant_phone, tracking_number, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [issue, category, assigned_to, complainant_email, complainant_phone, tracking_number, 'Open']
    );

    // Send Email
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: complainant_email,
      subject: 'Issue Tracking Number',
      text: `Your issue has been logged. Your tracking number is ${tracking_number}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).send({ message: 'Issue created successfully', tracking_number });
  } catch (err) {
    if (err.code === 'ER_DATA_TOO_LONG') {
      res.status(400).send({ message: 'Data too long for one of the fields.' });
    } else {
      res.status(500).send({ message: err.message });
    }
  }
});

router.get('/', async (req, res) => {
    try {
        const [issues] = await pool.query('SELECT * FROM Issues');
        res.status(200).json(issues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

  

module.exports = router;
