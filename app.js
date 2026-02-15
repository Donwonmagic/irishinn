/* =========================================
   1. DATA: THE COMPLETE MENU ARCHIVE (Verified PDF 6)
   ========================================= */
const MENUS = {
    allday: [
        /* --- SMALL PLATES --- */
        { category: "Small Plates", name: "Soup du Jour", price: 14, description: "Chef's daily selection.", opts: [], tags: [], image: "soup.jpg" },
        { category: "Small Plates", name: "Potato Leek Soup", price: 11, description: "A Glen Echo classic. Creamy and warming.", opts: [], tags: ["v", "gf"], image: "soup_leek.jpg" },
        { category: "Small Plates", name: "Chicken Wings", price: 15, description: "Buffalo | BBQ | Old Bay | Sweet Chili | Hot Honey.", opts: [], tags: ["gf"], image: "wings.jpg" },
        { category: "Small Plates", name: "Popcorn Shrimp", price: 16, description: "Deep-fried shrimp served with cherry pepper dipping sauce.", opts: [], tags: [], image: "shrimp.jpg" },
        { category: "Small Plates", name: "Irish Tots", price: 14, description: "Crispy tater tots topped with melted Irish cheddar & corned beef brisket.", opts: [], tags: [], image: "tots.jpg" },
        { category: "Small Plates", name: "Semolina Fried Calamari", price: 18, description: "Lightly fried semolina-battered calamari with cherry pepper sauce.", opts: [], tags: [], image: "calamari.jpg" },
        { category: "Small Plates", name: "Caprese Flatbread", price: 18, description: "Flatbread topped with spinach, pesto, roasted cherry tomato, parmesan & balsamic glaze.", opts: [], tags: ["v"], image: "flatbread.jpg" },
        { category: "Small Plates", name: "Crab & Artichoke Dip", price: 19, description: "Fresh crab meat blended with artichoke, cream cheese & parmesan. Served with warm pita.", opts: [], tags: [], image: "crab_dip.jpg" },
        { category: "Small Plates", name: "Hummus", price: 13, description: "Creamy hummus with pita, cucumbers, cherry tomato & olives.", opts: [], tags: ["v", "vg"], image: "hummus.jpg" },
        { category: "Small Plates", name: "Deviled Eggs", price: 12, description: "Topped with smoked salmon, tomato, caper & red onion.", opts: [], tags: ["gf"], image: "eggs.jpg" },
        { category: "Small Plates", name: "Mediterranean Platter", price: 20, description: "Hummus, braised peppers, eggplant fritter, tomato jam, walnut pesto, fresh mozz, pickled veg, fried pita.", opts: [], tags: ["v"], image: "med_platter.jpg" },
        { category: "Small Plates", name: "Chicken Quesadilla", price: 19, description: "Chicken, tomato compote, melted cheese, pico de gallo, sour cream & guacamole.", opts: [], tags: [], image: "quesadilla.jpg" },
        { category: "Small Plates", name: "Mussels & Clams", price: 21, description: "Fresh clams and PEI mussels in tomato, white wine, garlic & shallot broth.", opts: [], tags: ["gf"], image: "mussels.jpg" },

        /* --- SALADS --- */
        { category: "Salads", name: "Apple & Pomegranate", price: 16, description: "Goat cheese, pomegranate & candied walnuts over spinach with champagne vinaigrette.", opts: [], tags: ["v", "gf"], image: "salad_apple.jpg" },
        { category: "Salads", name: "Classic Caesar", price: 14, description: "Crisp romaine, parmesan, house-made croutons & creamy Caesar dressing.", opts: [], tags: [], image: "caesar.jpg" },
        { category: "Salads", name: "Irish Greens", price: 14, description: "Arcadian greens, tomato, cucumber, carrot, watermelon radish & Irish mustard vinaigrette.", opts: [], tags: ["v", "vg", "gf"], image: "greens.jpg" },
        { category: "Salads", name: "Greens and Grains", price: 19, description: "Spinach & quinoa, cherry tomato, cucumber, feta, hummus & avocado. Served with pita.", opts: ["Add Chicken +$7", "Add Shrimp +$10", "Add Salmon +$12"], tags: ["v"], image: "grains.jpg" },

        /* --- HANDHELDS --- */
        { category: "Handhelds", name: "Crab Cake Sandwich", price: "M.P.", description: "Pan-seared Maryland crab cake with lettuce, tomato & onion on toasted brioche.", opts: [], tags: [], image: "crabcake_sand.jpg" },
        { category: "Handhelds", name: "Ahi Tuna Sandwich", price: 24, description: "Seared ahi tuna, avocado, lettuce, tomato & wasabi aioli on multigrain.", opts: [], tags: [], image: "tuna_sand.jpg" },
        { category: "Handhelds", name: "Reuben", price: 20, description: "House-cured corned beef, coleslaw, Swiss cheese & 1000 island on rye.", opts: [], tags: [], image: "reuben.jpg" },
        { category: "Handhelds", name: "Short Rib Sandwich", price: 20, description: "Braised short rib, lettuce, tomato, red onion & Swiss cheese on brioche.", opts: [], tags: [], image: "shortrib_sand.jpg" },
        { category: "Handhelds", name: "Irish Cheeseburger", price: 20, description: "Grilled Angus beef, Irish cheddar, lettuce, tomato & onion on brioche.", opts: [], tags: [], image: "burger.jpg" },
        { category: "Handhelds", name: "Beyond Burger", price: 20, description: "Plant-based burger, LTO, guacamole & 1000 island on Gluten Free bun.", opts: [], tags: ["v", "gf"], image: "beyond.jpg" },
        { category: "Handhelds", name: "Chicken Cutlet Sandwich", price: 20, description: "Crispy fried chicken, lettuce, tomato, red onion on brioche. Try Buffalo Style!", opts: [], tags: [], image: "chicken_sand.jpg" },
        { category: "Handhelds", name: "Fish Tacos", price: 22, description: "Blackened tilapia with pepper slaw. ", opts: ["Sub Shrimp +$6", "Sub Salmon +$6"], tags: ["gf"], image: "tacos.jpg" },

        /* --- SIGNATURES --- */
        { category: "Signatures", name: "Shepherd's Pie", price: 21, description: "Ground beef, peas, carrots & Jameson gravy, topped with mashed potatoes.", opts: ["Vegetarian Option Available"], tags: ["gf"], image: "shepherds.jpg" },
        { category: "Signatures", name: "Fish and Chips", price: 24, description: "Guinness-battered cod with fries, coleslaw & tartar sauce.", opts: [], tags: [], image: "fishchips.jpg" },
        { category: "Signatures", name: "Seafood Stew", price: 34, description: "Shrimp, scallops, mussels & fish in white wine & herb broth with fennel & garlic bread.", opts: [], tags: [], image: "seafood_stew.jpg" },
        { category: "Signatures", name: "Crab Cake Entree", price: "M.P.", description: "Two jumbo lump crab cakes, mashed potatoes, vegetable of the day, tartar.", opts: [], tags: [], image: "crabcakes.jpg" },
        { category: "Signatures", name: "Roasted Salmon", price: "M.P.", description: "Oven-roasted salmon with rice pilaf, baby carrots, veg of the day & lemon caper beurre blanc.", opts: [], tags: ["gf"], image: "salmon_main.jpg" },
        { category: "Signatures", name: "Beef Stroganoff", price: 34, description: "Beef tips sautéed with mushrooms over egg noodles in rich Guinness gravy with sour cream.", opts: [], tags: [], image: "stroganoff.jpg" },
        { category: "Signatures", name: "Short Rib", price: 32, description: "Slow-braised short rib in Guinness gravy with veg of the day & cheddar grits.", opts: [], tags: [], image: "shortrib_main.jpg" },
        { category: "Signatures", name: "Rack of Lamb", price: 38, description: "Herb-crusted with roasted fingerling potatoes, creamed spinach & port wine reduction.", opts: [], tags: [], image: "lamb.jpg" },
        { category: "Signatures", name: "NY Strip Steak", price: 34, description: "Grilled strip with french fries, veg of the day & peppercorn sauce.", opts: [], tags: ["gf"], image: "steak.jpg" },
        { category: "Signatures", name: "Corned Beef and Cabbage", price: 24, description: "Slow-braised corned beef, mashed red potatoes, cabbage, carrot & Irish mustard sauce.", opts: [], tags: ["gf"], image: "corned_beef.jpg" },
        { category: "Signatures", name: "Banger Plate", price: 22, description: "Savory Irish sausages with mashed red potatoes, cabbage, carrot & Irish mustard sauce.", opts: [], tags: [], image: "bangers.jpg" },
        { category: "Signatures", name: "Chicken Pot Pie", price: 24, description: "Chicken breast, peas & root vegetables in creamy sauce under flaky pastry crust.", opts: [], tags: [], image: "potpie.jpg" },
        { category: "Signatures", name: "Coconut Curry", price: 24, description: "Chickpeas, cauliflower, bell pepper & fingerling potatoes in coconut curry with jasmine rice.", opts: [], tags: ["v", "vg", "gf"], image: "curry.jpg" },
        { category: "Signatures", name: "Shrimp, Scallop & Grits", price: 26, description: "Served over cheddar grits and tomato concasse with andouille sausage.", opts: [], tags: ["gf"], image: "shrimp_grits.jpg" }
    ],

    brunch: [
        /* --- BRUNCH SOUPS & STARTERS (Source: PDF 6, Page 1) --- */
        { category: "Soups & Starters", name: "Soup du Jour", price: 14, description: "Chef's daily selection.", opts: [], tags: [], image: "soup.jpg" },
        { category: "Soups & Starters", name: "Popcorn Shrimp", price: 16, description: "Deep-fried shrimp served with cherry pepper dipping sauce.", opts: [], tags: [], image: "shrimp.jpg" },
        { category: "Soups & Starters", name: "Chicken Wings", price: 15, description: "Buffalo | BBQ | Old Bay | Sweet Chili | Hot Honey", opts: [], tags: ["gf"], image: "wings.jpg" },
        { category: "Soups & Starters", name: "Irish Tots", price: 14, description: "Crispy tater tots topped with melted Irish cheddar, corned beef & aioli.", opts: [], tags: [], image: "tots.jpg" },
        { category: "Soups & Starters", name: "Semolina Fried Calamari", price: 18, description: "Lightly fried semolina-battered calamari with cherry pepper sauce.", opts: [], tags: [], image: "calamari.jpg" },
        { category: "Soups & Starters", name: "Crab & Artichoke Dip", price: 19, description: "Fresh crab meat blended with artichoke, cream cheese & parmesan. Served with warm pita.", opts: [], tags: [], image: "crab_dip.jpg" },
        { category: "Soups & Starters", name: "Potato Leek Soup", price: 11, description: "A Glen Echo classic. Creamy and warming.", opts: [], tags: ["v", "gf"], image: "soup_leek.jpg" },
        { category: "Soups & Starters", name: "Hummus", price: 13, description: "Creamy hummus with pita, cucumbers, cherry tomato & olives.", opts: [], tags: ["v", "vg"], image: "hummus.jpg" },
        { category: "Soups & Starters", name: "Mediterranean Platter", price: 20, description: "Hummus, braised peppers, eggplant fritter, tomato jam, walnut pesto, fresh mozz, pickled veg, pita.", opts: [], tags: ["v"], image: "med_platter.jpg" },
        { category: "Soups & Starters", name: "Chicken Quesadilla", price: 19, description: "Toasted flour tortilla, melted cheese, pico de gallo, sour cream, guacamole.", opts: [], tags: [], image: "quesadilla.jpg" },
        { category: "Soups & Starters", name: "Mussels & Clams", price: 21, description: "Fresh clams and PEI mussels in tomato, white wine, garlic & shallot broth.", opts: [], tags: ["gf"], image: "mussels.jpg" },

        /* --- BRUNCH SALADS --- */
        { category: "Brunch Salads", name: "Apple & Pomegranate", price: 16, description: "Apple with goat cheese, pomegranate & candied walnuts over spinach with champagne vinaigrette.", opts: [], tags: ["v", "gf"], image: "salad_apple.jpg" },
        { category: "Brunch Salads", name: "Irish Greens", price: 14, description: "Arcadian greens, tomato, cucumber, carrot, watermelon radish & Irish mustard vinaigrette.", opts: [], tags: ["v", "vg", "gf"], image: "greens.jpg" },
        { category: "Brunch Salads", name: "Classic Caesar Salad", price: 14, description: "Crisp romaine, parmesan, croutons & creamy Caesar dressing.", opts: [], tags: [], image: "caesar.jpg" },
        { category: "Brunch Salads", name: "Greens and Grains", price: 19, description: "Spinach & quinoa, cherry tomato, cucumber, feta, hummus & avocado. Honey vinaigrette.", opts: ["Add Chicken +$7", "Add Shrimp +$10", "Add Salmon +$12"], tags: ["v"], image: "grains.jpg" },

        /* --- BRUNCH MAINS --- */
        { category: "Brunch Mains", name: "Irish Breakfast", price: 20, description: "Irish sausage, black & white puddings, rashers, tomatoes, baked beans & toast. Two eggs.", opts: [], tags: [], image: "full_irish.jpg" },
        { category: "Brunch Mains", name: "All-American Breakfast", price: 16, description: "Two eggs any style, sausage patty, potato hash, and toast.", opts: [], tags: [], image: "american_breakfast.jpg" },
        { category: "Brunch Mains", name: "Corned Beef Hash", price: 24, description: "Flavorful corned beef hash mixed with bell peppers and potatoes. Two eggs.", opts: [], tags: ["gf"], image: "hash.jpg" },
        { category: "Brunch Mains", name: "Irish Pancake Breakfast", price: 18, description: "Stack of pancakes (Strawberry, Nutella, or Maple), bacon or sausage, two eggs.", opts: [], tags: [], image: "pancakes.jpg" },
        { category: "Brunch Mains", name: "Bailey's French Toast", price: 18, description: "Infused with Bailey's Irish Cream. Served with two eggs and bacon or sausage.", opts: [], tags: [], image: "french_toast.jpg" },
        { category: "Brunch Mains", name: "Eggs Benedict", price: 20, description: "Choice of Smoked Salmon, Irish Rashers, or Sausage Patty. Roasted potatoes.", opts: [], tags: [], image: "benedict.jpg" },
        { category: "Brunch Mains", name: "Steak and Eggs", price: 28, description: "16oz Flat Iron with Blue Cheese Butter. Veggie & two eggs.", opts: [], tags: ["gf"], image: "steak_eggs.jpg" },
        { category: "Brunch Mains", name: "Dubliner Scramble", price: 25, description: "Smoked salmon scrambled eggs with cream cheese. Roasted potatoes & fruit.", opts: [], tags: ["gf"], image: "scramble.jpg" },
        { category: "Brunch Mains", name: "Quiche du Jour", price: 20, description: "Ask your server about today's selection. Served with Irish Inn salad.", opts: [], tags: [], image: "quiche.jpg" },
        { category: "Brunch Mains", name: "Steak Omelette", price: 24, description: "Tender steak omelette with cheese. Roasted potatoes & fruit.", opts: [], tags: ["gf"], image: "omelette.jpg" },
        { category: "Brunch Mains", name: "Brunch Flatbread", price: 16, description: "Tomato compote, scrambled egg, mixed cheeses & bacon.", opts: [], tags: [], image: "flatbread_brunch.jpg" },
        { category: "Brunch Mains", name: "Smoked Salmon Bagel", price: 20, description: "Smoked salmon, crisp carrot slaw, cream cheese, hard boiled egg on toasted bagel.", opts: [], tags: [], image: "salmon_bagel.jpg" },

        /* --- SANDWICHES ON BRUNCH --- */
        { category: "Handhelds", name: "Irish Cheeseburger", price: 20, description: "Angus beef, Irish cheddar, lettuce, tomato, onion on brioche.", opts: [], tags: [], image: "burger.jpg" },
        { category: "Handhelds", name: "Beyond Burger", price: 20, description: "Plant-based burger, guacamole, LTO, 1000 island on GF bun.", opts: [], tags: ["v", "gf"], image: "beyond.jpg" },
        { category: "Handhelds", name: "Chicken Cutlet Sandwich", price: 20, description: "Crispy fried chicken, lettuce, tomato, red onion on brioche.", opts: ["Try Buffalo Style!"], tags: [], image: "chicken_sand.jpg" },
        { category: "Handhelds", name: "Fish Tacos", price: 22, description: "Blackened tilapia, pepper slaw.", opts: ["Sub Shrimp +$6", "Sub Salmon +$6"], tags: ["gf"], image: "tacos.jpg" },
        
        /* --- TRADITIONAL FARE ON BRUNCH --- */
        { category: "Traditional Fare", name: "Shepherd's Pie", price: 21, description: "Ground beef, peas, carrots, Jameson gravy, mashed potatoes.", opts: ["Vegetarian Option Available"], tags: ["gf"], image: "shepherds.jpg" },
        { category: "Traditional Fare", name: "Fish and Chips", price: 24, description: "Guinness-battered cod, fries, coleslaw, tartar sauce.", opts: [], tags: [], image: "fishchips.jpg" },
        { category: "Traditional Fare", name: "Corned Beef and Cabbage", price: 24, description: "Slow-braised corned beef, mashed red potatoes, cabbage, carrots.", opts: [], tags: ["gf"], image: "corned_beef.jpg" },
        { category: "Traditional Fare", name: "Banger Plate", price: 22, description: "Savory pork sausages, mashed potatoes, cabbage, carrot, mustard sauce.", opts: [], tags: [], image: "bangers.jpg" }
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
            // Badges
            const badges = item.tags.map(tag => `<span class="diet-icon ${tag}">${tag.toUpperCase()}</span>`).join('');
            
            // New "Exciting" Upcharge Badges
            let optionsHTML = '';
            if (item.opts && item.opts.length > 0) {
                optionsHTML = `<div class="menu-options">` + 
                    item.opts.map(opt => `<span class="option-badge">${opt}</span>`).join('') + 
                    `</div>`;
            }

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
   3. STATUS INDICATOR (OPEN/CLOSED)
   ========================================= */
function checkStatus() {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    const min = now.getMinutes();
    const time = hour + (min / 60);

    let isOpen = false;

    // HOURS LOGIC (FIXED: 21.5 = 9:30 PM, not 12.5)
    // Mon-Thu: 11:30am - 9:30pm (11.5 - 21.5)
    // Fri-Sat: 11:30am - 10:30pm (11.5 - 22.5)
    // Sun:     11:00am - 9:30pm  (11.0 - 21.5)

    if (day >= 1 && day <= 4) { 
        if (time >= 11.5 && time < 21.5) isOpen = true; 
    } else if (day === 5 || day === 6) { 
        if (time >= 11.5 && time < 22.0) isOpen = true; 
    } else { 
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
        // Auto-Detect Brunch on Weekends
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        
        if ((day === 0 || day === 6) && hour < 15) {
            switchMenu('brunch');
        } else {
            renderMenu();
        }
    }
});
