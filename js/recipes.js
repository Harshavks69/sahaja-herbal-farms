/* Extracted JS from recipes.html */
// Complete recipe data with all recipes including the new Pepper Chicken
        const recipes = {
            'pepper-chicken': {
                title: 'Pepper Chicken',
                image: 'pepper-chicken',
                nutrition: { kcal: 285, protein: '32g', fat: '12g', carbs: '8g' },
                ingredients: [
                    ['Sahaja Chicken curry cut', '300 gms'],
                    ['Gingelly oil', '15 ml'],
                    ['Mustard seeds', '1/4 tsp'],
                    ['Dried red chilli', '1 nos'],
                    ['Chopped garlic', '5 cloves'],
                    ['Chopped ginger', 'small piece'],
                    ['Curry leaves', '1 sprig'],
                    ['Sliced shallots', '8-10 nos'],
                    ['Chopped tomatoes', '1 small'],
                    ['Salt', 'to taste'],
                    ['Turmeric powder', '1 tsp'],
                    ['Chopped coriander leaves', 'for garnish'],
                    ['FOR PEPPER CHICKEN MASALA:', ''],
                    ['Pepper corns', '1 tbsp'],
                    ['Coriander seeds', '1 tsp'],
                    ['Cumin seeds', '1/2 tsp'],
                    ['Dried Red chilli', '2 pieces']
                ],
                instructions: [
                    'Marinate the chicken with salt, turmeric and chilli powder. Set aside for half an hour.',
                    'Heat a pan and dry roast pepper corns, coriander seeds, cumin seeds, and dried red chillies. Powder them in a blender to make pepper chicken masala.',
                    'Heat gingelly oil in a kadai. Add chopped ginger and garlic, sauté well.',
                    'Add curry leaves and sliced shallots. Sauté till shallots become golden brown.',
                    'Add turmeric powder and salt. Sauté till raw flavours are gone.',
                    'Add chopped tomatoes and cook till it is mashed.',
                    'Add marinated chicken pieces and mix well. Cook for one minute then cover and cook for 5 to 7 minutes.',
                    'Add roasted pepper chicken powder and mix well. Cover and cook for 5 to 7 minutes or till the chicken is well cooked.',
                    'Finish it with chopped coriander leaves. You can keep it as a semi-thick preparation or dry up the masalas on medium flame till it becomes dry and serve as a starter.',
                    'Serve it with steamed rice or as a dry starter.'
                ],
                credits: {
                    message: 'Always remember this "everybody can cook and everybody has to cook"',
                    happyCooking: 'Happy cooking 😊',
                    director: 'Director, Chef and Host: Karthi',
                    videographer: 'Videographer: Karthi and mom',
                    editor: 'Editor: Karthi'
                }
            },
            'cottage-cheese-toast': {
                title: 'Cottage Cheese Toast with Berries and Boiled Eggs',
                image: 'cottage-cheese-toast',
                nutrition: { kcal: 431, protein: '22.2g', fat: '16.2g', carbs: '49.4g' },
                ingredients: [
                    ['Strawberries', '3 medium, chopped'],
                    ['Sahaja Boiled Eggs', '2'],
                    ['Cottage Cheese, 1% fat', '3 tbsp, crumbled'],
                    ['Blueberries', '2 tbsp'],
                    ['Whole Grain Bread', '3 slices'],
                    ['Peanut Butter', '2 tbsp']
                ],
                instructions: [
                    'Toast the bread.',
                    'Spread the peanut butter and cottage cheese over bread and top with berries. Enjoy!'
                ],
                credits: {
                    message: 'Healthy eating starts with simple choices',
                    happyCooking: 'Nourish your body, fuel your day!',
                    chef: 'Recipe by: Sahaja Herbal Farms',
                    note: 'Fresh ingredients make all the difference'
                }
            },
            'scrambled-egg-avocado': {
                title: 'Scrambled Egg on Toast With Avocado',
                image: 'scrambled-egg-avocado',
                nutrition: { kcal: 432, protein: '27.8g', fat: '16.6g', carbs: '43.5g' },
                ingredients: [
                    ['Avocado', '1/2 small, chopped'],
                    ['Whole Grain Bread', '2 slices'],
                    ['Sahaja Egg', '2 medium'],
                    ['Salt', '1 pinch'],
                    ['Ground Black Pepper', '1 pinch'],
                    ['Nutritional Yeast', '1 tbsp'],
                    ['Scallions, fresh', '1 tbsp, chopped'],
                    ['Water', '2 tbsp']
                ],
                instructions: [
                    'In a bowl, whisk the eggs, nutritional yeast, and the specified amount of water until smooth and cohesive. Season with salt and ground black pepper.',
                    'Heat a non-stick frying pan. Pour in the egg mixture and let them cook for a few seconds without stirring. When the mixture begins to set, gently pull across the pan with a spatula, forming large soft curds.',
                    'Meanwhile, toast the bread.',
                    'Divide the scrambled eggs between the toasts. Top with chopped avocado and chopped scallions. Enjoy!'
                ],
                credits: {
                    message: 'Perfect eggs are all about technique and timing',
                    happyCooking: 'Creamy, fluffy, delicious - egg perfection!',
                    chef: 'Recipe perfected by: Sahaja Kitchen',
                    note: 'Fresh Sahaja eggs make the fluffiest scrambled eggs'
                }
            },
            'fried-egg-spinach': {
                title: 'Fried Egg with Spinach and Bread',
                image: 'fried-egg-spinach',
                nutrition: { kcal: 437, protein: '25g', fat: '17.2g', carbs: '45.4g' },
                ingredients: [
                    ['Spinach', '1 1/2 cup'],
                    ['Olive Oil', '1 tsp'],
                    ['Sahaja Egg', '2 medium'],
                    ['Salt', '2 pinches'],
                    ['Ground Black Pepper', '2 pinches'],
                    ['Whole Grain Bread', '3 slices']
                ],
                instructions: [
                    'Heat olive oil in a skillet over medium heat. Add spinach and season with a pinch of salt and ground black pepper. Cook while stirring gently until the spinach is wilted.',
                    'Make a gap in the spinach mixture when the mixture is tender enough. Crack egg/eggs into the gap and cook until the desired doneness.',
                    'Sprinkle with a pinch of salt and ground black pepper. Serve with bread. Enjoy!'
                ],
                credits: {
                    message: 'Iron-rich spinach meets protein-packed eggs',
                    happyCooking: 'Power-packed nutrition in every bite!',
                    chef: 'Healthy recipe by: Sahaja Nutritionist',
                    note: 'Fresh greens and farm eggs - nature\'s perfect combination'
                }
            },
            'guacamole-salmon-toast': {
                title: 'Guacamole Toast with Salmon',
                image: 'guacamole-salmon-toast',
                nutrition: { kcal: 434, protein: '28.5g', fat: '15.7g', carbs: '44.6g' },
                ingredients: [
                    ['Salmon Fillet, smoked', '3 2/3 slices'],
                    ['Guacamole', '2 tbsp'],
                    ['Parsley, fresh', '3 tbsp, chopped'],
                    ['Whole Grain Bread', '3 slices']
                ],
                instructions: [
                    'Toast bread. Spread guacamole over the bread slice/slices.',
                    'Add smoked salmon slices on top, and sprinkle with chopped parsley. Serve and enjoy!'
                ],
                credits: {
                    message: 'Omega-3 rich salmon meets heart-healthy avocado',
                    happyCooking: 'Gourmet flavors, simple preparation!',
                    chef: 'Premium recipe by: Sahaja Gourmet Kitchen',
                    note: 'Quality ingredients create extraordinary taste'
                }
            },
            'cheesy-omelet': {
                title: 'Cheesy Omelet with Herbs and Bread',
                image: 'cheesy-omelet',
                nutrition: { kcal: 433, protein: '31g', fat: '15.8g', carbs: '41.6g' },
                ingredients: [
                    ['Sahaja Egg', '2 medium'],
                    ['Ground Black Pepper', '1 pinch'],
                    ['Basil, fresh', '1 handful, chopped'],
                    ['Whole Grain Bread', '3 slices'],
                    ['Cheddar Cheese, fat-free', '1/4 cup, grated'],
                    ['Olive Oil', '1 tsp'],
                    ['Salt', '1 pinch'],
                    ['Cilantro, fresh', '2 tbsp, chopped']
                ],
                instructions: [
                    'Beat the eggs with chopped herbs (leave some for serving), salt, and ground black pepper in a bowl. Mix until thoroughly blended.',
                    'Heat olive oil in a pan on medium heat. Pour the egg mixture into the pan and stir gently with a spatula so that the egg mixture moves. Stop stirring when the mixture is nearly cooked. Sprinkle with grated cheddar cheese, cover with a lid, and cook until cheese is melted.',
                    'Toast the bread (if desired).',
                    'Serve the omelet with remaining herbs on top and bread on the side. Enjoy!'
                ],
                credits: {
                    message: 'The secret to a perfect omelet is patience and gentle heat',
                    happyCooking: 'Fluffy, cheesy, herb-filled delight!',
                    chef: 'Classic recipe by: Sahaja Traditional Kitchen',
                    note: 'Fresh herbs elevate simple eggs to gourmet status'
                }
            },
            'egg-tomato-scramble': {
                title: 'Egg and Tomato Scramble with Bread',
                image: 'egg-tomato-scramble',
                nutrition: { kcal: 423, protein: '24.1g', fat: '16g', carbs: '45.7g' },
                ingredients: [
                    ['Garlic', '1 clove, minced'],
                    ['Whole Grain Bread', '3 slices'],
                    ['Olive Oil', '1 tsp'],
                    ['Water', '2 tbsp'],
                    ['Sahaja Egg', '2 medium'],
                    ['Salt', '1 pinch'],
                    ['Ground Black Pepper', '1 pinch'],
                    ['Basil, fresh', '1 tbsp, chopped'],
                    ['Cherry Tomato', '7 medium, halved'],
                    ['Scallions, fresh', '2 1/2 tbsp, chopped']
                ],
                instructions: [
                    'In a bowl, combine cherry tomatoes with basil. Set aside.',
                    'In another bowl, whisk the eggs with water and garlic.',
                    'Heat the olive oil in a non-stick skillet over medium heat. Then add the egg mixture. Cook and stir gently until the eggs are nearly set. Add the tomato-basil mixture, and season with salt and ground black pepper.',
                    'Cook and stir until the eggs are completely set and the mixture is heated through.',
                    'Toast the bread, if desired.',
                    'Serve the scrambled eggs on a plate with bread on the side. Sprinkle with scallions and enjoy!'
                ],
                credits: {
                    message: 'Fresh tomatoes and basil - Mediterranean magic in minutes',
                    happyCooking: 'Garden-fresh flavors meet farm-fresh eggs!',
                    chef: 'Mediterranean recipe by: Sahaja Farm Kitchen',
                    note: 'Vine-ripened tomatoes make this dish burst with flavor'
                }
            },
            'egg-vegetable-scramble': {
                title: 'Egg Scramble with Bread and Vegetables',
                image: 'egg-vegetable-scramble',
                nutrition: { kcal: 439, protein: '25.3g', fat: '16.9g', carbs: '46.8g' },
                ingredients: [
                    ['Onion', '1/2 small, chopped'],
                    ['Lettuce', '1/2 cup, chopped'],
                    ['Whole Grain Bread', '3 slices'],
                    ['Sahaja Egg', '2 medium'],
                    ['Salt', '2 pinches'],
                    ['Ground Black Pepper', '2 pinches'],
                    ['Cherry Tomato', '5 medium, quarters'],
                    ['Parsley, fresh', '1 tbsp, chopped'],
                    ['Olive Oil', '1 tsp'],
                    ['Water', '2 tbsp']
                ],
                instructions: [
                    'In a bowl, whisk the eggs with water, salt, and ground black pepper.',
                    'Heat the olive oil in a frying pan over medium heat. Add chopped onion and cook stirring for about 30 sec. Pour the mixture and let it sit without stirring for about 30 seconds, then begin stirring and folding it over from the bottom of the pan. Remove when slightly runny.',
                    'Toast the bread, if desired.',
                    'Serve scrambled eggs on a plate with chopped lettuce, cherry tomato, and chopped parsley. Add a pinch of salt and ground black pepper over the vegetables and add chopped parsley over the eggs. Enjoy!'
                ],
                credits: {
                    message: 'Colorful vegetables make every meal a celebration',
                    happyCooking: 'Rainbow nutrition on your plate!',
                    chef: 'Wholesome recipe by: Sahaja Health Kitchen',
                    note: 'Fresh vegetables and farm eggs - a perfect harmony of taste and nutrition'
                }
            }
        };

        // Tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabBtns = document.querySelectorAll('.tab-btn');
            const sections = document.querySelectorAll('.category-section');
            const recipeCards = document.querySelectorAll('.recipe-card');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');

                    // Update active tab
                    tabBtns.forEach(tab => tab.classList.remove('active'));
                    this.classList.add('active');

                    // Filter recipes
                    if (category === 'all') {
                        sections.forEach(section => section.classList.remove('hidden'));
                        recipeCards.forEach(card => card.style.display = 'block');
                    } else if (category === 'healthy') {
                        sections.forEach(section => {
                            if (section.id === 'healthy-section') {
                                section.classList.remove('hidden');
                            } else {
                                section.classList.add('hidden');
                            }
                        });
                    } else if (category === 'regular') {
                        sections.forEach(section => {
                            if (section.id === 'regular-section') {
                                section.classList.remove('hidden');
                            } else {
                                section.classList.add('hidden');
                            }
                        });
                    }
                });
            });
        });

        // Modal functionality
        function openRecipeModal(recipeId) {
            const recipe = recipes[recipeId];
            const modal = document.getElementById('recipeModal');
            if (!recipe) return;

            // Set modal content
            document.getElementById('modalTitle').textContent = recipe.title;
            
            // Create a visual background for the modal
            if (recipeId === 'pepper-chicken') {
                document.getElementById('modalImage').innerHTML = `
                    <button class="close-modal" onclick="closeRecipeModal()">&times;</button>
                `;
                document.getElementById('modalImage').style.cssText = 'background-image: url("./images/pepper-chicken.jpg");';
            } else {
                document.getElementById('modalImage').innerHTML = `
                    <button class="close-modal" onclick="closeRecipeModal()">&times;</button>
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f4f4f4; color: #666; font-size: 24px;">${recipe.title}</div>
                `;
                document.getElementById('modalImage').style.cssText = 'background: #f4f4f4;';
            }

            // Set nutrition info
            const nutritionHtml = `
                <div class="nutrition-item">
                    <span class="nutrition-value">${recipe.nutrition.kcal}</span>
                    <span class="nutrition-label">kcal</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-value">${recipe.nutrition.protein}</span>
                    <span class="nutrition-label">Protein</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-value">${recipe.nutrition.fat}</span>
                    <span class="nutrition-label">Fat</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-value">${recipe.nutrition.carbs}</span>
                    <span class="nutrition-label">Carbs</span>
                </div>
            `;
            document.getElementById('modalNutrition').innerHTML = nutritionHtml;

            // Set ingredients
            let ingredientsHtml = '';
            recipe.ingredients.forEach(ingredient => {
                ingredientsHtml += `
                    <tr>
                        <td>${ingredient[0]}</td>
                        <td>${ingredient[1]}</td>
                    </tr>
                `;
            });
            document.getElementById('modalIngredients').innerHTML = ingredientsHtml;

            // Set instructions
            let instructionsHtml = '';
            recipe.instructions.forEach((instruction, index) => {
                instructionsHtml += `
                    <div class="instruction-step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-text">${instruction}</div>
                    </div>
                `;
            });
            document.getElementById('modalInstructions').innerHTML = instructionsHtml;

            // Add credits section for all recipes that have credits
            if (recipe.credits) {
                let creditsHtml = '';
                if (recipeId === 'pepper-chicken') {
                    creditsHtml = `
                        <div class="credits-section" style="margin-top: 40px; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 15px; border-left: 4px solid #009739;">
                            <div style="text-align: center; font-style: italic; color: #009739; font-size: 16px; font-weight: 600; margin-bottom: 15px;">
                                ${recipe.credits.message}
                            </div>
                            <div style="text-align: center; font-size: 18px; margin-bottom: 20px; color: #ff6b35;">
                                ${recipe.credits.happyCooking}
                            </div>
                            <div style="text-align: center; color: #666; font-size: 14px; line-height: 1.6;">
                                <div style="margin-bottom: 5px; font-weight: 600;">${recipe.credits.director}</div>
                                <div style="margin-bottom: 5px;">${recipe.credits.videographer}</div>
                                <div>${recipe.credits.editor}</div>
                            </div>
                        </div>
                    `;
                } else {
                    creditsHtml = `
                        <div class="credits-section" style="margin-top: 40px; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 15px; border-left: 4px solid #A4D65E;">
                            <div style="text-align: center; font-style: italic; color: #009739; font-size: 16px; font-weight: 600; margin-bottom: 15px;">
                                ${recipe.credits.message}
                            </div>
                            <div style="text-align: center; font-size: 18px; margin-bottom: 20px; color: #A4D65E;">
                                ${recipe.credits.happyCooking}
                            </div>
                            <div style="text-align: center; color: #666; font-size: 14px; line-height: 1.6;">
                                <div style="margin-bottom: 5px; font-weight: 600;">${recipe.credits.chef}</div>
                                <div style="font-style: italic;">${recipe.credits.note}</div>
                            </div>
                        </div>
                    `;
                }
                document.getElementById('modalInstructions').innerHTML += creditsHtml;
            }

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeRecipeModal() {
            const modal = document.getElementById('recipeModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('recipeModal');
            if (event.target === modal) {
                closeRecipeModal();
            }
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