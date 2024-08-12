const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the DUVI API!');
});

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:3
    000/`);
});
