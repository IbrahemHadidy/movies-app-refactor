"use strict";

//-------------------------- Selectors --------------------------//
const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("#navbar");
const navbarLinks = document.querySelectorAll("#navbar a");
const headerLogo = document.querySelector("#header-logo");

const hero = document.querySelector("#home");
const newSection = document.querySelector("#new-movies");
const comingSoonSection = document.querySelector("#coming-soon");

//---------------------------- data ----------------------------//
const heroSlides = [
  {
    image: "img/home1.jpg",
    subtitle: "Sony's Spider-Man Universe",
    title: "Venom",
    link: "#",
  },
  {
    image: "img/home2.jpg",
    subtitle: "Marvel Universe",
    title: "Avengers:<br />Infinity War",
    link: "#",
  },
  {
    image: "img/home3.jpg",
    subtitle: "Marvel Universe",
    title: "Spider-Man:<br />Far From Home",
    link: "#",
  },
];

const newMovies = [
  {
    title: "Venom",
    timeAndGenre: "120min | Action",
    image: "img/m1.jpg",
    link: "#",
  },
  {
    title: "Dunkerk",
    timeAndGenre: "105min | Adventure",
    image: "img/m2.jpg",
    link: "#",
  },
  {
    title: "Batman & Superman",
    timeAndGenre: "100min | Thriller",
    image: "img/m3.jpg",
    link: "#",
  },
  {
    title: "John Wick",
    timeAndGenre: "120min | Adventure",
    image: "img/m4.jpg",
    link: "#",
  },
  {
    title: "Aquaman",
    timeAndGenre: "130min | Action",
    image: "img/m5.jpg",
    link: "#",
  },
  {
    title: "Black Panther",
    timeAndGenre: "90min | Thriller",
    image: "img/m6.jpg",
    link: "#",
  },
  {
    title: "Thor",
    timeAndGenre: "130min | Action",
    image: "img/m7.jpg",
    link: "#",
  },
  {
    title: "Bumblebee",
    timeAndGenre: "100min | Thriller",
    image: "img/m8.png",
    link: "#",
  },
  {
    title: "Mortal Engines",
    timeAndGenre: "100min | Action",
    image: "img/m9.jpg",
    link: "#",
  },
  {
    title: "UnderWorld Blood Wars",
    timeAndGenre: "100min | Action",
    image: "img/m10.jpg",
    link: "#",
  },
];

const comingSoon = [
  {
    title: "Joney English",
    timeAndGenre: "80min | Comedy",
    image: "img/coming1.jpg",
    link: "#",
  },
  {
    title: "WarCrafet",
    timeAndGenre: "120min | Action",
    image: "img/coming2.jpg",
    link: "#",
  },
  {
    title: "Rampage",
    timeAndGenre: "108min | Adventure",
    image: "img/coming3.jpg",
    link: "#",
  },
  {
    title: "Airon Lady",
    timeAndGenre: "120min | Comedy",
    image: "img/coming4.jpg",
    link: "#",
  },
  {
    title: "Justice League",
    timeAndGenre: "120min | Adventure",
    image: "img/coming5.jpg",
    link: "#",
  },
  {
    title: "Doctor Strange",
    timeAndGenre: "120min | Adventure",
    image: "img/coming6.jpeg",
    link: "#",
  },
  {
    title: "Captain Marvel",
    timeAndGenre: "120min | Adventure",
    image: "img/coming7.jpg",
    link: "#",
  },
  {
    title: "Black Widow",
    timeAndGenre: "90min | Action",
    image: "img/coming8.jpg",
    link: "#",
  },
  {
    title: "Ant Man",
    timeAndGenre: "110min | Adventure",
    image: "img/coming9.jpg",
    link: "#",
  },
  {
    title: "Guardiance Of The Galaxy",
    timeAndGenre: "120min | Adventure",
    image: "img/coming10.jpg",
    link: "#",
  },
];

//---------------------------- Rendering ----------------------------//
// Home Slider (Hero)
let i = 0; 
setInterval(() => {
  i++;

  if (i > heroSlides.length - 1) i = 0;

  hero.style.backgroundImage = `url('${heroSlides[i].image}')`;
  hero.querySelector("span").innerHTML = heroSlides[i].subtitle;
  hero.querySelector("h2").innerHTML = heroSlides[i].title;
  hero.querySelector("a").href = heroSlides[i].link;
}, 5000);

// New Movies render
newMovies.forEach((movie) => {
  const a = document.createElement("a");

  a.classList.add("cursor-pointer");
  a.href = movie.link;

  a.innerHTML = `
    <div class="w-full h-[270px]">
      <img
        src="${movie.image}"
        class="w-full h-full object-cover transition-all duration-200 ease-linear transform hover:translate-y-[-10px]"
      />
    </div>
    <h3 class="text-[0.9rem] font-medium text-[#ff2c1f]">${movie.title}</h3>
    <span class="text-[13px]">${movie.timeAndGenre}</span>
  `;

  newSection.querySelector("div").appendChild(a);
});

// Coming Soon Movies render
comingSoon.forEach((movie) => {
  const a = document.createElement("a");

  a.classList.add("cursor-pointer");
  a.href = movie.link;

  a.innerHTML = `
    <div class="w-full h-[270px]">
      <img
        src="${movie.image}"
        class="w-full h-full object-cover transition-all duration-200 ease-linear transform hover:translate-y-[-10px]"
      />
    </div>
    <h3 class="text-[0.9rem] font-medium text-[#ff2c1f]">${movie.title}</h3>
    <span class="text-[13px]">${movie.timeAndGenre}</span>
  `;

  comingSoonSection.querySelector("div").appendChild(a);
});

//---------------------------- Events ----------------------------//
// Mobile Menu
menuIcon.onclick = () => {
  if (navbar.classList.contains("max-md:top-full")) {
    navbar.classList.remove("max-md:top-full");
  } else {
    navbar.classList.add("max-md:top-full");
  }
};
window.onscroll = () => {
  navbar.classList.remove("top-full");
};

// Navbar color on scroll
window.addEventListener("scroll", () => {
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
});
