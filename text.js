const easySentences = [
  "The sun is shining",
  "I like ice cream",
  "Dogs are loyal animals",
  "Water is essential for life ",
  "Reading books is enjoyable",
  "Birds chirp in the morning",
  "Soccer is a popular sport",
  "My favorite color is blue",
  "Apples are red or green",
  "I enjoy watching movies",
  "The world is full of beauty",
  "Let's go for a walk",
  "Music can lift your mood",
  "Time flies when you're having fun",
  "Be kind to one another",
  "Exercise is good for health",
  "Family comes first",
  "Laughter is contagious",
  "Pizza is a tasty treat",
  "Flowers bloom in spring",
  "The beach is a relaxing place",
  "Learning is a lifelong journey",
  "Cooking can be therapeutic",
  "Dreams can come true",
  "Nature is a wonderful thing",
  "We should recycle more",
  "Mountains are majestic",
  "Cats make great pets",
  "The moon shines at night",
  "Helping others is important",
  "Travel broadens the mind",
  "Friendship is valuable",
  "Books open doors to imagination",
  "Rain can be soothing",
  "The Earth is our home",
  "Winter brings snow and joy",
  "Tea or coffee? Choose wisely",
  "Artistic expression is diverse",
  "A smile brightens the day",
  "Breakfast is the most important meal",
  "The wind whispers secrets",
  "Happiness is a choice",
  "Plants need water to grow",
  "Watching the stars is mesmerizing",
  "All you need is love",
  "Hugs are comforting",
  "The internet connects us all",
  "Dreams fuel ambition",
  "Sunsets are breathtaking",
  "Never give up on your dreams",
  "I go to school.",
  "She loves ice cream.",
  "The bird sings sweetly.",
  "He plays soccer.",
  "The flowers smell nice.",
  "They swim in the pool.",
  "She reads books.",
  "He cooks delicious food.",
  "The sun sets in the west.",
  "The cat meows softly.",
];

const normalSentences = [
  "Coding requires practice and patience",
  "The quick brown fox jumps over the lazy dog",
  "Learning new skills is challenging yet rewarding",
  "Music can be a form of therapy for the soul",
  "Innovation drives progress and inspires change",
  "Success is the result of hard work and determination",
  "Education is the key to a brighter future",
  "Hard work pays off in the end",
  "Challenge yourself to be better every day",
  "Communication is essential for understanding",
  "Science continues to unravel mysteries",
  "The world is full of endless possibilities",
  "Adaptability is crucial in a changing world",
  "Empathy fosters compassion and connection",
  "Curiosity fuels discovery and innovation",
  "The internet revolutionized the way we live",
  "Global issues require global solutions",
  "Creativity knows no bounds",
  "Patience is a virtue worth cultivating",
  "Teamwork makes the dream work",
  "Health is wealth, so take care of yourself",
  "Knowledge is power, so keep learning",
  "Challenges make you stronger",
  "Purpose gives meaning to life",
  "Unity brings strength and harmony",
  "Change is inevitable, embrace it",
  "Resilience is the key to overcoming obstacles",
  "Balance is essential for well-being",
  "Diversity enriches our collective experience",
  "Kindness is a language everyone understands",
  "Leadership inspires and motivates",
  "Technology shapes the future",
  "Self-care is not selfish, it's necessary",
  "Forgiveness sets you free",
  "Progress is made one step at a time",
  "Mindfulness brings peace and clarity",
  "Dream big, work hard, achieve greatness",
  "Ambition drives you towards your goals",
  "Perseverance is the path to success",
  "Optimism brightens even the darkest days",
  "Courage conquers fear",
  "Innovation leads to transformation",
  "Empowerment starts from within",
  "Quality over quantity, always",
  "Team spirit builds strong bonds",
  "Knowledge shared is knowledge multiplied",
  "Mr. Jock, TV quiz PhD, bags few lynx.",
  "Waxy and quivering, jocks fumble the pizza.",
  "A very big box arrived on Friday.",
  "The square pegs overflowed the round hole.",
  "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",
  "How quickly daft jumping zebras vex!",
  "Fox nymphs grab quick-jived waltz.",
  "The five boxing wizards jump quickly.",
  "Six big devils from Japan quickly forgot how to waltz.",
  "Crazy Fredericka bought many very exquisite opal jewels.",
];

// Hard Level Sentences (continued)
const hardSentences = [
  "Quantum physics is a mind-boggling field of study that challenges understanding",
  "Achieving mastery in any discipline takes dedication, hard work, and perseverance",
  "Solving complex problems requires analytical thinking and creative solutions",
  "Perseverance is the key to success, especially in the face of adversity",
  "Understanding human behavior is a multifaceted and fascinating endeavor",
  "The universe is vast and mysterious, calling for exploration and discovery",
  "Philosophy delves into the depths of existence and meaning",
  "Environmental sustainability is crucial for the future of our planet",
  "Artificial intelligence is shaping the way we interact with technology",
  "Biotechnology holds the promise of revolutionary advancements in healthcare",
  "Psychology uncovers the intricacies of the human mind",
  "Economic theories underpin global financial systems",
  "Space exploration pushes the boundaries of human capability and knowledge",
  "Medical research continues to improve treatments and save lives",
  "Historical events shape the present and influence the future",
  "Political discourse shapes the policies that govern our societies",
  "Legal frameworks provide the structure for justice and order",
  "Social justice movements seek to create a more equitable world",
  "Literature reflects the human experience through storytelling",
  "Climate change poses a significant threat to our planet's future",
  "Genetic diversity is essential for the survival of species",
  "Digital privacy is a growing concern in our interconnected world",
  "The intersection of art and technology sparks innovation",
  "Cultural heritage must be preserved for future generations",
  "Quantitative analysis reveals patterns in data and information",
  "Critical thinking is fundamental to making informed decisions",
  "Economic inequality has wide-reaching societal impacts",
  "Technological advancements have revolutionized communication",
  "Ethical considerations are paramount in scientific research",
  "Human rights must be protected and upheld for all individuals",
  "The power of storytelling lies in its ability to inspire and connect",
  "Globalization has transformed the way we interact and trade",
  "Renewable energy offers a sustainable alternative to fossil fuels",
  "The principles of democracy form the basis of modern governance",
  "The digital divide exacerbates disparities in access to information",
  "Cognitive dissonance challenges our beliefs and perceptions",
  "Bioethics addresses moral dilemmas in medical practices",
  "Emerging technologies hold both promise and peril for society",
  "The quest for knowledge drives scientific exploration",
  "Social media has reshaped how we communicate and consume information",
  "Environmental conservation is a shared responsibility",
  "Innovation without ethics can lead to unintended consequences",
  "The human brain is a complex and fascinating organ",
  "Technological disruptions transform industries and economies",
  "Space colonization presents both challenges and opportunities",
  "The pursuit of happiness is a fundamental human right",
  "Cryptocurrencies redefine the concept of currency and value",
  "Humanitarian efforts alleviate suffering and promote dignity ",
  "Success usually comes to those who are too busy to be looking for it.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Dream it. Wish it. Do it.",
  "Difficult roads often lead to beautiful destinations.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Push yourself because no one else is going to do it for you.",
  "You are never too old to set another goal or to dream a new dream.",
];

const lvls = {
  Easy: 3,
  Normal: 2,
  Hard: 1,
};

const lvlsArray = {
  Easy: easySentences,
  Normal: normalSentences,
  Hard: hardSentences,
};

let sentencesArray = lvlsArray[level];
let defaultLevelSeconds = lvls[level];
let correctChar = 0;

lvlNameSpan.innerHTML = level;
secondsSpan.innerHTML = defaultLevelSeconds * 60;
timeLeftSpan.innerHTML = defaultLevelSeconds * 60;

// Start Game
startButton.onclick = function () {
  input.value = "";
  finishMessage.innerHTML = "";
  timeLeftSpan.innerHTML = defaultLevelSeconds * 60;
  correctChar = 0;
  startButton.style.display = "none";
  input.disabled = false;
  input.focus();
  let start = setInterval(() => {
    timeLeftSpan.innerText--;
    if (timeLeftSpan.innerText == 0) {
      input.disabled = true;
      startButton.style.display = "block";
      startButton.innerHTML = "Play Again";
      let wpm = Math.round(scoreGot.innerText / 5 / defaultLevelSeconds);
      let span = document.createElement("span");
      span.className = "good";
      span.innerText = `You type with the speed of : ${wpm} WPM`;
      finishMessage.appendChild(span);
      clearInterval(start);
    }
  }, 1000);
  genText();
};

let genText = () => {
  let randomSentences =
    sentencesArray[Math.floor(Math.random() * sentencesArray.length)];
  // Get Index Random Word
  let indexSentence = sentencesArray.indexOf(randomSentences);
  // Remove Word Feom Array
  sentencesArray.splice(indexSentence, 1);
  theWord.innerText = randomSentences;
  upcomingTexts.innerHTML = "";
  for (let i = 0; i < sentencesArray.length; i++) {
    let Div = document.createElement("div");
    Div.innerText = sentencesArray[i];
    upcomingTexts.appendChild(Div);
  }
};

let correct = document.getElementById(`correct`);

input.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    event.preventDefault();
    const mainText = theWord.innerText;
    const inputValue = input.value.trim();
    if (inputValue == mainText.substring(0, mainText.indexOf(" "))) {
      theWord.innerText = mainText.replace(inputValue + " ", "");
      correct.innerText += inputValue + " ";
      correctChar += inputValue.length + 1;
      scoreGot.innerText = correctChar;
      input.value = "";
    } else if (mainText.indexOf(" ") == -1 && inputValue == mainText) {
      correctChar += inputValue.length + 1;
      scoreGot.innerText = correctChar;
      correct.innerText = "";
      input.value = "";
      if (sentencesArray.length > 0) {
        genText();
      } else {
        input.disabled = true;
        startButton.style.display = "block";
        startButton.innerHTML = "Play Again";
        let wpm = Math.round(scoreGot.innerText / 5 / defaultLevelSeconds);
        let span = document.createElement("span");
        span.className = "good";
        span.innerText = `You type with the speed of : ${wpm} WPM`;
        finishMessage.appendChild(span);
      }
    }
  }
});
