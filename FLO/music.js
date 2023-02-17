const playMusic = document.querySelector(".play_music img");
const musicAudio = document.createElement("audio");

const HIDDEN_SONG = "auto_play_music";

function onAutoPlay() {
    musicAudio.src = "audio/Say I Love You.mp3";
    musicAudio.autoplay = true;

    document.body.appendChild(musicAudio);
}

function offAutoPlay() {
    musicAudio.src = "audio/Say I Love You.mp3";
    musicAudio.autoplay = false;

    document.body.appendChild(musicAudio);
}

function checkAction() {
    const check = playMusic.className;

    if (check !== HIDDEN_SONG) {
        playMusic.classList.add(HIDDEN_SONG);
        onAutoPlay();
    } else {
        playMusic.classList.remove(HIDDEN_SONG);
        offAutoPlay();
    }    
}

playMusic.addEventListener("click", checkAction);
