const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const volumeSlider = document.getElementById('volume-slider');

const playlist = ['song1.mp3', 'song2.mp3', 'song3.mp3']; // Replace with your actual song URLs
let currentSongIndex = 0;
let mediaSource = new MediaSource();
let sourceBuffer;

audioPlayer.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener('sourceopen', handleSourceOpen);

function handleSourceOpen() {
  const mime = 'audio/mpeg'; // MIME type for MP3 files
  sourceBuffer = mediaSource.addSourceBuffer(mime);
  loadSong(currentSongIndex);
}

function loadSong(index) {
  fetch(playlist[index])
    .then(response => response.arrayBuffer())
    .then(data => {
      sourceBuffer.appendBuffer(data);
    })
    .catch(error => console.error('Error loading song:', error));
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
  resetSourceBuffer();
  loadSong(currentSongIndex);
  playSong();
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  resetSourceBuffer();
  loadSong(currentSongIndex);
  playSong();
}

function resetSourceBuffer() {
  mediaSource.removeSourceBuffer(sourceBuffer);
  sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
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

// Initial setup
audioPlayer.volume = volumeSlider.value;
