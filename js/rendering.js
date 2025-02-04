"use strict";

import { homeSlides, newMovies, comingSoon } from "./dataFetching.js";
import { loadTemplate } from "./loadHtml.js";

// Home Slider
export function startSlideshow() {
  let i = 0;
  // Function to update the slide
  function updateSlide(i) {
    document.querySelector("#home").style.backgroundImage = `url('${homeSlides[i].image}')`;
    loadTemplate(
      "#home",
      "templates/home-slide.html",
      homeSlides[i],
      true
    )
  }
  // Set the first slide immediately
  updateSlide(i);
  // Start the slideshow interval
  setInterval(() => {
    if (i === homeSlides.length - 1) {
      i = 0;
    } else {
      i++;
    }
    updateSlide(i);
  }, 5000);
}

// New Movies render
export function renderNewMovies() {
  loadTemplate("#new-movies div", "templates/movie.html", newMovies);
}

// Coming Soon Movies render
export function renderComingSoonMovies() {
  loadTemplate("#coming-soon div", "templates/movie.html", comingSoon);
}
