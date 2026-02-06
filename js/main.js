// Main JavaScript for SHCS Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Active Navigation Link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Sticky Header Shadow on Scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Form Validation
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form fields
      const name = document.querySelector('#name');
      const email = document.querySelector('#email');
      const phone = document.querySelector('#phone');
      const subject = document.querySelector('#subject');
      const message = document.querySelector('#message');

      // Clear previous errors
      document.querySelectorAll('.form-error').forEach(error => error.remove());

      let isValid = true;

      // Validate name
      if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
      }

      // Validate email
      if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
      }

      // Validate message
      if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
      }

      if (isValid) {
        // Create mailto link
        const mailtoLink = `mailto:info@suttonmandir.org.uk?subject=${encodeURIComponent(subject.value || 'Website Enquiry')}&body=${encodeURIComponent(
          `Name: ${name.value}\nEmail: ${email.value}\nPhone: ${phone.value}\n\nMessage:\n${message.value}`
        )}`;

        window.location.href = mailtoLink;

        // Show success message
        showSuccessMessage(contactForm);

        // Reset form
        contactForm.reset();
      }
    });
  }

  // Copyright Year
  const copyrightYear = document.querySelector('.copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});

// Helper Functions
function showError(input, message) {
  const formGroup = input.closest('.form-group');
  const error = document.createElement('div');
  error.className = 'form-error';
  error.textContent = message;
  formGroup.appendChild(error);
  input.style.borderColor = 'var(--color-error)';

  // Remove error styling on input
  input.addEventListener('input', () => {
    input.style.borderColor = '';
    error.remove();
  }, { once: true });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showSuccessMessage(form) {
  const successDiv = document.createElement('div');
  successDiv.className = 'alert alert-success';
  successDiv.style.cssText = `
    padding: var(--space-4);
    background-color: var(--color-success);
    color: white;
    border-radius: var(--radius-md);
    margin-bottom: var(--space-6);
    text-align: center;
  `;
  successDiv.textContent = 'Your message has been sent successfully!';

  form.insertAdjacentElement('beforebegin', successDiv);

  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

// Search Functionality for Chants Page
const searchInput = document.querySelector('#chantSearch');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const chantCards = document.querySelectorAll('.chant-item');

    chantCards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const devanagari = card.querySelector('.devanagari')?.textContent.toLowerCase() || '';

      if (title.includes(searchTerm) || devanagari.includes(searchTerm)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// Filter Chants by Category
const categoryButtons = document.querySelectorAll('.category-btn');
if (categoryButtons.length > 0) {
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;

      // Update active button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter chants
      const chantCards = document.querySelectorAll('.chant-item');
      chantCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Image Lazy Loading (for better performance)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
  });
}
