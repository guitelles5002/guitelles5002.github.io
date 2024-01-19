const balonImage1 = document.getElementById('balon1');
const balonImage2 = document.getElementById('balon2');

// Adiciona ou remove a classe 'small-screen' com base na largura da tela
function handleScreenSize() {
    const contentDiv = document.querySelector('.content');
    const isSmallScreen = window.matchMedia('(max-width: 520px)').matches;
  
    if (!isSmallScreen) {
      balonImage1.src = "./assets/icons/Icon Purple Balon.png"
      balonImage2.src = "./assets/icons/Icon Purple Balon.png"
    } else {
        balonImage1.src = "./assets/icons/Icon Black Balon.png"
      balonImage2.src = "./assets/icons/Icon Black Balon.png"
    }
  }
  
  // Executa a função quando a página carrega e quando a tela é redimensionada
  window.addEventListener('load', handleScreenSize);
  window.addEventListener('resize', handleScreenSize);
  