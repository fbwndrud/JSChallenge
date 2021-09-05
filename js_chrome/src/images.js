function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + 1);
  }
  const number = getRandomInt(1, 6);
  const urlpath = `url(images/${number}.jpg)`;
  document.body.style.background = urlpath;
  document.body.style.backgroundSize = "cover";
  