// script.js

/* For header background-color effect */
/* When the user scrolls down */
window.addEventListener("scroll", function () {
  const header = document.getElementById("navbar");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', function () {
    /* Type script of my name in the first page */
    if (document.querySelector('#typed-name')) {
      var typed = new Typed("#typed-name", {
        strings: ["Ruth Cerilo"],
        typeSpeed: 80,
        backSpeed: 30,
        loop: false
      });
    }
  
    /* For the buttons of each projects functionality */  
    const filterButtons = document.querySelectorAll('.filter-btn');
    const websiteCategory = document.getElementById('website-category');
    const designCategory = document.getElementById('design-category');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent page jump
  
        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' to clicked one
        this.classList.add('active');
  
        const filter = this.getAttribute('data-filter');
  
        // Show/Hide sections based on filter
        if (filter === 'all') {
          websiteCategory.style.display = 'grid';
          designCategory.style.display = 'grid';
        } else if (filter === 'web') {
          websiteCategory.style.display = 'grid';
          designCategory.style.display = 'none';
        } else if (filter === 'design') {
          websiteCategory.style.display = 'none';
          designCategory.style.display = 'grid';
        }
      });
    });
  
    /* for the view project functionality */
    // Create overlay for design previews
    const previewOverlay = document.createElement('div');
    previewOverlay.classList.add('preview-overlay');
    previewOverlay.innerHTML = `
      <span class="close-preview">&times;</span>
      <div class="preview-content">
        <img id="preview-img" src="" alt="Preview Image">
        <h2 id="preview-title"></h2>
      </div>
    `;
    document.body.appendChild(previewOverlay);
  
    // Get overlay elements from inside the newly created overlay
    const previewImg = previewOverlay.querySelector('#preview-img');
    const previewTitle = previewOverlay.querySelector('#preview-title');
    const closePreview = previewOverlay.querySelector('.close-preview');
  
    // Handle view project buttons
    const buttons = document.querySelectorAll('.view-project');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const type = button.dataset.type;
  
        if (type === 'web') {
          const link = button.dataset.link;
          window.open(link, '_blank');
        } else if (type === 'design') {
          const img = button.dataset.img;
          const title = button.parentElement.querySelector('h3')?.textContent || '';
  
          previewImg.src = img;
          previewTitle.textContent = title;
          previewOverlay.style.display = 'flex';
        }
      });
    });
  
    // Close preview logic
    closePreview.addEventListener('click', () => {
      previewOverlay.style.display = 'none';
      previewImg.src = '';
      previewTitle.textContent = '';
    });
  
    previewOverlay.addEventListener('click', (e) => {
      if (e.target === previewOverlay) {
        previewOverlay.style.display = 'none';
        previewImg.src = '';
        previewTitle.textContent = '';
      }
    });
  });
  