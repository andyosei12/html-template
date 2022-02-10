"use strict";

const menuIcon = document.querySelector(".mobile-nav-toggle");
const closeIcon = document.querySelector(".close-icon");
const socialIcons = document.querySelector(".nav__mobile-social");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");

menuIcon.addEventListener("click", () => {
  nav.classList.add("nav__mobile");
  closeIcon.classList.add("close-icon__mobile");
  navList.classList.add("nav__list-mobile");
  socialIcons.classList.add("nav__mobile-social--toggle");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("nav__mobile");
  closeIcon.classList.remove("close-icon__mobile");
  navList.classList.remove("nav__list-mobile");
  socialIcons.classList.remove("nav__mobile-social--toggle");
});
