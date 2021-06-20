var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// ------------- blog--------------
const questions = document.querySelectorAll('.question');
questions.forEach((orange)=>{
  const btn = orange.querySelector('.question-btn');
  btn.addEventListener('click', ()=>{

    questions.forEach((item)=>{
      if (item !== orange){
        item.classList.remove('show-text');
      }
    });

    orange.classList.toggle('show-text');
  });

});

// -----------header ------------------
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

//-------------------------- header color hover---------------------

const about = document.querySelector('.about');
const hero = document.querySelector('.hero');
const service = document.querySelector('.service');
const website = document.querySelector('.website');
const testimoni = document.querySelector('.testimoni')
const blog = document.querySelector('.blog')
const contact = document.querySelector('.contact')

window.addEventListener("scroll", ()=>{
    const sc = window.pageYOffset;
    // console.log(sc);
    if (sc < 1200){
        about.classList.add('active');
    }
    if(sc < 1205){
        service.classList.remove('active');
    }
    if(sc > 1200){
        about.classList.remove('active');
        service.classList.add('active');
    }
    if (sc < 2250){
        website.classList.remove('active')
    }
    if(sc>2250){
        service.classList.remove('active');
        website.classList.add('active')
    }
    if(sc<3100){
        testimoni.classList.remove('active')
    }
    if(sc>3100){
        website.classList.remove('active')
        testimoni.classList.add('active')
    }
    if (sc < 4300){
        blog.classList.remove('active')
    }
    if (sc>4300){
        testimoni.classList.remove('active')
        blog.classList.add('active')
    }
    if(sc > 4800){
        blog.classList.remove('active')
        contact.classList.add('active')
    }
    if(sc < 4800){
        contact.classList.remove('active')
    }
    
});

// ------------------------
const nav_items = document.querySelector('.nav-items');
const fa_bars = document.querySelector('.fa-bars');
fa_bars.addEventListener('click', ()=>{
    nav_items.classList.toggle('a-nav');
})
