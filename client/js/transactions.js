//

"use strict";

//

var today = new Date();

var dd = String(today.getDate()).padStart(2, "0");

var mm = String(today.getMonth() + 1).padStart(2, "0");

var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

class Transaction {
  constructor(Date, Description, Category, Type, Amount) {
    this.Date = Date;

    this.Description = Description;

    this.Category = Category;

    this.Type = Type;

    // this.Amount = Amount.toFixed(2);
    this.Amount = parseFloat(Amount).toFixed(2);
    // this.Amount = Amount;
  }
}

var transactions = [];

function displayTransactions(transactions) {
  // var transactionsObj = transactions;

  $("transactionRows").innerHTML = transactions

    .reverse()
    .map(
      (transaction) =>
        `<tr>            
                <td>${transaction.Date}</td>
                <td>${transaction.Description}</td>
                <td>${transaction.Type}</td>
                <td class="text-end fw-semibold ${
                  transaction.Type === "Debit" ? "text-danger" : "text-primary"
                }">$${Number(
          transaction.Amount["$numberDecimal"]
        ).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</td>
        </tr>`
    )
    .join("");
}

var availableBalance = 0;

function displayAvailableBalance(transactions) {
  transactions.forEach(function (transaction) {
    // var transactionType = transaction.Type;

    if (transaction.Type == "Credit") {
      availableBalance += +transaction.Amount["$numberDecimal"];
    } else {
      availableBalance += +transaction.Amount["$numberDecimal"];
    }
  });

  if (availableBalance < 0.0) {
    $("availableBalanceArea").innerHTML =
      "<span style='color:red'>" +
      availableBalance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      "</span>";

    $("availableBalanceArea2").innerHTML =
      "<span style='color:red'>" +
      availableBalance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      "</span>";
  } else {
    $("availableBalanceArea").innerHTML = availableBalance.toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );

    $("availableBalanceArea2").innerHTML = availableBalance.toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );
  }
}

function withdrawal() {
  if (availableBalance <= 0.0) {
    alert("Unable to request a withdrawal due to zero or negative funds.");

    return;
  } else {
    var withdrawalAmount = parseFloat(
      prompt("How much would you like to withdrawal? ")
    );

    if (withdrawalAmount > availableBalance) {
      alert("Insufficient funds.");

      return;
    } else {
      if (twoDecTest(withdrawalAmount) == false) {
        alert("Please enter a valid number.");

        return;
      } else {
        availableBalance += -withdrawalAmount;
      }

      if (availableBalance < 0.0) {
        $("availableBalanceArea").innerHTML =
          "<span style='color:red'>" +
          availableBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) +
          "</span>";

        $("availableBalanceArea2").innerHTML =
          "<span style='color:red'>" +
          availableBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) +
          "</span>";
      } else {
        $("availableBalanceArea").innerHTML = availableBalance.toLocaleString(
          undefined,
          { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        );

        $("availableBalanceArea2").innerHTML = availableBalance.toLocaleString(
          undefined,
          { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        );
      }

      var transaction = new Transaction(
        `${today}`,
        `Withdrawal`,
        `Uncategorized`,
        `Debit`,
        "-" + withdrawalAmount
      );

      var xmlhttp = new XMLHttpRequest();

      xmlhttp.open(
        "POST",
        "https://titancommunitybank.herokuapp.com/transactions",
        true
      );

      xmlhttp.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );

      xmlhttp.send(JSON.stringify(transaction));

      //////////////////////////////////////////////

      xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          transactions = JSON.parse(this.responseText);

          displayTransactions(transactions);
        }
      };

      xmlhttp.open(
        "GET",
        "https://titancommunitybank.herokuapp.com/transactions",
        true
      );

      xmlhttp.send();
    }
  }
}

function deposit() {
  var depositAmount = parseFloat(
    prompt("How much would you like to deposit? ")
  );

  if (twoDecTest(depositAmount) == false) {
    alert("Please enter a valid number.");

    return;
  } else {
    availableBalance += +depositAmount;

    $("availableBalanceArea").innerHTML = availableBalance.toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );

    $("availableBalanceArea2").innerHTML = availableBalance.toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );
  }

  if (availableBalance < 0.0) {
    $("availableBalanceArea").innerHTML =
      "<span style='color:red'>" +
      availableBalance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      "</span>";

    $("availableBalanceArea2").innerHTML =
      "<span style='color:red'>" +
      availableBalance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      "</span>";
    /////////////////////////////////////////////
    //   } else {
    //     $("availableBalanceArea").innerHTML =
    //       "<h4>" + "Available balance: $" + availableBalance.toFixed(2) + "</h4>";
    /////////////////////////////////////////////
  } else {
    $("availableBalanceArea").innerHTML = availableBalance.toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );
    /////////////////////////////////////////////
    $("availableBalanceArea2").innerHTML = availableBalance.toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    );
  }
  /////////////////////////////////////////////

  var transaction = new Transaction(
    `${today}`,
    `Deposit`,
    `Credit`,
    `Credit`,
    depositAmount
  );

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open(
    "POST",
    "https://titancommunitybank.herokuapp.com/transactions",
    true
  );

  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.send(JSON.stringify(transaction));

  /////////////////////////////////////////////

  xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      transactions = JSON.parse(this.responseText);

      displayTransactions(transactions);
    }
  };

  xmlhttp.open(
    "GET",
    "https://titancommunitybank.herokuapp.com/transactions",
    true
  );

  xmlhttp.send();
}

window.onload = function () {
  var xmlhttp = new XMLHttpRequest();
  var transactions;

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      transactions = JSON.parse(this.responseText);

      displayTransactions(transactions);

      displayAvailableBalance(transactions);
    }
  };

  xmlhttp.open(
    "GET",
    "https://titancommunitybank.herokuapp.com/transactions",
    true
  );

  xmlhttp.send();

  $("btnWithdrawal").onclick = withdrawal;

  $("btnDeposit").onclick = deposit;
};
