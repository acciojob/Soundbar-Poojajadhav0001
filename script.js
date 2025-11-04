//your JS code here. If required.
const applause = new Audio("sounds/applause.mp3");
const bao = new Audio("sounds/bao.mp3");
const gasp = new Audio("sounds/gasp.mp3");
const tada = new Audio("sounds/tada.mp3");
const victory = new Audio("sounds/victory.mp3");
const wrong = new Audio("sounds/wrong.mp3");

function stopAllSounds() {
  applause.pause(); applause.currentTime = 0;
  bao.pause(); bao.currentTime = 0;
  gasp.pause(); gasp.currentTime = 0;
  tada.pause(); tada.currentTime = 0;
  victory.pause(); victory.currentTime = 0;
  wrong.pause(); wrong.currentTime = 0;
}

document.querySelector(".btn:nth-child(1)").onclick = () => { stopAllSounds(); applause.play(); };
document.querySelector(".btn:nth-child(2)").onclick = () => { stopAllSounds(); bao.play(); };
document.querySelector(".btn:nth-child(3)").onclick = () => { stopAllSounds(); gasp.play(); };
document.querySelector(".btn:nth-child(4)").onclick = () => { stopAllSounds(); tada.play(); };
document.querySelector(".btn:nth-child(5)").onclick = () => { stopAllSounds(); victory.play(); };
document.querySelector(".btn:nth-child(6)").onclick = () => { stopAllSounds(); wrong.play(); };

document.querySelector(".stop").onclick = stopAllSounds;
