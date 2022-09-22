//jshint esversion:6

const _ = require("lodash");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/:urlPath", (req, res) => {
    const urlPath = req.params.urlPath;
    res.render(urlPath.replace('/', ''));
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, ()=> {
    console.log("Server has started successfully");
});