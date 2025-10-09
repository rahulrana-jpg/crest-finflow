// Check authentication
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = 'login.html';
}

// Display user name
document.getElementById('userName').textContent = currentUser.name || 'User';

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
});

// Sidebar navigation
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const sections = document.querySelectorAll('.dashboard-section');

function navigateToSection(sectionId) {
    // Update active link
    sidebarLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');
    
    // Show active section
    sections.forEach(section => section.classList.remove('active'));
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.classList.add('active');
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.dataset.section;
        navigateToSection(sectionId);
    });
});

// Quick action buttons
const quickActionBtns = document.querySelectorAll('.quick-action-btn');
quickActionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.dataset.navigate;
        navigateToSection(sectionId);
    });
});

// Savings Calculator
const calculateBtn = document.getElementById('calculateBtn');

function calculateSavings() {
    const initial = parseFloat(document.getElementById('initial-amount').value) || 0;
    const monthly = parseFloat(document.getElementById('monthly-contribution').value) || 0;
    const rate = parseFloat(document.getElementById('interest-rate').value) / 100 || 0;
    const years = parseInt(document.getElementById('time-period').value) || 0;
    
    // Calculate total invested
    const totalInvested = initial + (monthly * 12 * years);
    
    // Calculate future value with compound interest
    const monthlyRate = rate / 12;
    const months = years * 12;
    
    // Future value of initial investment
    const futureInitial = initial * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly contributions (annuity)
    const futureMonthly = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    const finalAmount = futureInitial + futureMonthly;
    const totalInterest = finalAmount - totalInvested;
    
    // Display results
    document.getElementById('total-invested').textContent = `$${totalInvested.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById('total-interest').textContent = `$${totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById('final-amount').textContent = `$${finalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Calculate on page load
calculateSavings();

// Calculate on button click
calculateBtn.addEventListener('click', calculateSavings);

// Also calculate when inputs change
document.querySelectorAll('#calculator input').forEach(input => {
    input.addEventListener('input', calculateSavings);
});

// Contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    
    // In production, this would send to a backend
    alert('Message sent successfully! An advisor will contact you within 24 hours.');
    
    // Reset form
    contactForm.reset();
});
