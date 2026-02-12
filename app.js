document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DYNAMIC YEAR & OPEN STATUS ---
    document.getElementById('year').textContent = new Date().getFullYear();
    
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    
    if (statusDot) {
        const hour = new Date().getHours();
        const isOpen = hour >= 11 && hour < 22; // Open 11am - 10pm
        
        if (isOpen) {
            statusDot.style.background = '#4caf50'; // Green
            statusText.textContent = "Open Now";
        } else {
            statusDot.style.background = '#f44336'; // Red
            statusText.textContent = "Closed (Opens 11am)";
        }
    }

    // --- 2. MENU DATA (With Tags for Filtering) ---
    const menuContainer = document.getElementById('menu-content');
    if (menuContainer) {
        // Sample of data with tags
        const menuData = [
            {
                category: "signatures",
                title: "Irish Signatures",
                items: [
                    { name: "Corned Beef & Cabbage", price: 24, desc: "Slow-braised corned beef, mashed red potatoes, cabbage, carrots, Irish mustard sauce.", img: "corned_beef.jpg", tags: ["gf"] },
                    { name: "Shepherd's Pie", price: 21, desc: "Ground beef, peas, carrots, Jameson gravy, mashed potatoes.", img: "", tags: ["gf"] },
                    { name: "Fish & Chips", price: 24, desc: "Guinness-battered cod, fries, coleslaw, tartar.", img: "", tags: [] }
                ]
            },
            {
                category: "handhelds",
                title: "Handhelds",
                items: [
                    { name: "The Reuben", price: 20, desc: "House-cured corned beef, swiss, coleslaw, rye.", img: "reuben.jpg", tags: [] },
                    { name: "Beyond Burger", price: 20, desc: "Plant-based burger, guacamole.", img: "", tags: ["v", "gf"] } // Assumed GF bun option
                ]
            },
            {
                category: "small-plates",
                title: "Small Plates",
                items: [
                    { name: "Potato Leek Soup", price: 11, desc: "Creamy classic.", img: "", tags: ["gf", "v"] },
                    { name: "Hummus", price: 13, desc: "Pita, cucumbers, olives.", img: "", tags: ["v"] }
                ]
            }
            // ... Add rest of items following this structure
        ];

        function renderMenu(filterType = 'all') {
            menuContainer.innerHTML = '';
            
            menuData.forEach(section => {
                // Filter items inside the section
                const filteredItems = section.items.filter(item => {
                    if (filterType === 'all') return true;
                    return item.tags.includes(filterType);
                });

                if (filteredItems.length > 0) {
                    const sectionDiv = document.createElement('section');
                    sectionDiv.id = section.category;
                    sectionDiv.className = 'menu-section';
                    sectionDiv.innerHTML = `<h3 style="color:var(--gold); margin-bottom:1rem;">${section.title}</h3>`;
                    
                    const grid = document.createElement('div');
                    grid.className = 'menu-grid';

                    filteredItems.forEach(item => {
                        const tagsHtml = item.tags.map(tag => 
                            `<span class="tag ${tag}">${tag.toUpperCase()}</span>`
                        ).join('');

                        const bgImg = item.img ? `background-image: url('${item.img}')` : `background-color:#eee`;

                        grid.innerHTML += `
                            <div class="menu-item">
                                <div class="item-thumb" style="${bgImg}"></div>
                                <div class="item-details">
                                    <div class="item-head">
                                        <span>${item.name}</span>
                                        <span>$${item.price}</span>
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

        // Initial Render
        renderMenu();

        // Filtering Logic
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Toggle active state
                document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                
                const filter = e.target.dataset.filter;
                // Simple toggle logic (if clicking active, revert to all? Optional)
                e.target.classList.add('active');
                renderMenu(filter);
            });
        });
        
        // Category Jump Logic
        document.querySelectorAll('.category-list li').forEach(li => {
            li.addEventListener('click', () => {
                document.querySelectorAll('.category-list li').forEach(l => l.classList.remove('active'));
                li.classList.add('active');
                
                // If filtering by "Small Plates", we need to ensure "All" is active or just scroll?
                // For simplicity in this demo, category clicks just scroll.
                const target = document.getElementById(li.dataset.target);
                if(target) target.scrollIntoView({behavior: "smooth", block: "start"});
            });
        });
    }
});
