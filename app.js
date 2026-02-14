// DEFINE MENU DATA OUTSIDE TO KEEP IT CLEAN
const MENUS = {
    allday: [
        {
            id: "starters",
            title: "Small Plates & Starters",
            items: [
                { name: "Potato Leek Soup", price: 11, desc: "Classic creamy potato and leek soup.", img: "" },
                { name: "Hummus", price: 13, desc: "Pita, cucumbers, cherry tomatoes & olives.", img: "" },
                { name: "Mediterranean Platter", price: 20, desc: "Hummus, braised peppers, eggplant fritter, tomato jam, pesto, mozz.", img: "" },
                { name: "Mussels & Clams", price: 21, desc: "Tomato, white wine, garlic & shallot broth. Garlic bread.", img: "" },
                { name: "Wings", price: 15, desc: "Buffalo, BBQ, Old Bay, or Sweet Chili.", img: "" },
                { name: "Irish Tots", price: 14, desc: "Melted Irish cheddar, corned beef, aioli.", img: "" },
                { name: "Calamari", price: 18, desc: "Semolina fried, cherry pepper sauce.", img: "" }
            ]
        },
        {
            id: "salads",
            title: "Salads",
            items: [
                { name: "Apple & Pomegranate", price: 16, desc: "Goat cheese, walnuts, spinach, champagne vin.", img: "" },
                { name: "Classic Caesar", price: 14, desc: "Romaine, parmesan, croutons.", img: "" },
                { name: "Irish Greens", price: 14, desc: "Cucumber, carrot, watermelon radish, Irish mustard vin.", img: "" }
            ]
        },
        {
            id: "handhelds",
            title: "Handhelds",
            items: [
                { name: "The Reuben", price: 20, desc: "Corned beef, swiss, coleslaw, rye.", img: "reuben.jpg" },
                { name: "Irish Cheeseburger", price: 20, desc: "Angus beef, Dubliner cheddar.", img: "" },
                { name: "Short Rib Sandwich", price: 20, desc: "Braised rib, swiss, brioche.", img: "" },
                { name: "Fish Tacos", price: 22, desc: "Blackened tilapia, pepper slaw.", img: "" }
            ]
        },
        {
            id: "signatures",
            title: "Irish Signatures",
            items: [
                { name: "Corned Beef & Cabbage", price: 24, desc: "Slow-braised, red potatoes, carrots, mustard sauce.", img: "corned_beef.jpg" },
                { name: "Shepherd's Pie", price: 21, desc: "Ground beef, peas, carrots, Jameson gravy.", img: "" },
                { name: "Fish & Chips", price: 24, desc: "Guinness-battered cod, fries, coleslaw.", img: "" },
                { name: "Banger Plate", price: 22, desc: "Pork sausages, mash, cabbage, mustard sauce.", img: "" }
            ]
        },
        {
            id: "entrees",
            title: "Main Entrées",
            items: [
                { name: "Seafood Stew", price: 34, desc: "Shrimp, scallops, mussels, fish, fennel broth.", img: "" },
                { name: "Rack of Lamb", price: 38, desc: "Herb-crusted, fingerling potatoes, port reduction.", img: "" },
                { name: "NY Strip Steak", price: 34, desc: "Fries, peppercorn sauce.", img: "" },
                { name: "Beef Stroganoff", price: 34, desc: "Beef tips, mushrooms, egg noodles, Guinness gravy.", img: "" }
            ]
        }
    ],
    brunch: [
        {
            id: "brunch-specials",
            title: "Brunch Specials",
            items: [
                { name: "Full Irish Breakfast", price: 22, desc: "Two eggs, bangers, rashers, black & white pudding, mushrooms, tomato, beans, toast.", img: "" },
                { name: "Corned Beef Hash", price: 19, desc: "House-made corned beef, potatoes, onions, poached eggs.", img: "corned_beef.jpg" },
                { name: "Eggs Benedict", price: 18, desc: "Poached eggs, Canadian bacon, hollandaise, English muffin.", img: "" },
                { name: "Smoked Salmon Plate", price: 20, desc: "Capers, onions, tomato, cream cheese, brown bread.", img: "" },
                { name: "Brioche French Toast", price: 16, desc: "Berries, maple syrup, whipped cream.", img: "" }
            ]
        },
        {
            id: "brunch-lunch",
            title: "Lunch Favorites (Available during Brunch)",
            items: [
                { name: "The Reuben", price: 20, desc: "Corned beef, swiss, coleslaw, rye.", img: "reuben.jpg" },
                { name: "Classic Caesar", price: 14, desc: "Romaine, parmesan, croutons.", img: "" },
                { name: "Fish & Chips", price: 24, desc: "Guinness-battered cod, fries, coleslaw.", img: "" }
            ]
        }
    ]
};

// GLOBAL FUNCTION TO SWITCH MENUS
window.switchMenu = function(menuType) {
    const content = document.getElementById('menu-content');
    const navList = document.getElementById('category-nav');
    
    // 1. Update Buttons
    document.querySelectorAll('.menu-switch-btn').forEach(btn => btn.classList.remove('active'));
    // Simple logic to highlight correct button
    if(menuType === 'allday') document.querySelector('button[onclick="switchMenu(\'allday\')"]').classList.add('active');
    if(menuType === 'brunch') document.querySelector('button[onclick="switchMenu(\'brunch\')"]').classList.add('active');

    // 2. Clear Current Content
    content.innerHTML = '';
    navList.innerHTML = '';

    // 3. Load Data
    const data = MENUS[menuType];

    data.forEach(section => {
        // A. Populate Sticky Nav
        const li = document.createElement('li');
        li.textContent = section.title.split(' ')[0]; // Shorten title for nav (e.g. "Small" instead of "Small Plates")
        if(section.id === 'brunch-specials') li.textContent = "Specials"; // Manual override for nice names
        if(section.id === 'brunch-lunch') li.textContent = "Lunch";
        
        li.onclick = () => {
            document.getElementById(section.id).scrollIntoView({behavior: "smooth", block: "start"});
        };
        navList.appendChild(li);

        // B. Populate Grid
        const sectionDiv = document.createElement('section');
        sectionDiv.id = section.id;
        sectionDiv.className = 'menu-section';
        sectionDiv.innerHTML = `<h3>${section.title}</h3>`;
        
        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        section.items.forEach(item => {
            // Check if image exists
            const bgStyle = item.img ? `background-image: url('${item.img}');` : `background-color: #f8f8f8;`;
            
            grid.innerHTML += `
                <div class="menu-item">
                    <div class="item-thumb" style="${bgStyle}"></div>
                    <div class="item-details">
                        <div class="item-head">
                            <span>${item.name}</span>
                            <span>$${item.price}</span>
                        </div>
                        <div class="item-desc">${item.desc}</div>
                    </div>
                </div>
            `;
        });

        sectionDiv.appendChild(grid);
        content.appendChild(sectionDiv);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Footer Year
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Open/Close Logic
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    if (statusDot) {
        const now = new Date();
        const hour = now.getHours();
        const isOpen = hour >= 11 && hour < 22; 
        if (isOpen) {
            statusDot.style.background = '#4caf50';
            statusText.textContent = "Open Now";
        } else {
            statusDot.style.background = '#f44336';
            statusText.textContent = "Closed (Opens 11am)";
        }
    }

    // 3. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    if(menuBtn){
        menuBtn.addEventListener('click', () => {
            mobileDropdown.classList.toggle('active');
        });
    }

    // 4. SMART STARTUP: DETECT BRUNCH
    if(document.getElementById('menu-content')) {
        const now = new Date();
        const day = now.getDay(); // 0=Sun, 6=Sat
        const hour = now.getHours();
        
        // If Sat or Sun between 11am and 3pm, show Brunch first
        if ((day === 0 || day === 6) && (hour >= 11 && hour < 15)) {
            switchMenu('brunch');
        } else {
            switchMenu('allday');
        }
    }
});
