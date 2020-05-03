const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

let timestamp = new Date();
let seconds = timestamp.getSeconds();
let minutes = timestamp.getMinutes();
let hours = timestamp.getHours();
console.log(seconds);
console.log(minutes);
console.log(hours);



if (seconds < 30) {
  let rotation = (6 * (30 - seconds));
  secondHand.style.transform = `rotateZ(-${rotation}deg)`;
}
if (seconds > 30) {
  let rotation = (6 * (seconds - 30));
  secondHand.style.transform = `rotateZ(${rotation}deg)`;
}

const secondTick = function () {
  let counter = 6
  setInterval(function () {

    secondHand.style.transform = `rotateZ(${counter}deg)`;
    counter += 6;

  }, 1000);
}

const minuteTick = function () {
  let counter = 0.1
  setInterval(function () {

    minuteHand.style.transform = `rotateZ(${counter}deg)`;
    counter += 0.1;

  }, 1000);
}

const hourTick = function () {
  //inaccurate...0.00833 repeating...how to account for this?
  let counter = 0.00833
  setInterval(function () {

    minuteHand.style.transform = `rotateZ(${counter}deg)`;
    counter += 0.00833;

  }, 1000);
}

//secondTick();
minuteTick();
hourTick();




