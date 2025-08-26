/*      */

    

// Animation on scroll functionality
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');

                        // Animate progress bars when they come into view
                        if (entry.target.classList.contains('comparison-chart')) {
                            const progressBars = entry.target.querySelectorAll('.progress-bar');
                            progressBars.forEach(bar => {
                                const targetWidth = bar.getAttribute('data-width');
                                setTimeout(() => {
                                    bar.style.width = targetWidth;
                                }, 500);
                            });
                        }
                    }
                });
            }, observerOptions);

            // Observe all animate-on-scroll elements
            document.addEventListener('DOMContentLoaded', () => {
                const animateElements = document.querySelectorAll('.animate-on-scroll');
                animateElements.forEach(el => observer.observe(el));

                // Initialize progress bars
                const progressBars = document.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    bar.style.width = '0%';
                });
            });

            // Herb item interactions
            document.querySelectorAll('.herb-item').forEach(item => {
                item.addEventListener('click', function () {
                    // Add a subtle bounce animation
                    this.style.transform = 'translateX(15px) scale(1.02)';
                    setTimeout(() => {
                        this.style.transform = 'translateX(10px)';
                    }, 200);
                });
            });

            // Egg visual interactions
            document.querySelectorAll('.egg-visual').forEach(egg => {
                egg.addEventListener('click', function () {
                    const eggElement = this.querySelector('.egg');
                    eggElement.style.transform = 'scale(1.1) rotate(5deg)';
                    setTimeout(() => {
                        eggElement.style.transform = 'scale(1) rotate(0deg)';
                    }, 300);
                });
            });

            // Smooth scrolling for CTA buttons
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Add loading animation for benefit cards
            const benefitCards = document.querySelectorAll('.benefit-card');
            benefitCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });

            // Counter animation for stats
            function animateCounters() {
                const counters = document.querySelectorAll('.stat-number, .impact-stat');
                counters.forEach(counter => {
                    const target = parseInt(counter.textContent);
                    const increment = target / 100;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = counter.textContent; // Keep original text with % or x
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : (counter.textContent.includes('x') ? 'x' : ''));
                        }
                    }, 20);
                });
            }

            // Trigger counter animation when hero comes into view
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        heroObserver.unobserve(entry.target);
                    }
                });
            });

            const heroSection = document.querySelector('.benefits-hero');
            if (heroSection) {
                heroObserver.observe(heroSection);
            }

// Mobile menu toggle functionality
        const mobileToggle = document.getElementById('mobileToggle');
        const navContainer = document.getElementById('navContainer');

        if(mobileToggle){ mobileToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navContainer.classList.toggle('active');
        }); }

        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileToggle.classList.remove('active');
                navContainer.classList.remove('active');

                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!mobileToggle.contains(event.target) && !navContainer.contains(event.target)) {
                mobileToggle.classList.remove('active');
                navContainer.classList.remove('active');
            }
        });

        // Popup functionality (sanitized)
(function(){
  const signupWrapper = document.getElementById('signupWrapper');
  const signinWrapper = document.getElementById('signinWrapper');
  const profileToggle = document.getElementById('profileToggle');
  const signupClose = document.getElementById('signupClose');
  const signinClose = document.getElementById('signinClose');
  const switchToSignin = document.getElementById('switchToSignin');
  const switchToSignup = document.getElementById('switchToSignup');

  function openPopup(el){
    if(el){ el.style.display='block'; if(document && document.body){ document.body.style.overflow='hidden'; } }
  }
  function closePopup(el){
    if(el){ el.style.display='none'; if(document && document.body){ document.body.style.overflow='auto'; } }
  }

  if (profileToggle && signupWrapper) profileToggle.addEventListener('click', function(){ openPopup(signupWrapper); });
  if (signupClose && signupWrapper) signupClose.addEventListener('click', function(){ closePopup(signupWrapper); });
  if (signinClose && signinWrapper) signinClose.addEventListener('click', function(){ closePopup(signinWrapper); });

  if (switchToSignin && signupWrapper && signinWrapper) switchToSignin.addEventListener('click', function(){
    closePopup(signupWrapper); openPopup(signinWrapper);
  });
  if (switchToSignup && signinWrapper && signupWrapper) switchToSignup.addEventListener('click', function(){
    closePopup(signinWrapper); openPopup(signupWrapper);
  });

  window.addEventListener('click', function(e){
    if (e.target === signupWrapper) closePopup(signupWrapper);
    if (e.target === signinWrapper) closePopup(signinWrapper);
  });
})();    

// Signup form submission (sanitized)
(function(){
  var signupForm = document.getElementById('signupForm');
  var signinForm = document.getElementById('signinForm');
  var contactForm = document.getElementById('contactForm');
  var signupWrapper = document.getElementById('signupWrapper');
  var signinWrapper = document.getElementById('signinWrapper');

  function closePopup(el){
    if(el){ el.style.display='none'; if(document && document.body){ document.body.style.overflow='auto'; } }
  }

  if (signupForm) signupForm.addEventListener('submit', function(e){
    e.preventDefault();
    // Basic success feedback
    alert('Signup successful!');
    this.reset();
    closePopup(signupWrapper);
  });

  if (signinForm) signinForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Signin successful!');
    this.reset();
    closePopup(signinWrapper);
  });

  if (contactForm) contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var firstName = formData.get('firstName');
    var lastName = formData.get('lastName');
    var email = formData.get('email');
    var message = formData.get('message');
    if(!firstName || !email || !message){ alert('Please fill required fields.'); return; }
    alert('Thank you! Your message has been sent.');
    this.reset();
  });
})();

// Minimal, defensive toggle for mobile nav
(function() {
  var toggle = document.getElementById('mobileToggle');
  var nav = document.getElementById('navContainer');
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('active');
    toggle.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('active');
    toggle.classList.toggle('active', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('a.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close if window resized to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // Close on outside click (only when menu is open)
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('active')) return;
    var withinMenu = nav.contains(e.target) || toggle.contains(e.target);
    if (!withinMenu) closeMenu();
  });
})();