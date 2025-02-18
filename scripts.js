function openModal(imageId, description, videoSource) {
    // Get modal and elements for image, description, and video
    var modal = document.getElementById("imageModal");
    var modalVideo = document.getElementById("modalVideo");
    var modalDescription = document.getElementById("modalDescription");
    var modalDescriptionTitle = document.getElementById("modalDescriptionTitle");
  
    // Set the video source and description
    modalVideo.src = videoSource;  // Set the video source dynamically
    modalDescription.innerText = description;  // Set the description text
    modalDescriptionTitle.innerText = imageId;  // Set title dynamically (e.g., 'Image 1')
  
    // Display the modal
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("imageModal");
    var modalVideo = document.getElementById("modalVideo");
  
    // Stop the video when the modal is closed
    modalVideo.pause();
    modalVideo.currentTime = 0;
  
    // Hide the modal
    modal.style.display = "none";
  }



// Initialize Typed.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typing animation
    new Typed('#typed-quote', {
        strings: ['\"Whatever your hand finds to do, do it with all your might...\" Ecclesiastes 9:10'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 5000,
        startDelay: 1000
    });
    // Music player functionality
    const playBtn = document.querySelector('.play-btn');
    let isPlaying = false;

    playBtn?.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playBtn.innerHTML = `<i data-lucide="${isPlaying ? 'pause' : 'play'}"></i>`;
        lucide.createIcons();
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});



        // Playlist Functionality
        const playlist = [
            { title: "Creation", artist: "Chat.GPT ft DeepSeek", file: "Te Kai bwara room (1).mp3" },
            { title: "Fika mai le pese Kiribati Cover", artist: "Garden Rootz", file: "Mwamwatie.mp3" },
            { title: "Beat", artist: "Fav-song", file: "Dj_Settler_Project_-_Le..mp3" },
        ];
        
        const playlistElement = document.getElementById('playlist');
        const currentSongTitle = document.getElementById('current-song-title');
        const currentSongArtist = document.getElementById('current-song-artist');
        const audioElement = document.getElementById('audio-player'); // HTML <audio> element
        
        playlist.forEach((song, index) => {
            const playlistItem = document.createElement('div');
            playlistItem.classList.add('playlist-item');
            playlistItem.innerHTML = `
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            `;
            playlistItem.addEventListener('click', () => {
                currentSongTitle.textContent = song.title;
                currentSongArtist.textContent = song.artist;
                
                // Set the audio source to the selected song
                audioElement.src = song.file;
                audioElement.play();  // Play the song automatically
            });
            playlistElement.appendChild(playlistItem);
        });


        
