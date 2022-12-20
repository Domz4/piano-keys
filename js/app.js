const keyboard = document.querySelector(".keyboard");
const notes = ["c", "d", "e", "f", "g", "a", "h"];
const init = () => {
  for (let i = 1; i <= 2; i++) {
    for (let j = 0; j < 7; j++) {
      keyboard.appendChild(createKey("white", notes[j], i));
      if (j !== 2 && j !== 6) {
        keyboard.appendChild(createKey("black", notes[j], i));
      }
    }
  }
};
const createKey = (color, note, oct) => {
  let key = document.createElement("button");
  key.className = `piano_key note_${color}`;

  let text = (key.dataset.letterNote =
    color === "white" ? note + oct : note + "#" + oct).toUpperCase();
  let fileName = (key.dataset.letterNoteFileName =
    color === "white" ? note + oct : note + "S" + oct);

  key.textContent = text;

  let audio = document.createElement("audio");
  audio.src = `../audio/${fileName}.wav`;
  key.appendChild(audio);
  key.addEventListener("click", (e) => {
    if(key.repeat) return
    audio.currentTime = 0;
    audio.play();
  });
  return key;
};
init();
