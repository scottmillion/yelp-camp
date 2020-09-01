const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const campgrounds = [
  {
    name: "Salmon Creek",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Tallgreen Highlands",
    image:
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Green Hills",
    image:
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
  },
  {
    name: "Salmon Creek",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Tallgreen Highlands",
    image:
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Green Hills",
    image:
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
  },
  {
    name: "Green Hills",
    image:
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
  },
  {
    name: "Salmon Creek",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Tallgreen Highlands",
    image:
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  }
];


app.get("/", (req, res) => {
  res.render("landing");
});

// NOTE!!! REST Api follows this format (google for more info)
// A get and post with same path "/campgrounds". A redirect to "/campgrounds" from post route.
// A "/campgrounds/new" get route. /new being the standard.


app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", (req, res) => {
  //get data from form and add to campgrounds array.
  const name = req.body.name; // req.body accessible because of body-parser
  const image = req.body.image; // req.body accessible because of body-parser
  campgrounds.push({ name, image }); // object destructuring... name: name, image: image.
  //redirect to campgrounds page.
  res.redirect("/campgrounds"); // default redirect is a get request.
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(3000, (req, res) => {
  console.log("Server running on 3000, sir!");
});
