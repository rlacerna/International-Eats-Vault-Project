const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe.js");

router.get("/", async (req, res) => {
    let recipes = await Recipe.find();
  res.render("recipe/index.ejs", { recipes });
});

router.get("/seed", async (req, res) => {
  let seededRecipes = await Recipe.create([
    {
      name: "Orange Chicken",
      description: "Tangy flavored and perfectly fried",
      ingredient: "Chicken, seasonings, soy sauce",
      cookingTime: 20,
      preparation: "Fry first and then toss in the sauce",
      servingSize: 2,
      servedCold: false,
    },
    {
      name: "Lemon Chicken",
      description: "Lemony flavored and perfectly fried",
      ingredient: "Chicken, seasonings, soy sauce",
      cookingTime: 15,
      preparation: "Fry first and then toss in the sauce",
      servingSize: 2,
      servedCold: false,
    },
    {
      name: "General Tso Chicken",
      description: "Heavy tangy flavored and perfectly fried",
      ingredient: "Chicken, seasonings, soy sauce",
      cookingTime: 25,
      preparation: "Fry first and then toss in the sauce",
      servingSize: 2,
      servedCold: false,
    },
  ]);
  res.send(seededRecipes)
});

module.exports = router;
