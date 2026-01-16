
  const sounds = ['applause','boo','gasp','tada','victory','wrong'];
  const buttons = document.getElementById('buttons');

  function stopSounds() {
    sounds.forEach((sound) => {
      const el = document.getElementById(sound);
      if (!el) return;
      el.pause();
      el.currentTime = 0;
    });
  }

  sounds.forEach((sound) => {
    const audio = document.createElement('audio');
    audio.id = sound;
    audio.src = `./sounds/${sound}.mp3`;
    document.body.appendChild(audio);

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = sound;

    btn.addEventListener('click', () => {
      stopSounds();
      audio.currentTime = 0;
      audio.play();
    });

    buttons.appendChild(btn);
  });

  const stopBtn = document.createElement('button');
  stopBtn.className = 'stop';
  stopBtn.textContent = 'Stop';
  stopBtn.addEventListener('click', stopSounds);
  buttons.appendChild(stopBtn);

