
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');

    const urlParams = new URLSearchParams(window.location.search);
    const audioUrl = urlParams.get('audio');
    if (audioUrl) {
        audio.src = audioUrl;
    }
});