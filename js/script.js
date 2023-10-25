

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


$('#slider-1.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:false, 
  smartSpeed: 1300,
  autoplay:true,
  autoplayTimeout:5000,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:6
      },
      1000:{
          items:6
      },
      1100:{
          items:6
      },
      1200:{
          items:6
      }


  }
});

$('#slider-2.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    center:true,
    nav:false,
    dots:true, 
    smartSpeed: 1300,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1100:{
            items:1
        },
        1200:{
            items:1
        }
  
  
    }
  });
  
