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
   window.addEventListener('scroll', () => {
       const nav = document.querySelector('nav');
       if (window.scrollY > 100) {
           nav.style.background = 'rgba(26, 26, 26, 0.95)';
       } else {
           nav.style.background = 'transparent';
       }
   });