const express = require("express");
const app = express();
const PORT = 3000;
const expressLayouts = require("express-ejs-layouts");
// const session = require("express-session");


app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(authRoutes);

app.get("/", (req, res) => {
    res.render("home.ejs")
});


app.listen(PORT, () => console.log("Do you love the recipes on port:", PORT, "?"))