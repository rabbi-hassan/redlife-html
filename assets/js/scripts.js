(function($){
$(document).ready(function(){


  // Client Carousel Area
  $('.clients-cl-area').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
  });
  // Client Carousel Area
  $('.single-campaigns-cl').owlCarousel({
    items: 2,
    loop: true,
    nav: false,
    dots: true,
  });

  // magnificPopup Video
  $('.magnific-video').magnificPopup({
    type: 'iframe',
  
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>', 
    
      patterns: {
        youtube: {
          index: 'youtube.com/',
    
          id: 'v=',
    
          src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }

      },
    
      srcAction: 'iframe_src', 
    }  
  });

  // magnificPopup Image
  $('.gallery-main-area').each(function() {
      $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled:true
          }
      });
  });


});

$(document).ready(function(){

  // Banner select
  $('.district').select2();
  $('#thana').select2();
  $('#district').select2();

});

$(document).ready(function(){
  // Mobile Menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".menu-area ul");
  const links = document.querySelectorAll(".menu-area ul li");
  hamburger.addEventListener('click', ()=>{
     //Animate Links
      navLinks.classList.toggle("open");
      links.forEach(link => {
          link.classList.toggle("fade");
      });

      //Hamburger Animation
      hamburger.classList.toggle("toggle");
  });
});
})(jQuery);