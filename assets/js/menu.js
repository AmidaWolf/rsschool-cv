document.addEventListener("DOMContentLoaded", () => {
    // mobile-menu
    const nav = document.querySelector(".main-nav");

    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("main-nav--open");
    });

    document.querySelector(".main-nav__overlay",).addEventListener("click", () => {
        nav.classList.remove("main-nav--open");
    });

    document.querySelector(".menu-list",).addEventListener("click", () => {
        nav.classList.remove("main-nav--open");
    });

    // highlight active menu items
    const anchor = document.querySelectorAll(".anchor");
    let anchors = {};
    let i = 0;

    //take position of anchors
    Array.prototype.forEach.call(anchor, function(e) {
        anchors[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in anchors) {
            if (anchors[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    };
});
