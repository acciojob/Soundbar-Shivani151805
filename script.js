const buttons = document.querySelectorAll('.btn');
    const stopBtn = document.querySelector('.stop');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        stopAllSounds();
        const soundId = button.getAttribute('data-sound');
        const audio = document.getElementById(soundId);
        if (audio) {
          audio.currentTime = 0;
          audio.play();
        }
      });
    });
stopBtn.addEventListener('click', stopAllSounds);

    function stopAllSounds() {
      document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }