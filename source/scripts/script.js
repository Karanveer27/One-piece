
const audio = document.getElementById('onepiece-audio');
const words = document.querySelectorAll('.word');

function highlightText() {
  const currentTime = audio.currentTime;

  words.forEach((word, index) => {
    const wordTime = parseFloat(word.getAttribute('data-time'));
    const nextWordTime = index + 1 < words.length ? parseFloat(words[index + 1].getAttribute('data-time')) : audio.duration;

    word.classList.toggle('highlight', currentTime >= wordTime && currentTime < nextWordTime);
  });
}


audio.addEventListener('play', () => {
  function updateHighlight() {
    highlightText();
    if (!audio.paused) {
      requestAnimationFrame(updateHighlight); 
    }
  }
  updateHighlight(); 
});


document.querySelectorAll('.icon-button').forEach((button) => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img');
    
    if (img) {
      const character = img.alt.toLowerCase(); 
      let page = `/source/components/${character}.html`; 

      
      if (window.location.pathname.includes('/source/index.html') && character === 'sanji') {
        page = '/source/components/sanji.html'; 
      } else if (window.location.pathname.includes('/source/index.html') && character === 'zoro') {
        page = '/source/components/zoro.html'; 
      }
      else if (window.location.pathname.includes('/source/index.html') && character === 'chopper') {
        page = '/source/components/chopper.html'; 
      }
      else if (window.location.pathname.includes('/source/index.html') && character === 'nami') {
        page = '/source/components/nami.html'; 
      }
      window.location.href = page;
    } else {
      console.error('No image found in the button.');
    }
  });
});

