const navs = document.querySelectorAll(".nav-list li");
const cube = document.querySelector(".box");

const resumeLists = document.querySelectorAll(".resume-list");
const resumeBoxes = document.querySelectorAll(".resume-box");

const portfolioLists = document.querySelectorAll(".portfolio-list");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");

//navbar sections
navs.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    document.querySelector(".nav-list li.active").classList.remove("active");
    nav.classList.add("active");

    cube.style.transform = `rotateY(${idx * -90}deg)`;
  });
});

//resume tab-list
resumeLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".resume-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".resume-box.active").classList.remove("active");
    resumeBoxes[idx].classList.add("active");
  });
});

// portfolio section tab-list
portfolioLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".portfolio-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".portfolio-box.active").classList.remove("active");
    portfolioBoxes[idx].classList.add("active");
  });
});
