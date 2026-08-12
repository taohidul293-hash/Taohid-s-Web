 /* ==========================================================
   NEUROTECH SCRIPT SYSTEM
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.querySelector(".dark-toggle");
  const body = document.body;

  // =========================
  // LOAD SAVED THEME
  // =========================

  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "dark"){

    enableDarkMode();

  }

  // =========================
  // DARK MODE TOGGLE
  // =========================

  toggleBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

      localStorage.setItem("theme","dark");

      toggleBtn.innerHTML = "☀️";

    }else{

      localStorage.setItem("theme","light");

      toggleBtn.innerHTML = "🌙";

    }

  });

  // =========================
  // FUNCTIONS
  // =========================

  function enableDarkMode(){

    body.classList.add("dark");

    toggleBtn.innerHTML = "☀️";

  }

});

/* =========================
   CURSOR GLOW
========================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});

/* =========================
   LOADER
========================= */

window.addEventListener("load",()=>{

  document.getElementById("loader").style.display = "none";

});


/* ==========================================================
   MOBILE MENU
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const sidebar = document.getElementById("sidebar");


    /* OPEN MENU */

    if (menuToggle && sidebar) {

        menuToggle.addEventListener("click", (event) => {

            event.stopPropagation();

            sidebar.classList.add("active");

        });

    }


    /* CLOSE MENU */

    if (menuClose && sidebar) {

        menuClose.addEventListener("click", (event) => {

            event.stopPropagation();

            sidebar.classList.remove("active");

        });

    }


    /* CLOSE AFTER CLICKING LINK */

    if (sidebar) {

        sidebar.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                sidebar.classList.remove("active");

            });

        });

    }

});
