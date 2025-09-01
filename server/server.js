const express = require('express');
const cors = require('cors');
const { getJson } = require('serpapi');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/search', async (req, res) => {
  const { query } = req.body;
  const apiKey = '5dda07660c568a1eae1eac14f899093193c5e74f051ed265274fe09db429d8ef';
  console.log(`Received search query: ${query}`);

  try {
    const searchParams = {
      engine: 'google',
      q: query,
      api_key: apiKey,
    };

    const searchResults = await getJson(searchParams);
    console.log('Received search results from SerpApi');

    const firstResult = searchResults.organic_results?.[0];

    if (firstResult && firstResult.link) {
      console.log(`Scraping URL: ${firstResult.link}`);
      try {
        const { data } = await axios.get(firstResult.link);
        const $ = cheerio.load(data);
        const mainContent = $('body').text().replace(/\s\s+/g, ' ').trim();
        console.log('Successfully scraped and processed content.');
        res.json({ content: mainContent });
      } catch (scrapeError) {
        console.error('Error scraping website:', scrapeError);
        res.status(500).json({ error: 'Failed to scrape the website' });
      }
    } else {
      console.log('No organic results found, returning standard response.');
      res.json({ content: "Sorry, I couldn't find any relevant information." });
    }
  } catch (error) {
    console.error('Error performing search:', error);
    res.status(500).json({ error: 'Something went wrong with the search' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});