

    
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


  
    
   
    

    






    








 
  
  
 
  
  
    



