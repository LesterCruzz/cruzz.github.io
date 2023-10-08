const headerNav = document.querySelector(".header__nav");
const toggleBtn = document.querySelector(".toggle__menu");

const closeBtn = document.querySelector(".header__toggle .Ex img");

const servicesImg = document.querySelector(".services__image");
const services_img = document.querySelector(".services__image2");
const services__img = document.querySelector(".services__image3");
const servD = document.querySelector(".serv__d");
const box = document.querySelector(".box");

const serv_D = document.querySelector(".serv__d2");
const bo_x = document.querySelector(".box2");

const serv__D = document.querySelector(".serv__d3");
const bo__x = document.querySelector(".box3");

const header = document.querySelector(".header");

// Carousel

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".featured__wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon  => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

toggleBtn.addEventListener("click", () =>{
    headerNav.classList.toggle("open");
    toggleBtn.classList.toggle("open"); 
});
closeBtn.addEventListener("click", () =>{
closeBtn.classList.remove("open");
headerNav.classList.remove("open");
});
services_img.addEventListener("mouseover", () =>{
    services_img.classList.toggle("open");
    serv_D.classList.toggle("open");
});
services__img.addEventListener("mouseover", () =>{
    services__img.classList.toggle("open");
    serv__D.classList.toggle("open");
});
bo_x.addEventListener("mouseleave", () =>{
    services_img.classList.remove("open");
     serv_D.classList.remove("open");
 });
bo__x.addEventListener("mouseleave", () =>{
    services__img.classList.remove("open");
     serv__D.classList.remove("open");
 });

servicesImg.addEventListener("mouseover", () =>{
    servicesImg.classList.toggle("open");
    servD.classList.toggle("open");
});
box.addEventListener("mouseleave", () =>{
    servicesImg.classList.remove("open");
     servD.classList.remove("open");
 });


window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 150) {
      header.classList.add("light");
    } else {
      header.classList.remove("light");
    }
});


const starNav = document.querySelectorAll(".coffee_price");
const starContent = document.querySelectorAll(".coffee__content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}