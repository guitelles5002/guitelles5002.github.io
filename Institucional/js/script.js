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


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const totalSlides = carousel.children.length;

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    console.log("currentIndex atualizado para:", currentIndex);
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    console.log("currentIndex atualizado para:", currentIndex);
    updateCarousel();
  });

  function updateCarousel() {
    const cardWidth = carousel.children[0].offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Adiciona evento de clique aos itens clicáveis
  const clickableItems = document.querySelectorAll(".clickable-item");
  clickableItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentIndex = index;
      console.log("currentIndex atualizado para:", currentIndex);
      updateCarousel();
    });
  });

  // Função para rolar suavemente o carrossel
  function scrollTo(element, to, duration) {
    const start = element.scrollLeft,
      change = to - start,
      currentTime = 0,
      increment = 20;

    const animateScroll = function () {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  // Adiciona ouvintes de eventos de clique para os botões
  document.getElementById("botaoProximo").addEventListener("click", function () {
    const container = document.getElementById("images-container");
    scrollTo(container, container.scrollLeft + container.clientWidth, 600); // Altere a duração conforme necessário
  });

  document.getElementById("botaoAnterior").addEventListener("click", function () {
    const container = document.getElementById("images-container");
    scrollTo(container, container.scrollLeft - container.clientWidth, 600); // Altere a duração conforme necessário
  });

  // Função para interpolação suave (easing)
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

});

function openCard(index) {
  const container = document.getElementById("carousel-container");
  container.style.transform = 'translate(-50%, -50%) scale(1)';

  const carousel = document.querySelector('.carousel');
  updateCarousel(index);

  const buttons = document.querySelectorAll('.card-btn')
  
  buttons.forEach(function(elemento) {
    elemento.style.transform = 'scale(1)'
  }
  )
}

function updateCarousel(index) {
  const carousel = document.querySelector('.carousel');
  const cardWidth = carousel.children[0].offsetWidth;
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

function closeCard() {
  document.getElementById("carousel-container").style.transform = 'translate(-50%, -50%) scale(0)'
  document.querySelectorAll(".card-btn").forEach(function (elemento) {
    // Faça algo com cada elemento, por exemplo, altere seu estilo
    elemento.style.transform = 'translate(-50%, -50%) scale(1)'
  });

  const buttons = document.querySelectorAll('.card-btn')
  
  buttons.forEach(function(elemento) {
    elemento.style.transform = 'scale(0)'
  }
  )
}


const closeBtn = document.getElementById("close-carousel");

closeBtn.addEventListener("mouseenter", () => {
  closeBtn.style.cursor = "pointer";
  closeBtn.style.opacity = '50%'
});

closeBtn.addEventListener("mouseleave", () => {
  closeBtn.style.cursor = "auto";
  closeBtn.style.opacity = '100%'
});
