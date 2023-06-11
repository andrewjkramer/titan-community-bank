//

"use strict";

//

////////////////////////////////////////////////
// banner rotates on page load/refresh
////////////////////////////////////////////////

const banner = [
  ["#", "./img/atm.jpg"],
  ["#", "./img/bankapp.jpg"],
  ["#", "./img/bankgraph.jpg"],
  ["#", "./img/safedeposit.jpg"],
];

function shuffle(a) {
  let j, x, i;

  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  return a;
}

shuffle(banner);

const a = document.createElement("a");
a.href = banner[0][0];
a.target = "";
a.rel = "nofollow";

const img = document.createElement("img");
img.className = "ad-img";
img.src = banner[0][1];
img.alt = "300x250 Banner Ad";

a.appendChild(img);
document.getElementById("ad-container").appendChild(a);

////////////////////////////////////////////////
// gif style constant rotating banner
////////////////////////////////////////////////

// const adContainer = document.getElementById("ad-container");
// let currentBannerIndex = 0;

// function changeBanner() {
//   currentBannerIndex++;
//   if (currentBannerIndex >= banner.length) {
//     currentBannerIndex = 0;
//   }

//   let a = document.createElement("a");
//   a.href = banner[currentBannerIndex][0];
//   a.target = "";
//   a.rel = "nofollow";

//   let img = document.createElement("img");
//   img.className = "ad-img";
//   img.src = banner[currentBannerIndex][1];
//   img.alt = "300x250 Banner Ad";

//   a.appendChild(img);
//   adContainer.innerHTML = "";
//   adContainer.appendChild(a);

//   setTimeout(changeBanner, 4000);
// }

// changeBanner();
