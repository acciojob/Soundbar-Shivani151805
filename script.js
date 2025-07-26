const buttons = document.querySelectorAll('.btn');
    const stopBtn = document.querySelector('.stop');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        stopAllSounds();
        const soundName = button.getAttribute('data-sound');
        const audio = new Audio(`sounds/${soundName}.mp3`);
        audio.play();
        audio.setAttribute('data-playing', 'true');
        document.body.appendChild(audio);
      });
    });

stopBtn.addEventListener('click', () => {
      stopAllSounds();
    });

    function stopAllSounds() {
      document.querySelectorAll('audio[data-playing="true"]').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
        audio.remove();
      });
    }