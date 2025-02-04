"use strict";

export function loadSection(selector, filePath) {
  const element = document.querySelector(selector);

  if (!element) {
    console.error(`Element ${selector} not found`);
    return;
  }

  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      element.outerHTML = data;
    })
    .catch((error) => console.error(error));
}

export function loadTemplate(
  selector,
  filePath,
  data = {},
  replaceContent = false
) {
  const element = document.querySelector(selector);

  if (!element) {
    console.error(`Element ${selector} not found`);
    return;
  }

  fetch(filePath)
    .then((response) => response.text())
    .then((template) => {
      // If data is an array (like in loadMovies), loop through and process each entry
      const dataArray = Array.isArray(data) ? data : [data];

      // If replaceContent is true, clear existing content before adding new content
      if (replaceContent) {
        element.innerHTML = "";
      }

      // Process each entry
      dataArray.forEach((entry) => {
        let modifiedTemplate = template;

        // Replace placeholders in the template with data from the current object
        Object.keys(entry).forEach((key) => {
          const regex = new RegExp(`{{${key}}}`, "g");
          modifiedTemplate = modifiedTemplate.replace(regex, entry[key]);
        });

        // Append the modified template to the element
        element.innerHTML += modifiedTemplate;
      });
    })
    .catch((error) => console.error(error));
}
