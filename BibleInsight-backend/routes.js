const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * Route to search for verses containing a specific text.
 * @param {string} text - The text to search for in the verses.
 * @param {string} [bible=cornilescu] - The Bible version to search in (default: "cornilescu").
 */
router.get('/search', async (req, res) => {
  try {
    const { text, bible = 'cornilescu' } = req.query;
    const response = await axios.get(
      `https://api.biblesupersearch.com/api?bible=${bible}&search=${text}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error in /search route:', error.message);
    res.status(500).send(error.message);
  }
});
/**
 * Route to navigate to a specific book and chapter in the Bible.
 * @param {string} reference - The book and chapter of the Bible to navigate to.
 * @param {string} [bible=cornilescu] - The Bible version to navigate in (default: "cornilescu").
 */
router.get('/navigate', async (req, res) => {
  try {
    const { reference, bible = 'cornilescu' } = req.query;
    const response = await axios.get(
      `https://api.biblesupersearch.com/api?bible=${bible}&reference=${reference}`
      //k`${this.apiUrl}/api/navigate?bible=${bible}&reference=${book}${chapter}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/**
 * Route to fetch the list of books in the Bible.
 * @param {string} [bible=cornilescu] - The Bible version to fetch books for (default: "cornilescu").
 */
router.get('/books', async (req, res) => {
  try {
    const { bible = 'cornilescu' } = req.query;
    const response = await axios.get(
      `https://api.biblesupersearch.com/api/books?bible=${bible}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
