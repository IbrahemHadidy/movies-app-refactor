"use strict";

import { homeSlides, newMovies, comingSoon } from "./dataFetching.js";
import { loadTemplate } from "./loadHtml.js";
import {
  homeSection,
  newMoviesSection,
  comingSoonSection,
} from "./selectors.js";

const maxTries = 5;

/**
 * Retry mechanism for rendering elements
 */
function retryUntilAvailable(section, callback, tries = 0) {
  if (!section) {
    if (tries < maxTries) {
      setTimeout(() => retryUntilAvailable(section, callback, tries + 1), 200);
    } else {
      console.error("Failed after multiple attempts.");
    }
    return;
  }
  callback();
}

/**
 * Starts a slideshow of home slides.
 * @param {number} delay - The time interval between slides in milliseconds.
 */
export function startSlideshow(delay) {
  let tryCount = 0;

  if (!homeSection) {
    if (tryCount < maxTries) {
      tryCount++;
      setTimeout(() => startSlideshow(delay), 200);
      return;
    }
    console.error("Failed to start slideshow after multiple attempts.");
    return;
  }

  if (!homeSlides || homeSlides.length === 0) {
    console.error("No slides available for the slideshow.");
    return;
  }

  let i = 0;

  function updateSlide(i) {
    homeSection.style.backgroundImage = `url('${homeSlides[i].image}')`;
    loadTemplate("#home", "templates/home-slide.html", homeSlides[i], true);
  }

  updateSlide(i);

  setInterval(() => {
    i = (i + 1) % homeSlides.length;
    updateSlide(i);
  }, delay);
}

/**
 * Renders new movies on the page.
 */
export function renderNewMovies() {
  retryUntilAvailable(newMoviesSection, () =>
    loadTemplate("#new-movies div", "templates/movie.html", newMovies)
  );
}

/**
 * Renders coming soon movies on the page.
 */
export function renderComingSoonMovies() {
  retryUntilAvailable(comingSoonSection, () =>
    loadTemplate("#coming-soon div", "templates/movie.html", comingSoon)
  );
}
