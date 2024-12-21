const express = require("express");
const axios = require("axios");

const router = express.Router();
const SPOONACULAR_API_KEY = "your_spoonacular_api_key";

// Get Meals by Dietary Preferences
router.discover = async (req, res) => {
  try {
    const { diet } = req.query; // e.g., diet=vegan
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&apiKey=${SPOONACULAR_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching meal recipes" });
  }
};

module.exports = router;
