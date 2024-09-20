const data = [
    { aLink: "http://bertholo.github.io/sales-rep-ana/", imgSrc: "img/direcionaco.jpg" },
    { aLink: "budget-buddy.html", imgSrc: "img/budget-buddy-front-page.jpg" },
    { aLink: "./weather-app.html", imgSrc: "img/weather-app-front-page.jpg" },
    { aLink: "ravenous.html", imgSrc: "img/background_search_mobile.jpg" },
    { aLink: "jamming.html", imgSrc: "img/background_photo_jamming.jpg" },
    { aLink: "boss-machine.html", imgSrc: "img/boss-machine-meetings.png" }
];

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const showInfo = document.querySelectorAll('.show-info');
const portfolio = document.querySelector('.portfolio');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

window.addEventListener('DOMContentLoaded', () => {
    data.forEach(item => {
        const portfolioItem = document.createElement('div');

        portfolioItem.classList.add('portfolio-item');

        portfolioItem.style.backgroundImage = `url(${item.imgSrc})`;
        portfolioItem.style.backgroundSize = 'cover';
        portfolioItem.style.backgroundPosition = 'center';
        portfolioItem.style.cursor = 'pointer';

        portfolioItem.addEventListener('click', () => {
            window.location.href = item.aLink;
        });

        portfolio.appendChild(portfolioItem);

        portfolioItem.addEventListener('mouseover', () => {
            
        })
    })
})


