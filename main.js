const hourBox = document.querySelector(".hour-box");
const minuteBox = document.querySelector(".minute-box");
const secondBox = document.querySelector(".second-box");
setInterval(() => {
  const myTime = new Date();
  const getHour = myTime.getHours();
  const getMinute = myTime.getMinutes();
  const getSecond = myTime.getSeconds();

  hourBox.innerHTML = getHour;
  minuteBox.innerHTML = getMinute;
  secondBox.innerHTML = getSecond;
  if (getHour < 10) {
    hourBox.innerHTML = "0" + getHour;
  }
  if (getMinute < 10) {
    minuteBox.innerHTML = "0" + getMinute;
  }
  if (getSecond < 10) {
    secondBox.innerHTML = "0" + getSecond;
  }
}, 1000);
