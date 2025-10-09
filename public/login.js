// Tab switching
const authTabs = document.querySelectorAll('.auth-tab');
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabType = tab.dataset.tab;
        
        // Update active tab
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show/hide forms
        if (tabType === 'signin') {
            signinForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        } else {
            signinForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
        }
    });
});

// Sign In
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    // Simple validation - in production, this would be handled by a backend
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Please try again or sign up.');
    }
});

// Sign Up
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    
    // Validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
        alert('An account with this email already exists!');
        return;
    }
    
    // Create new user
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
});

// Social auth buttons (placeholder)
const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Social authentication will be available soon!');
    });
});
