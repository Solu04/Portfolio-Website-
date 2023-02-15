"use strict";

const showMenu = document.querySelector(".toggler");
const menu = document.querySelector(".menu");
const menuDiv = document.querySelector(".menu-div");
const keyword = document.querySelector(".keyword");
const main = document.querySelectorAll(".main");

showMenu.addEventListener("click", function () {
  main.forEach((main) => main.classList.toggle("main-hide"));
});
const validateFunction = {
  checked() {
    menu.style.visibility = "visible";
    menuDiv.style.opacity = "1";
  },
  unchecked() {
    menu.style.visibility = "hidden";
    menuDiv.style.opacity = "0";
  },
};

const validate = function () {
  if (showMenu.checked == 1) {
    validateFunction.checked();
    keyword.classList.add("special");
    keyword.style.top = "100";
    keyword.style.right = "10";
    keyword.style.transform = "rotate(-90deg)";
    showMenu.addEventListener("mouseout", function () {
      keyword.style.display = "flex";
    });
  } else {
    validateFunction.unchecked();
    keyword.classList.remove("special");

    keyword.style.top = "auto";
    keyword.style.right = "100";
    keyword.style.transform = "none";
    showMenu.addEventListener("mouseout", function () {
      keyword.style.display = "none";
    });
  }
};

showMenu.addEventListener("mouseover", function () {
  keyword.style.display = "flex";
});

showMenu.addEventListener("mouseout", function () {
  keyword.style.display = "none";
});
