/* =========================================
   1. DATA: THE COMPLETE MENU ARCHIVE (2025)
   ========================================= */
const MENUS = {
    allday: [
        /* --- SMALL PLATES --- */
        { category: "Small Plates", name: "Soup du Jour", price: 14, description: "Chef's daily selection.", opts: [], tags: [], image: "soup.jpg" },
        { category: "Small Plates", name: "Potato Leek Soup", price: 11, description: "A Glen Echo classic. Creamy and warming.", opts: [], tags: ["v", "gf"], image: "soup_leek.jpg" },
        { category: "Small Plates", name: "Chicken Wings", price: 15, description: "Buffalo | BBQ | Old Bay | Sweet Chili | Hot Honey.", opts: [], tags: ["gf"], image: "wings.jpg" },
        { category: "Small Plates", name: "Popcorn Shrimp", price: 16, description: "Deep-fried shrimp served with cherry pepper dipping sauce.", opts: [], tags: [], image: "shrimp.jpg" },
        { category: "Small Plates", name: "Irish Tots", price: 14, description: "Crispy tater tots topped with melted Irish cheddar, corned beef & aioli dipping sauce.", opts: [], tags: [], image: "tots.jpg" },
        { category: "Small Plates", name: "Semolina Fried Calamari", price: 18, description: "Lightly fried semolina-battered calamari with cherry pepper sauce.", opts: [], tags: [], image: "calamari.jpg" },
        { category: "Small Plates", name: "Caprese Flatbread", price: 18, description: "Flatbread topped with spinach, pesto, roasted cherry tomato, parmesan & balsamic glaze.", opts: [], tags: ["v"], image: "flatbread.jpg" },
        { category: "Small Plates", name: "Crab & Artichoke Dip", price: 19, description: "Fresh crab meat blended with artichoke, cream cheese & parmesan, baked and served with warm pita bread.", opts: [], tags: [], image: "crab_dip.jpg" },
        { category: "Small Plates", name: "Hummus", price: 13, description: "Creamy hummus with pita, cucumbers, cherry tomato & olives.", opts: [], tags: ["v", "vg"], image: "hummus.jpg" },
        { category: "Small Plates", name: "Deviled Eggs", price: 12, description: "Egg white halves filled with Irish mustard-paprika yolk, topped with smoked salmon, tomato, caper & red onion.", opts: [], tags: ["gf"], image: "eggs.jpg" },
        { category: "Small Plates", name: "Mediterranean Platter", price: 20, description: "A sharable spread of hummus, braised peppers, eggplant fritter, tomato jam, walnut pesto, fresh mozzarella & pickled vegetables, served with warm fried pita & lavash.", opts: [], tags: ["v"], image: "med_platter.jpg" },
        { category: "Small Plates", name: "Chicken Quesadilla", price: 19, description: "Toasted flour tortilla filled with chicken, tomato compote, & melted cheese. Served with pico de gallo, sour cream & guacamole.", opts: [], tags: [], image: "quesadilla.jpg" },
        { category: "Small Plates", name: "Mussels & Clams", price: 21, description: "Fresh clams and Prince Edward Island mussels in a broth of tomato, white wine, garlic & shallot, served with warm garlic bread.", opts: [], tags: ["gf"], image: "mussels.jpg" },

        /* --- SALADS (Proteins added automatically in logic below) --- */
        { category: "Salads", name: "Apple & Pomegranate", price: 16, description: "Apple with goat cheese, pomegranate & candied walnuts over spinach with champagne vinaigrette.", opts: [], tags: ["v", "gf"], image: "salad_apple.jpg" },
        { category: "Salads", name: "Classic Caesar", price: 14, description: "Crisp romaine, parmesan, house-made croutons & creamy Caesar dressing.", opts: [], tags: [], image: "caesar.jpg" },
        { category: "Salads", name: "Irish Greens", price: 14, description: "Arcadian greens with tomato, cucumber, carrot, watermelon radish & Irish mustard vinaigrette.", opts: [], tags: ["v", "vg", "gf"], image: "greens.jpg" },
        { category: "Salads", name: "Greens and Grains", price: 19, description: "Spinach & quinoa with cherry tomato, cucumber, feta, hummus & avocado, served with pita & honey vinaigrette.", opts: [], tags: ["v"], image: "grains.jpg" },

        /* --- HANDHELDS (GF Bun added automatically in logic below) --- */
        { category: "Handhelds", name: "Crab Cake Sandwich", price: "M.P.", description: "Pan-seared Maryland crab cake with lettuce, tomato & onion on toasted brioche.", opts: [], tags: [], image: "crabcake_sand.jpg" },
        { category: "Handhelds", name: "Ahi Tuna Sandwich", price: 24, description: "Seared ahi tuna with avocado, lettuce, tomato & wasabi aioli on multigrain bread.", opts: [], tags: [], image: "tuna_sand.jpg" },
        { category: "Handhelds", name: "Reuben", price: 20, description: "House-cured corned beef with coleslaw, Swiss cheese & Thousand Island dressing on rye.", opts: [], tags: [], image: "reuben.jpg" },
        { category: "Handhelds", name: "Short Rib Sandwich", price: 20, description: "Braised short rib, with lettuce, tomato, red onion & Swiss cheese served on a brioche bun.", opts: [], tags: [], image: "shortrib_sand.jpg" },
        { category: "Handhelds", name: "Irish Cheeseburger", price: 20, description: "Grilled Angus beef with Irish cheddar, lettuce, tomato & onion on brioche.", opts: [], tags: [], image: "burger.jpg" },
        { category: "Handhelds", name: "Beyond Burger", price: 20, description: "Plant-based burger with lettuce, tomato, onion, guacamole & Thousand Island on gluten free bun.", opts: [], tags: ["v", "gf"], image: "beyond.jpg" },
        { category: "Handhelds", name: "Chicken Cutlet Sandwich", price: 20, description: "Crispy fried chicken sandwich with lettuce, tomato & red onion on brioche. Try Buffalo Style!", opts: [], tags: [], image: "chicken_sand.jpg" },
        { category: "Handhelds", name: "Fish Tacos", price: 22, description: "Blackened tilapia with pepper slaw & assorted toppings. Substitute shrimp or salmon +6.", opts: [], tags: ["gf"], image: "tacos.jpg" },

        /* --- SIGNATURES --- */
        { category: "Signatures", name: "Shepherd's Pie", price: 21, description: "Ground beef with peas, carrots & rich Jameson gravy, topped with mashed potatoes.", opts: ["Vegetarian Version Available (Mushrooms, Onions, Spinach)"], tags: ["gf"], image: "shepherds.jpg" },
        { category: "Signatures", name: "Fish and Chips", price: 24, description: "Guinness-battered cod with fries, coleslaw & tartar sauce.", opts: [], tags: [], image: "fishchips.jpg" },
        { category: "Signatures", name: "Seafood Stew", price: 34, description: "Shrimp, scallops, mussels & fish in a white wine & herb broth with fennel & garlic bread.", opts: [], tags: [], image: "seafood_stew.jpg" },
        { category: "Signatures", name: "Crab Cake Entree", price: "M.P.", description: "Pan-seared Maryland crab cakes with mashed potatoes, seasonal vegetables & tartar sauce.", opts: [], tags: [], image: "crabcakes.jpg" },
        { category: "Signatures", name: "Roasted Salmon", price: "M.P.", description: "Oven-roasted salmon with rice pilaf, baby carrots, vegetable of the day & lemon caper beurre blanc.", opts: [], tags: ["gf"], image: "salmon_main.jpg" },
        { category: "Signatures", name: "Beef Stroganoff", price: 34, description: "Beef tips sautéed with mushrooms & served over egg noodles, smothered in rich Guinness gravy & finished with a dollop of sour cream.", opts: [], tags: [], image: "stroganoff.jpg" },
        { category: "Signatures", name: "Short Rib", price: 32, description: "Slow-braised short rib in Guinness gravy with vegetable of the day & cheddar grits.", opts: [], tags: [], image: "shortrib_main.jpg" },
        { category: "Signatures", name: "Rack of Lamb", price: 38, description: "Herb-crusted rack of lamb with roasted fingerling potatoes, creamed spinach & port wine reduction.", opts: [], tags: [], image: "lamb.jpg" },
        { category: "Signatures", name: "NY Strip Steak", price: 34, description: "Grilled New York strip with French fries, vegetable of the day & peppercorn sauce.", opts: [], tags: ["gf"], image: "steak.jpg" },
        { category: "Signatures", name: "Corned Beef and Cabbage", price: 24, description: "Slow-braised corned beef with mashed red potatoes, cabbage, carrot & Irish mustard sauce.", opts: [], tags: ["gf"], image: "corned_beef.jpg" },
        { category: "Signatures", name: "Banger Plate", price: 22, description: "Savory Irish sausages with mashed red potatoes, cabbage, carrot & Irish mustard sauce.", opts: [], tags: [], image: "bangers.jpg" },
        { category: "Signatures", name: "Chicken Pot Pie", price: 24, description: "Chicken breast, peas & root vegetables in creamy sauce under flaky pastry crust.", opts: [], tags: [], image: "potpie.jpg" },
        { category: "Signatures", name: "Coconut Curry", price: 24, description: "Organic chickpeas, cauliflower, bell pepper & fingerling potatoes in a fragrant coconut curry with jasmine rice.", opts: [], tags: ["v", "vg", "gf"], image: "curry.jpg" },
        { category: "Signatures", name: "Shrimp, Scallop & Grits", price: 26, description: "Shrimp & jumbo scallops served over cheddar grits and tomato concasse with andouille sausage.", opts: [], tags: ["gf"], image: "shrimp_grits.jpg" }
    ],

    brunch: [
        /* --- BRUNCH SOUPS & STARTERS --- */
        { category: "Soups & Starters", name: "Soup of the Day", price: "Cup $6/Bowl $11", description: "Chef's daily selection.", opts: [], tags: [], image: "soup.jpg" },
        { category: "Soups & Starters", name: "Potato Leek Soup", price: "Cup $6/Bowl $11", description: "A Glen Echo classic. Creamy and warming.", opts: [], tags: ["v", "gf"], image: "soup_leek.jpg" },
        { category: "Soups & Starters", name: "Smoked Salmon", price: 17, description: "Enjoy a classic plain bagel layered with smooth cream cheese and topped with delicately smoked salmon. Served with an Irish greens salad.", opts: [], tags: [], image: "salmon_bagel.jpg" },
        { category: "Soups & Starters", name: "House-Made Hummus", price: 13, description: "Creamy hummus topped with olive oil, fresh tomatoes, cucumbers, and black olives. Served with freshly fried pita.", opts: ["Add Crudité +$5"], tags: ["v", "vg"], image: "hummus.jpg" },
        { category: "Soups & Starters", name: "Buttermilk Fried Calamari", price: 18, description: "Tender calamari rings fried to golden perfection, served with a zesty cherry pepper dipping sauce.", opts: [], tags: [], image: "calamari.jpg" },
        { category: "Soups & Starters", name: "Deviled Eggs", price: 12, description: "Four creamy deviled eggs topped with savory smoked salmon.", opts: [], tags: ["gf"], image: "eggs.jpg" },
        { category: "Soups & Starters", name: "Mediterranean Platter", price: 20, description: "A vibrant mix of hummus, braised peppers, eggplant fritter, tomato jam, walnut pesto, fresh mozzarella, pickled vegetables, served with fried pita bread and lavash.", opts: [], tags: ["v"], image: "med_platter.jpg" },
        { category: "Soups & Starters", name: "Chicken Quesadilla", price: 20, description: "Toasted flour tortilla filled with melted cheese, served with pico de gallo, sour cream, and guacamole.", opts: [], tags: [], image: "quesadilla.jpg" },
        { category: "Soups & Starters", name: "Irish Tots", price: 12, description: "Golden fried tater tots served with a tangy sour cream dipping sauce.", opts: ["Load up w/ Corned Beef & Cheese +$4"], tags: [], image: "tots.jpg" },
        { category: "Soups & Starters", name: "Flatbread", price: 14, description: "Topped with tomato compote, mozzarella, and Parmesan, finished with fresh basil.", opts: ["Add Chicken +$7", "Add Steak +$14", "Add Shrimp +$10", "Add Salami +$6"], tags: ["v"], image: "flatbread.jpg" },
        { category: "Soups & Starters", name: "Crab Artichoke Dip", price: 19, description: "Fresh crab meat blended with artichokes, cream cheese, and Parmesan, baked and served with warm pita bread.", opts: [], tags: [], image: "crab_dip.jpg" },

        /* --- BRUNCH SALADS (Proteins added automatically) --- */
        { category: "Appetizer Salads", name: "Irish Greens Salad", price: 14, description: "Fresh baby tomatoes, cucumbers, carrots, and watermelon radish tossed in a zesty country vinaigrette.", opts: [], tags: ["v", "vg", "gf"], image: "greens.jpg" },
        { category: "Appetizer Salads", name: "Greek Salad", price: 16, description: "Romaine lettuce, Kalamata olives, bell peppers, and feta, tossed in a tangy oregano vinaigrette.", opts: [], tags: ["v", "gf"], image: "greek_salad.jpg" },
        { category: "Appetizer Salads", name: "Classic Caesar Salad", price: 14, description: "Crisp romaine lettuce, crunchy croutons, and shaved Parmesan, all tossed in a rich Caesar dressing.", opts: [], tags: [], image: "caesar.jpg" },

        /* --- BRUNCH MAINS --- */
        { category: "Brunch Selections", name: "Traditional Irish Breakfast", price: 20, description: "A hearty plate featuring Irish sausage, black and white puddings, Irish rashers, tomatoes, baked beans, and toast. Served with two eggs any style.", opts: [], tags: [], image: "full_irish.jpg" },
        { category: "Brunch Selections", name: "All-American Breakfast", price: 16, description: "A classic breakfast with two eggs any style, a savory sausage patty, potato hash, and a side of toast.", opts: [], tags: [], image: "american_breakfast.jpg" },
        { category: "Brunch Selections", name: "Corned Beef Hash", price: 24, description: "Flavorful corned beef hash mixed with bell peppers and roasted potatoes. Topped with two eggs any style for a deliciously filling meal.", opts: [], tags: ["gf"], image: "hash.jpg" },
        { category: "Brunch Selections", name: "Irish Pancake Breakfast", price: 18, description: "Two eggs cooked to your preference, served with your choice of bacon or sausage. Includes a stack of pancakes with strawberry preserves, Nutella, or maple syrup.", opts: [], tags: [], image: "pancakes.jpg" },
        { category: "Brunch Selections", name: "Bailey's Irish Cream French Toast", price: 18, description: "Rich French toast infused with Bailey's Irish Cream, served with two eggs any style and your choice of bacon or sausage. Comes with your selection of strawberry preserves, Nutella, or maple syrup.", opts: [], tags: [], image: "french_toast.jpg" },
        { category: "Brunch Selections", name: "Eggs Benedict", price: 20, description: "Eggs Benedict featuring your choice of smoked salmon, Irish rashers, or a sausage patty. Served with roasted potatoes and fresh fruit garnish.", opts: [], tags: [], image: "benedict.jpg" },
        { category: "Brunch Selections", name: "Steak and Eggs", price: 28, description: "A 6 oz. flat iron steak served with two eggs any style, seasonal vegetables, and topped with a decadent blue cheese butter.", opts: [], tags: ["gf"], image: "steak_eggs.jpg" },
        { category: "Brunch Selections", name: "Dubliner Scrambled Eggs", price: 25, description: "Smoked salmon scrambled with cream cheese and fresh chives, served with roasted potatoes and a side of toast.", opts: [], tags: ["gf"], image: "scramble.jpg" },
        { category: "Brunch Selections", name: "Quiche du Jour", price: 18, description: "Ask your server about today's quiche selection. Served with a fresh Irish Inn salad.", opts: [], tags: [], image: "quiche.jpg" },
        { category: "Brunch Selections", name: "Steak Omelette", price: 24, description: "A rich blend of cheeses folded into a tender steak omelette. Served with roasted potatoes and fresh fruit.", opts: [], tags: ["gf"], image: "omelette.jpg" },
        { category: "Brunch Selections", name: "Fish Tacos", price: 20, description: "Blackened tilapia with pepper slaw, pico de gallo, guacamole, romaine lettuce, mixed cheeses, and sour cream, all wrapped in soft corn tortillas.", opts: ["Upgrade to shrimp or salmon +$6"], tags: ["gf"], image: "tacos.jpg" },

        /* --- SANDWICH SELECTIONS (GF Bun added automatically) --- */
        { category: "Sandwich Selections", name: "Crispy Fish Sandwich", price: 20, description: "Crispy fried cod, served on a brioche bun with tangy tartar sauce, creamy coleslaw, and a touch of ketchup.", opts: [], tags: [], image: "fish_sand.jpg" },
        { category: "Sandwich Selections", name: "Ahi Tuna Sandwich", price: 24, description: "Seared ahi tuna, avocado, and fresh tomatoes on toasted wheat bread with wasabi aioli.", opts: [], tags: [], image: "tuna_sand.jpg" },
        { category: "Sandwich Selections", name: "Reuben", price: 20, description: "Corned beef brisket, Swiss cheese, coleslaw, and 1000 island dressing on toasted rye bread.", opts: [], tags: [], image: "reuben.jpg" },
        { category: "Sandwich Selections", name: "Irish Cheeseburger", price: 20, description: "8oz Angus beef patty with lettuce, tomato, onion, and Dubliner cheddar, served on a brioche bun.", opts: ["Add Bacon +$2", "Add Fried Egg +$4"], tags: [], image: "burger.jpg" },
        { category: "Sandwich Selections", name: "Beyond Burger", price: 20, description: "6oz plant-based burger with guacamole, lettuce, tomato, red onion, and 1000 island dressing, served on a brioche bun.", opts: [], tags: ["v", "gf"], image: "beyond.jpg" },
        { category: "Sandwich Selections", name: "Crab Cake Sandwich", price: "M.P.", description: "Jumbo lump crab cake with lettuce, tomato, and onion, served on a brioche bun.", opts: [], tags: [], image: "crabcake_sand.jpg" },
        
        /* --- TRADITIONAL FARE --- */
        { category: "Traditional Irish Fare", name: "Shepherd's Pie", price: 21, description: "Minced beef with Jameson whiskey, peas and carrots, topped with creamy mashed potatoes and served with an Irish green salad.", opts: ["Vegetarian Version Available (Mushrooms, Onions, Spinach)"], tags: ["gf"], image: "shepherds.jpg" },
        { category: "Traditional Irish Fare", name: "Fish and Chips", price: 24, description: "Guinness-battered wild Alaskan cod fillet, served with crispy French fries, coleslaw, and tangy tartar sauce.", opts: [], tags: [], image: "fishchips.jpg" },
        { category: "Traditional Irish Fare", name: "Corned Beef and Cabbage", price: 24, description: "Tender corned beef with red bliss mashed potatoes, braised cabbage, carrots, and a rich Irish mustard sauce.", opts: [], tags: ["gf"], image: "corned_beef.jpg" },
        { category: "Traditional Irish Fare", name: "Banger Plate", price: 22, description: "Savory pork sausages over mashed potatoes and braised cabbage, finished with an Irish mustard sauce.", opts: [], tags: [], image: "bangers.jpg" }
    ]
};

/* =========================================
   2. LOGIC: RENDER MENU, TABS & FILTERS
   ========================================= */

// STATE
let activeMenu = 'allday'; 
let activeFilters = [];    

// --- FUNCTION 1: SWITCH MENU (All Day vs Brunch) ---
function switchMenu(menuType) {
    activeMenu = menuType;
    activeFilters = []; // Reset filters
    
    // Update Buttons UI
    document.querySelectorAll('.menu-switch-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.menu === menuType) btn.classList.add('active');
    });

    // Reset Filter UI
    document.querySelectorAll('.allergen-btn').forEach(btn => btn.classList.remove('active'));

    renderMenu();
}

// --- FUNCTION 2: TOGGLE FILTERS (GF, V, etc.) ---
function toggleFilter(tag) {
    if (activeFilters.includes(tag)) {
        activeFilters = activeFilters.filter(t => t !== tag); // Remove
    } else {
        activeFilters.push(tag); // Add
    }

    // Update Filter Buttons UI
    document.querySelectorAll('.allergen-btn').forEach(btn => {
        if (activeFilters.includes(btn.dataset.tag)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderMenu();
}

// --- FUNCTION 3: RENDER THE GRID ---
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    const categoryList = document.getElementById('category-list');
    
    // STOP if we are not on the menu page
    if (!menuContainer) return;

    const data = MENUS[activeMenu];
    
    // 1. Get Categories
    const categories = [...new Set(data.map(item => item.category))];
    
    // 2. Render Sticky Nav Categories
    if (categoryList) {
        let catHTML = `<li class="active" onclick="scrollToSection('top')">ALL</li>`;
        categories.forEach(cat => {
            const slug = cat.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            catHTML += `<li onclick="scrollToSection('${slug}')">${cat}</li>`;
        });
        categoryList.innerHTML = catHTML;
        
        // Add click listeners
        const listItems = categoryList.querySelectorAll('li');
        listItems.forEach(item => {
            item.addEventListener('click', function() {
                listItems.forEach(li => li.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // 3. Render Items
    let gridHTML = '';
    
    categories.forEach(cat => {
        let items = data.filter(item => item.category === cat);

        // Filter Logic
        if (activeFilters.length > 0) {
            items = items.filter(item => {
                return activeFilters.every(filter => item.tags.includes(filter));
            });
        }

        if (items.length === 0) return;

        const slug = cat.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

        gridHTML += `
        <div class="menu-section" id="${slug}">
            <h3>${cat}</h3>
            <div class="menu-grid">
        `;

        items.forEach(item => {
            // GLOBAL UPSELL LOGIC (Applied Programmatically)
            
            // 1. ADD SALAD PROTEINS (To anything with "Salad" or "Greens" in Category/Name)
            if (item.category.includes("Salad") || item.name.includes("Salad")) {
                const saladProteins = ["Add Chicken +$7", "Add Shrimp +$10", "Add Salmon +$12", "Add Steak +$14"];
                // Avoid duplicates if already listed
                saladProteins.forEach(p => {
                    if(!item.opts.includes(p)) item.opts.push(p);
                });
            }

            // 2. ADD GF BUN (To anything in Handhelds or Sandwiches)
            if (item.category.includes("Handhelds") || item.category.includes("Sandwich") || item.category.includes("Burger")) {
                const gfBun = "Gluten Free Bun +$2";
                if (!item.opts.includes(gfBun)) item.opts.push(gfBun);
            }

            // Generate "Gold Options" Pills
            let optionsHTML = '';
            if (item.opts && item.opts.length > 0) {
                optionsHTML = `<div class="menu-options">` + 
                    item.opts.map(opt => `<span class="option-badge">${opt}</span>`).join('') + 
                    `</div>`;
            }

            // Generate Allergen Badges
            const badges = item.tags.map(tag => `<span class="diet-icon ${tag}">${tag.toUpperCase()}</span>`).join('');
            
            // Price Formatting
            const priceDisplay = typeof item.price === 'number' ? `$${item.price}` : item.price;

            gridHTML += `
            <div class="menu-item">
                <div class="item-details">
                    <div class="item-head">
                        <span>${item.name}</span>
                        <span>${priceDisplay}</span>
                    </div>
                    <div class="item-desc">${item.description}</div>
                    ${optionsHTML}
                    <div class="item-icons">${badges}</div>
                </div>
            </div>
            `;
        });

        gridHTML += `</div></div>`;
    });

    // Empty State
    if (gridHTML === '') {
        gridHTML = `<div class="text-center" style="padding:4rem;">
            <h3>No items match these filters.</h3>
            <p>Try removing some filters to see more delicious options.</p>
        </div>`;
    }

    menuContainer.innerHTML = gridHTML;
}

// --- UTILITY: SCROLL TO SECTION ---
function scrollToSection(id) {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 180; 
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    }
}

// --- UTILITY: MOBILE MENU ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('active');
}

/* =========================================
   3. STATUS INDICATOR (UPDATED HOURS)
   ========================================= */
function checkStatus() {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    const min = now.getMinutes();
    const time = hour + (min / 60);

    let isOpen = false;

    // HOURS LOGIC:
    // Mon:      4:30pm - 10:00pm (16.5 - 22.0)
    // Tue-Fri: 11:30am - 9:30pm  (11.5 - 21.5)
    // Sat:     11:00am - 9:30pm  (11.0 - 21.5)
    // Sun:     11:00am - 9:00pm  (11.0 - 21.0)

    if (day === 1) { // Monday
        if (time >= 16.5 && time < 22.0) isOpen = true;
    } else if (day >= 2 && day <= 5) { // Tue - Fri
        if (time >= 11.5 && time < 21.5) isOpen = true;
    } else if (day === 6) { // Saturday
        if (time >= 11.0 && time < 21.5) isOpen = true;
    } else if (day === 0) { // Sunday
        if (time >= 11.0 && time < 21.0) isOpen = true;
    }

    const dot = document.getElementById('status-dot');
    const text = document.getElementById('status-text');

    if (dot && text) {
        if (isOpen) {
            dot.style.background = '#2ecc71';
            text.innerText = 'Open Now';
            text.style.color = '#fff';
            text.style.fontWeight = 'bold';
        } else {
            dot.style.background = '#e74c3c';
            text.innerText = 'Closed';
            text.style.color = '#ccc';
            text.style.fontWeight = 'normal';
        }
    }
}

/* =========================================
   4. INITIALIZE EVERYTHING
   ========================================= */
// Expose functions to HTML
window.switchMenu = switchMenu;
window.toggleFilter = toggleFilter;
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;

// Run on Load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check Open Status
    checkStatus();
    setInterval(checkStatus, 60000);

    // 2. Check for Menu Container
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        // BRUNCH AUTO-SWITCH LOGIC
        // Sat/Sun: 11:00am - 2:30pm (11.0 - 14.5)
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const min = now.getMinutes();
        const time = hour + (min / 60);

        if ((day === 0 || day === 6) && (time >= 11.0 && time < 14.5)) {
            switchMenu('brunch');
        } else {
            renderMenu();
        }
    }
});
