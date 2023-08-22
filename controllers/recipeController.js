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
      name: "Birria Tacos",
      description: "Birria is traditionally a spicy and super savory Mexican beef or goat stew that is slow cooked until the meat is tender and fall-apart juicy and delicious.",
      ingredient: "Beef, Dried Guajillo Peppers, Chipotle peppers in adobo, Mexican oregano, Tortillas",
      cookingTime: 360,
      preparation: "Slow Cooker, sear the meat and then pour in the sauce and broth. Set it to “high” and cook for 6 to 7 hours.",
      servingSize: 4,
    },
    {
      name: "Fettuccine Alfredo",
      description: "Fettuccine Alfredo or fettuccine al burro is an Italian pasta dish of fresh fettuccine tossed with butter and parmesan.",
      ingredient: "Pasta, Cream, Butter, Parmesan",
      cookingTime: 20,
      preparation: "Cook the pasta, melt the butter and cream together on the stove, season, and stir in the cheese. Toss the pasta in the cheese sauce.",
      servingSize: 2,
    },
    {
      name: "General Tso Chicken",
      description: "General Tso Chicken is saucy, juicy and crispy. The signature sauce is thick and loaded with flavor.",
      ingredient: "Chicken, Garlic, Ginger, Pepper flakes, Soy sauce",
      cookingTime: 25,
      preparation: "Fry the chicken until golden brown and then toss it in the sauce.",
      servingSize: 2,
    },
  ]);
  res.send(seededRecipes)
});


module.exports = router;
