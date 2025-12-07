function goToLoginPage() {
  // Clear the existing homepage content
  document.querySelector('.hero-section').innerHTML = '';
  
  // Display the content you would normally see on the login-signup.html page
  document.querySelector('.hero-section').innerHTML = `
    <h1>Welcome!</h1>
    <p>Please log in or sign up to begin your journey.</p>
    
    <form id="auth-form">
        <input type="email" placeholder="Email Address" required>
        <input type="password" placeholder="Password" required>
        
        <button type="submit" class="nav-button" onclick="redirectToAssessment(event)">Continue to Assessment</button>
    </form>
  `;
}

// Keep your existing redirectToAssessment function here as well
