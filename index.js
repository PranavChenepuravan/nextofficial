// server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL pool setup
const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'lavender', // change this if needed
  database: 'nxt_db',
});

app.use(cors());
app.use(express.json());

// Login API
app.post('/login', async (req, res) => {
  const { name, pass } = req.body;

  if (!name || !pass) {
    return res.status(400).json({ success: false, message: 'Missing name or password' });
  }

  try {
    const query = 'SELECT * FROM public.users WHERE name = $1 AND pass = $2';
    const result = await pool.query(query, [name, pass]);

    if (result.rowCount > 0) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
