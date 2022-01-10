$(document).ready(function(){
  // AOS
	var myAOS = function() {
		AOS.init({
      duration: 2500,
    });
	}

	myAOS();

  $('.hd .gnb .models').hover(function(){
    $('.hd .car_list').toggleClass('on');
  });
  $('.hd .gnb .dep').hover(function(){
    $('.hd .dep2').toggleClass('on');
  });

  $('.toggle-btn').click(function(){
    $(this).toggleClass('active');
    $('.hd .mob-gnb').toggleClass('active');
  });
  
  $('.accordion .tit').click(function(j) {
    var dropDown = $(this).closest('.dep1').find('.dep2');
    $(this).closest('.accordion').find('.dep2').not(dropDown).slideUp();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).closest('.accordion').find('.tit.active').removeClass('active');
        $(this).addClass('active');
    }
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });



  var mySwiper = new Swiper('.banner .test-swiper', {
    loop: true,
    autoplay: {
      delay: 3000, 
    },
    pagination: {
      el: '.custom-pagenation',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        var totElem = '';
        totElem += '<div class="state-bar"></div>';
        return totElem; 
      }
    },
    navigation: {
      nextEl: '.banner .swiper-button-next',
      prevEl: '.banner .swiper-button-prev',
    }
  });

  $('.state-stop').on('click', function(){
    console.log('정지');
    mySwiper.autoplay.stop();
    $('.custom-state').addClass('stop');
  });

  $('.state-play').on('click', function(){
    console.log('재생');
    mySwiper.autoplay.start();
    $('.custom-state').removeClass('stop');
  });

  $('.state-stop').click(function(){
    $(this).css('display', 'none');;
  });
  $('.state-play').click(function(){
    $('.state-stop').css('display', 'block');
  });


  var swiperbest = new Swiper('.best-Swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.best .swiper-button-next',
      prevEl: '.best .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });

  

  var swipersns1 = new Swiper(".sns .item1", {
    slidesPerView: "auto",
    spaceBetween: 60,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      720: {
        spaceBetween: 40,
      },
    },
  });
  var swipersns2 = new Swiper(".sns .item2", {
    slidesPerView: "auto",
    spaceBetween: 60,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      720: {
        spaceBetween: 40,
      },
    },
  });
  var swipersns3 = new Swiper(".sns .item3", {
    slidesPerView: "auto",
    spaceBetween: 60,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      720: {
        spaceBetween: 40,
      },
    },
  });


  $('.sns .list-item p').click(function(){
    console.log('this.index=', $(this).index())
    $('.sns .list-item p').removeClass('on');
    $('.sns .swiper').removeClass('active');
    
    $(this).addClass('on');
    $('.sns .item-content .swiper').eq($(this).index()).addClass('active');
  });

  $('.sns .item1').click(function(){
    $(this).addClass('open')
  });



  $('.side .menu-btn').on('click', function(e){
    $(this).toggleClass('active');
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 400){
      $('.side').fadeIn();
    }else{
      $('.side').fadeOut();
    }
  });


  setScrollDirection();
  function setScrollDirection(target) {
    var w = window;
    var d = document.documentElement;
    var t = target || document.getElementsByTagName("body")[0];
    var currentX = w.pageYOffset || d.scrollTop;
    var currentY = w.pageXOffset || d.scrollLeft;

    w.addEventListener("scroll", onScroll, false);
    onScroll();

    function onScroll() {
      console.log('scroll');
      var y = w.pageYOffset || d.scrollTop;
      
      if (y > currentY) {
        console.log('move down', t);
        if (!t.classList.contains("scroll-down")) {
          t.classList.remove("scroll-up");
          t.classList.add("scroll-down");
        }
        
      } else {
        if (!t.classList.contains("scroll-up")) {
          t.classList.remove("scroll-down");
          t.classList.add("scroll-up");
          
        }
      }
      if (60 > currentY) {
        t.classList.remove("scroll-down");
        t.classList.add("scroll-up");
      }
      currentY = y;
    }
  }


});