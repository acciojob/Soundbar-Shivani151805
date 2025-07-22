const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

    const buttonsContainer = document.getElementById('buttons');

    sounds.forEach(sound => {
      const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.innerText = sound;

      btn.addEventListener('click', () => {
        stopAllSounds();
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
        // Store playing audio in DOM for stopping
        document.body.appendChild(audio);
      });
		buttonsContainer.appendChild(btn);
    });

const stopBtn = document.createElement('button');
    stopBtn.classList.add('stop');
    stopBtn.innerText = 'stop';

    stopBtn.addEventListener('click', () => {
      stopAllSounds();
    });

    buttonsContainer.appendChild(stopBtn);

    function stopAllSounds() {
      document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
        audio.remove();
      });
	}