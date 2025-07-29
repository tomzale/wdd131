const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Student-added 3+
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, June, 19",
    area: 86250,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/800x500/kyiv-ukraine-lds-temple-771090-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, April, 21",
    area: 55300,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/800x500/paris-france-temple-exterior-1905503.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "2022, October, 15",
    area: 105000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/800x500/sao-paulo-brazil-temple-lds-756468-wallpaper.jpg"
  },
];

const container = document.getElementById('temple-cards');

function buildTempleCard(t) {
  const card = document.createElement('div');
  card.classList.add('temple-card');

  card.innerHTML = `
    <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    <div class="temple-info">
      <h2>${t.templeName}</h2>
      <p>📍 ${t.location}</p>
      <p>Dedicated: ${t.dedicated}</p>
      <p>Area: ${t.area.toLocaleString()} ft²</p>
    </div>
  `;
  container.appendChild(card);
}

function displayTemples(list) {
  container.innerHTML = '';
  list.forEach(buildTempleCard);
}

function filterBy(type) {
  switch (type) {
    case 'old':
      displayTemples(temples.filter(t => {
        const year = new Date(t.dedicated).getFullYear();
        return year < 1900;
      }));
      break;
    case 'new':
      displayTemples(temples.filter(t => {
        const year = new Date(t.dedicated).getFullYear();
        return year > 2000;
      }));
      break;
    case 'large':
      displayTemples(temples.filter(t => t.area > 90000));
      break;
    case 'small':
      displayTemples(temples.filter(t => t.area < 10000));
      break;
    default:
      displayTemples(temples);
  }
}

document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => filterBy(btn.dataset.filter));
});

window.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);

  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
