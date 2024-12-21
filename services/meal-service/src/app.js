const express = require('express');
const mealPlan = require('./routes/mealPlan');
const meal= require('./routes/meals');
const groceryLists = require('./routes/groceryLists');
const app = express();
app.use(express.json());
app.get('/discover',meal.discover);
app.post('/meals', mealPlan.addOrUpdateMealPlan); // Add or Update Meal Plan
app.get('/mealsplan', mealPlan.getMealPlansWeek); // Get Meal Plan
app.get('/grocerylists', groceryLists.generateList);

sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Unable to connect to PostgreSQL:', err));

// Routes
app.get('/', (req, res) => res.send('Meal Service is running'));

// Start server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Meal Service running on port ${PORT}`));
