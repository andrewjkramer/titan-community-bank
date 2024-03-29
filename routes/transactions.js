"use strict";

// Import the required modules.

const express = require("express");

const router = express.Router();

const Transaction = require("../models/transaction");

// Define the function to get the transactions.
const getTransactions = (transactions) => transactions;

// Configure the handler for GET requests to /transactions.
router.get("/", async (req, res) => {
  // Get all transactions from the database.
  const transactions = await Transaction.find();

  // Call the getTransactions function.
  getTransactions(transactions);

  // Display Transactions in browser.
  res.send(transactions);

  // Display Transactions in console.
  console.log(transactions);

  res.end();
});

// Configure the handler for POST requests to /transactions.
router.post("/", async (req, res) => {
  try {
    const requiredParams = [
      "Date",
      "Description",
      "Category",
      "Type",
      "Amount",
    ];

    for (const param of requiredParams) {
      if (!req.body[param]) {
        return res.status(400).json({ error: `${param} is required` });
      }
    }

    const transaction = new Transaction({
      Date: req.body.Date,
      Description: req.body.Description,
      Category: req.body.Category,
      Type: req.body.Type,
      Amount: req.body.Amount,
    });

    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Configure the handler for DEL requests to /transactions/:id.
router.delete("/:id", async (req, res) => {
  try {
    await Transaction.deleteOne({ _id: req.params.id });

    res.status(204).send();
  } catch {
    res.status(404);

    res.send({ error: "Transaction doesn't exist!" });
  }
});

module.exports = router;
