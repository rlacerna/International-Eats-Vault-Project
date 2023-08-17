const mongoose = require("../db/connection");

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredient: String,
  cookingTime: Number,
  preparation: String,
  servingSize: Number,
  servedCold: Boolean,
});

const Recipe = new mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;