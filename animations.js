/* ===== NAV SCROLL EFFECT ===== */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ===== SCROLL REVEAL ANIMATIONS ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { 
  threshold: 0.1, 
  rootMargin: '0px 0px -40px 0px' 
});

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  observer.observe(el);
});

/* ===== FORM SUBMISSION ===== */
function submitForm() {
  const form = document.getElementById('booking-form');
  const successMsg = document.getElementById('success-msg');
  
  if (form && successMsg) {
    form.style.display = 'none';
    successMsg.style.display = 'block';
    
    // Reset form after 3 seconds (optional)
    setTimeout(() => {
      form.style.display = 'block';
      successMsg.style.display = 'none';
      form.reset();
    }, 5000);
  }
}

/* ===== SMOOTH SCROLL LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* ===== PAGE LOAD ANIMATION ===== */
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
