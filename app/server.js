"use strict";

// Import the required modules.

const express = require("express");

const path = require("path");

const app = express();

const mongoose = require("mongoose");

// CORS was enabled for API development purposes before merging the front end with the back end.
// It is not currently being used.

// const cors = require("cors");

// Define the middleware for the CORS policy. Set the origin to "*" to allow all origin requests.
// Currently set to allow all requests for development purposes.

// const corsOptions = {
//   origin: "*", // -- to discover the origin you need, disable this and run the app, then check the devtools console for the origin that was blocked.
//   // credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// Define the middleware for the CORS policy.
// app.use(cors(corsOptions)); // Use this after the variable declaration

// Establish the port for the server to listen for requests.
// Currently configured per Heroku specs.
const port = app.listen(process.env.PORT || 5000);

// const port = 5000;

// Establish the MongoDB URI const to connect to MongoDB.
const dbURI = // ******************** your MongoDB URI goes here ********************
  // Setup the MongoDB connection with the Mongoose schema.
  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

    .then((result) => console.log("\n\nConnected to db.\n\n"))

    .then((result) => app.listen(port))

    .then((result) =>
      console.log(`The server has started and is listening on port number: 

                ${port}\n\n`)
    )

    .catch((err) => console.log(err));

// Establish the transactions const for the API route.
const transactions = require("../routes/transactions");

// Define the middleware for the API route.
app.use(express.json());

// Define the API route for transactions.
app.use("/transactions", transactions);

// Serve static files from the "common" directory
// app.use(express.static(path.join(__dirname, "../client/common")));

// Serve static files from the "css" directory.
app.use("/css", express.static(path.join(__dirname, "../client/css")));

// Serve static files from the "js" directory.
app.use("/js", express.static(path.join(__dirname, "../client/js")));

// Serve static files from the "img" directory.
app.use("/img", express.static(path.join(__dirname, "../client/img")));

// Define a route for the home page.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// Define a route for the home page "redirect."
app.get("/index.html", (req, res) => {
  res.redirect("/");
});

// Define a route for the account page.
app.get("/common/account.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/common/account.html"));
});

// Define a route for the login page.
app.get("/common/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/common/login.html"));
});

// Define a route for the pre-qualify page.
app.get("/common/prequalify.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/common/prequalify.html"));
});

// Define a route for the sign up page.
app.get("/common/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/common/register.html"));
});

// Define a route for the reset password page.
app.get("/common/resetpw.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/common/resetpw.html"));
});

// Define a route for the spending trends page.
app.get("/common/spendingtrends.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/common/spendingtrends.html"));
});

// Handle 404 errors.
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../client/common/error.html"));
});

console.log("");
