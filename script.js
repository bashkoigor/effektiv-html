// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Product Carousel
const productCarousel = new Carousel(document.querySelector("#product-carousel"), {
    Dots: false,
});
const thumbCarousel = new Carousel(document.querySelector("#product-thumb-carousel"), {
    Sync: {
        target: productCarousel,
        friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
});
// Carousel block
const galleryCarousel = new Carousel(document.querySelector("#gallery-carousel"), {
    slidesPerPage : 1,
    center : false
});
Fancybox.bind("#gallery-carousel a", {
    caption: function (fancybox, carousel, slide) {},
});
// Other blocks
const inColorCarousel = new Carousel(document.querySelector("#in-color-carousel"), {
    slidesPerPage : 1,
    center : false
});
Fancybox.bind("#in-color-carousel a", {
    caption: function (fancybox, carousel, slide) {},
});

window.onscroll = function() {
    if (window.pageYOffset == 0) {
        document.getElementById("to-top").style.display = "none";
    } else {
        document.getElementById("to-top").style.display = "block";
    }

    if ((window.innerHeight + window.scrollY + 900) >= document.body.offsetHeight) {
        document.getElementById("mobile-menu").style.setProperty("display", "none", "important");
    } else {
        document.getElementById("mobile-menu").style.display = "block";
    }
}

document.getElementById("to-top").onclick = function() { scrollToTop() };
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

