//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

let currentAudio = null;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const soundName = button.innerText.toLowerCase();

    if (soundName === 'stop') {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
      }
    } else {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      currentAudio = new Audio(`sounds/${soundName}.mp3`);
      currentAudio.play();
    }
  });
});
