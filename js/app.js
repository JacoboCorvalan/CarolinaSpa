var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    autoplay:{
        delay:5000
    },
    loop:true,
    
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
      
      
    },
    pagination: {
      el: ".swiper-pagination",
      
    },
    
  });