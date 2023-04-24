const express = require("express");
// Modelo DB
const userUptc = require("../models/modelUser");
// conexion Database
const pool = require("../settings/db");

let listUsers = async (req, res) => {
  const answer = await userUptc.find({});
  res.send(answer);
};

let addUser = async (req, res) => {
  const body = req.body;
  // const answer = await userUptc.create(body);
  userUptc.create(body);
  // res.send("agregado");
  res.redirect("https://google.com");
};

module.exports = {
  listUsers,
  addUser,
};
