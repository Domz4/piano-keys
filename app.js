const keys = document.querySelectorAll(".key");
const audio = document.querySelector("#audio");

keys.forEach((key) => {
  key.addEventListener("click", () => play(key));
});

const play = (note) => {
  audio.currentTime = 0;
  console.log(note.dataset.key)
  audio.src = `./audio/${note.dataset.key}.wav`;
  console.log(audio.src);
  audio.play()
};
