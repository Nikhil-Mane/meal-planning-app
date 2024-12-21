const express = require("express");
const MealPlan = require("../models/MealPlan");

const router = express.Router();

// Generate Grocery List
router.generateList = async (req, res) => {
  try {
    const { userId, week } = req.query;
    const mealPlan = await MealPlan.findOne({ where: { userId, week } });

    if (!mealPlan) {
      return res.status(404).json({ error: "Meal plan not found" });
    }

    const groceryList = mealPlan.meals.reduce((list, meal) => {
      meal.ingredients.forEach((ingredient) => {
        if (!list[ingredient.category]) {
          list[ingredient.category] = [];
        }
        list[ingredient.category].push(ingredient.name);
      });
      return list;
    }, {});

    res.json(groceryList);
  } catch (error) {
    res.status(500).json({ error: "Error generating grocery list" });
  }
};

module.exports = router;
