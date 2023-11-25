// responsive navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle("active");
})


// button clicking section

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // to find number in data Attr

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  constimg_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   slidesPerView: 2,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   coverflowEffect: {
//     rotate: 30,
//     stretch: 0,
//     depth: 70,
//     modifier: 1,
//     slideShadows: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
      loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
  },
});

// media quieres

// const MyJSmedia = () =>{
//   if(widthSize.matches){
//     new Swiper(".mySwiper", {
//       grabCursor: true,
//       effect: "creative",
//         autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//       creativeEffect: {
//         prev: {
//           shadow: true,
//           translate: [0, 0, -400],
//         },
//         next: {
//           translate: ["100%", 0, 0],
//         },
//           loop: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       }
//     }
//   })
// }

// const widthSize = window.matchMedia('(max-width: 780px)');

// MyJSmedia(widthSize);

// widthSize.addEventListener("change", MyJSmedia);


// scroll to top button

const heroSection = document.querySelector(".section-hero");

const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");

scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-circle-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);


// animated number 

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumeber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const intialNum = parseInt(curElem.innerText);
    // console.log(intialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    console.log(incrementNumber);

    if (intialNum < targetNumber){
      curElem.innerText = `${intialNum + incrementNumber}+`;

      setTimeout(updateNumebr, 10);
    }
  };
  updateNumebr();

});
// ========================================
//  lazy loading section
// ========================================
const imgRef = document.querySelector("img[data-src]");
console.log(imgRef);

const lazyImg = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
    root: null,
    threshold: 0,
    // rootMargin: "100px",
});

imgObserver.observe(imgRef);


// ========================================
// sticky navigation
// ========================================
const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(sectionHero);

// ========================================
//  how to add media queries in JS
// ========================================
