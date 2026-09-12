const express = require('express');
const router = express.Router();
const { contactSubmissions } = require('../data/contactSubmissions.js');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.get('/', (req, res) => {
  res.status(200).json(contactSubmissions);
});

router.post('/', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  if (!email || typeof email !== 'string' || !email.trim()) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({ error: 'Enter a valid email address.' });
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const submission = {
    id: String(contactSubmissions.length + 1),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  contactSubmissions.push(submission);

  res.status(201).json({
    message: 'Message sent successfully.',
    submission,
  });
});

module.exports = router;
