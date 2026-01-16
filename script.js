 const sounds = ['applause','boo','gasp','tada','victory','wrong'];
        const buttons = document.getElementById('buttons');

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
                const el = document.getElementById(sound);
                el.currentTime = 0;

                const p = el.play();
                if(p && typeof p.catch === 'function') p.catch(() => {});

            });
        })