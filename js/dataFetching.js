"use strict";

import { startSlideshow, renderNewMovies, renderComingSoonMovies } from "./rendering.js";

export let homeSlides = [];
export let newMovies = [];
export let comingSoon = [];

/**
 * Fetches data from json files and stores it in the respective arrays. 
 * Then calls the rendering functions to render the data on the page.
 */
export async function fetchData() {
  try {
    // fetch and push home slides
    const homeSlidesData = await fetch("js/data/homeSlides.json").then((res) =>
      res.json()
    );
    homeSlides.push(...homeSlidesData);

    // fetch and push new movies
    const newMoviesData = await fetch("js/data/newMovies.json").then((res) =>
      res.json()
    );
    newMovies.push(...newMoviesData);

    // fetch and push coming soon
    const comingSoonData = await fetch("js/data/comingSoon.json").then((res) =>
      res.json()
    );
    comingSoon.push(...comingSoonData);

    // Call the render functions
    startSlideshow(5000);
    renderNewMovies();
    renderComingSoonMovies();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
