"use strict";

import { loadSection } from "./loadHtml.js";
import { getSelectors } from "./selectors.js";
import { addHeaderScrollEvent, addToggleMenu } from "./events.js";
import { fetchData } from "./dataFetching.js";

// Load sections
loadSection("header", "sections/header.html");
loadSection("footer", "sections/footer.html");

loadSection("#home", "sections/home.html");
loadSection("#new-movies", "sections/new-movies.html");
loadSection("#coming-soon", "sections/coming-soon.html");
loadSection("#newsletter", "sections/newsletter.html");

// Initialize Selectors
getSelectors();

// Add event listeners
addToggleMenu();
addHeaderScrollEvent();

// Fetch and render data
fetchData();

