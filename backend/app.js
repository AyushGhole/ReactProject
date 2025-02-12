// ENV Declarations
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Declaring cloud databases
const dbUrl = process.env.ATLAS_URL;

// Requiring the node packages
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const passport = require("passport"); //passport declaration
const LocalStrategy = require("passport-local"); //passport-local declaration
const cors = require("cors");

// Making Frontend and Backend Connection
app.use(cors());
// Store Creation Declarations
const Store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

Store.on("error", (err) => {
  console.log("Error in MongoDB session store:", err);
});

// Sessions Declarations
const sessionOptions = {
  store: Store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // Fixed cookie expiration calculation
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// Middlewares
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Fixed dirname
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(paywayUser.authenticate()));
// passport.serializeUser(paywayUser.serializeUser());
// passport.deserializeUser(paywayUser.deserializeUser());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public"))); // Fixed dirname

// MongoDb Connection
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log("connection error", err);
  });

// Demo  Testing
app.get("/getDta", (req, res) => {
  res.send("Anika Ayush Ghole");
});

// Port Declaration
app.listen(5000, () => {
  console.log("Server is listening to port 5000");
});
