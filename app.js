const colors = ["red", "orange", "green", "black", "yellow", "blue", "purple", "white", "pink", "gray"];

const spellRus = ["красный", "оранжевый", "зелёный", "чёрный", "жёлтый", 
                  "синий", "фиолетовый", "белый", "розовый", "серый"];
				  
const spellArm = ["կարմիր", "նարնջագույն", "կանաչ", "սեւ", "դեղին", "կապույտ", 
                  "մանուշակագույն", "սպիտակ ", "վարդագույն", "մոխրագույն"];
				  
const speechEng = ["eng/redEng.mp3", "eng/orangeEng.mp3", "eng/greenEng.mp3", "eng/blackEng.mp3", "eng/yellowEng.mp3", 
                   "eng/blueEng.mp3", "eng/purpleEng.mp3", "eng/whiteEng.mp3", "eng/pinkEng.mp3", "eng/grayEng.mp3" ];
				   
const speechRus = ["rus/redRus.mp3", "rus/orangeRus.mp3", "rus/greenRus.mp3", "rus/blackRus.mp3", "rus/yellowRus.mp3", 
                   "rus/blueRus.mp3", "rus/purpleRus.mp3", "rus/whiteRus.mp3", "rus/pinkRus.mp3", "rus/grayRus.mp3" ];
				   
const speechArm = ["arm/redArm.mp3", "arm/orangeArm.mp3", "arm/greenArm.mp3", "arm/blackArm.mp3", "arm/yellowArm.mp3", 
                   "arm/blueArm.mp3", "arm/purpleArm.mp3", "arm/whiteArm.mp3", "arm/pinkArm.mp3", "arm/grayArm.mp3" ];				  

let unit = document.querySelectorAll (".rnb");
console.log(unit);

let bd = document.querySelector("body");
let activeTh; // Номер нажатой Th

for (let i = 0; i < colors.length; i++) {
  unit[i].addEventListener ("click", function() {
  activeTh = i;  // запоминаем номер нажатой li
  bd.style.backgroundColor = colors[i];
  txt.innerHTML = ""; 
  });
};

let lng = document.querySelectorAll(".lng");
let txt = document.querySelector(".txt");
let sound = document.createElement("audio");
console.log(lng);

lng[0].addEventListener ("click", function() {
	txt.innerHTML = colors[activeTh]; 
	sound.src = speechEng[activeTh];
	sound.play()
});
	
lng[1].addEventListener ("click", function() {
	txt.innerHTML = spellRus[activeTh];
    sound.src = speechRus[activeTh];
	sound.play()	
});
	
lng[2].addEventListener ("click", function() {
	txt.innerHTML = spellArm[activeTh];
	sound.src = speechArm[activeTh];
	sound.play()
});