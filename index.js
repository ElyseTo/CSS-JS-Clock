const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  if (seconds == 59) {
    secondHand.style.transition = "none";
  } 
  else if (seconds == 2) {
    secondHand.style.transition = "all 0.5s";
  }
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = (hours / 12) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  console.log(seconds);
}
setInterval(setDate, 1000);
