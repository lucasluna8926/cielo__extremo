

    
    //barra de navegación al scrollear
    function toggleDownClass() {
      var barraDeNavegacion = document.querySelector("header");
      barraDeNavegacion.classList.toggle('down', $(document).scrollTop() > 0);
    }
  
    $(window).on("scroll", toggleDownClass);



// movimiento de condor
    function toggleCondorClass() {
      var condor = document.querySelector("#animado");
      condor.classList.toggle('condor', $(document).scrollTop() > 100 && $(document).scrollTop() <= 1500);
    }
    
    $(window).on("scroll", toggleCondorClass);


    // guardar contenido de menú hamburguesa cuando se hace scroll
    window.addEventListener('scroll', function() {
      var navbarToggle = document.querySelector('.navbar-toggler');
      var ariaExpanded = navbarToggle.getAttribute('aria-expanded');
      var navbarNav = document.querySelector('#navbarNav');
      var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
      if (scrollPosition > 0 && ariaExpanded === 'true') {
        navbarToggle.setAttribute('aria-expanded', 'false');
        navbarToggle.classList.add('collapsed');
        navbarNav.classList.remove('show');
      } else if (scrollPosition === 0 && ariaExpanded === 'false') {
        navbarToggle.setAttribute('aria-expanded', 'true');
        navbarToggle.classList.remove('collapsed');
      }
    });
    
    

    






    








 
  
  
 
  
  
    



