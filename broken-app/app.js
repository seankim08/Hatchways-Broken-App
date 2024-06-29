const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/', async (req, res, next) => {
  const { developers } = req.body;

  try {
    // Await all promises and get the responses
    const responses = await Promise.all(
      developers.map(d => axios.get(`https://api.github.com/users/${d}`))
    );

    // Map the responses to get the desired output
    const out = responses.map(r => ({
      name: r.data.name,
      bio: r.data.bio
    }));

    res.json(out);
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});