        // Mostrar/ocultar menú fixed al hacer scroll
        window.addEventListener('scroll', function() {
            const hero = document.querySelector('.hero');
            const fixedNav = document.getElementById('fixedNav');
            
            if (window.scrollY > hero.offsetHeight) {
                fixedNav.classList.add('visible');
            } else {
                fixedNav.classList.remove('visible');
            }
        });

        // Menú hamburguesa (para móviles)
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                const menus = document.querySelectorAll('.menu');
                menus.forEach(menu => menu.classList.toggle('active'));
            });
        }

        // Cerrar menú al hacer clic en un enlace (móviles)
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', function() {
                const menus = document.querySelectorAll('.menu');
                menus.forEach(menu => menu.classList.remove('active'));
            });
        });