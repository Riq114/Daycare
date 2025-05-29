// Navigation js
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

/*image enlarging 
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.style.transition = "transform 0.3s ease-in-out";

    image.addEventListener("mouseenter", function () {
      image.style.transform = "scale(1.3)";
    });

    image.addEventListener("mouseleave", function () {
      image.style.transform = "scale(1)";
    });
  });
}); 

*/

/*increasing the size to full screen */
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  lightbox.style.position = "fixed";
  lightbox.style.top = "0";
  lightbox.style.left = "0";
  lightbox.style.width = "100%";
  lightbox.style.height = "100%";
  lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  lightbox.style.display = "none";
  lightbox.style.justifyContent = "center";
  lightbox.style.alignItems = "center";

  images.forEach((image) => {
    image.addEventListener("click", function () {
      lightbox.style.display = "flex";
      const img = document.createElement("img");
      img.src = image.src;
      img.style.maxWidth = "90%";
      img.style.maxHeight = "90%";
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
});
