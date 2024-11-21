let mx = Math.max;
let mn = Math.min;

// let a = 8,
//   b = 3,
//   c = 7;
// console.log(mn(mn(mx(a, b), mx(b, c)), mx(a, c)));
// console.log(mn(mx(a, b), mx(mn(a, b), c)));

const easyWords = [
  "Cat",
  "Dog",
  "Sun",
  "Blue",
  "Happy",
  "Jump",
  "Tree",
  "Smile",
  "Run",
  "Book",
  "Ball",
  "Sweet",
  "Song",
  "Laugh",
  "Friend",
  "Sleep",
  "Rain",
  "Play",
  "Green",
  "Bird",
  "Fast",
  "Small",
  "Star",
  "Car",
  "Moon",
  "Soft",
  "Walk",
  "Red",
  "Kind",
  "Clean",
  "Cook",
  "Help",
  "Open",
  "Calm",
  "Love",
  "Cute",
  "True",
  "Magic",
  "Fresh",
  "Brave",
  "Bold",
  "Clear",
  "Glow",
  "Hope",
  "Peace",
  "Sunny",
  "Swift",
];

const normalWords = [
  "Program",
  "Coding",
  "Keyboard",
  "Developer",
  "Website",
  "Challenge",
  "Algorithm",
  "Design",
  "Function",
  "Language",
  "Computer",
  "Software",
  "Debugging",
  "Testing",
  "Variable",
  "Framework",
  "Syntax",
  "Frontend",
  "Backend",
  "Database",
  "Network",
  "Security",
  "Responsive",
  "Interface",
  "Repository",
  "Agile",
  "Iteration",
  "Application",
  "Information",
  "Technology",
  "Scripting",
  "Automation",
  "Platform",
  "Integration",
  "Deployment",
  "Optimization",
  "Webpage",
  "Authentication",
  "Authorization",
  "Encryption",
  "Performance",
  "Replication",
  "Virtualization",
  "Prototype",
  "Collaboration",
  "Architecture",
];

const hardWords = [
  "Galaxy",
  "Extraterrestrial",
  "Spectacular",
  "Unprecedented",
  "Meticulous",
  "Phenomenon",
  "Incomprehensible",
  "Astronomical",
  "Revolutionary",
  "Unparalleled",
  "Inconceivable",
  "Unfathomable",
  "Inextricable",
  "Impenetrable",
  "Unyielding",
  "Indomitable",
  "Inscrutable",
  "Insurmountable",
  "Unassailable",
  "Inestimable",
  "Unconquerable",
  "Intransigent",
  "Unwavering",
  "Inviolable",
  "Unbending",
  "Incalculable",
  "Invincible",
  "Dazzling",
  "Unrelenting",
  "Indefatigable",
  "Unshakeable",
  "Incomparable",
  "Incalculable",
  "Uncompromising",
  "Invulnerable",
  "Unassailable",
  "Irrepressible",
  "Unalterable",
  "Inquisitive",
  "Unflinching",
  "Ineffable",
  "Unswerving",
  "Unerring",
  "Illustrious",
  "Monumental",
  "Unforgettable",
];

const lvls = {
  Easy: 9,
  Normal: 7,
  Hard: 5,
};

const lvlsArray = {
  Easy: easyWords,
  Normal: normalWords,
  Hard: hardWords,
};

let wordsArray = lvlsArray[level];

scoreTotal.innerHTML = wordsArray.length;
let defaultLevelSeconds = lvls[level];

lvlNameSpan.innerHTML = level;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;

// Start Game
startButton.onclick = function () {
  startButton.style.display = "none";
  input.disabled = false;
  input.focus();
  genWords();
};

let genWords = () => {
  let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  // Get Index Random Word
  let indexWord = wordsArray.indexOf(randomWord);
  // Remove Word Feom Array
  wordsArray.splice(indexWord, 1);
  theWord.innerHTML = randomWord;
  upcomingTexts.innerHTML = "";
  for (let i = 0; i < wordsArray.length; i++) {
    let Div = document.createElement("div");
    Div.innerText = wordsArray[i];
    upcomingTexts.appendChild(Div);
  }
  startPlay();
};

let startPlay = () => {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  finishMessage.innerHTML = "";
  input.value = "";
  let start = setInterval(() => {
    timeLeftSpan.innerText--;
    if (theWord.innerHTML === input.value) {
      clearInterval(start);
      input.value = "";
      scoreGot.innerHTML++;
      if (wordsArray.length > 0) {
        genWords();
      } else {
        input.disabled = true;
        startButton.style.display = "block";
        startButton.innerHTML = "Play Again";
        let span = document.createElement("span");
        span.className = "good";
        span.innerHTML = "Very Good";
        finishMessage.appendChild(span);
      }
    }
    if (timeLeftSpan.innerText == 0) {
      clearInterval(start);
      if (theWord.innerHTML === input.value) {
        input.value = "";
        scoreGot.innerHTML++;
        if (wordsArray.length > 0) {
          genWords();
        } else {
          input.disabled = true;
          startButton.style.display = "block";
          startButton.innerHTML = "Play Again";
          let span = document.createElement("span");
          span.innerHTML = "Very Good";
          span.className = "good";
          finishMessage.appendChild(span);
        }
      } else {
        input.disabled = true;
        startButton.style.display = "block";
        startButton.innerHTML = "Play Again";
        let span = document.createElement("span");
        span.innerHTML = "Game Over";
        span.className = "bad";
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
};
