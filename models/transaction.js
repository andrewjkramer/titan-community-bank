"use strict";

// Import the required modules.

const { Decimal128 } = require("mongodb");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define the transaction schema.
const transactionSchema = new Schema(
  {
    Date: {
      type: String,

      required: true,
    },

    Description: {
      type: String,

      required: true,
    },

    Category: {
      type: String,

      required: true,
    },

    Type: {
      type: String,

      required: true,
    },

    Amount: {
      type: Decimal128,

      required: true,
    },
  },

  { timestamps: true }
);

// Establish const named Transaction to export the transaction schema.
const Transaction = mongoose.model("Transaction", transactionSchema);

// Export the Transaction const.
module.exports = Transaction;
