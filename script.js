 /* ==========================================================
   TAOHID'S WEB
   NEUROTECH SCRIPT SYSTEM
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       ELEMENTS
    ====================================================== */

    const body = document.body;

    const toggleBtn =
        document.querySelector(".dark-toggle");

    const sidebar =
        document.querySelector(".sidebar");

    const loader =
        document.getElementById("loader");

    const glow =
        document.querySelector(".cursor-glow");


    /* ======================================================
       DARK MODE
    ====================================================== */

    function enableDarkMode() {

        body.classList.add("dark");

        if (toggleBtn) {
            toggleBtn.innerHTML = "☀️";
        }
    }


    function disableDarkMode() {

        body.classList.remove("dark");

        if (toggleBtn) {
            toggleBtn.innerHTML = "🌙";
        }
    }


    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        enableDarkMode();

    } else {

        disableDarkMode();

    }


    if (toggleBtn) {

        toggleBtn.addEventListener("click", () => {

            if (body.classList.contains("dark")) {

                disableDarkMode();

                localStorage.setItem(
                    "theme",
                    "light"
                );

            } else {

                enableDarkMode();

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

        });

    }


    /* ======================================================
       UNIVERSAL MOBILE MENU
    ====================================================== */

    if (sidebar) {

        let menuToggle =
            document.querySelector(".menu-toggle");


        /* Create button automatically
           on pages that don't already have one */

        if (!menuToggle) {

            menuToggle =
                document.createElement("button");

            menuToggle.className =
                "menu-toggle";

            menuToggle.id =
                "menuToggle";

            menuToggle.type =
                "button";

            menuToggle.innerHTML =
                "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.appendChild(
                menuToggle
            );

        }


        /* Remove old separate close button */

        const oldClose =
            sidebar.querySelector(".menu-close");

        if (oldClose) {

            oldClose.remove();

        }


        /* --------------------------------------------------
           OPEN / CLOSE MENU
        -------------------------------------------------- */

        function openMenu() {

            sidebar.classList.add("active");

            menuToggle.innerHTML = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            body.classList.add("menu-open");

        }


        function closeMenu() {

            sidebar.classList.remove("active");

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            body.classList.remove("menu-open");

        }


        /* --------------------------------------------------
           MENU BUTTON
        -------------------------------------------------- */

        menuToggle.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                if (
                    sidebar.classList.contains("active")
                ) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        /* --------------------------------------------------
           CLOSE WHEN MENU LINK IS CLICKED
        -------------------------------------------------- */

        sidebar
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        closeMenu();

                    }
                );

            });


        /* --------------------------------------------------
           ESCAPE KEY
        -------------------------------------------------- */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    sidebar.classList.contains("active")
                ) {

                    closeMenu();

                }

            }
        );


        /* --------------------------------------------------
           ACTIVE CURRENT PAGE
        -------------------------------------------------- */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        sidebar
            .querySelectorAll("a")
            .forEach(link => {

                const href =
                    link.getAttribute("href");


                if (!href) {
                    return;
                }


                const linkPage =
                    href
                        .split("/")
                        .pop()
                        .split("?")[0]
                        .split("#")[0]
                        .toLowerCase();


                if (
                    linkPage &&
                    linkPage === currentPage
                ) {

                    const parent =
                        link.closest("li");


                    if (parent) {

                        parent.classList.add(
                            "active"
                        );

                    }

                }

            });

    }


    /* ======================================================
       CURSOR GLOW
    ====================================================== */

    if (glow) {

        document.addEventListener(
            "mousemove",
            (event) => {

                glow.style.left =
                    event.clientX + "px";

                glow.style.top =
                    event.clientY + "px";

            }
        );

    }


    /* ======================================================
       LOADER
    ====================================================== */

    function hideLoader() {

        if (loader) {

            loader.style.display =
                "none";

        }

    }


    window.addEventListener(
        "load",
        hideLoader
    );


    /* Safety fallback:
       loader cannot stay forever */

    setTimeout(
        hideLoader,
        2000
    );

});
