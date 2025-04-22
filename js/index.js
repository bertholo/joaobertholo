const data = [
    { aLink: "http://direcionaco.com", imgSrc: "img/direcionaco.jpg", description: "Client's Project" },
    { aLink: "budget-buddy.html", imgSrc: "img/budget-buddy-front-page.jpg", description: "Expense Tracker" },
    { aLink: "./weather-app.html", imgSrc: "img/weather-app-front-page.jpg", description: "Weather App" },
    { aLink: "ravenous.html", imgSrc: "img/background_search_mobile.jpg", description: "Restaurant Finder" },
    { aLink: "jamming.html", imgSrc: "img/background_photo_jamming.jpg", description: "Spotify Post request" },
    { aLink: "boss-machine.html", imgSrc: "img/boss-machine-meetings.png", description: "Back End Project" }
];

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const showInfo = document.querySelectorAll('.show-info');
const portfolio = document.querySelector('.portfolio');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', checkSections);

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


data.forEach(item => {
    const portfolioItem = document.createElement('div');
    const itemDescription = document.createElement('div');

    portfolioItem.classList.add('portfolio-item');
    itemDescription.classList.add('item-description');

    portfolioItem.style.backgroundImage = `url(${item.imgSrc})`;

    itemDescription.textContent = item.description;

    portfolioItem.addEventListener('click', () => {
        window.location.href = item.aLink;
    });

    portfolioItem.appendChild(itemDescription);
    portfolio.appendChild(portfolioItem);
})


function checkSections() {
    const triggerBottom = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('show-content');
        } else {
            section.classList.remove('show-content');
        }
    })
}




