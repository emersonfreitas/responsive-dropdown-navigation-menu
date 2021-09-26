let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
let openSidebar = document.querySelector(".bx-menu");
let navLinks = document.querySelector(".nav-links");
let closeSidebar = document.querySelector(".close-sidebar");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// open or close sidebar menu

openSidebar.addEventListener("click", () => {
  navLinks.classList.add("showSidebar");
})

closeSidebar.addEventListener("click", () => {
  navLinks.classList.remove("showSidebar");
})


// sidebar open or close sub menu

let htmlCssArrow = document.querySelector('#html-css-submenu');
htmlCssArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show1');
})

let moreArrow = document.querySelector('#more-submenu');
moreArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show2');
})

let jsArrow = document.querySelector('#js-submenu');
jsArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show3');
})
