/* Extracted JS from index.html */
let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const navDots = document.querySelectorAll('.nav-dot');

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            navDots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            navDots[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        setInterval(nextSlide, 5000);

(function () {
    const grid = document.querySelector('.shop-grid');
    if (!grid) return;

    grid.addEventListener('click', function (e) {
      const card = e.target.closest('.shop-item');
      if (!card) return;

      // let native links (like "Order Now") work normally
      if (e.target.closest('a')) return;

      const to = card.getAttribute('data-href');
      if (to) window.location.href = to;
    });

    // Optional accessibility: enter key activates card
    grid.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') return;
      const card = e.target.closest('.shop-item');
      if (!card) return;
      const to = card.getAttribute('data-href');
      if (to) window.location.href = to;
    });

    // make cards focusable (no visual/style changes)
    grid.querySelectorAll('.shop-item').forEach(card => {
      if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
      card.style.cursor = 'pointer';
    });
  })();

// Mobile menu toggle functionality
        const mobileToggle = document.getElementById('mobileToggle');
        const navContainer = document.getElementById('navContainer');

        mobileToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navContainer.classList.toggle('active');
        });

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

        // Popup functionality
        const signupWrapper = document.getElementById('signupWrapper');
        const signinWrapper = document.getElementById('signinWrapper');
        const profileToggle = document.getElementById('profileToggle');
        const signupClose = document.getElementById('signupClose');
        const signinClose = document.getElementById('signinClose');
        const switchToSignin = document.getElementById('switchToSignin');
        const switchToSignup = document.getElementById('switchToSignup');

        // Profile toggle to show signup
        profileToggle.addEventListener('click', function () {
            signupWrapper.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        // Close popups
        signupClose.addEventListener('click', function () {
            signupWrapper.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        signinClose.addEventListener('click', function () {
            signinWrapper.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Switch between popups
        switchToSignin.addEventListener('click', function () {
            signupWrapper.style.display = 'none';
            signinWrapper.style.display = 'block';
        });

        switchToSignup.addEventListener('click', function () {
            signinWrapper.style.display = 'none';
            signupWrapper.style.display = 'block';
        });

        // Close popup when clicking outside
        window.addEventListener('click', function (event) {
            if (event.target === signupWrapper) {
                signupWrapper.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (event.target === signinWrapper) {
                signinWrapper.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Form submissions
        var __el_signupForm = document.getElementById('signupForm'); if(__el_signupForm) __el_signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = this.name.value;
            const email = this.email.value;
            const password = this.password.value;

            if (name && email && password) {
                alert(`🎉 Welcome to Sahaja Herbal Farms, ${name}!\n\nAccount created successfully!\nVerification email sent to: ${email}\n\nYou can now:\n• Browse our premium products\n• Place orders for fresh eggs\n• Track your deliveries\n• Access exclusive offers`);
                signupWrapper.style.display = 'none';
                document.body.style.overflow = 'auto';
                this.reset();
            }
        });

        var __el_signinForm = document.getElementById('signinForm'); if(__el_signinForm) __el_signinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.email.value;
            const password = this.password.value;

            if (email && password) {
                alert(`🌿 Welcome back to Sahaja Herbal Farms!\n\nLogin successful for: ${email}\n\nYour dashboard is ready with:\n• Order history\n• Fresh product availability\n• Delivery schedule\n• Account preferences`);
                signinWrapper.style.display = 'none';
                document.body.style.overflow = 'auto';
                this.reset();
            }
        });

        // Smooth scrolling for navigation
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

        // Add scroll effect to header
        window.addEventListener('scroll', function () {
            const header = document.querySelector('.main-header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }
        });

        // Add Font Awesome for social icons
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        document.head.appendChild(fontAwesome);