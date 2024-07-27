document.addEventListener('DOMContentLoaded', function() {
    var alert = document.getElementById('alert');
    var alertTitle = document.getElementById('alert-title');
    var alertMessage = document.getElementById('alert-message');
    fetch('/alert.json')
        .then(response => response.json())
        .then(data => {
            var currentDate = new Date();
            var startDate = new Date(data.alert.visiblity.start);
            var endDate = new Date(data.alert.visiblity.end);
            if (currentDate >= startDate && currentDate <= endDate && data.alert.visiblity.always === false) {
                alert.style.display = 'block';
                alertTitle.innerHTML = data.alert[document.documentElement.lang].title;
                alertMessage.innerHTML = data.alert[document.documentElement.lang].message;
                if (window.innerWidth > 768) {
                    setNavbarTop()
                }
            }
            if (data.alert.visiblity.always === true) {
                alert.style.display = 'block';
                alertTitle.innerHTML = data.alert[document.documentElement.lang].title;
                alertMessage.innerHTML = data.alert[document.documentElement.lang].message;
                if (window.innerWidth > 768) {
                    setNavbarTop()
                }
            }
        });
});

window.addEventListener('resize', function() {
    var navbar = document.querySelector('.navbar');
    var alert = document.getElementById('alert');
    if (window.innerWidth > 768 && alert.style.display === 'block') {
        setNavbarTop();
    } else {
        navbar.style.top = 'unset';
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var alert = document.getElementById('alert');
    if (window.innerWidth > 768 && alert.style.display === 'block') {
        setNavbarTop();
    } else {
        navbar.style.top = 'unset';
    }
});

function setNavbarTop() {
    var navbar = document.querySelector('.navbar');
    var scrollY = window.scrollY;
    if (scrollY <= 64) {
        if (window.innerWidth > 768) {
            navbar.style.top = 64 - scrollY + 'px';
        }
    } else {
        navbar.style.top = 'unset';
    }
}