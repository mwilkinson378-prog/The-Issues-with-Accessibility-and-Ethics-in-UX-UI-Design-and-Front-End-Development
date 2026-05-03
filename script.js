document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Scroll Effect
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Hero Text Reveal Animation
    const heroTitle = document.querySelector('.display-serif');
    if(heroTitle) {
        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(30px)";
        
        setTimeout(() => {
            heroTitle.style.transition = "all 1s ease-out";
            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";
        }, 300);
    }
});
/**
 * THE ARCHIVE SYSTEM | Video Playlist Controller
 */



const videoPlaylist = ['media/coding.mp4', 'media/video.mp4', 'media/video3.mp4'];
const player = document.getElementById('heroVideo');
let currentIndex = 0;

function playNextVideo() {
    // 1. Trigger the CSS fade out
    player.classList.add('video-fading');

    // 2. Wait for the fade (500ms) before swapping the source
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % videoPlaylist.length;
        
        // Update source and force a reload
        player.src = videoPlaylist[currentIndex];
        player.load();

        // 3. Play the new video
        player.play().then(() => {
            // Fade it back in once it's actually playing
            player.classList.remove('video-fading');
        }).catch(err => {
            console.error("Video failed to play:", err);
        });
    }, 500); 
}

// Listen for the 'ended' event
player.addEventListener('ended', playNextVideo);

// ACCESSIBILITY: Disable autoplay if the user has 'Reduced Motion' enabled
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    player.pause();
    player.removeEventListener('ended', playNextVideo);
}