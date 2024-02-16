let container = document.getElementById('images-container');

// Adiciona ouvintes de eventos de mouse para arrastar
container.addEventListener('mousedown', (e) => {
  let isDragging = true;
  let startX = e.pageX - container.offsetLeft;
  let scrollLeft = container.scrollLeft;

  container.style.cursor = 'grabbing'; // Altera o cursor durante o arrasto

  container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade de rolagem ajustável
    container.scrollLeft = scrollLeft - walk;
  });
});

function scrollTo(element, to, duration) {
  var start = element.scrollLeft,
      change = to - start,
      currentTime = 0,
      increment = 20;

  var animateScroll = function(){        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

// Adiciona ouvintes de eventos de clique para os botões
document.getElementById('botaoProximo').addEventListener('click', function() {
  var container = document.getElementById('images-container');
  scrollTo(container, container.scrollLeft + container.clientWidth, 600); // Altere a duração conforme necessário
});

document.getElementById('botaoAnterior').addEventListener('click', function() {
  var container = document.getElementById('images-container');
  scrollTo(container, container.scrollLeft - container.clientWidth, 600); // Altere a duração conforme necessário
});

// Função para interpolação suave (easing)
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};
