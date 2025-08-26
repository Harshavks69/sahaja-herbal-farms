/* Extracted JS from products.html */
// Global cart array
        let cart = [];
        let cartTotal = 0;

        // DOM Content Loaded
        document.addEventListener('DOMContentLoaded', function () {
            initializeFilters();
            updateCartDisplay();
        });

        // Initialize category filters
        function initializeFilters() {
            const filterBtns = document.querySelectorAll('.tab-btn');
            const categorySparklineData = document.querySelectorAll('.product-category-section');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function () {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');

                    const filter = this.getAttribute('data-category');

                    // Show/hide category sections
                    categorySparklineData.forEach(section => {
                        const sectionCategory = section.getAttribute('data-category');
                        if (filter === 'all' || sectionCategory === filter) {
                            section.classList.remove('hidden');
                        } else {
                            section.classList.add('hidden');
                        }
                    });
                });
            });
        }

        // Add to cart function
        function addToCart(productName, button) {
            const productCard = button.closest('.product-card');
            const categorySection = productCard.closest('.product-category-section');
            const category = categorySection.getAttribute('data-category');

            let selectedOption = '';
            let price = 0;

            if (category === 'eggs') {
                // Get selected pack option for eggs
                const packInputs = productCard.querySelectorAll('input[type="radio"]');
                const selectedPack = Array.from(packInputs).find(input => input.checked);

                if (selectedPack) {
                    const packValue = selectedPack.value;
                    const packParts = packValue.split('-');
                    const packSize = packParts[0];
                    price = parseInt(packParts[1]);

                    if (packSize === '6pack') {
                        selectedOption = `6 Pack - ₹${price}`;
                    } else if (packSize === '30pack') {
                        selectedOption = `30 Pack - ₹${price}`;
                    }
                }
            } else {
                // For chicken products, get price from display
                const priceElement = productCard.querySelector('.price span[itemprop="price"]');
                if (priceElement) {
                    price = parseInt(priceElement.textContent.replace('₹', ''));
                    selectedOption = `₹${price}/kg`;
                }
            }

            // Create cart item
            const cartItem = {
                id: Date.now() + Math.random(), // Unique ID
                name: productName,
                option: selectedOption,
                price: price,
                category: category,
                quantity: 1
            };

            // Add to cart
            cart.push(cartItem);
            updateCartDisplay();

            // Visual feedback
            button.style.transform = 'scale(0.95)';
            button.textContent = '✅ Added!';
            button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';

            setTimeout(() => {
                button.style.transform = 'scale(1)';
                button.textContent = '🛒 Add to Cart';
                button.style.background = 'linear-gradient(135deg, var(--primary-green), var(--light-green))';
            }, 1500);

            // Show cart briefly
            const cartSidebar = document.getElementById('cartSidebar');
            cartSidebar.classList.add('open');
            setTimeout(() => {
                cartSidebar.classList.remove('open');
            }, 2000);
        }

        // Update cart display
        function updateCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            const cartFooter = document.getElementById('cartFooter');
            const cartCount = document.getElementById('cartCount');
            const cartTotalElement = document.getElementById('cartTotal');

            if (cart.length === 0) {
                cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-icon">🛒</div>
                <p>Your cart is empty</p>
                <small>Add some delicious products!</small>
            </div>`;
                cartFooter.style.display = 'none';
                cartCount.style.display = 'none';
            } else {
                cartItems.innerHTML = '';
                cartTotal = 0;

                cart.forEach((item, index) => {
                    cartTotal += item.price;
                    cartItems.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h5>${item.name}</h5>
                        <p>${item.option}</p>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${index})" aria-label="Remove ${item.name} from cart">🗑️</button>
                </div>`;
                });

                cartFooter.style.display = 'block';
                cartCount.style.display = 'flex';
                cartCount.textContent = cart.length;
                cartTotalElement.textContent = cartTotal;
            }
        }

        // Remove from cart
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartDisplay();
        }

        // Toggle cart sidebar
        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            cartSidebar.classList.toggle('open');
        }

        // Proceed to order
        function proceedToOrder() {
            if (cart.length === 0) {
                alert('🛒 Your cart is empty! Please add some products first.');
                return;
            }

            // Show order modal
            const orderModal = document.getElementById('orderModal');
            orderModal.classList.add('show');
            orderModal.setAttribute('aria-hidden', 'false');

            // Update order summary
            updateOrderSummary();

            // Focus on first input
            setTimeout(() => {
                document.getElementById('customerName').focus();
            }, 300);
        }

        // Update order summary
        function updateOrderSummary() {
            const orderSummaryItems = document.getElementById('orderSummaryItems');
            const finalTotal = document.getElementById('finalTotal');

            orderSummaryItems.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                total += item.price;
                orderSummaryItems.innerHTML += `
            <div class="summary-item">
                <span>${item.name}<br><small>${item.option}</small></span>
                <span><strong>₹${item.price}</strong></span>
            </div>`;
            });

            finalTotal.textContent = total;
        }

        // Close order modal
        function closeOrderModal() {
            const orderModal = document.getElementById('orderModal');
            orderModal.classList.remove('show');
            orderModal.setAttribute('aria-hidden', 'true');
        }

        // Generate unique order ID
        function generateOrderId() {
            const timestamp = Date.now();
            const random = Math.floor(Math.random() * 1000);
            return `SHF${timestamp.toString().slice(-6)}${random.toString().padStart(3, '0')}`;
        }

        // Place WhatsApp order (first step - show preview)
        function placeWhatsAppOrder() {
            const form = document.getElementById('orderForm');
            const formData = new FormData(form);

            // Validate form
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Get form data
            const customerName = formData.get('customerName').trim();
            const customerMobile = formData.get('customerMobile').trim();
            const customerLocation = formData.get('customerLocation');
            const customerAddress = formData.get('customerAddress').trim();
            const orderNotes = formData.get('orderNotes').trim() || 'No special instructions';

            // Validate mobile number
            const mobileRegex = /^[6-9]\d{9}$/;
            if (!mobileRegex.test(customerMobile)) {
                alert('📱 Please enter a valid 10-digit mobile number');
                document.getElementById('customerMobile').focus();
                return;
            }

            // Generate unique order ID
            const orderId = generateOrderId();

            // Create order object
            const orderData = {
                orderId: orderId,
                customerName: customerName,
                customerMobile: customerMobile,
                customerLocation: customerLocation,
                customerAddress: customerAddress,
                orderNotes: orderNotes,
                items: [...cart],
                total: cartTotal,
                timestamp: new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            // Show order preview
            showOrderPreview(orderData);
        }

        // Show order preview before sending to WhatsApp
        function showOrderPreview(orderData) {
            // Close order form modal
            closeOrderModal();

            // Create and show preview modal
            const previewModal = document.createElement('div');
            previewModal.className = 'order-modal show';
            previewModal.id = 'orderPreviewModal';
            previewModal.setAttribute('role', 'dialog');
            previewModal.setAttribute('aria-labelledby', 'previewModalTitle');

            previewModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="previewModalTitle">📋 Order Preview</h3>
                <button class="close-modal" onclick="closeOrderPreview()" aria-label="Close preview">✖️</button>
            </div>
            <div class="modal-body">
                <div class="order-preview-content">
                    <div class="order-id-section">
                        <h4>🆔 Order ID: <span class="order-id-highlight">${orderData.orderId}</span></h4>
                        <p class="order-timestamp">📅 ${orderData.timestamp}</p>
                    </div>
                    
                    <div class="preview-section">
                        <h4>👤 Customer Details</h4>
                        <div class="detail-row">
                            <span class="detail-label">Name:</span>
                            <span class="detail-value">${orderData.customerName}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Mobile:</span>
                            <span class="detail-value">${orderData.customerMobile}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Location:</span>
                            <span class="detail-value">${orderData.customerLocation}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Address:</span>
                            <span class="detail-value">${orderData.customerAddress}</span>
                        </div>
                    </div>
                    
                    <div class="preview-section">
                        <h4>🛒 Order Items</h4>
                        <div class="items-list">
                            ${orderData.items.map((item, index) => `
                                <div class="preview-item">
                                    <span class="item-number">${index + 1}.</span>
                                    <div class="item-details">
                                        <div class="item-name">${item.name}</div>
                                        <div class="item-option">${item.option}</div>
                                    </div>
                                    <div class="item-price">₹${item.price}</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="total-section">
                            <strong>💰 Total Amount: ₹${orderData.total}</strong>
                        </div>
                    </div>
                    
                    <div class="preview-section">
                        <h4>📝 Special Instructions</h4>
                        <div class="instructions-text">${orderData.orderNotes}</div>
                    </div>
                    
                    <div class="preview-warning">
                        <p>⚠️ Please review all details carefully before sending to WhatsApp.</p>
                        <p>Once sent, this order will be processed by our team.</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="cancel-btn" onclick="closeOrderPreview()">✏️ Edit Order</button>
                <button class="whatsapp-btn" onclick="sendToWhatsApp('${orderData.orderId}')">
                    📱 Send to WhatsApp
                </button>
            </div>
        </div>
    `;

            document.body.appendChild(previewModal);

            // Store order data globally for sending
            window.currentOrderData = orderData;

            // Focus on the modal
            setTimeout(() => {
                previewModal.querySelector('.whatsapp-btn').focus();
            }, 300);
        }

        // Close order preview
        function closeOrderPreview() {
            const previewModal = document.getElementById('orderPreviewModal');
            if (previewModal) {
                previewModal.remove();
            }

            // Show order form again
            const orderModal = document.getElementById('orderModal');
            orderModal.classList.add('show');
        }

        // Send to WhatsApp (final step)
        function sendToWhatsApp(orderId) {
            const orderData = window.currentOrderData;

            if (!orderData) {
                alert('❌ Order data not found. Please try again.');
                return;
            }

            // Create WhatsApp message with order ID
            let message = `🌱 *NEW ORDER - SAHAJA HERBAL FARMS*\n\n`;
            message += `🆔 *ORDER ID: ${orderData.orderId}*\n`;
            message += `📅 *Date & Time: ${orderData.timestamp}*\n\n`;

            message += `👤 *CUSTOMER DETAILS:*\n`;
            message += `Name: ${orderData.customerName}\n`;
            message += `Mobile: ${orderData.customerMobile}\n`;
            message += `Location: ${orderData.customerLocation}\n`;
            message += `Address: ${orderData.customerAddress}\n\n`;

            message += `🛒 *ORDER DETAILS:*\n`;
            orderData.items.forEach((item, index) => {
                message += `${index + 1}. ${item.name}\n`;
                message += `   ${item.option}\n`;
                message += `   ₹${item.price}\n\n`;
            });

            message += `💰 *TOTAL AMOUNT: ₹${orderData.total}*\n\n`;
            message += `📝 *SPECIAL INSTRUCTIONS:*\n${orderData.orderNotes}\n\n`;
            message += `🌿 *Thank you for choosing Sahaja Herbal Farms!*\n`;
            message += `Please confirm this order and provide delivery time.\n\n`;
            message += `Order ID: ${orderData.orderId}`;

            // Encode message for WhatsApp URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/917997658384?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

            // Store order in localStorage for future reference
            storeOrderHistory(orderData);

            // Clear cart and close modals
            cart = [];
            updateCartDisplay();
            closeOrderPreview();
            toggleCart();

            // Reset form
            document.getElementById('orderForm').reset();

            // Show success message with order ID
            setTimeout(() => {
                alert(`🎉 Order sent to WhatsApp successfully!\n\nYour Order ID: ${orderData.orderId}\n\nPlease save this Order ID for future reference.\n\nThank you for choosing Sahaja Herbal Farms! 🌱`);
            }, 500);

            // Clean up global data
            delete window.currentOrderData;
        }

        // Store order history in localStorage
        function storeOrderHistory(orderData) {
            try {
                let orderHistory = JSON.parse(localStorage.getItem('sahajaOrderHistory')) || [];
                orderHistory.unshift(orderData); // Add to beginning

                // Keep only last 20 orders
                if (orderHistory.length > 20) {
                    orderHistory = orderHistory.slice(0, 20);
                }

                localStorage.setItem('sahajaOrderHistory', JSON.stringify(orderHistory));
            } catch (error) {
                console.log('Could not save order history:', error);
            }
        }

        // Keyboard navigation for modals
        document.addEventListener('keydown', function (e) {
            const orderModal = document.getElementById('orderModal');

            // Close modal on Escape key
            if (e.key === 'Escape') {
                if (orderModal.classList.contains('show')) {
                    closeOrderModal();
                }
                if (document.getElementById('cartSidebar').classList.contains('open')) {
                    toggleCart();
                }
            }
        });

        // Close modal when clicking outside
        var __el_orderModal = document.getElementById('orderModal'); if(__el_orderModal) __el_orderModal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeOrderModal();
            }
        });

        // Smooth scroll for anchor links
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

        // Intersection Observer for animations
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

        // Observe product cards for scroll animations
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Like button functionality
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                this.style.transform = 'scale(1.2)';
                this.innerHTML = this.innerHTML === '❤️' ? '💚' : '❤️';

                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });

        // Performance optimization: Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

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