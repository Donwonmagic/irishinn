document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DYNAMIC YEAR & OPEN STATUS ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    
    if (statusDot) {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 6 = Saturday
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const timeFloat = hour + (minutes / 60);

        // Logic: 
        // Brunch: Sat/Sun 11:00 - 14:30
        // Dinner/Reg: Daily 11:00 - 22:00
        
        let isOpen = false;
        let statusMsg = "Closed (Opens 11am)";

        if (timeFloat >= 11 && timeFloat < 22) {
            isOpen = true;
            statusMsg = "Open Now";
            // Check for Brunch Specifics
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

    // --- 2. MOBILE MENU TOGGLE ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    if(menuBtn){
        menuBtn.addEventListener('click', () => {
            mobileDropdown.classList.toggle('active');
        });
    }

    // --- 3. MENU SYSTEM ---
    const menuContainer = document.getElementById('menu-content');
    
    if (menuContainer) {
        
        // --- DATA BANK ---
        const menuData = [
            {
                category: "brunch",
                title: "Weekend Brunch (Sat & Sun 11am-2:30pm)",
                items: [
                    // PLACEHOLDERS - PLEASE UPDATE WITH REAL ITEMS
                    { name: "Full Irish Breakfast", price: 22, desc: "Two eggs, bangers, rashers, black & white pudding, mushrooms, tomato, beans, toast.", img: "", tags: [] },
                    { name: "Corned Beef Hash", price: 19, desc: "House-made corned beef, potatoes, onions, poached eggs.", img: "corned_beef.jpg", tags: ["gf"] },
                    { name: "Eggs Benedict", price: 18, desc: "Poached eggs, Canadian bacon, hollandaise, English muffin.", img: "", tags: [] },
                    { name: "Smoked Salmon Plate", price: 20, desc: "Capers, onions, tomato, cream cheese, brown bread.", img: "", tags: [] },
                    { name: "Brioche French Toast", price: 16, desc: "Berries, maple syrup, whipped cream.", img: "", tags: ["v"] }
                ]
            },
            {
                category: "small-plates",
                title: "Small Plates & Starters",
                items: [
                    { name: "Potato Leek Soup", price: 11, desc: "Classic creamy potato and leek soup.", img: "", tags: ["gf", "v"] },
                    { name: "Hummus", price: 13, desc: "Pita, cucumbers, cherry tomatoes & olives.", img: "", tags: ["v"] },
                    { name: "Mediterranean Platter", price: 20, desc: "Hummus, braised peppers, eggplant fritter, tomato jam, pesto, mozz.", img: "", tags: ["v"] },
                    { name: "Chicken Quesadilla", price: 19, desc: "Tomato compote, melted cheese, pico, sour cream, guacamole.", img: "", tags: [] },
                    { name: "Mussels & Clams", price: 21, desc: "Tomato, white wine, garlic & shallot broth. Garlic bread.", img: "", tags: [] },
                    { name: "Popcorn Shrimp", price: 16, desc: "Deep-fried shrimp, cherry pepper sauce.", img: "", tags: [] },
                    { name: "Wings", price: 15, desc: "Buffalo, BBQ, Old Bay, or Sweet Chili.", img: "", tags: ["gf"] },
                    { name: "Irish Tots", price: 14, desc: "Melted Irish cheddar, corned beef, aioli.", img: "", tags: [] },
                    { name: "Calamari", price: 18, desc: "Semolina fried, cherry pepper sauce.", img: "", tags: [] }
                ]
            },
            {
                category: "salads",
                title: "Salads",
                items: [
                    { name: "Apple & Pomegranate", price: 16, desc: "Goat cheese, walnuts, spinach, champagne vin.", img: "", tags: ["gf", "v"] },
                    { name: "Classic Caesar", price: 14, desc: "Romaine, parmesan, croutons.", img: "", tags: [] },
                    { name: "Irish Greens", price: 14, desc: "Cucumber, carrot, watermelon radish, Irish mustard vin.", img: "", tags: ["gf", "v"] },
                    { name: "Greens & Grains", price: 19, desc: "Spinach, quinoa, feta, hummus, avocado.", img: "", tags: ["v", "gf"] }
                ]
            },
            {
                category: "handhelds",
                title: "Handhelds",
                items: [
                    { name: "Crab Cake Sandwich", price: "M.P.", desc: "Pan-seared, lettuce, tomato, brioche.", img: "", tags: [] },
                    { name: "Ahi Tuna Sandwich", price: 24, desc: "Seared tuna, avocado, wasabi aioli.", img: "", tags: [] },
                    { name: "The Reuben", price: 20, desc: "Corned beef, swiss, coleslaw, rye.", img: "reuben.jpg", tags: [] },
                    { name: "Short Rib Sandwich", price: 20, desc: "Braised rib, swiss, brioche.", img: "", tags: [] },
                    { name: "Irish Cheeseburger", price: 20, desc: "Angus beef, Dubliner cheddar.", img: "", tags: [] },
                    { name: "Beyond Burger", price: 20, desc: "Guacamole, 1000 island.", img: "", tags: ["v", "gf"] },
                    { name: "Fish Tacos", price: 22, desc: "Blackened tilapia, pepper slaw.", img: "", tags: ["gf"] }
                ]
            },
            {
                category: "signatures",
                title: "Irish Signatures",
                items: [
                    { name: "Shepherd's Pie", price: 21, desc: "Ground beef, peas, carrots, Jameson gravy.", img: "", tags: ["gf"] },
                    { name: "Fish & Chips", price: 24, desc: "Guinness-battered cod, fries, coleslaw.", img: "", tags: [] },
                    { name: "Banger Plate", price: 22, desc: "Pork sausages, mash, cabbage, mustard sauce.", img: "", tags: [] },
                    { name: "Corned Beef & Cabbage", price: 24, desc: "Slow-braised, red potatoes, carrots, mustard sauce.", img: "corned_beef.jpg", tags: ["gf"] },
                    { name: "Chicken Pot Pie", price: 24, desc: "Creamy sauce, flaky crust.", img: "", tags: [] },
                    { name: "Coconut Curry", price: 24, desc: "Chickpeas, cauliflower, jasmine rice.", img: "", tags: ["v", "gf"] },
                    { name: "Shrimp & Grits", price: 26, desc: "Scallops, shrimp, cheddar grits, andouille.", img: "", tags: ["gf"] }
                ]
            },
            {
                category: "entrees",
                title: "Entrées",
                items: [
                    { name: "Seafood Stew", price: 34, desc: "Shrimp, scallops, mussels, fish, fennel broth.", img: "", tags: ["gf"] },
                    { name: "Crab Cake Entrée", price: "M.P.", desc: "Mashed potatoes, veg, tartar.", img: "", tags: [] },
                    { name: "Roasted Salmon", price: "M.P.", desc: "Rice pilaf, lemon caper beurre blanc.", img: "", tags: ["gf"] },
                    { name: "Beef Stroganoff", price: 34, desc: "Beef tips, mushrooms, egg noodles, Guinness gravy.", img: "", tags: [] },
                    { name: "Rack of Lamb", price: 38, desc: "Herb-crusted, fingerling potatoes, port reduction.", img: "", tags: [] },
                    { name: "NY Strip Steak", price: 34, desc: "Fries, peppercorn sauce.", img: "", tags: ["gf"] }
                ]
            }
        ];

        // --- RENDER FUNCTION ---
        function renderMenu(filterType = 'all') {
            menuContainer.innerHTML = '';
            
            menuData.forEach(section => {
                // If filtering by "Brunch", only show brunch.
                // If filtering by "All" or others, HIDE brunch unless explicitly requested?
                // LOGIC: "All" should typically imply the All-Day menu. Brunch is separate.
                
                let shouldRender = false;

                if (filterType === 'brunch') {
                    if (section.category === 'brunch') shouldRender = true;
                } else if (filterType === 'all') {
                    if (section.category !== 'brunch') shouldRender = true;
                } else {
                    // Category or Tag filter
                    // 1. Is it a category match? (e.g. "salads")
                    if (section.category === filterType) shouldRender = true;
                    // 2. Or does it have items with this tag? (e.g. "gf")
                    // If we are in "GF" mode, we search ALL sections INCLUDING Brunch? 
                    // Let's exclude brunch from "GF" toggle to keep it simple, or include it.
                    // For now: Include if category matches OR if we are doing tag filtering on non-brunch items.
                }

                // Tag Filtering Logic (GF / Veg)
                let filteredItems = section.items;
                if (['gf', 'v'].includes(filterType)) {
                    // If we are filtering tags, search everywhere EXCEPT Brunch (unless we want to mix)
                    // Let's search everywhere.
                    if (section.category !== 'brunch') {
                         filteredItems = section.items.filter(item => item.tags.includes(filterType));
                         if (filteredItems.length > 0) shouldRender = true;
                    }
                }

                if (shouldRender) {
                    const sectionDiv = document.createElement('section');
                    sectionDiv.id = section.category;
                    sectionDiv.className = 'menu-section';
                    
                    // Add Title
                    sectionDiv.innerHTML = `<h3 style="color:var(--gold); margin-bottom:1rem; border-bottom:1px solid #eee; padding-bottom:5px;">${section.title}</h3>`;
                    
                    const grid = document.createElement('div');
                    grid.className = 'menu-grid';

                    filteredItems.forEach(item => {
                        const tagsHtml = item.tags.map(tag => `<span class="tag ${tag}">${tag.toUpperCase()}</span>`).join('');
                        const bgImg = item.img ? `background-image: url('${item.img}')` : `background-color:#eee`;
                        
                        grid.innerHTML += `
                            <div class="menu-item">
                                <div class="item-thumb" style="${bgImg}"></div>
                                <div class="item-details">
                                    <div class="item-head">
                                        <span>${item.name}</span>
                                        <span>${typeof item.price === 'number' ? '$'+item.price : item.price}</span>
                                    </div>
                                    <div class="item-desc">${item.desc}</div>
                                    <div style="margin-top:5px;">${tagsHtml}</div>
                                </div>
                            </div>
                        `;
                    });
                    
                    sectionDiv.appendChild(grid);
                    menuContainer.appendChild(sectionDiv);
                }
            });
        }

        // --- SMART STARTUP LOGIC ---
        // Detect if it is currently Brunch Time
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const timeFloat = hour + (minutes / 60);

        const isBrunchTime = (day === 0 || day === 6) && (timeFloat >= 11 && timeFloat < 14.5);

        if (isBrunchTime) {
            // Auto-select Brunch
            document.querySelectorAll('.category-list li').forEach(l => l.classList.remove('active'));
            const brunchTab = document.getElementById('brunch-tab');
            if(brunchTab) brunchTab.classList.add('active');
            renderMenu('brunch');
        } else {
            // Default to All Day
            renderMenu('all');
        }

        // --- EVENTS ---
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.category-list li').forEach(l => l.classList.remove('active')); // Deselect cats
                e.target.classList.add('active');
                renderMenu(e.target.dataset.filter);
            });
        });

        document.querySelectorAll('.category-list li').forEach(li => {
            li.addEventListener('click', () => {
                document.querySelectorAll('.category-list li').forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active')); // Deselect tags
                li.classList.add('active');
                
                const target = li.getAttribute('data-target');
                
                // If they clicked Brunch, just render brunch. 
                // If they clicked a category, we might want to scroll to it OR filter by it.
                // Current logic: Filter by it.
                renderMenu(target);
                
                // Optional: Scroll to top of menu container
                window.scrollTo({
                    top: menuContainer.offsetTop - 150,
                    behavior: 'smooth'
                });
            });
        });
    }
});
