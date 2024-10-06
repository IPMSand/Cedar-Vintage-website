window.addEventListener('scroll', function() {
    var navbar = document.getElementById('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');   

    } else {
        navbar.classList.remove('scrolled');   

    }
});