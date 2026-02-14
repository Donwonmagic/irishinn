/* =========================================
   DATA: THE 2025 MENUS (Verified)
   ========================================= */
const MENUS = {
    allday: [
        /* --- SMALL PLATES --- */
        {
            category: "Small Plates",
            name: "Soup du Jour",
            price: 14,
            description: "Chef's daily selection.",
            tags: [],
            image: "soup.jpg"
        },
        {
            category: "Small Plates",
            name: "Potato Leek Soup",
            price: 11,
            description: "A Glen Echo classic. Creamy and warming.",
            tags: ["v", "gf"],
            image: "soup_leek.jpg"
        },
        {
            category: "Small Plates",
            name: "Chicken Wings",
            price: 15,
            description: "Buffalo, BBQ, Old Bay, Sweet Chili, or Hot Honey.",
            tags: ["gf"],
            image: "wings.jpg"
        },
        {
            category: "Small Plates",
            name: "Popcorn Shrimp",
            price: 16,
            description: "Deep-fried shrimp served with cherry pepper dipping sauce.",
            tags: [],
            image: "shrimp.jpg"
        },
        {
            category: "Small Plates",
            name: "Irish Tots",
            price: 14,
            description: "Crispy tater tots topped with melted Irish cheddar & corned beef brisket.",
            tags: [],
            image: "tots.jpg"
        },
        {
            category: "Small Plates",
            name: "Semolina Fried Calamari",
            price: 18,
            description: "Lightly fried semolina-battered calamari with cherry pepper sauce.",
            tags: [],
            image: "calamari.jpg"
        },
        {
            category: "Small Plates",
            name: "Caprese Flatbread",
            price: 18,
            description: "Spinach, pesto, roasted cherry tomato, parmesan & balsamic glaze.",
            tags: ["v"],
            image: "flatbread.jpg"
        },
        {
            category: "Small Plates",
            name: "Crab & Artichoke Dip",
            price: 19,
            description: "Fresh crab meat, artichoke, cream cheese & parmesan. Served with warm pita.",
            tags: [],
            image: "crab_dip.jpg"
        },
        {
            category: "Small Plates",
            name: "Hummus",
            price: 13,
            description: "Creamy hummus with pita, cucumbers, cherry tomato & olives.",
            tags: ["v", "vg"],
            image: "hummus.jpg"
        },
        {
            category: "Small Plates",
            name: "Deviled Eggs",
            price: 12,
            description: "Topped with smoked salmon, tomato, caper & red onion.",
            tags: ["gf"],
            image: "eggs.jpg"
        },
        {
            category: "Small Plates",
            name: "Mediterranean Platter",
            price: 20,
            description: "Hummus, braised peppers, eggplant fritter, tomato jam, walnut pesto, fresh mozz, pickled veg, fried pita.",
            tags: ["v"],
            image: "med_platter.jpg"
        },
        {
            category: "Small Plates",
            name: "Chicken Quesadilla",
            price: 19,
            description: "Chicken, tomato compote, melted cheese, pico de gallo, sour cream & guacamole.",
            tags: [],
            image: "quesadilla.jpg"
        },
        {
            category: "Small Plates",
            name: "Mussels & Clams",
            price: 21,
            description: "Fresh clams and PEI mussels in tomato, white wine, garlic & shallot broth.",
            tags: ["gf"],
            image: "mussels.jpg"
        },

        /* --- SALADS --- */
        {
            category: "Salads",
            name: "Apple & Pomegranate",
            price: 16,
            description: "Goat cheese, pomegranate & candied walnuts over spinach with champagne vinaigrette.",
            tags: ["v", "gf"],
            image: "salad_apple.jpg"
        },
        {
            category: "Salads",
            name: "Classic Caesar",
            price: 14,
            description: "Crisp romaine, parmesan, house-made croutons & creamy caesar dressing.",
            tags: [],
            image: "caesar.jpg"
        },
        {
            category: "Salads",
            name: "Irish Greens",
            price: 14,
            description: "Arcadian greens, tomato, cucumber, carrot, watermelon radish & Irish mustard vinaigrette.",
            tags: ["v", "vg", "gf"],
            image: "greens.jpg"
        },
        {
            category: "Salads",
            name: "Greens and Grains",
            price: 19,
            description: "Spinach & quinoa, cherry tomato, cucumber, feta, hummus & avocado. Served with pita.",
            tags: ["v"],
            image: "grains.jpg"
        },

        /* --- HANDHELDS --- */
        {
            category: "Handhelds",
            name: "Crab Cake Sandwich",
            price: "M.P.",
            description: "Pan-seared Maryland crab cake with lettuce, tomato & onion on toasted brioche.",
            tags: [],
            image: "crabcake_sand.jpg"
        },
        {
            category: "Handhelds",
            name: "Ahi Tuna Sandwich",
            price: 24,
            description: "Seared ahi tuna, avocado, lettuce, tomato & wasabi aioli on multigrain.",
            tags: [],
            image: "tuna_sand.jpg"
        },
        {
            category: "Handhelds",
            name: "Reuben",
            price: 20,
            description: "House-cured corned beef, coleslaw, swiss cheese & 1000 island on rye.",
            tags: [],
            image: "reuben.jpg"
        },
        {
            category: "Handhelds",
            name: "Short Rib Sandwich",
            price: 20,
            description: "Braised short rib, lettuce, tomato, red onion & swiss cheese on brioche.",
            tags: [],
            image: "shortrib_sand.jpg"
        },
        {
            category: "Handhelds",
            name: "Irish Cheeseburger",
            price: 20,
            description: "Grilled Angus beef, Irish cheddar, lettuce, tomato & onion on brioche.",
            tags: [],
            image: "burger.jpg"
        },
        {
            category: "Handhelds",
            name: "Beyond Burger",
            price: 20,
            description: "Plant-based burger, LTO, guacamole & 1000 island on Gluten Free bun.",
            tags: ["v", "gf"],
            image: "beyond.jpg"
        },
        {
            category: "Handhelds",
            name: "Chicken Cutlet Sandwich",
            price: 20,
            description: "Crispy fried chicken, lettuce, tomato, red onion on brioche. Try Buffalo Style!",
            tags: [],
            image: "chicken_sand.jpg"
        },
        {
            category: "Handhelds",
            name: "Fish Tacos",
            price: 22,
            description: "Blackened tilapia with pepper slaw. Sub Shrimp or Salmon (+$6).",
            tags: ["gf"],
            image: "tacos.jpg"
        },

        /* --- SIGNATURES --- */
        {
            category: "Signatures",
            name: "Shepherd's Pie",
            price: 24,
            description: "Ground beef, peas, carrots & Jameson gravy, topped with mashed potatoes. (Veg option available).",
            tags: ["gf"],
            image: "shepherds.jpg"
        },
        {
            category: "Signatures",
            name: "Fish and Chips",
            price: 24,
            description: "Guinness-battered cod with fries, coleslaw & tartar sauce.",
            tags: [],
            image: "fishchips.jpg"
        },
        {
            category: "Signatures",
            name: "Seafood Stew",
            price: 34,
            description: "Shrimp, scallops, mussels & fish in white wine & herb broth with fennel & garlic bread.",
            tags: [],
            image: "seafood_stew.jpg"
        },
        {
            category: "Signatures",
            name: "Beef Stroganoff",
            price: 34,
            description: "Beef tips sautéed with mushrooms over egg noodles in rich Guinness gravy with sour cream.",
            tags: [],
            image: "stroganoff.jpg"
        },
        {
            category: "Signatures",
            name: "Short Rib",
            price: 32,
            description: "Slow-braised short rib in Guinness gravy with veg of the day & cheddar grits.",
            tags: [],
            image: "shortrib_main.jpg"
        },
        {
            category: "Signatures",
            name: "Rack of Lamb",
            price: 38,
            description: "Herb-crusted with roasted fingerling potatoes, creamed spinach & port wine reduction.",
            tags: [],
            image: "lamb.jpg"
        },
        {
            category: "Signatures",
            name: "NY Strip Steak",
            price: 34,
            description: "Grilled strip with french fries, veg of the day & peppercorn sauce.",
            tags: ["gf"],
            image: "steak.jpg"
        },
        {
            category: "Signatures",
            name: "Corned Beef and Cabbage",
            price: 24,
            description: "Slow-braised corned beef, mashed red potatoes, cabbage, carrot & Irish mustard sauce.",
            tags: ["gf"],
            image: "corned_beef.jpg"
        },
        {
            category: "Signatures",
            name: "Chicken Pot Pie",
            price: 24,
            description: "Chicken breast, peas & root vegetables in creamy sauce under flaky pastry crust.",
            tags: [],
            image: "potpie.jpg"
        },
        {
            category: "Signatures",
            name: "Coconut Curry",
            price: 24,
            description: "Chickpeas, cauliflower, bell pepper & fingerling potatoes in coconut curry with jasmine rice.",
            tags: ["v", "vg", "gf"],
            image: "curry.jpg"
        },
        {
            category: "Signatures",
            name: "Shrimp, Scallop & Grits",
            price: 26,
            description: "Served over cheddar grits and tomato concasse with andouille sausage.",
            tags: ["gf"],
            image: "shrimp_grits.jpg"
        }
    ],

    /* --- BRUNCH (Weekends) --- */
    brunch: [
        {
            category: "Brunch Starters",
            name: "Irish Pancake Breakfast",
            price: 18,
            description: "Two eggs, bacon or sausage, stack of pancakes (Strawberry, Nutella, or Maple).",
            tags: [],
            image: "pancakes.jpg"
        },
        {
            category: "Brunch Starters",
            name: "Bailey's French Toast",
            price: 18,
            description: "Rich French toast infused with Bailey's Irish Cream. Served with eggs & meat.",
            tags: [],
            image: "french_toast.jpg"
        },
        {
            category: "Brunch Mains",
            name: "Traditional Irish Breakfast",
            price: 20,
            description: "Irish sausage, black & white puddings, rashers, tomatoes, beans, toast, two eggs.",
            tags: [],
            image: "full_irish.jpg"
        },
        {
            category: "Brunch Mains",
            name: "Corned Beef Hash",
            price: 24,
            description: "Beef mixed with peppers and roasted potatoes, topped with two eggs.",
            tags: ["gf"],
            image: "hash.jpg"
        },
        {
            category: "Brunch Mains",
            name: "Eggs Benedict",
            price: 20,
            description: "Choice of Smoked Salmon, Irish Rashers, or Sausage Patty. With roasted potatoes.",
            tags: [],
            image: "benedict.jpg"
        },
        {
            category: "Brunch Mains",
            name: "Steak and Eggs",
            price: 28,
            description: "6 oz flat iron steak, two eggs any style, seasonal veg, blue cheese butter.",
            tags: ["gf"],
            image: "steak_eggs.jpg"
        },
        {
            category: "Brunch Mains",
            name: "Dubliner Scrambled Eggs",
            price: 25,
            description: "Smoked salmon scrambled with cream cheese and chives. Served with roasted potatoes.",
            tags: ["gf"],
            image: "scramble.jpg"
        },
        {
            category: "Brunch Mains",
            name: "Crispy Fish Sandwich",
            price: 20,
            description: "Fried cod on brioche, tangy tartar sauce, creamy coleslaw.",
            tags: [],
            image: "fish_sand.jpg"
        }
    ]
};

/* =========================================
   LOGIC: RENDER MENU, TABS & FILTERS
   ========================================= */

// STATE
let activeMenu = 'allday'; // 'allday' or 'brunch'
let activeFilters = [];    // ['gf', 'v', etc.]

// DOM ELEMENTS
const menuContainer = document.getElementById('menu-container');
const categoryList = document.getElementById('category-list');
const switchBtns = document.querySelectorAll('.menu-switch-btn');
const filterBtns = document.querySelectorAll('.allergen-btn');

/* --- 1. INITIALIZE --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // Auto-Select Brunch on Weekends (Sat/Sun before 3pm)
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 6=Sat
    const hour = now.getHours();
    
    // Logic: If Sat/Sun and before 3pm, show Brunch default
    if ((day === 0 || day === 6) && hour < 15) {
        switchMenu('brunch');
    } else {
        renderMenu(); // Default to All-Day
    }
});

/* --- 2. SWITCH MENU (All Day vs Brunch) --- */
function switchMenu(menuType) {
    activeMenu = menuType;
    activeFilters = []; // Reset filters when switching

    // Update Buttons
    switchBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.menu === menuType) btn.classList.add('active');
    });

    // Reset Filter UI
    filterBtns.forEach(btn => btn.classList.remove('active'));

    renderMenu();
}

/* --- 3. TOGGLE FILTERS (GF, V, etc.) --- */
function toggleFilter(tag) {
    if (activeFilters.includes(tag)) {
        activeFilters = activeFilters.filter(t => t !== tag); // Remove
    } else {
        activeFilters.push(tag); // Add
    }

    // Update UI
    filterBtns.forEach(btn => {
        if (activeFilters.includes(btn.dataset.tag)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderMenu();
}

/* --- 4. RENDER MENU (The Core Logic) --- */
function renderMenu() {
    const data = MENUS[activeMenu];
    
    // 1. Get Categories
    const categories = [...new Set(data.map(item => item.category))];
    
    // 2. Render Categories (Sticky Nav)
    // We only redraw categories if they change, but for simplicity, we redraw all.
    let catHTML = `<li class="active" onclick="scrollToSection('top')">ALL</li>`;
    categories.forEach(cat => {
        // Create a "slug" for the ID (e.g. "Small Plates" -> "small-plates")
        const slug = cat.toLowerCase().replace(/\s+/g, '-');
        catHTML += `<li onclick="scrollToSection('${slug}')">${cat}</li>`;
    });
    // Only update category list if it exists (on menu page)
    if (categoryList) {
        categoryList.innerHTML = catHTML;
    }

    // 3. Render Items Grouped by Category
    let gridHTML = '';
    
    categories.forEach(cat => {
        // Filter items for this category
        let items = data.filter(item => item.category === cat);

        // APPLY ALLERGEN FILTERS
        if (activeFilters.length > 0) {
            items = items.filter(item => {
                // Item must match ALL active filters (AND logic)
                return activeFilters.every(filter => item.tags.includes(filter));
            });
        }

        // If no items match in this category, skip rendering the header
        if (items.length === 0) return;

        const slug = cat.toLowerCase().replace(/\s+/g, '-');

        gridHTML += `
        <div class="menu-section" id="${slug}">
            <h3>${cat}</h3>
            <div class="menu-grid">
        `;

        items.forEach(item => {
            // Generate Badges
            const badges = item.tags.map(tag => {
                let label = tag.toUpperCase();
                return `<span class="diet-icon ${tag}">${label}</span>`;
            }).join('');
            
            // Generate Price (Handle "M.P." string vs Number)
            const priceDisplay = typeof item.price === 'number' ? `$${item.price}` : item.price;

            gridHTML += `
            <div class="menu-item">
                <div class="item-details">
                    <div class="item-head">
                        <span>${item.name}</span>
                        <span>${priceDisplay}</span>
                    </div>
                    <div class="item-desc">${item.description}</div>
                    <div class="item-icons">${badges}</div>
                </div>
            </div>
            `;
        });

        gridHTML += `</div></div>`; // Close grid and section
    });

    // Handle Empty State
    if (gridHTML === '') {
        gridHTML = `<div class="text-center" style="padding:4rem;">
            <h3>No items match these filters.</h3>
            <p>Try removing some filters to see more delicious options.</p>
        </div>`;
    }

    // Only update grid if it exists
    if (menuContainer) {
        menuContainer.innerHTML = gridHTML;
    }
    
    // Update "ScrollSpy" logic (highlights category as you scroll)
    updateScrollSpy();
}

/* --- 5. UTILITIES --- */
function scrollToSection(id) {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const el = document.getElementById(id);
        if (el) {
            // Offset for sticky header
            const headerOffset = 180; 
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
}

function updateScrollSpy() {
    // Add scroll event listener to highlight active category
    const listItems = document.querySelectorAll('.category-list li');
    
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            listItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Global Event Listeners for HTML onClick
window.switchMenu = switchMenu;
window.toggleFilter = toggleFilter;
window.scrollToSection = scrollToSection;

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}
window.toggleMobileMenu = toggleMobileMenu;

/* =========================================
   FEATURE: LIVE STATUS INDICATOR (Open/Closed)
   ========================================= */
function checkStatus() {
    const now = new Date();
    const day = now.getDay(); // 0=Sun, 1=Mon, etc.
    const hour = now.getHours();
    const min = now.getMinutes();
    const time = hour + (min / 60); // Convert time to decimal (e.g. 11:30 = 11.5)

    let isOpen = false;

    // HOURS LOGIC:
    // Mon-Thu: 11:30am - 9:30pm (11.5 - 21.5)
    // Fri-Sat: 11:30am - 10:30pm (11.5 - 22.5)
    // Sun:     11:00am - 9:30pm  (11.0 - 21.5)

    if (day >= 1 && day <= 4) { 
        // Monday - Thursday
        if (time >= 11.5 && time < 21.5) isOpen = true;
    } else if (day === 5 || day === 6) { 
        // Friday - Saturday
        if (time >= 11.5 && time < 22.5) isOpen = true;
    } else { 
        // Sunday
        if (time >= 11.0 && time < 21.5) isOpen = true;
    }

    // UPDATE THE DOM
    const dot = document.getElementById('status-dot');
    const text = document.getElementById('status-text');

    if (dot && text) {
        if (isOpen) {
            dot.style.background = '#2ecc71'; // Bright Green
            dot.style.boxShadow = '0 0 10px #2ecc71'; // Glowing effect
            text.innerText = 'Open Now';
            text.style.color = '#fff';
            text.style.fontWeight = 'bold';
        } else {
            dot.style.background = '#e74c3c'; // Red
            dot.style.boxShadow = 'none';
            text.innerText = 'Closed';
            text.style.color = '#ccc';
            text.style.fontWeight = 'normal';
        }
    }
}

// Run immediately on load
checkStatus();

// Check again every 60 seconds (so it updates if you leave the tab open)
setInterval(checkStatus, 60000);
