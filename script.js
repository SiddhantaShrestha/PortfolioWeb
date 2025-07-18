const navs = document.querySelectorAll(".nav-list li");
const sections = document.querySelectorAll(".section"); // All the sections
const resumeLists = document.querySelectorAll(".resume-list");
const resumeBoxes = document.querySelectorAll(".resume-box");
const portfolioLists = document.querySelectorAll(".portfolio-list");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");

// Navbar sections
navs.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    // Remove active class from all nav items
    document.querySelector(".nav-list li.active").classList.remove("active");
    // Add active class to the clicked nav item
    nav.classList.add("active");

    // Hide all sections
    sections.forEach((section) => section.classList.remove("active"));
    // Show the section corresponding to the clicked nav item
    sections[idx].classList.add("active");
  });
});

// Resume tab-list (Experience, Skills, Education)
resumeLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    // Remove active class from all resume tabs
    document.querySelector(".resume-list.active").classList.remove("active");
    // Add active class to the clicked resume tab
    list.classList.add("active");

    // Hide all resume boxes
    document.querySelector(".resume-box.active").classList.remove("active");
    // Show the corresponding resume box
    resumeBoxes[idx].classList.add("active");
  });
});

// Portfolio section tab-list (My Work, My Service)
portfolioLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    // Remove active class from all portfolio tabs
    document.querySelector(".portfolio-list.active").classList.remove("active");
    // Add active class to the clicked portfolio tab
    list.classList.add("active");

    // Hide all portfolio boxes
    document.querySelector(".portfolio-box.active").classList.remove("active");
    // Show the corresponding portfolio box
    portfolioBoxes[idx].classList.add("active");
  });
});
