"use strict";

import {
  menuIcon,
  navbar,
  header,
  headerLogo,
  navbarLinks,
} from "./selectors.js";

/**
 * Add toggle menu event listener
 */
export function addToggleMenu() {
  if (!menuIcon) {
    setTimeout(addToggleMenu, 200);
    return;
  }

  menuIcon.addEventListener("click", () => {
    if (navbar.classList.contains("max-md:top-full")) {
      navbar.classList.remove("max-md:top-full");
    } else {
      navbar.classList.add("max-md:top-full");
    }
  });
}

/**
 * Change header color on scroll
 */
export function addHeaderScrollEvent() {
  window.onscroll = () => {
    navbar.classList.remove("max-md:top-full");

    if (window.scrollY > 0) {
      header.classList.add("bg-[#fff]", "shadow-[0_0_4px_rgba(14,55,54,0.15)]");
      headerLogo.classList.add("text-[#020307]");
      navbarLinks.forEach((link) => {
        link.classList.add("text-[#020307]");
      });

      if (window.innerWidth <= 774) {
        menuIcon.classList.add("text-[#020307]");
        navbar.classList.add("top-full", "max-md:text-[#fff]");
      }
    } else {
      header.classList.remove(
        "bg-[#fff]",
        "shadow-[0_0_4px_rgba(14,55,54,0.15)]"
      );
      headerLogo.classList.remove("text-[#020307]");
      navbarLinks.forEach((link) => {
        link.classList.remove("text-[#020307]");
      });

      if (window.innerWidth <= 774) {
        menuIcon.classList.remove("text-[#020307]");
        navbar.classList.remove("top-full", "max-md:text-[#fff]");
      }
    }
  };
}
