function hidePopScreen()
{
    $('#popScreen').addClass('hide')

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/music/Arvian Dwi - Melepas Lajang Ft Tri Suaka (mp3cut.net).mp3');
    
    audioElement.play()

    audioElement.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}