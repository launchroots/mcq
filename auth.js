// User database (in a real app, use a backend server)
const users = JSON.parse(localStorage.getItem('users')) || [];

// DOM Elements
const loginForm = document.getElementById('login-form');
const registerLink = document.getElementById('register-link');

// Handle login
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Find user
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Save current user session
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials!');
        }
    });
}

// Handle registration link
if (registerLink) {
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Enter your email:');
        if (!email) return;
        
        const password = prompt('Enter your password:');
        if (!password) return;
        
        // Check if user exists
        if (users.some(u => u.email === email)) {
            alert('User already exists!');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            email,
            password,
            quizResults: []
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Auto-login
        sessionStorage.setItem('currentUser', JSON.stringify(newUser));
        window.location.href = 'index.html';
    });
}

// Check authentication on other pages
function checkAuth() {
    if (!sessionStorage.getItem('currentUser') && 
        !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }
}

// Call this on every page except login
document.addEventListener('DOMContentLoaded', checkAuth);
// Logout functionality
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
}
// ADMIN AUTH - ADD THESE NEW FUNCTIONS
function showAdminButton() {
    const adminBtn = document.createElement('button');
    adminBtn.id = 'admin-btn';
    adminBtn.className = 'admin-btn';
    adminBtn.innerHTML = '<i class="fas fa-lock"></i> Admin';
    
    adminBtn.addEventListener('click', function() {
        const password = prompt("Enter admin password:");
        if (password === "MySecurePassword123!") { // Must match ADMIN_KEY in admin.html
            window.location.href = 'admin.html';
        } else {
            alert("Access denied");
        }
    });
    
    document.querySelector('header').appendChild(adminBtn);
}

// Call this in your existing DOMContentLoaded
if (location.pathname.includes('index.html')) {
    showAdminButton();
}