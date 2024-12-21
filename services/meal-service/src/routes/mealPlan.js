const express = require("express");
const MealPlan = require("../models/MealPlan");

const router = express.Router();

// Add or Update Meal Plan
router.addOrUpdateMealPlan = async (req, res) => {
  try {
    const { userId, week, meals } = req.body;
    const mealPlan = await MealPlan.upsert({ userId, week, meals });
    res.json(mealPlan);
  } catch (error) {
    res.status(500).json({ error: "Error saving meal plan" });
  }
};

// Get Meal Plan
router.getMealPlansWeek = async (req, res) => {
  try {
    const { userId } = req.query;
    const { week } = req.params;
    const mealPlan = await MealPlan.findOne({ where: { userId, week } });
    if (!mealPlan) {
      return res.status(404).json({ error: "Meal plan not found" });
    }
    res.json(mealPlan);
  } catch (error) {
    res.status(500).json({ error: "Error fetching meal plan" });
  }
};

module.exports = router;
