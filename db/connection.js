const mongoose = require("mongoose");

// mongoose.connect - to tell mongoose what database
mongoose.connect('mongodb+srv://renzlacerna:seicodes@rlacerna.ifp4zvb.mongodb.net/RecipeBook');


// check for error or successful connection
mongoose.connection.on("connected", () => console.log("Start cooking!"));
mongoose.connection.on("error", () => console.log("Burnt!"));

module.exports = mongoose;
