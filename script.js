//your JS code here. If required.
// 1️⃣ सर्व sound names एका array मध्ये ठेवा
const sounds = ["applause", "bao", "gasp", "tada", "victory", "wrong"];

// 2️⃣ प्रत्येक sound साठी Audio object तयार करा
const audios = sounds.map(sound => new Audio(`sounds/${sound}.mp3`));

// 3️⃣ सर्व आवाज बंद करणारी function
function stopAllSounds() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// 4️⃣ प्रत्येक बटणावर click event लावा
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    stopAllSounds();
    audios[index].play();
  });
});

// 5️⃣ stop बटणासाठी event
document.querySelector(".stop").addEventListener("click", stopAllSounds);
