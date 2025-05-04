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