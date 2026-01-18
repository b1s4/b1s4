<div align="center">
  
  <!-- Custom CSS -->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Space+Mono:wght@400;700&display=swap');
    
    body {
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #0d1117;
      color: #c9d1d9;
      margin: 0;
      padding: 1rem;
      line-height: 1.5;
    }
    
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 2rem 1rem;
      text-align: center;
    }
    
    h1 {
      font-family: 'Space Mono', monospace;
      font-size: 2.5rem;
      font-weight: 700;
      margin: 1rem 0 0.5rem;
      color: #ffffff;
    }
    
    .location-wrapper {
      display: inline-flex;
      align-items: center;
      color: #8b949e;
      text-decoration: none;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
    }
    
    .location-wrapper:hover {
      color: #58a6ff;
    }
    
    .loc-icon {
      fill: currentColor;
      margin-right: 0.25rem;
    }
    
    .music-player {
      display: flex;
      align-items: center;
      background: #161b22;
      border-radius: 8px;
      padding: 0.75rem 1rem;
      margin: 1.5rem auto;
      max-width: 300px;
      text-align: left;
      border: 1px solid #30363d;
    }
    
    .music-cover {
      width: 48px;
      height: 48px;
      border-radius: 4px;
      margin-right: 1rem;
      object-fit: cover;
    }
    
    .music-info {
      flex: 1;
    }
    
    .music-title {
      font-weight: 600;
      font-size: 0.95rem;
      margin-bottom: 0.15rem;
    }
    
    .music-artist {
      font-size: 0.85rem;
      opacity: 0.8;
    }
    
    .play-button {
      background: none;
      border: none;
      color: #c9d1d9;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    
    .play-button:hover {
      background: rgba(240, 246, 252, 0.1);
      color: #58a6ff;
    }
    
    .icon {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
    
    .links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      max-width: 400px;
      margin: 0 auto;
    }
    
    .link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 6px;
      color: #c9d1d9;
      text-decoration: none;
      transition: all 0.2s ease;
      font-size: 0.95rem;
    }
    
    .link:hover {
      background: #161b22;
      border-color: #58a6ff;
      color: #58a6ff;
    }
    
    .text {
      text-transform: lowercase;
    }
    
    .arrow {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: bold;
      margin-left: 0.5rem;
    }
    
    #msg-card {
      position: fixed;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: #161b22;
      color: #c9d1d9;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      border: 1px solid #30363d;
      font-size: 0.9rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
    
    #msg-card.show {
      opacity: 1;
    }
  </style>

  <!-- Profile Image -->
  <img src="https://cdn.pixelvault.co/io9rt1r0tv6i7jqar9jhhzcwl?filename=profile.jpeg" alt="b1s4 profile picture" width="150" style="border-radius: 50%; border: 3px solid #30363d;" />

  <!-- Name -->
  <h1>b1s4</h1>

  <!-- Location -->
  <a href="https://www.google.com/maps/search/?api=1&query=37.366122,25.059035" target="_blank" rel="noopener noreferrer" class="location-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="loc-icon" aria-hidden="true">
      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z">
      </path>
    </svg>
    <span>37.366122 25.059035</span>
  </a>

  <!-- Music Player -->
  <div class="music-player">
    <img src="cover.webp" alt="Love cover" class="music-cover">
    <div class="music-info">
      <div class="music-title">Love</div>
      <div class="music-artist">Clarent</div>
    </div>
    <button id="play-btn" class="play-button" aria-label="Play Love">
      <svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" class="icon play-icon" role="presentation" aria-hidden="true">
        <path d="M10.345 23.287c.415 0 .763-.15 1.22-.407l12.742-7.404c.838-.481 1.178-.855 1.178-1.46 0-.599-.34-.972-1.178-1.462L11.565 5.158c-.457-.265-.805-.407-1.22-.407-.789 0-1.345.606-1.345 1.57V21.71c0 .971.556 1.577 1.345 1.577z" fill-rule="nonzero" />
      </svg>
      <svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" class="icon pause-icon" style="display: none;" role="presentation" aria-hidden="true">
        <path d="M13.293 22.772c.955 0 1.436-.481 1.436-1.436V6.677c0-.98-.481-1.427-1.436-1.427h-2.457c-.954 0-1.436.473-1.436 1.427v14.66c-.008.954.473 1.435 1.436 1.435h2.457zm7.87 0c.954 0 1.427-.481 1.427-1.436V6.677c0-.98-.473-1.427-1.428-1.427h-2.465c-.955 0-1.428.473-1.428 1.427v14.66c0 .954.473 1.435 1.428 1.435h2.465z" fill="currentColor" fill-rule="nonzero" />
      </svg>
    </button>
  </div>

  <!-- Links -->
  <div class="links">
    <a href="https://discord.com/users/1325884318970544128" target="_blank" rel="noopener noreferrer" class="link">
      <span class="text">discord</span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>
    
    <a href="https://vacban.wtf/members/127707/" target="_blank" rel="noopener noreferrer" class="link">
      <span class="text">vacban</span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>
    
    <a href="https://steamcommunity.com/id/b1s4/" target="_blank" rel="noopener noreferrer" class="link">
      <span class="text">steam</span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>
    
    <a href="https://github.com/b1s4" target="_blank" rel="noopener noreferrer" class="link">
      <span class="text">gitHub</span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>
    
    <a href="#" id="email-link" class="link">
      <span class="text">email</span>
      <span class="arrow" aria-hidden="true">→</span>
    </a>
  </div>

</div>

<!-- Toast Notification -->
<div id="msg-card" role="status" aria-live="polite">email copied</div>

<!-- JavaScript -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Email copy functionality
    const emailLink = document.getElementById('email-link');
    const msgCard = document.getElementById('msg-card');
    
    if (emailLink) {
      emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        const email = 'im@b1s4.xyz';
        navigator.clipboard.writeText(email).then(() => {
          // Show toast notification
          msgCard.classList.add('show');
          setTimeout(() => {
            msgCard.classList.remove('show');
          }, 2000);
        });
      });
    }
    
    // Music player functionality
    const playBtn = document.getElementById('play-btn');
    const playIcon = playBtn?.querySelector('.play-icon');
    const pauseIcon = playBtn?.querySelector('.pause-icon');
    const audio = new Audio('https://github.com/b1s4/b1s4/raw/main/love.mp3');
    
    if (playBtn && audio) {
      let isPlaying = false;
      
      playBtn.addEventListener('click', function() {
        if (isPlaying) {
          audio.pause();
          playIcon.style.display = 'block';
          pauseIcon.style.display = 'none';
        } else {
          audio.play().catch(e => console.log('Playback failed:', e));
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'block';
        }
        isPlaying = !isPlaying;
      });
      
      // Handle audio end
      audio.addEventListener('ended', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        isPlaying = false;
      });
    }
  });
</script>
