
const audio = document.getElementById('chopper-audio');
document.querySelectorAll('.icon-button').forEach((button) => {
    button.addEventListener('click', () => {
      const img = button.querySelector('img');
      
      if (img) {
        const character = img.alt.toLowerCase(); 
        let page = `/source/components/${character}.html`; 
  

        if (window.location.pathname === '/source/components/chopper.html' && character === 'luffy') {
          page = '/source/index.html';  
        } else if (window.location.pathname === '/source/components/chopper.html' && character === 'sanji') {
          page = '/source/components/sanji.html'; 
        } else if (window.location.pathname === '/source/components/chopper.html' && character === 'zoro') {
          page = '/source/components/zoro.html'; 
        } else if (window.location.pathname === '/source/components/chopper.html' && character === 'nami') {
          page = '/source/components/namis.html'; 
        }
  
       
        console.log(`Redirecting to: ${page}`);  
        window.location.href = page;
      } else {
        console.error('No image found in the button.');
      }
    });
  });
  
