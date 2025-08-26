/* Extracted JS from faq.html */
// FAQ JavaScript - Isolated
            (function () {
                'use strict';

                document.addEventListener('DOMContentLoaded', function () {
                    const faqItems = document.querySelectorAll('.faq-section-isolated .faq-item-isolated');

                    faqItems.forEach(item => {
                        const question = item.querySelector('.faq-question-isolated');

                        question.addEventListener('click', () => {
                            const isActive = item.classList.contains('active');

                            // Close all FAQ items
                            faqItems.forEach(faq => faq.classList.remove('active'));

                            // Open clicked item if it wasn't active
                            if (!isActive) {
                                item.classList.add('active');
                            }
                        });
                    });
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

        // Signup form submission
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

        // Signin form submission
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

        // Contact form submission
        var __el_contactForm = document.getElementById('contactForm'); if(__el_contactForm) __el_contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Simple validation
            if (!firstName || !lastName || !email || !phone || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Phone validation (basic)
            const phoneRegex = /^[+]?[\d\s-()]{10,}$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }

            // Success message
            alert(`🌿 Thank you ${firstName} ${lastName}!\n\nYour message has been sent successfully!\n\nSubject: ${subject}\nEmail: ${email}\nPhone: ${phone}\n\nWe'll get back to you within 24 hours.\n\n- Sahaja Herbal Farms Team`);

            // Reset form
            this.reset();
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

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.info-item, .hours-card, .contact-form-section, .contact-info-section').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Add Font Awesome for social icons
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        document.head.appendChild(fontAwesome);