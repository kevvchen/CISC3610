'use script'

let currentAudio;

function playSound(fileName) {
    pauseSound();
    const audio = new Audio(fileName)
    audio.play();
    currentAudio = audio;
}

function pauseSound() {
    if (currentAudio) currentAudio.pause()
}

function resumeSound() {
    if (currentAudio) currentAudio.play()
}