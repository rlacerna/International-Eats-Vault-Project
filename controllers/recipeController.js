const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe.js");

router.get("/", async (req, res) => {
    let recipes = await Recipe.find();
  res.render("recipe/index.ejs", { recipes });
});

router.get("/new", (req, res) => {
  res.render("recipe/new.ejs");
});

router.get("/:id/edit", async (req, res) => {
  const id = req.params.id;
  const recipe = await Recipe.findById(id);
  res.render("recipe/edit.ejs", { recipe });
});

router.post("/", async (req, res) => {
  req.body.params = req.body.params 
  await Recipe.create(req.body);
  res.redirect("/recipe");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const recipe = await Recipe.findById(id);
  res.render("recipe/show.ejs", { recipe });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  req.body.body = req.body.body
  await Recipe.findByIdAndUpdate(id, req.body, { new: true });
  res.redirect("/recipe");
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Recipe.findByIdAndRemove(id);
  res.redirect("/recipe");
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
