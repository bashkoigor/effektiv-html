// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Gallery carousels
const galleryCarousel = new Carousel(document.querySelector("#gallery-carousel"), {
    slidesPerPage : 1,
    center : false
});
Fancybox.bind("#gallery-carousel a", {
    caption: function (fancybox, carousel, slide) {},
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


