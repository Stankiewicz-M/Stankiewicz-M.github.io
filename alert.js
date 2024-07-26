// alert.json:
// "alert": {
//     "pl": {
//         "title": "Zmiana adresów stron - 22.07.2024",
//         "message": "Do roku 2026 planowane jest usunięcie domeny stankiewiczm.eu. <a href='/new-domain'>Więcej informacji</a>"
//     },
//     "en": {
//         "title": "Change of websites addresses - 22.07.2024",
//         "message": "It is planned to remove the stankiewiczm.eu domain by 2026. <a href='/new-domain'>More info</a>"
//     },
//     "visiblity": {
//         "always": false,
//         "start": "2024-07-22",
//         "end": "2026-01-01"
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    var alert = document.getElementById('alert');
    var alertTitle = document.getElementById('alert-title');
    var alertMessage = document.getElementById('alert-message');
    var navbar = document.querySelector('.navbar');
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
                    navbar.style.top = '64px';
                }
            }
            if (data.alert.visiblity.always === true) {
                alert.style.display = 'block';
                alertTitle.innerHTML = data.alert[document.documentElement.lang].title;
                alertMessage.innerHTML = data.alert[document.documentElement.lang].message;
                if (window.innerWidth > 768) {
                    navbar.style.top = '64px';
                }
            }
        });
});

window.addEventListener('resize', function() {
    var navbar = document.querySelector('.navbar');
    if (window.innerWidth > 768) {
        navbar.style.top = '64px';
    } else {
        navbar.style.top = 'unset';
    }
});