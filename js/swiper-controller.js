var swiperSlides = document.querySelectorAll('.home-banner-swiper .swiper-slide');
// var activeSlide = document.querySelector('.swiper-slide-active');
// var activeIndexValue;
const heroBannerSwiper = new Swiper(".home-banner-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "slide",
	// effect: 'fade',
    parallax: true,
    loop: false,
    // autoplay: {
    //     delay: 9000,
    //     disableOnInteraction: false,
    // },
    speed: 1500,
    pagination: { 
        el: "#home-swiper-pagination", 
        clickable: true 
    },
    navigation: { 
        nextEl: "#home-banner-swiper--next", 
        prevEl: "#home-banner-swiper--prev" 
    },
    on: {
        init: function () {
          console.log('swiper initialized');
          // document.querySelectorAll("[data-swiper-slide-index='0']").forEach(function(ele){
            // var currentSlide = ele.querySelector("video");
            // currentSlide.play();
          // })
		document.querySelectorAll(".home-banner-swiper .swiper-slide.swiper-slide-visible.swiper-slide-fully-visible.swiper-slide-active").forEach(function(ele){
			var currentSlide = ele.querySelector("video");
			if (currentSlide) {
				currentSlide.play();
			}
		});
		
        },
    }
});

// function playVideoSlide() {
//     for(let i = 0; i<swiperSlides.length;i++){
//         if(swiperSlides[i].classList.length > 3){
//             activeIndexValue = i
//         }
//     }
//     var videoElement = document.querySelector('.swiper-slide:nth-child(' + (activeIndexValue + 1) + ') video');
//     // console.log(videoElement);
//     // console.log("video", document.querySelector('.swiper-slide:nth-child(2) video'));
//       // Play the video
//       if (videoElement) {
//         // videoElement.load();
//         videoElement.play();
//       }
// }

// playVideoSlide();

heroBannerSwiper.on('slideChange', function() { 
    swiperSlides.forEach(function(slide) {
        let videos = slide.querySelectorAll('video');
        // let clickEvent = new Event('click');

        videos.forEach(function(video) {
            video.currentTime = 0;
            video.pause();
            setTimeout(function(){
                // console.log("play");
                // video.dispatchEvent(clickEvent);
                video.play();
            }, 1300);
        });
    });
});

const homeBannerSwiper = new Swiper(".client-banner-swiper", {
  // slidesPerView: 5,
  spaceBetween: 50,
  // autoplay: {
  //     delay: 7000,
  //     disableOnInteraction: true
  // },
  speed: 2000,
  navigation: { 
      nextEl: "#client-banner-swiper--next", 
      prevEl: "#client-banner-swiper--prev" 
  }
});

const homeTransformSwiper = new Swiper(".home-transform-swiper", {
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: { 
        nextEl: "#home-transform-swiper--next", 
        prevEl: "#home-transform-swiper--prev" 
    },
    pagination: {
        el: "#home-transform--pagination",
        clickable: true
    }
});

const homeCertifySwiper = new Swiper(".home-partner-swiper", {
  slidesPerView: 7,
  spaceBetween: 80,
  loop: false,
  freeMode: true,
  freeModeMomentum: false,
  autoplay: {
      delay: 1,
      disableOnInteraction: true
  },
  speed: 10000,
  touchRatio: 1,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: { 
      nextEl: "#home-partners-swiper--next", 
      prevEl: "#home-partners-swiper--prev" 
  },
  breakpoints: { 
      320: { 
          slidesPerView: 2, 
          spaceBetween: 30, 
          grabCursor: true, 
          touchRatio: 1 
      }, 
      450: { 
          slidesPerView: 2 
      }, 
      768: { 
          slidesPerView: 3 
      }, 
      1024: { 
          slidesPerView: 7 
      } 
  }
});

const stayCurveSwiper = new Swiper(".stay-curve-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  touchRatio: 0,
  grabCursor: false,
  navigation: { 
      nextEl: "#stay-swiper--next", 
      prevEl: "#stay-swiper--prev" 
  },
  pagination: {
    el: "#stay-swiper--pagination",
    clickable: true
  },
  breakpoints: { 
      320: { 
          slidesPerView: 1, 
          spaceBetween: 50, 
          grabCursor: true, 
          touchRatio: 1 
      }, 
      450: { 
          slidesPerView: 1 
      }, 
      768: { 
          slidesPerView: 2 
      }, 
      1024: { 
          slidesPerView: 3 
      } 
  }
});

const boardMemberSwiper = new Swiper(".board-member-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  touchRatio: 0,
  grabCursor: false,
  navigation: { 
      nextEl: "#board-swiper--next", 
      prevEl: "#board-swiper--prev" 
  },
  breakpoints: { 
      320: { 
          slidesPerView: 1,  
          grabCursor: true, 
          touchRatio: 1 
      }, 
      450: { 
          slidesPerView: 1 
      }, 
      768: { 
          slidesPerView: 2 
      }, 
      1024: { 
          slidesPerView: 3 
      } 
  }
});

var storySwiper = new Swiper(".story-swiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 0,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 95,
      depth: 180,
      modifier: 1.5,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '#story-swiper--next',
      prevEl: '#story-swiper--prev',
    }
});

var testThumbs = new Swiper('.test-thumbs', {
    direction: 'horizontal',
    loop: false,
    // slidesPerView: 4,
    spaceBetween: 10,
    touchRatio: 1,
    grabCursor: false,
    speed: 300,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true
});

var testTop = new Swiper('.test-top-swiper', {
    direction: 'horizontal',
    effect: 'fade',
    autoHeight: true,
    slidesPerView: 1,
    loop: false,
    touchRatio: 1,
    grabCursor: false,
    navigation: {
        nextEl: '#test-swiper--next',
        prevEl: '#test-swiper--prev',
    },
    thumbs: {
      swiper: testThumbs
    }
});

var partnerSwiper = new Swiper(".our-partner-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: false,
  touchRatio: 0,
  grabCursor: false,
  navigation: { 
    nextEl: "#our-partner-swiper--next",
    prevEl: "#our-partner-swiper--prev" 
  },
  breakpoints: { 
      320: { 
          slidesPerView: 1,  
          grabCursor: true, 
          touchRatio: 1 
      }, 
      450: { 
          slidesPerView: 2 
      }, 
      768: { 
          slidesPerView: 2 
      }, 
      1024: { 
          slidesPerView: 4 
      } 
  }
});

