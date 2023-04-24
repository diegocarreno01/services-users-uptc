const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes
app.use(require("./routes/app"));

// Public
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log("server on port: ", app.get("port"));
});
