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