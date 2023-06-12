//

"use strict";

//

let transactions = [];

const categories = [
  "Shopping",
  "Uncategorized",
  // "Credit",
  "Personal",
  "Bills & Utilities",
  "Health & Wellness",
  "Professional Services",
  "Gas",
  "Home",
  "Groceries",
  "Food & Drink",
];

const renderChart = (transactions) => {
  let categoryTotals = {};
  let i = 0;
  for (i = 0; i < categories.length; i++) {
    categoryTotals[categories[i]] = 0;
  }

  for (i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let category = transaction.Category;
    let amount = parseFloat(transaction.Amount["$numberDecimal"]);

    categoryTotals[category] += -amount;
  }

  const ctx = document.getElementById("myChart").getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: categories,
      datasets: [
        {
          data: Object.values(categoryTotals),
          backgroundColor: [
            "#541954",
            "#be45e2",
            "#0a64a6",
            "#3bc3ff",
            "#cefdee",
            "#26c386",
            "#25dd57",
            "#7aaa13",
            "#eeebc3",
            "#e04100",
          ],
          borderColor: "#ffffff",
        },
      ],
    },
    options: {
      legend: {
        display: true,
        position: "left",
        // align: "start",
        labels: {
          boxWidth: 40,
          padding: 2,
        },
      },
      animation: {
        animateScale: true,
      },
    },
  });
};

window.onload = () => {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      transactions = JSON.parse(this.responseText);

      renderChart(transactions);
    }
  };
  // xmlhttp.open(
  //   "GET",
  //   "https://titancommunitybank.herokuapp.com/transactions",
  //   true
  // );
  xmlhttp.open("GET", "http://localhost:5000/transactions", true);
  xmlhttp.send();
};
