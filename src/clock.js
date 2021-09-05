const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const today = new Date();
  clockTitle.innerText = `${today.toLocaleString()}`;
}

getClock();
setInterval(getClock, 1000);
