let type = "words";
let level = "Easy";

let chooseLevel = (lvl) => {
  let lvl1 = lvl.substr(0, lvl.length - 3);
  let set = lvl.substr(lvl.length - 2, lvl.length);
  setColor(lvl1, set);
  level = lvl1;
};

let chooseType = (typ) => {
  let typ1 = typ.substr(0, typ.length - 4);
  let set = typ.substr(typ.length - 3, typ.length);
  setColor(typ1, set);
  type = typ1;
};

let setColor = (lvl1, set) => {
  let setColor = document.querySelectorAll(`.${set}`);
  for (const element of setColor) {
    element.style.backgroundColor = "#2196f3";
  }
  document.querySelector(`.${lvl1}`).style.backgroundColor = "#01192d";
};

document.querySelector(".sureChooseBtn").addEventListener("click", () => {
  console.log(type);
  if (type == "texts") {
    window.location = `./text.html?type=${type}&level=${level}`;
  } else {
    window.location = `./index0.html?type=${type}&level=${level}`;
  }
});
