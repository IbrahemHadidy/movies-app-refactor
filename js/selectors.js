"use strict";

export let header;
export let headerLogo;
export let menuIcon;
export let navbar;
export let navbarLinks;

setTimeout(() => {
  header = document.querySelector("header");
  headerLogo = document.querySelector("#header-logo");
  menuIcon = document.querySelector("#menu-icon");
  navbar = document.querySelector("#navbar");
  navbarLinks = document.querySelectorAll("#navbar a");
}, 100);