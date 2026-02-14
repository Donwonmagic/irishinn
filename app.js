/* MASTER APP.JS - THE IRISH INN AT GLEN ECHO
   Contains logic for: Global Nav, Menu System, Live Status, and Event Forms.
*/

// --- GLOBAL VARIABLES ---
let currentMenu = 'allday';
let activeFilters = []; // Stores selected tags: ['gf', 'df', 'nf', 'v']

// --- MENU DATA BANK ---
const MENUS = {
    allday: [
        {
            id: "small-plates",
            title: "Small Plates & Starters",
            items: [
                { name: "Potato Leek Soup", price: 11, desc: "Classic creamy potato and leek soup.", img: "", tags: ["gf", "nf"] },
                { name: "Hummus", price: 13, desc: "Pita, cucumbers, cherry tomatoes & olives.", img: "", tags: ["df", "nf", "v"] },
                { name: "Mediterranean Platter", price: 20, desc: "Hummus, braised peppers, eggplant fritter, tomato jam, pesto, mozz.", img: "", tags: ["nf", "v"] },
                { name: "Chicken Quesadilla", price: 19, desc: "Tomato compote, melted cheese, pico, sour cream, guacamole.", img: "", tags: [] },
                { name: "Mussels & Clams", price: 21, desc: "Tomato, white wine, garlic & shallot broth. Garlic bread.", img: "", tags: ["gf", "df", "nf"] },
                { name: "Popcorn Shrimp", price: 16, desc: "Deep-fried shrimp, cherry pepper sauce.", img: "", tags: [] },
                { name: "Chicken Wings", price: 15, desc: "Buffalo, BBQ, Old Bay, Sweet Chili, or Hot Honey.", img: "", tags: ["gf", "nf"] },
                { name: "Irish Tots", price: 14, desc: "Melted Irish cheddar, corned beef, aioli.", img: "", tags: ["gf", "nf"] },
                { name: "Semolina Fried Calamari", price: 18, desc: "Lightly fried semolina-battered calamari with cherry pepper sauce.", img: "", tags: ["df", "nf"] },
                { name: "Crab & Artichoke Dip", price: 19, desc: "Fresh crab meat blended with artichoke, cream cheese & Parmesan.", img: "", tags: ["gf", "nf"] }
            ]
        },
        {
            id: "salads",
            title: "Salads",
            items: [
                { name: "Apple & Pomegranate", price: 16, desc: "Goat cheese, walnuts, spinach, champagne vin.", img: "", tags: ["gf", "v"] },
                { name: "Classic Caesar", price: 14, desc: "Romaine, parmesan, croutons.", img: "", tags: ["nf"] },
                { name: "Irish Greens", price: 14, desc: "Cucumber, carrot, watermelon radish, Irish mustard vin.", img: "", tags: ["gf", "df", "nf", "v"] },
                { name: "Greens & Grains", price: 19, desc: "Spinach, quinoa, feta, hummus, avocado.", img: "", tags: ["v", "gf"] }
            ]
        },
        {
            id: "handhelds",
            title: "Handhelds (GF Bun Available +$2)",
            items: [
                { name: "Crab Cake Sandwich", price: "M.P.", desc: "Pan-seared Maryland crab cake, lettuce, tomato, brioche.", img: "", tags: ["nf"] },
                { name: "Ahi Tuna Sandwich", price: 24, desc: "Seared ahi tuna, avocado, wasabi aioli, multigrain.", img: "", tags: ["df", "nf"] },
                { name: "The Reuben", price: 20, desc: "House-cured corned beef, coleslaw, Swiss, rye.", img: "reuben.jpg", tags: ["nf"] },
                { name: "Short Rib Sandwich", price: 20, desc: "Braised short rib, swiss, brioche.", img: "", tags: ["nf"] },
                { name: "Irish Cheeseburger", price: 20, desc: "Angus beef, Irish cheddar, lettuce, tomato.", img: "", tags: ["nf"] },
                { name: "Beyond Burger", price: 20, desc: "Plant-based burger, guacamole.", img: "", tags: ["df", "nf", "v"] },
                { name: "Fish Tacos", price: 22, desc: "Blackened tilapia, pepper slaw.", img: "", tags: ["gf", "df", "nf"] }
            ]
        },
        {
            id: "signatures",
            title: "Irish Signatures",
            items: [
                { name: "Shepherd's Pie", price: 21, desc: "Ground beef, peas, carrots, Jameson gravy.", img: "", tags: ["gf", "nf"] },
                { name: "Fish and Chips", price: 24, desc: "Guinness-battered cod, fries, coleslaw.", img: "", tags: ["df", "nf"] },
                { name: "Banger Plate", price: 22, desc: "Pork sausages, mash, cabbage, mustard sauce.", img: "", tags: ["nf"] },
                { name: "Corned Beef & Cabbage", price: 24, desc: "Slow-braised corned beef, red potatoes, carrots, mustard sauce.", img: "corned_beef.jpg", tags: ["gf", "df", "nf"] },
                { name: "Chicken Pot Pie", price: 24, desc: "Creamy sauce, flaky pastry crust.", img: "", tags: ["nf"] },
                { name: "Coconut Curry", price: 24, desc: "Chickpeas, cauliflower, jasmine rice.", img: "", tags: ["gf", "df", "nf", "v"] },
                { name: "Shrimp, Scallop & Grits", price: 26, desc: "Shrimp & scallops over cheddar grits, andouille sausage.", img: "", tags: ["gf", "nf"] }
            ]
        },
        {
            id: "entrees",
            title: "Main Entrées",
            items: [
                { name: "Seafood Stew", price: 34, desc: "Shrimp, scallops, mussels, fish, fennel broth.", img: "", tags: ["gf", "df", "nf"] },
                { name: "Crab Cake Entrée", price: "M.P.", desc: "Mashed potatoes, veg, tartar.", img: "", tags: ["nf"] },
                { name: "Roasted Salmon", price: "M.P.", desc: "Rice pilaf, lemon caper beurre blanc.", img: "", tags: ["gf", "nf"] },
                { name: "Beef Stroganoff", price: 34, desc: "Beef tips, mushrooms, egg noodles, Guinness gravy.", img: "", tags: ["nf"] },
                { name: "Short Rib", price: 32, desc: "Slow-braised, Guinness gravy, cheddar grits.", img: "", tags: ["gf", "nf"] },
                { name: "Rack of Lamb", price: 38, desc: "Herb-crusted, fingerling potatoes, port reduction.", img: "", tags: ["nf"] },
                { name: "NY Strip Steak", price: 34, desc: "Fries, peppercorn sauce.", img: "", tags: ["gf", "nf"] }
            ]
        }
    ],
    brunch: [
        {
            id: "brunch-specials",
            title: "Brunch Specials",
            items: [
                { name: "Full Irish Breakfast", price: 22, desc: "Two eggs, bangers, rashers, black & white pudding, mushrooms, tomato, beans, toast.", img: "", tags: ["nf"] },
                { name: "Corned Beef Hash", price: 19, desc: "House-made corned beef, potatoes, onions, poached eggs.", img: "corned_beef.jpg", tags: ["gf", "df", "nf"] },
                { name: "Eggs Benedict", price: 18, desc: "Poached eggs, Canadian bacon, hollandaise, English muffin.", img: "", tags: ["nf"] },
                { name: "Smoked Salmon Plate", price: 20, desc: "Capers, onions, tomato, cream cheese, brown bread.", img: "", tags: ["nf"] },
                { name: "Brioche French Toast", price: 16, desc: "Berries, maple syrup, whipped cream.", img: "", tags: ["v", "nf"] }
            ]
        },
        {
            id: "brunch-lunch",
            title: "Lunch Favorites (Available during Brunch)",
            items: [
                { name: "The Reuben", price: 20, desc: "Corned beef, swiss, coleslaw, rye.", img: "reuben.jpg", tags: ["nf"] },
                { name: "Classic Caesar", price: 14, desc: "Romaine, parmesan, croutons.", img: "", tags: ["nf"] },
                { name: "Fish & Chips", price: 24, desc: "Guinness-battered cod, fries, coleslaw.", img: "", tags: ["df", "nf"] },
                { name: "Irish Cheeseburger", price: 20, desc: "Angus beef, Irish cheddar.", img: "", tags: ["nf"] }
            ]
        }
    ]
};

// --- CORE FUNCTIONS ---

// 1. Toggle Dietary Filters
window.toggleFilter = function(tag) {
    const btn = document.getElementById(`btn-${tag}`);
    
    // Toggle state in array
    if (activeFilters.includes(tag)) {
        activeFilters = activeFilters.filter(f => f !== tag);
        btn.classList.remove('active');
    } else {
        activeFilters.push(tag);
        btn.classList.add('active');
    }
    
    // Refresh the view
    renderMenu(currentMenu);
};

// 2. Switch Menu Modes (All Day vs Brunch)
window.switchMenu = function(menuType) {
    currentMenu = menuType;
    
    // Visual Update for Buttons
    document.querySelectorAll('.menu-switch-btn').forEach(btn => btn.classList.remove('active'));
    
    if(menuType === 'allday') {
        const btn = document.querySelector('button[onclick="switchMenu(\'allday\')"]');
        if(btn) btn.classList.add('active');
    }
    if(menuType === 'brunch') {
        const btn = document.querySelector('button[onclick="switchMenu(\'brunch\')"]');
        if(btn) btn.classList.add('active');
    }

    renderMenu(menuType);
};

// 3. Render the Grid
function renderMenu(menuType) {
    const content = document.getElementById('menu-content');
    const navList = document.getElementById('category-nav');
    
    // Safety check: if we aren't on the menu page, stop.
    if (!content || !navList) return;

    const data = MENUS[menuType];
    content.innerHTML = '';
    navList.innerHTML = '';

    let hasVisibleItems = false;

    data.forEach(section => {
        // FILTERING LOGIC: Item must match ALL active tags
        const visibleItems = section.items.filter(item => {
            if (activeFilters.length === 0) return true;
            return activeFilters.every(filter => item.tags.includes(filter));
        });

        if (visibleItems.length > 0) {
            hasVisibleItems = true;

            // A. Populate Sticky Nav
            const li = document.createElement('li');
            li.textContent = section.title.split(' ')[0]; // Shorten title
            if(section.id === 'brunch-specials') li.textContent = "Specials";
            if(section.id === 'brunch-lunch') li.textContent = "Lunch";
            li.onclick = () => document.getElementById(section.id).scrollIntoView({behavior: "smooth", block: "start"});
            navList.appendChild(li);

            // B. Build Section HTML
            const sectionDiv = document.createElement('section');
            sectionDiv.id = section.id;
            sectionDiv.className = 'menu-section';
            sectionDiv.innerHTML = `<h3>${section.title}</h3>`;
            
            const grid = document.createElement('div');
            grid.className = 'menu-grid';

            visibleItems.forEach(item => {
                // Generate badges
                const labels = { 'gf': 'GF', 'df': 'DF', 'nf': 'NF', 'v': 'Veg' };
                const iconsHtml = item.tags
                    .filter(t => labels[t])
                    .map(t => `<span class="diet-icon ${t}">${labels[t]}</span>`)
                    .join('');

                const bgStyle = item.img ? `background-image: url('${item.img}');` : `background-color: #f8f8f8;`;
                
                grid.innerHTML += `
                    <div class="menu-item">
                        <div class="item-thumb" style="${bgStyle}"></div>
                        <div class="item-details">
                            <div class="item-head">
                                <span>${item.name}</span>
                                <span>${typeof item.price === 'number' ? '$'+item.price : item.price}</span>
                            </div>
                            <div class="item-desc">${item.desc}</div>
                            <div class="item-icons">${iconsHtml}</div>
                        </div>
                    </div>
                `;
            });

            sectionDiv.appendChild(grid);
            content.appendChild(sectionDiv);
        }
    });

    // Empty State Handling
    if (!hasVisibleItems) {
        content.innerHTML = `
            <div class="text-center" style="padding: 4rem; grid-column: 1/-1;">
                <h3>No items match your filters.</h3>
                <p>Try removing some dietary restrictions to see more options.</p>
                <button onclick="activeFilters=[]; renderMenu('${menuType}'); document.querySelectorAll('.allergen-btn').forEach(b=>b.classList.remove('active'))" 
                        style="margin-top:1rem; padding:10px 20px; cursor:pointer; background:var(--green-dark); color:white; border:none;">
                    Clear Filters
                </button>
            </div>`;
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Footer Year
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Live Status Logic (Open/Closed)
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    
    if (statusDot) {
        const now = new Date();
        const day = now.getDay(); // 0=Sun, 6=Sat
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const timeFloat = hour + (minutes / 60);

        // Hours: 11am to 10pm daily
        let isOpen = false;
        let statusMsg = "Closed (Opens 11am)";

        if (timeFloat >= 11 && timeFloat < 22) {
            isOpen = true;
            statusMsg = "Open Now";
            // Brunch Check: Sat/Sun 11am-2:30pm
            if ((day === 0 || day === 6) && timeFloat < 14.5) {
                statusMsg = "Serving Brunch Now";
            }
        }

        if (isOpen) {
            statusDot.style.background = '#4caf50'; // Green
            statusText.textContent = statusMsg;
        } else {
            statusDot.style.background = '#f44336'; // Red
            statusText.textContent = statusMsg;
        }
    }

    // 3. Mobile Hamburger Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    if(menuBtn){
        menuBtn.addEventListener('click', () => {
            mobileDropdown.classList.toggle('active');
        });
    }

    // 4. Events Page Form Handling
    const eventForm = document.querySelector('.event-form');
    if (eventForm) {
        eventForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload
            // In a real site, this would send data to a server.
            // For now, we show a success message.
            const btn = eventForm.querySelector('.btn-submit');
            const originalText = btn.textContent;
            
            btn.textContent = "Request Sent! ✓";
            btn.style.backgroundColor = "#4caf50";
            btn.disabled = true;

            setTimeout(() => {
                eventForm.reset();
                btn.textContent = originalText;
                btn.style.backgroundColor = ""; // Reset to CSS default
                btn.disabled = false;
                alert("Thank you! Your event inquiry has been sent. We will contact you shortly.");
            }, 1000);
        });
    }

    // 5. Menu Page Initialization
    // Check if we are on the menu page by looking for the content container
    if(document.getElementById('menu-content')) {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        
        // Smart Default: If it's Sat/Sun between 11am and 3pm, show Brunch first.
        if ((day === 0 || day === 6) && (hour >= 11 && hour < 15)) {
            switchMenu('brunch');
        } else {
            switchMenu('allday');
        }
    }
});
