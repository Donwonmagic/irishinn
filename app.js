// --- MASTER APP.JS ---

// GLOBAL DATA
let currentMenu = 'allday';
let activeFilters = []; 

/* --- REAL 2025 MENU DATA (Transcribed from Uploads) --- */
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

// --- LOGIC ---
window.toggleFilter = function(tag) {
    const btn = document.getElementById(`btn-${tag}`);
    if (activeFilters.includes(tag)) {
        activeFilters = activeFilters.filter(f => f !== tag);
        btn.classList.remove('active');
    } else {
        activeFilters.push(tag);
        btn.classList.add('active');
    }
    renderMenu(currentMenu);
};

window.switchMenu = function(menuType) {
    currentMenu = menuType;
    document.querySelectorAll('.menu-switch-btn').forEach(btn => btn.classList.remove('active'));
    if(menuType === 'allday') document.querySelector('button[onclick="switchMenu(\'allday\')"]').classList.add('active');
    if(menuType === 'brunch') document.querySelector('button[onclick="switchMenu(\'brunch\')"]').classList.add('active');
    renderMenu(menuType);
};

function renderMenu(menuType) {
    const content = document.getElementById('menu-content');
    const navList = document.getElementById('category-nav');
    if(!content) return;
    
    const data = MENUS[menuType];
    content.innerHTML = '';
    navList.innerHTML = '';
    
    data.forEach(section => {
        const visibleItems = section.items.filter(item => {
            if (activeFilters.length === 0) return true;
            return activeFilters.every(filter => item.tags.includes(filter));
        });

        if (visibleItems.length > 0) {
            const li = document.createElement('li');
            li.textContent = section.title.split(' ')[0];
            if(section.id === 'brunch-specials') li.textContent = "Specials";
            if(section.id === 'brunch-lunch') li.textContent = "Lunch";
            li.onclick = () => document.getElementById(section.id).scrollIntoView({behavior: "smooth", block: "start"});
            navList.appendChild(li);

            const sectionDiv = document.createElement('section');
            sectionDiv.id = section.id;
            sectionDiv.className = 'menu-section';
            sectionDiv.innerHTML = `<h3>${section.title}</h3>`;
            
            const grid = document.createElement('div');
            grid.className = 'menu-grid';

            visibleItems.forEach(item => {
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

    if (content.innerHTML === '') {
        content.innerHTML = `<div class="text-center" style="padding: 4rem;"><h3>No items match your filters.</h3><button onclick="activeFilters=[]; renderMenu('${menuType}'); document.querySelectorAll('.allergen-btn').forEach(b=>b.classList.remove('active'))" style="margin-top:1rem; padding:10px 20px; cursor:pointer;">Clear Filters</button></div>`;
    }
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    if (statusDot) {
        const now = new Date();
        const hour = now.getHours();
        const isOpen = hour >= 11 && hour < 22; 
        if (isOpen) {
            statusDot.style.background = '#4caf50'; statusText.textContent = "Open Now";
        } else {
            statusDot.style.background = '#f44336'; statusText.textContent = "Closed";
        }
    }

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    if(menuBtn) menuBtn.addEventListener('click', () => mobileDropdown.classList.toggle('active'));

    const eventForm = document.querySelector('.event-form');
    if (eventForm) {
        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = eventForm.querySelector('.btn-submit');
            btn.textContent = "Request Sent! ✓";
            btn.style.backgroundColor = "#4caf50";
            setTimeout(() => { eventForm.reset(); btn.textContent = "Submit Request"; btn.style.backgroundColor = ""; }, 2000);
        });
    }

    if(document.getElementById('menu-content')) {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        if ((day === 0 || day === 6) && (hour >= 11 && hour < 15)) {
            switchMenu('brunch');
        } else {
            switchMenu('allday');
        }
    }
});
