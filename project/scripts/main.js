// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contentGrid = document.querySelector('.content-grid');

// Sample content data (replace with actual content)
const contentData = [
    {
        type: 'video',
        title: 'Killer Bean Ultimate Combo Guide',
        author: 'Zale',
        views: '15K',
        description: 'Master devastating combos with frame-by-frame breakdown',
        badge: 'NEW',
        image: 'images/thumbnails/killer-bean.jpg'
    },
    {
        type: 'video',
        title: 'Fortnite Building Techniques',
        author: 'Zale',
        views: '42K',
        description: 'Advanced building strategies to outmaneuver opponents',
        badge: 'POPULAR',
        image: 'images/thumbnails/fortnite-building.jpg'
    },
    {
        type: 'quiz',
        title: 'GTA V Character Trivia',
        author: 'Challenge',
        views: '8.5K',
        description: 'Test your knowledge of Los Santos iconic characters',
        badge: 'QUIZ',
        image: 'images/thumbnails/gta-quiz.jpg'
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Sticky header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // Load content cards
    loadContentCards();
});

// Load content cards dynamically
function loadContentCards() {
    contentGrid.innerHTML = '';
    
    contentData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${item.image}')"></div>
            <div class="card-badge">${item.badge}</div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span>By ${item.author}</span>
                    <span>${item.views} views</span>
                </div>
                <p class="card-description">${item.description}</p>
                <a href="${item.type === 'video' ? 'videos.html' : 'community.html'}" 
                   class="btn card-btn">
                   ${item.type === 'video' ? 'WATCH NOW' : 'PLAY QUIZ'}
                </a>
            </div>
        `;
        contentGrid.appendChild(card);
    });
}

// Initialize localStorage if not set
if (localStorage.getItem('quizScores') === null) {
    localStorage.setItem('quizScores', JSON.stringify({}));
}

