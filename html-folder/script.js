// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initAnimations();
  
  // Initialize product card interactions
  initProductCards();
  
  // Initialize event RSVP buttons
  initRSVPButtons();
  
  // Initialize contact form validation
  initContactForm();
});

// Initialize animations for fade-in elements
function initAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Create an intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class when element is in viewport
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        // Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all fade-in elements
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// Initialize product card hover and click interactions
function initProductCards() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    // Add click event to show product details
    card.addEventListener('click', () => {
      const productId = card.getAttribute('data-id');
      
      // In a real implementation, this could open a modal with product details
      console.log(`Product ${productId} clicked`);
      
      // For demonstration, show a browser alert with product info
      const productName = card.querySelector('h3').textContent;
      alert(`You selected: ${productName}\nMore details would appear in a modal in a complete implementation.`);
    });
  });
}

// Initialize RSVP buttons on the events page
function initRSVPButtons() {
  const rsvpButtons = document.querySelectorAll('.rsvp-button');
  
  rsvpButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get event title from the parent card
      const eventCard = button.closest('.event-card');
      const eventTitle = eventCard.querySelector('h3').textContent;
      
      // Show confirmation message
      showToast(`Thank you for your RSVP to "${eventTitle}". We'll be in touch soon with further details.`);
    });
  });
}

// Initialize contact form validation
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic form validation
      let isValid = true;
      
      // Validate name
      const nameInput = document.getElementById('name');
      const nameError = document.getElementById('name-error');
      
      if (!nameInput.value.trim()) {
        showError(nameInput, nameError, 'Name is required');
        isValid = false;
      } else {
        hideError(nameInput, nameError);
      }
      
      // Validate email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('email-error');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailInput.value.trim()) {
        showError(emailInput, emailError, 'Email is required');
        isValid = false;
      } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        isValid = false;
      } else {
        hideError(emailInput, emailError);
      }
      
      // Validate phone (optional but validate format if provided)
      const phoneInput = document.getElementById('phone');
      const phoneError = document.getElementById('phone-error');
      
      if (phoneInput.value.trim() && !/^[0-9()+\- ]{7,20}$/.test(phoneInput.value)) {
        showError(phoneInput, phoneError, 'Please enter a valid phone number');
        isValid = false;
      } else {
        hideError(phoneInput, phoneError);
      }
      
      // Validate inquiry type
      const inquiryInput = document.getElementById('inquiry-type');
      const inquiryError = document.getElementById('inquiry-type-error');
      
      if (inquiryInput.value === '') {
        showError(inquiryInput, inquiryError, 'Please select an inquiry type');
        isValid = false;
      } else {
        hideError(inquiryInput, inquiryError);
      }
      
      // Validate message
      const messageInput = document.getElementById('message');
      const messageError = document.getElementById('message-error');
      
      if (!messageInput.value.trim()) {
        showError(messageInput, messageError, 'Message is required');
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        isValid = false;
      } else {
        hideError(messageInput, messageError);
      }
      
      // If form is valid, process submission
      if (isValid) {
        // In a real implementation, this would submit the form data
        console.log('Form is valid, would submit data here');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        showToast('Your message has been sent successfully. We will contact you soon!');
      }
    });
  }
}

// Helper function to show form input errors
function showError(input, errorElement, message) {
  input.style.borderColor = '#e74c3c';
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

// Helper function to hide form input errors
function hideError(input, errorElement) {
  input.style.borderColor = 'rgba(0, 0, 0, 0.1)';
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}

// Helper function to show toast notifications
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 5000);
  }
}

// Fallback toast function if not on the contact page
if (!document.getElementById('toast')) {
  window.showToast = function(message) {
    alert(message);
  };
}

// Add DOM Structure visualization
function showDOMStructure() {
  // Create a simplified DOM structure viewer
  const domStructure = {
    tagName: 'html',
    children: [
      {
        tagName: 'head',
        children: [
          { tagName: 'meta' },
          { tagName: 'title' },
          { tagName: 'link', attributes: { rel: 'stylesheet' } }
        ]
      },
      {
        tagName: 'body',
        children: [
          {
            tagName: 'nav',
            className: 'navigation',
            children: [
              {
                tagName: 'div',
                className: 'nav-container',
                children: [
                  { tagName: 'a', className: 'logo' },
                  { 
                    tagName: 'div', 
                    className: 'nav-links',
                    children: [
                      { tagName: 'a', className: 'nav-link' },
                      { tagName: 'a', className: 'nav-link' },
                      { tagName: 'a', className: 'nav-link' },
                      { tagName: 'a', className: 'nav-link' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            tagName: 'div',
            className: 'marquee',
            children: [
              { 
                tagName: 'div', 
                className: 'marquee-content',
                children: [
                  { tagName: 'span' },
                  { tagName: 'span' },
                  { tagName: 'span' },
                  { tagName: 'span' },
                  { tagName: 'span' },
                  { tagName: 'span' }
                ]
              }
            ]
          },
          {
            tagName: 'main',
            className: 'main-content',
            children: [
              {
                tagName: 'div',
                className: 'page-section',
                children: [
                  { tagName: 'h1', className: 'title' },
                  { tagName: 'p', className: 'subtitle' },
                  // Content varies by page
                  { tagName: 'div', className: 'content-container' }
                ]
              }
            ]
          },
          { tagName: 'script' }
        ]
      }
    ]
  };
  
  console.log('DOM Structure:', domStructure);
  
  // Add a DOM viewer button to all pages
  const viewerButton = document.createElement('button');
  viewerButton.textContent = 'View DOM Structure';
  viewerButton.style.position = 'fixed';
  viewerButton.style.bottom = '20px';
  viewerButton.style.right = '20px';
  viewerButton.style.padding = '8px 16px';
  viewerButton.style.backgroundColor = 'var(--navy)';
  viewerButton.style.color = 'white';
  viewerButton.style.border = 'none';
  viewerButton.style.borderRadius = '4px';
  viewerButton.style.cursor = 'pointer';
  viewerButton.style.zIndex = '1000';
  
  viewerButton.addEventListener('click', () => {
    alert('DOM Structure has been logged to the console. Press F12 to view.');
  });
  
  document.body.appendChild(viewerButton);
}

// Call the DOM structure visualization
setTimeout(showDOMStructure, 1000);
