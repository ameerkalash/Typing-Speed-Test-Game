const urlparam = new URLSearchParams(window.location.search);
let level = urlparam.get("level");
let type = urlparam.get("type");

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".theTextSpan");
let input = document.querySelector(".input");
let upcomingTexts = document.querySelector(".upcoming-text");
let timeLeftSpan = document.querySelector(".time .timeLeft");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

input.onpaste = () => {
  return false;
};
input.disabled = true;
