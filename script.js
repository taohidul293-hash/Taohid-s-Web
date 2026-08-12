 /* ==========================================================
   TAOHID'S WEB
   NEUROTECH SCRIPT SYSTEM
   CLEAN RESPONSIVE MENU
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ======================================================
       BASIC ELEMENTS
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

    function enableDarkMode(){

        body.classList.add("dark");

        if(toggleBtn){

            toggleBtn.innerHTML = "☀️";

        }

    }


    function disableDarkMode(){

        body.classList.remove("dark");

        if(toggleBtn){

            toggleBtn.innerHTML = "🌙";

        }

    }


    /* Load saved theme */

    const savedTheme =
        localStorage.getItem("theme");


    if(savedTheme === "dark"){

        enableDarkMode();

    }else{

        disableDarkMode();

    }


    /* Toggle theme */

    if(toggleBtn){

        toggleBtn.addEventListener("click", () => {

            if(body.classList.contains("dark")){

                disableDarkMode();

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }else{

                enableDarkMode();

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

        });

    }


/* ==========================================================
   UNIVERSAL MOBILE MENU - FINAL
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) return;

    let menuToggle = document.querySelector(".menu-toggle");

    /* Create menu button if page doesn't have one */
    if (!menuToggle) {

        menuToggle = document.createElement("button");

        menuToggle.className = "menu-toggle";
        menuToggle.type = "button";

        menuToggle.innerHTML = "☰";

        menuToggle.setAttribute("aria-label", "Open menu");

        document.body.appendChild(menuToggle);
    }

    /* Remove old close button */
    const oldClose = sidebar.querySelector(".menu-close");

    if (oldClose) {
        oldClose.remove();
    }

    /* Remove any old overlay */
    const oldOverlay = document.querySelector(".menu-overlay");

    if (oldOverlay) {
        oldOverlay.remove();
    }


    /* OPEN / CLOSE */
    menuToggle.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        const open = sidebar.classList.toggle("active");

        if (open) {

            menuToggle.innerHTML = "✕";
            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );

            document.body.classList.add("menu-open");

        } else {

            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

            document.body.classList.remove("menu-open");
        }

    });


    /* Close when clicking a menu link */
    sidebar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            sidebar.classList.remove("active");

            menuToggle.innerHTML = "☰";

            document.body.classList.remove("menu-open");

        });

    });


    /* ESC closes menu */
    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            sidebar.classList.contains("active")
        ) {

            sidebar.classList.remove("active");

            menuToggle.innerHTML = "☰";

            document.body.classList.remove("menu-open");
        }

    });

});
        /* --------------------------------------------------
           If page doesn't have one,
           automatically create it.
        -------------------------------------------------- */

        if(!menuToggle){

            menuToggle =
                document.createElement("button");

            menuToggle.className =
                "menu-toggle";

            menuToggle.id =
                "menuToggle";

            menuToggle.type =
                "button";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML =
                "☰";

            document.body.appendChild(
                menuToggle
            );

        }


        /* --------------------------------------------------
           Remove old separate close button
           because the SAME button will become X.
        -------------------------------------------------- */

        const oldClose =
            sidebar.querySelector(".menu-close");


        if(oldClose){

            oldClose.remove();

        }


        /* --------------------------------------------------
           Create overlay
        -------------------------------------------------- */

        let overlay =
            document.querySelector(".menu-overlay");


        if(!overlay){

            overlay =
                document.createElement("div");

            overlay.className =
                "menu-overlay";

            document.body.appendChild(
                overlay
            );

        }


        /* --------------------------------------------------
           OPEN MENU
        -------------------------------------------------- */

        function openMenu(){

            sidebar.classList.add("active");

            overlay.classList.add("active");

            menuToggle.innerHTML =
                "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.classList.add(
                "menu-open"
            );

        }


        /* --------------------------------------------------
           CLOSE MENU
        -------------------------------------------------- */

        function closeMenu(){

            sidebar.classList.remove("active");

            overlay.classList.remove("active");

            menuToggle.innerHTML =
                "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }


        /* --------------------------------------------------
           TOGGLE MENU
        -------------------------------------------------- */

        menuToggle.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                if(
                    sidebar.classList.contains(
                        "active"
                    )
                ){

                    closeMenu();

                }else{

                    openMenu();

                }

            }
        );


        /* --------------------------------------------------
           OVERLAY CLICK
        -------------------------------------------------- */

        overlay.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );


        /* --------------------------------------------------
           CLOSE WHEN CLICKING A LINK
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
           ESC KEY
        -------------------------------------------------- */

        document.addEventListener(
            "keydown",
            (event) => {

                if(
                    event.key === "Escape" &&
                    sidebar.classList.contains(
                        "active"
                    )
                ){

                    closeMenu();

                }

            }
        );


        /* --------------------------------------------------
           ACTIVE PAGE
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
                    link
                        .getAttribute("href");


                if(!href){

                    return;

                }


                const linkPage =
                    href
                        .split("/")
                        .pop()
                        .split("?")[0]
                        .split("#")[0]
                        .toLowerCase();


                if(
                    linkPage &&
                    linkPage === currentPage
                ){

                    const parent =
                        link.closest("li");


                    if(parent){

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

    if(glow){

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

    window.addEventListener(
        "load",
        () => {

            if(loader){

                loader.style.display =
                    "none";

            }

        }
    );


});
