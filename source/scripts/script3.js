
const audio = document.getElementById('nami-audio');
document.querySelectorAll('.icon-button').forEach((button) => {
    button.addEventListener('click', () => {
      const img = button.querySelector('img');
      
      if (img) {
        const character = img.alt.toLowerCase(); 
        let page = `/source/components/${character}.html`; 
  

        if (window.location.pathname === '/source/components/nami.html' && character === 'luffy') {
          page = '/source/index.html';  
        } else if (window.location.pathname === '/source/components/nami.html' && character === 'sanji') {
          page = '/source/components/sanji.html'; 
        } else if (window.location.pathname === '/source/components/nami.html' && character === 'zoro') {
          page = '/source/components/zoro.html'; 
        } else if (window.location.pathname === '/source/components/nami.html' && character === 'chopper') {
          page = '/source/components/chopper.html'; 
        }
  
       
        console.log(`Redirecting to: ${page}`);  
        window.location.href = page;
      } else {
        console.error('No image found in the button.');
      }
    });
  });
  
