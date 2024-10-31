const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

// Update song information (replace with your actual song data)
songTitle.textContent = 'NENE_NENE_SONG';
artist.textContent = 'CHETAN PAVATE';

// Function to play/pause the audio
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
}

// Event listener for the play/pause button
playPauseBtn.addEventListener('click', togglePlayPause);

// Update the progress bar as the audio plays
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
});

// Handle progress bar changes
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});