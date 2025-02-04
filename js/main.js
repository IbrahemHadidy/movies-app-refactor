"use strict";

import { fetchData } from "./dataFetching.js";
import { loadSection } from "./loadHtml.js";
import "./events.js";

// Load sections
loadSection("header", "sections/header.html");
loadSection("footer", "sections/footer.html");

loadSection("#home", "sections/home.html");
loadSection("#new-movies", "sections/new-movies.html");
loadSection("#coming-soon", "sections/coming-soon.html");
loadSection("#newsletter", "sections/newsletter.html");

// Fetch and render data
fetchData();



