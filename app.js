document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DYNAMIC YEAR & OPEN STATUS ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    if (statusDot) {
        const hour = new Date().getHours();
        const isOpen = hour >= 11 && hour < 22; // Open 11am - 10pm
        if (isOpen) {
            statusDot.style.background = '#4caf50';
            statusText.textContent = "Open Now";
        } else {
            statusDot.style.background = '#f44336';
            statusText.textContent = "Closed (Opens 11am)";
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

    // --- 3. MENU DATA & FILTERING ---
    const menuContainer = document.getElementById('menu-content');
    if (menuContainer) {
        // DATA FROM PDFS
        const menuData = [
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

        function renderMenu(filterType = 'all') {
            menuContainer.innerHTML = '';
            menuData.forEach(section => {
                const filteredItems = section.items.filter(item => {
                    if (filterType === 'all') return true;
                    return item.tags.includes(filterType);
                });

                if (filteredItems.length > 0) {
                    const sectionDiv = document.createElement('section');
                    sectionDiv.id = section.category;
                    sectionDiv.className = 'menu-section';
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

        renderMenu();

        // Filtering
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderMenu(e.target.dataset.filter);
            });
        });

        // Jump Links
        document.querySelectorAll('.category-list li').forEach(li => {
            li.addEventListener('click', () => {
                document.querySelectorAll('.category-list li').forEach(l => l.classList.remove('active'));
                li.classList.add('active');
                const target = document.getElementById(li.dataset.target);
                if(target) target.scrollIntoView({behavior: "smooth", block: "start"});
            });
        });
    }
});
