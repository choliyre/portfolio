AOS.init(); // AOS 시작

// 헤더 스크롤 on 이벤트
window.addEventListener('scroll', function(){
    let herderBg = this.document.querySelector('.header');
    let scTop = document.querySelector('.scroll_top');
    let scrollY =  window.scrollY

    // header
    if(scrollY > 0) {
        herderBg.classList.add('on_header');
        // console.log(scrollY)
    } else {
        herderBg.classList.remove('on_header');
    }

    // top scroll button
    if(scrollY > 10) {
      scTop.classList.add('on_top');
      // console.log('이건 되용')
    } else if(scrollY > 3000) {
      scTop.classList.add('top_position');
    } else if(scrollY > 3000) {
      scTop.classList.remove('top_position');
    } else if(scrollY < 10){
      scTop.classList.remove('on_top');
    }
});


// scroll top btn
document.querySelector('#scroll_top').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});


// 모바일 메뉴 gsap
document.querySelector('.mobile_menu').addEventListener('click', function() {
  gsap.to(".menu", { 
    opacity: 1,
    right: 0,
    duration: 0.8,
    ease: "power4.out",
  });
  gsap.to(".mobile_bg", { 
    autoAlpha: 1,
    // opacity: 1,
    duration: 0.8,
  });
})
function closeMobileMenu() {
  gsap.to(".menu", { 
    opacity: 0,
    right: '-150%',
    duration: 0.8,
    ease: "power4.out",
  });
  gsap.to(".mobile_bg", { 
    autoAlpha: 0, 
    duration: 0.8,
  });
}

function handleNavClick(targetSelector) {
  document.querySelector(targetSelector).scrollIntoView({ behavior: "smooth" });

  // 모바일 상태일 때만 메뉴 닫기
  if (window.innerWidth <= 768) {
    closeMobileMenu();
  }
}

document.querySelector("#navAbout").addEventListener("click", () => {
  handleNavClick("#content1");
});

document.querySelector("#navSkill").addEventListener("click", () => {
  handleNavClick("#content2");
});

document.querySelector("#navWork").addEventListener("click", () => {
  handleNavClick("#content3");
});

document.querySelector("#navContact").addEventListener("click", () => {
  handleNavClick("#content4");
});

document.querySelector('.mobile_close').addEventListener('click', function() {
  closeMobileMenu();
});



// 메인 타이핑 효과
const message = "Pixel, Code, Publish.";
const textEl = document.getElementById("topText");
let index = 0;

function startTyping() {
  let index = 0;
  textEl.textContent = "";

  function typeCharacter() {
    textEl.textContent += message.charAt(index);
    index++;
    if (index < message.length) {
      gsap.delayedCall(0.1, typeCharacter); // 글자당 0.1초 간격
    } else {
      // 타이핑이 끝난 후 2초 후 다시 시작
      gsap.delayedCall(3, startTyping);
    }
  }

  typeCharacter();
}

startTyping();



var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: 1.2,
  centeredSlides: true,
  centeredSlidesBounds: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
    },
    1023: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
    },
  },
});





