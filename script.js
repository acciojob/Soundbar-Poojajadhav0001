//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

// प्रत्येक बटणावर क्लिक इव्हेंट
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    stopSounds(); // आधीचे आवाज थांबव
    const soundName = btn.textContent; // बटणावरचं नाव उदा. applause
    const audio = new Audio(`./sounds/${soundName}.mp3`);
    audio.play(); // आवाज वाजवा
  });
});

// stop बटणावर क्लिक झाल्यावर सगळे आवाज थांबवणे
stopButton.addEventListener("click", stopSounds);

function stopSounds() {
  // सगळे आवाज थांबवण्यासाठी सर्व audio elements मिळवा
  const allAudios = document.querySelectorAll("audio");
  allAudios.forEach((a) => {
    a.pause();
    a.currentTime = 0;
  });
}
