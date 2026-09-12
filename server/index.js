require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/projects', require('./routes/projects.js'));
app.use('/api/contact', require('./routes/contact.js'));

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({ error: message });
});

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});