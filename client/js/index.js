//

"use strict";

//

var banner = [
  ["#", "./img/atm.jpg"],

  ["#", "./img/bankapp.jpg"],

  ["#", "./img/bankgraph.jpg"],

  ["#", "./img/safedeposit.jpg"],
];

function shuffle(a) {
  var j, x, i;

  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));

    x = a[i];

    a[i] = a[j];

    a[j] = x;
  }

  return a;
}

var adContainer = document.getElementById("ad-container");
var currentBannerIndex = 0;

function changeBanner() {
  currentBannerIndex++;
  if (currentBannerIndex >= banner.length) {
    currentBannerIndex = 0;
  }

  var a = document.createElement("a");
  a.href = banner[currentBannerIndex][0];
  a.target = "#";
  a.rel = "nofollow";

  var img = document.createElement("img");
  img.className = "ad-img";
  img.src = banner[currentBannerIndex][1];
  img.alt = "300x250 Banner Ad";

  a.appendChild(img);
  adContainer.innerHTML = "";
  adContainer.appendChild(a);

  setTimeout(changeBanner, 4000);
}

changeBanner();
