document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    new Glide('.glide', {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        breakpoints: {
            940: {
                perView: 2
            },
            640: {
                perView: 1
            }
        }
    }).mount();

});