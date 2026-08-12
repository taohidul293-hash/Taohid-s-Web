 /* ==========================================================
   TAOHID'S WEB
   NEUROTECH SCRIPT SYSTEM
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

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


        /* Create menu button on pages
           that don't already have one */

        if (!menuToggle) {

            menuToggle =
                document.createElement("button");

            menuToggle.className =
                "menu-toggle";

            menuToggle.type =
                "button";

            menuToggle.innerHTML =
                "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
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


        /* Menu toggle */

        menuToggle.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                const isOpen =
                    sidebar.classList.contains(
                        "active"
                    );


                if (isOpen) {

                    sidebar.classList.remove(
                        "active"
                    );

                    menuToggle.innerHTML =
                        "☰";

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                } else {

                    sidebar.classList.add(
                        "active"
                    );

                    menuToggle.innerHTML =
                        "✕";

                    menuToggle.setAttribute(
                        "aria-label",
                        "Close menu"
                    );

                }

            }
        );


        /* Close after clicking a link */

        sidebar
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        sidebar.classList.remove(
                            "active"
                        );

                        menuToggle.innerHTML =
                            "☰";

                    }
                );

            });


        /* Escape closes menu */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    sidebar.classList.contains(
                        "active"
                    )
                ) {

                    sidebar.classList.remove(
                        "active"
                    );

                    menuToggle.innerHTML =
                        "☰";
                }

            }
        );

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

    if (loader) {

        window.addEventListener(
            "load",
            () => {

                loader.style.display =
                    "none";

            }
        );

        /* Safety fallback */

        setTimeout(() => {

            loader.style.display =
                "none";

        }, 2000);

    }

});
