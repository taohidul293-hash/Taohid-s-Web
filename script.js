 /* ==========================================================
   TAOHID'S WEB
   FINAL CLEAN SCRIPT
========================================================== */

(function () {

    "use strict";

    /* ======================================================
       LOADER
    ====================================================== */

    function hideLoader() {

        const loader =
            document.getElementById("loader");

        if (loader) {
            loader.style.display = "none";
        }

    }


    /* ======================================================
       DARK MODE
    ====================================================== */

    function setupDarkMode() {

        const body =
            document.body;

        const toggleBtn =
            document.querySelector(".dark-toggle");

        if (!toggleBtn) {
            return;
        }


        const savedTheme =
            localStorage.getItem("theme");


        if (savedTheme === "dark") {

            body.classList.add("dark");

            toggleBtn.innerHTML = "☀️";

        } else {

            body.classList.remove("dark");

            toggleBtn.innerHTML = "🌙";

        }


        toggleBtn.addEventListener(
            "click",
            function () {

                const isDark =
                    body.classList.toggle("dark");


                if (isDark) {

                    localStorage.setItem(
                        "theme",
                        "dark"
                    );

                    toggleBtn.innerHTML = "☀️";

                } else {

                    localStorage.setItem(
                        "theme",
                        "light"
                    );

                    toggleBtn.innerHTML = "🌙";

                }

            }
        );

    }


    /* ======================================================
       MOBILE MENU
    ====================================================== */

    function setupMobileMenu() {

        const sidebar =
            document.querySelector(".sidebar");

        if (!sidebar) {
            return;
        }


        let menuButton =
            document.querySelector(".menu-toggle");


        /*
         * Create button automatically
         * on pages that don't already have one.
         */

        if (!menuButton) {

            menuButton =
                document.createElement("button");

            menuButton.className =
                "menu-toggle";

            menuButton.type =
                "button";

            menuButton.innerHTML =
                "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

            document.body.appendChild(
                menuButton
            );

        }


        /*
         * Remove old separate close button.
         */

        const oldCloseButton =
            sidebar.querySelector(".menu-close");

        if (oldCloseButton) {

            oldCloseButton.remove();

        }


        /*
         * Close menu function.
         */

        function closeMenu() {

            sidebar.classList.remove("active");

            menuButton.innerHTML = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }


        /*
         * Open menu function.
         */

        function openMenu() {

            sidebar.classList.add("active");

            menuButton.innerHTML = "✕";

            menuButton.setAttribute(
                "aria-label",
                "Close menu"
            );

            document.body.classList.add(
                "menu-open"
            );

        }


        /*
         * Menu button.
         */

        menuButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                if (
                    sidebar.classList.contains(
                        "active"
                    )
                ) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        /*
         * Close menu after clicking a link.
         */

        sidebar
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMenu();

                    }
                );

            });


        /*
         * Escape key.
         */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    closeMenu();

                }

            }
        );

    }


    /* ======================================================
       CURSOR GLOW
    ====================================================== */

    function setupCursorGlow() {

        const glow =
            document.querySelector(".cursor-glow");

        if (!glow) {
            return;
        }


        document.addEventListener(
            "mousemove",
            function (event) {

                glow.style.left =
                    event.clientX + "px";

                glow.style.top =
                    event.clientY + "px";

            }
        );

    }


    /* ======================================================
       START EVERYTHING
    ====================================================== */

    function initialize() {

        try {

            setupDarkMode();

            setupMobileMenu();

            setupCursorGlow();

        } catch (error) {

            console.error(
                "Taohid's Web script error:",
                error
            );

        }


        /*
         * Always remove loader even if
         * another feature has a problem.
         */

        hideLoader();

    }


    /* ======================================================
       PAGE LOAD
    ====================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }


    /*
     * Extra safety:
     * never allow Loading... to remain forever.
     */

    window.addEventListener(
        "load",
        hideLoader
    );

    setTimeout(
        hideLoader,
        1500
    );


})();
