
let pageViewsData = ["10K", "50K", "100K", "500K", "1M"];
let perMonthData = [8, 12, 16, 24, 36];
let slider = document.getElementById('price-slider');

let pageView = document.getElementById('pageview');
let pricePerMonth = document.getElementById('price');

let billingToggle = document.getElementById('billing-toggle');
let isYearly = false;

slider.addEventListener('input', function() {
    updateValue();

    pageView.innerHTML = pageViewsData[slider.value];
    // pricePerMonth.innerHTML = perMonthData[slider.value]; // found the culprit!!!


    let value = this.value * 25;
    this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`;
});

billingToggle.addEventListener("change", function () {
    if (isYearly == false) {
      isYearly = true;
    } else {
      isYearly = false;
    }
    updateValue();
});
  
function updateValue() {
    if (isYearly) {
      pricePerMonth.innerHTML = perMonthData[slider.value] * 0.75;
    } else {
      pricePerMonth.innerHTML = perMonthData[slider.value];
    }
}



// CHECKING VARIABLE ///

// function checkStatus() {
//     if (isYearly) {
//         console.log("It's true");
//     } else {
//         console.log("It's false");
//     }
// }

// let intervalId = setInterval(checkStatus, 1000);

// setTimeout(() => {
//     isYearly = true;
//   }, 5000);


// function updateValue() {
//     let discountedPrice = perMonthData[slider.value] * 0.75;
//     let standardPrice = perMonthData[slider.value];

//     if (yearlyBilling) {
//         pricePerMonth.innerHTML = discountedPrice;
//     } else {
//         pricePerMonth.innerHTML = standardPrice;
//     }
// }

