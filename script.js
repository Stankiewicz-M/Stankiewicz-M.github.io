function navbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            plusSlides(-1);
            break;
        case 39:
            plusSlides(1);
            break;
    }
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("images-slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function changeLanguageAndOpen() {
    var currentUrl = window.location.href;
    if (currentUrl.includes('/pl')) {
        var newUrl = currentUrl.replace('/pl', '/en');
        window.open(newUrl, '_self');
    } else if (currentUrl.includes('/en')) {
        var newUrl = currentUrl.replace('/en', '/pl');
        window.open(newUrl, '_self');
    } else {
        console.log("Adres URL nie zawiera ani '/pl' ani '/en'");
    }
}

function langKey(event) {
    if (event.keyCode === 13) {
        changeLanguageAndOpen();
    }
}

