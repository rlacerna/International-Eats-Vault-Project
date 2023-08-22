require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const methodOverride = require('method-override');

const recipeRoutes = require("./controllers/recipeController")
const authRoutes = require("./controllers/authController");
const Recipe = require("./models/recipe.js");

app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressLayouts);
app.use(session({ secret: "secretrecipe", cookie: { maxAge: 720000000 } }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRoutes);

app.get("/", (req, res) => {
  res.render("home.ejs");
});


app.get("/", async (req, res) => {
    let recipes = await Recipe.find();
  res.render("home.ejs", { recipes });
});

// app.get("/recipe", (req, res) => {
//   res.render("recipe/index.ejs");
// });

app.use((req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
    return;
  }
  next();
});

app.use("/recipe",recipeRoutes);

app.listen(PORT, () =>
  console.log("Do you love the recipes on port:", PORT, "?")
);
