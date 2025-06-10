// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal Handling
const modal = document.getElementById('loginModal');
const loginBtns = document.querySelectorAll('[data-modal-target]');

loginBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        // Implement search logic
        console.log(`Searching for: ${query}`);
    }
});

// Dynamic Book Loading
const books = [
    // Sample book data
    { title: 'KOSLA', author: 'B Nemade', category: 'Novel', status: 'Not Available', image: 'D:/project/project/51Xd+YTmssL._AC_UL600_SR600,600_.jpg' },
    { title: 'LA', author: 'B Nemade', category: 'Novel', status: 'Available', image: 'D:/project/project/images (1).jpg' },
    { title: 'm 3', author: 'd 3', category: 'd 3', status: 'Available', image: 'D:/project/project/9780553897845.jpg' },
    { title: 'g 4', author: 'd 4', category: 'a 4', status: 'Not Available', image: 'D:/project/project/download (1).jpg' },
    { title: 'Book 5', author: 'd 5', category: 'a 5', status: 'Available', image: 'D:/project/project/download.jpg' },
    { title: 'KOSLA', author: 'B Nemade', category: 'Novel', status: 'Not Available', image: 'D:/project/project/51Xd+YTmssL._AC_UL600_SR600,600_.jpg' },
    { title: 'LA', author: 'B Nemade', category: 'Novel', status: 'Available', image: 'D:/project/project/images (1).jpg' },
    { title: 'm 3', author: 'd 3', category: 'd 3', status: 'Available', image: 'D:/project/project/9780553897845.jpg' },
    { title: 'g 4', author: 'd 4', category: 'a 4', status: 'Not Available', image: 'D:/project/project/download (1).jpg' },
    { title: 'Book 5', author: 'd 5', category: 'a 5', status: 'Available', image: 'D:/project/project/download.jpg' },
    { title: 'KOSLA', author: 'B Nemade', category: 'Novel', status: 'Not Available', image: 'D:/project/project/51Xd+YTmssL._AC_UL600_SR600,600_.jpg' },
    { title: 'LA', author: 'B Nemade', category: 'Novel', status: 'Available', image: 'D:/project/project/images (1).jpg' },
    { title: 'm 3', author: 'd 3', category: 'd 3', status: 'Available', image: 'D:/project/project/9780553897845.jpg' },
    { title: 'g 4', author: 'd 4', category: 'a 4', status: 'Not Available', image: 'D:/project/project/download (1).jpg' },
    { title: 'Book 5', author: 'd 5', category: 'a 5', status: 'Available', image: 'D:/project/project/download.jpg' },
    { title: 'KOSLA', author: 'B Nemade', category: 'Novel', status: 'Not Available', image: 'D:/project/project/51Xd+YTmssL._AC_UL600_SR600,600_.jpg' },
    { title: 'LA', author: 'B Nemade', category: 'Novel', status: 'Available', image: 'D:/project/project/images (1).jpg' },
    { title: 'm 3', author: 'd 3', category: 'd 3', status: 'Available', image: 'D:/project/project/9780553897845.jpg' },
    { title: 'g 4', author: 'd 4', category: 'a 4', status: 'Not Available', image: 'D:/project/project/download (1).jpg' },
    { title: 'Book 5', author: 'd 5', category: 'a 5', status: 'Available', image: 'D:/project/project/download.jpg' },
    { title: 'LA', author: 'B Nemade', category: 'Novel', status: 'Available', image: 'D:/project/project/images (1).jpg' },
    { title: 'm 3', author: 'd 3', category: 'd 3', status: 'Available', image: 'D:/project/project/9780553897845.jpg' },
    { title: 'g 4', author: 'd 4', category: 'a 4', status: 'Not Available', image: 'D:/project/project/download (1).jpg' },
    { title: 'Book 5', author: 'd 5', category: 'a 5', status: 'Available', image: 'D:/project/project/download.jpg' },
    // Add more books...
];

function renderBooks() {
    const grid = document.querySelector('.books-grid');
    grid.innerHTML = books.map((book, index) => `
        <div class="book-card" id="${index + 1}">
            <div class="badge">${book.status}</div>
            <img src="${book.image}" class="book-image" alt="${book.title}">
            <div class="book-info">
                <h4>${book.title}</h4>
                <p>${book.author}</p>
                <p>Category: ${book.category}</p>
            </div>
        </div>
    `).join('');
}

renderBooks();