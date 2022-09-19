const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  menuBar.classList.toggle("active");
  navbar.classList.toggle("active");
});

  navLinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");

    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });


