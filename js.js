const secondHand = document.getElementById("second-hand");




const secondTick = function () {
  let counter = 6
  setInterval(function () {

    secondHand.style.transform = `rotateZ(${counter}deg)`;
    counter += 6;

  }, 1000);
}

secondTick();




