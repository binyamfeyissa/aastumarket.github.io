const products = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      image: 'product1.png'
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      image: 'product2.png'
    },
    {
      name: 'Product 3',
      description: 'Description of Product 2',
      image: 'product2.png'
    },
    {
      name: 'Product 4',
      description: 'Description of Product 2',
      image: 'product2.png'
    },
    {
      name: 'Product 5',
      description: 'Description of Product 2',
      image: 'product2.png'
    },
    // Add more products as needed
  ];

  const slider = document.querySelector('.slider');

  // Function to create a slide for each product
  function createProductSlides() {
    let slideHTML = '';
    products.forEach(product => {
      slideHTML += `
        <div class="slide">
          <img src="../../Resources/images/${product.image}" alt="${product.name} class="product-img">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
            <button>Shop Now</button>
        </div>
      `;
    });
    slider.innerHTML = slideHTML;
  }

  // Call the function to create product slides
  createProductSlides();

  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let slidePosition = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Auto slide every 3 seconds
  setInterval(moveToNextSlide, 3000);

// Move slides to the left
function moveToNextSlide() {
  if (slidePosition < totalSlides - 3) {
    slidePosition++;
  } else {
    slidePosition = 0; // Loop back to the first slide
  }
  updateSlidePosition();
}

// Move slides to the right
function moveToPrevSlide() {
  if (slidePosition > 0) {
    slidePosition--;
  } else {
    slidePosition = totalSlides - 3; // Loop to the last set of slides
  }
  updateSlidePosition();
}

  // Update slide position based on slidePosition variable
  function updateSlidePosition() {
    slider.style.transform = `translateX(-${slidePosition * slideWidth}px)`;
  }

  // Event listeners for previous and next buttons
  prevButton.addEventListener('click', moveToPrevSlide);
  nextButton.addEventListener('click', moveToNextSlide);