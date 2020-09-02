// setup express, body-parser
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

// mongoose setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

// mongoose create Schema
const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String

});

// mongoose give Schema and CRUD methods to Campground
// Campground.create(), Campground.find() Campground.remove(), etc.
const Campground = mongoose.model('Campground', campgroundSchema);

// use and set
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  // Passing campgrounds array of objects from database to campgrounds.ejs view
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log("Oh no, 'find' error!");
      console.log(err);
    } else {
      res.render("campgrounds", { campgrounds: allCampgrounds });
    }
  });
});

app.post("/campgrounds", (req, res) => {
  // get data from form and store it in an object
  // Note: req.body accessible b/c of body-parser
  const name = req.body.name;
  const image = req.body.image;
  // good object destructuring example. { name: name, image: image }
  const newCampground = { name, image }

  // passing newCampground object to mongodb using mongoose syntax
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      // Redirect to campgrounds page. The default redirect is a GET request.
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

// remember to change this when hosted off your local machine
app.listen(3000, (req, res) => {
  console.log("Server running on 3000, sir!");
});
