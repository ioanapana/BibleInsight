/**
 * Bible Routes module.
 *
 * This module provides routes for searching and navigating the Bible, as well as fetching a list of books.
 * It interacts with the Bible SuperSearch API (https://api.biblesupersearch.com/) to fetch the data.
 *
 * @module bibleRoutes
 */

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Base URL for the API
const API_BASE_URL = 'https://api.biblesupersearch.com/api';

/**
 * Route to search for verses containing a specific text.
 *
 * @name GET /search
 * @param {string} text - The text to search for in the verses.
 * @param {string} [bible=cornilescu] - The Bible version to search in (default: "cornilescu").
 * @returns {Object} The data from the API response.
 */
router.get('/search', async (req, res) => {
  try {
    const { text, bible = 'cornilescu' } = req.query;
    const response = await axios.get(
      `${API_BASE_URL}?bible=${bible}&search=${text}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error in /search route:', error);
    res.status(500).send('An error occurred while searching for verses');
  }
});

/**
 * Route to navigate to a specific book and chapter in the Bible.
 *
 * @name GET /navigate
 * @param {string} reference - The book and chapter of the Bible to navigate to.
 * @param {string} [bible=cornilescu] - The Bible version to navigate in (default: "cornilescu").
 * @returns {Object} The data from the API response.
 */
router.get('/navigate', async (req, res) => {
  try {
    const { reference, bible = 'cornilescu' } = req.query;
    const response = await axios.get(
      `${API_BASE_URL}?bible=${bible}&reference=${reference}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error in /navigate route:', error);
    res.status(500).send('An error occurred while navigating the Bible');
  }
});

/**
 * Route to fetch the list of books in the Bible.
 *
 * @name GET /books
 * @param {string} [bible=cornilescu] - The Bible version to fetch books for (default: "cornilescu").
 * @returns {Object} The data from the API response.
 */
router.get('/books', async (req, res) => {
  try {
    const { bible = 'cornilescu' } = req.query;
    const response = await axios.get(`${API_BASE_URL}/books?bible=${bible}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error in /books route:', error);
    res.status(500).send('An error occurred while fetching the list of books');
  }
});

module.exports = router;
