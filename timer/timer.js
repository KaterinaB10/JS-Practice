const timer = setTimeout(function () {
  console.log("5 seconds past");
}, 5000);

function timerOf() {
  console.log("10 seconds past");
}

let timerOff = setTimeout(timerOf, 10000);

clearInterval();

timerOff = setInterval(timerOf, 12000);
