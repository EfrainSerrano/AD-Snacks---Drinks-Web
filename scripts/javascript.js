   // Menú hamburguesa
   const menuToggle = document.querySelector('.menu-toggle');
   const menu = document.querySelector('.menu');
   
   if (menuToggle) {
       menuToggle.addEventListener('click', () => {
           menu.classList.toggle('active');
       });
   }

   // Cerrar menú al hacer clic en un enlace
   document.querySelectorAll('.menu a').forEach(link => {
       link.addEventListener('click', () => {
           menu.classList.remove('active');
       });
   });

   // Cambiar navbar al hacer scroll
   window.addEventListener('scroll', function() {
       const navbar = document.getElementById('navbar');
       const hero = document.querySelector('.hero');
       const heroHeight = hero.offsetHeight - 50;

       if (window.scrollY > heroHeight) {
           navbar.classList.add('scrolled');
           navbar.classList.add('menu-changed'); 
       } else {
           navbar.classList.remove('scrolled');
           navbar.classList.remove('menu-changed');
       }
   });

   document.addEventListener('DOMContentLoaded', function() {
    // Solo activar en móviles
    if (window.innerWidth <= 768) {
        const gallery = document.querySelector('.gallery');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-content">
        `;
        document.body.appendChild(lightbox);
        
        // Configurar click en imágenes
        document.querySelectorAll('.gallery img').forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                const lightboxImg = lightbox.querySelector('.lightbox-content');
                lightboxImg.src = this.src;
                lightbox.style.display = 'flex';
            });
        });
        
        // Cerrar lightbox
        lightbox.addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('lightbox-close')) {
                this.style.display = 'none';
            }
        });
    }
});