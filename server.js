const express = require("express");
const app = express();
const PORT = 3000;
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");

const authRoutes = require("./controllers/authController");

app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(expressLayouts);
app.use(
  session({ secret: "secretrecipe", cookie: { maxAge: 3600000 } })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRoutes);

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/recipe", (req, res) => {
    res.render("recipe/index.ejs")
})

app.listen(PORT, () =>
  console.log("Do you love the recipes on port:", PORT, "?")
);