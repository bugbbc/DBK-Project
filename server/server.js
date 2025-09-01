const express = require('express');
const cors = require('cors');
const { getJson } = require('serpapi');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/search', async (req, res) => {
  const { query } = req.body;
  const apiKey = '5dda07660c568a1eae1eac14f899093193c5e74f051ed265274fe09db429d8ef';

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    const json = await getJson({
      engine: 'google',
      q: query,
      api_key: apiKey,
    });
    res.json(json);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});