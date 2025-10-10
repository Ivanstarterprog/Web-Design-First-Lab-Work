window.addEventListener('load', (event) => {
    const video = document.getElementById('blog_video');
    const playButton = document.getElementById('articlePlayButton');
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
        } else {
            video.pause();
        }
    });

    video.addEventListener("click", function(){
        video.pause();
    })

    video.addEventListener('pause', function() {
        playButton.style.display = 'block';
    });
    
    video.addEventListener('ended', function() {
        playButton.style.display = 'block';
    });
})