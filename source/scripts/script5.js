document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('robin-audio');

document.body.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch((error) => {
      console.error('Failed to play audio:', error);
    });
  }
});
document.querySelectorAll('.icon-button').forEach((button) => {
    button.addEventListener('click', () => {
      const img = button.querySelector('img');
      
      if (img) {
        const character = img.alt.toLowerCase(); 
        let page = `/source/components/${character}.html`; 
  

        if (window.location.pathname === '/source/components/robin.html' && character === 'luffy') {
          page = '/source/index.html';  
        } else if (window.location.pathname === '/source/components/robin.html' && character === 'zoro') {
          page = '/source/components/zoro.html'; 
        } else if (window.location.pathname === '/source/components/robin.html' && character === 'nami') {
          page = '/source/components/nami.html'; 
        } else if (window.location.pathname === '/source/components/robin.html' && character === 'chopper') {
          page = '/source/components/chopper.html'; 
        }
        else if (window.location.pathname === '/source/components/robin.html' && character === 'sanji') {
        page = '/source/components/sanji.html'; 
        }
        else if (window.location.pathname === '/source/components/robin.html' && character === 'brook') {
            page = '/source/components/brook.html'; 
        }
        else if (window.location.pathname === '/source/components/robin.html' && character === 'franky') {
            page = '/source/components/franky.html'; 
        }
        else if (window.location.pathname === '/source/components/robin.html' && character === 'ussop') {
            page = '/source/components/ussop.html'; 
        }
        else if (window.location.pathname === '/source/components/robin.html' && character === 'jinbei') {
            page = '/source/components/jinbei.html'; 
        }
  
       
        console.log(`Redirecting to: ${page}`);  
        window.location.href = page;
      } else {
        console.error('No image found in the button.');
      }
    });
  });
});
