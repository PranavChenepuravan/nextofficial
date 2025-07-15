# Node.js Express App with CORS

This project is a simple Node.js application using Express and CORS middleware.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- Express.js server
- CORS enabled for all routes

## Customization
Modify `index.js` to add more routes or change CORS settings as needed.



DB Related data 

  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: '', // change this if needed
  database: 'nxt_db',



DB Create query

CREATE TABLE IF NOT EXISTS public.users
(
    name text COLLATE pg_catalog."default",
    pass text COLLATE pg_catalog."default"
)
