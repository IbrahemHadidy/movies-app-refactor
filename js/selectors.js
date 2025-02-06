"use strict";

export let header;
export let headerLogo;
export let menuIcon;
export let navbar;
export let navbarLinks;

export let homeSection;
export let newMoviesSection;
export let comingSoonSection;

/**
 * Get DOM selectors then fetch and render data
 */
export function getSelectors() {
  header = document.querySelector("header");
  headerLogo = document.querySelector("#header-logo");
  menuIcon = document.querySelector("#menu-icon");
  navbar = document.querySelector("#navbar");
  navbarLinks = document.querySelectorAll("#navbar a");

  homeSection = document.querySelector("#home");
  newMoviesSection = document.querySelector("#new-movies");
  comingSoonSection = document.querySelector("#coming-soon");

  if (!header || !headerLogo || !menuIcon || !navbar || !navbarLinks) {
    setTimeout(getSelectors, 200);
  }
}