const words = document.querySelector(".currentTime h1");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min));
}

const listWords = [
  "잣밥같구나",
  "초콜릿 같이 씁쓸한 인생",
  "사랑은 쓰는게 아니야. 느끼는 거야",
  "가다가 5만원 주워라",
  "로또 당첨 기원",
  "아니 이런 귀한곳에 누추한분이",
  "올 때 메로나",
  "방문해 주셔서 감사합니다"
];
const number = getRandomInt(0, listWords.length);
words.innerText = listWords[number];
