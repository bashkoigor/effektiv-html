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

