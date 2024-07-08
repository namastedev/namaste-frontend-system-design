const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const volumeSlider = document.getElementById('volume-slider');

const playlist = ['song1.mp3', 'song2.mp3', 'song3.mp3']; // Replace with your actual song URLs
let currentSongIndex = 0;

function loadSong(index) {
  audioPlayer.src = playlist[index];
  audioPlayer.load();
}

function playSong() {
  audioPlayer.play();
}

function pauseSong() {
  audioPlayer.pause();
}

function stopSong() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
}

function setVolume(volume) {
  audioPlayer.volume = volume;
}

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
stopButton.addEventListener('click', stopSong);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
volumeSlider.addEventListener('input', (event) => {
  setVolume(event.target.value);
});

// Load the first song on page load
loadSong(currentSongIndex);
